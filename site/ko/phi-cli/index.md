---
description: "터미널에서 phi 명령으로 Phi Browser를 조종해요. 이미 로그인해 둔 사이트를 재사용하는 에이전트 스페이스에서 페이지를 열고, 클릭하고, 폼을 작성하고, 스크린샷을 찍을 수 있어요."
---

# Phi CLI

**Phi CLI**는 Phi의 브라우저 자동화를 <strong>`phi`</strong>라는 명령 하나로 커맨드 라인에 올려놓아요. 터미널 명령을 실행할 수 있는 존재라면 무엇이든 이걸로 브라우저를 조종할 수 있어요. 나, 셸 스크립트, CI 작업, 코딩 에이전트 모두요.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

텅 빈 일회용 브라우저를 띄우는 자동화 도구와 달리, CLI는 **내** Phi를 조종해요. [phi-browser 스킬](/ko/phi-browser-skill/)과 같은 엔진을 쓰는 커맨드 라인 프런트엔드라서, 그 페이지에서 설명하는 모든 내용이 여기에도 그대로 적용돼요. 작업은 이미 로그인해 둔 사이트가 있는 숨겨진 **에이전트 스페이스**에서 일어나고, 스페이스 전환기에 로봇 핍으로 나타나고, 실시간으로 지켜볼 수 있고, 언제든 제어권을 가져올 수 있어요.

## 설치

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

둘 다 `phi` 명령과 그 별칭인 `phibrowser`를 설치해요. macOS, Node 22 이상, Phi Browser 2.4.0 이상이 필요해요. CLI는 브라우저가 아니라 클라이언트이기 때문이에요. Phi Browser가 없거나 버전이 너무 오래됐으면, 앱이 스스로 업데이트할 때 쓰는 것과 같은 서명된 릴리스 피드에서 CLI가 설치나 업데이트를 제안해요. `phi install browser`를 실행하면 물어보지 않고 같은 일을 해요.

그 밖에 설정할 건 없어요. CLI가 필요할 때 Phi Browser를 시작하니, 미리 실행해 둘 필요도 없어요. CLI가 처음 연결되면 Phi가 익숙한 승인 프롬프트(**한 번만 허용**, **항상 허용**, **거부**)를 보여주고, CLI를 승인하면 그 승인 과정에서 에이전트 제어도 함께 켜져요. 오래된 Phi 빌드에서는 대신 **설정 → 개발자**에서 에이전트 접근을 직접 켜야 하는데, 그런 빌드를 만나면 CLI가 알려줘요.

## 요소 맵

탐색이 일어날 때마다 CLI는 페이지 헤더와 함께 상호작용할 수 있는 요소를 한 줄에 하나씩, 동작 명령이 받아들이는 문법 그대로 출력해요:

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

`@N` 참조는 요소가 존재하는 동안 계속 유효해서, 맵을 읽고, 판단하고, 행동하는 걸 별도의 명령으로 나눠서 할 수 있어요. 동작 후에는 페이지에서 바뀐 것만 출력하고, 동작으로 페이지가 이동했다면 대신 새 페이지의 전체 맵을 출력해요. 스크립트에서는 `--json`이 원시 JSON을 내보내고 `--quiet`가 요약을 생략해요.

`phi help`를 실행하면 전체 명령 목록(탐색, 스냅샷, 스크린샷과 PDF, 쿠키와 저장소, 대기, 탭 그룹, 다운로드 등)을 볼 수 있고, `phi help <command>`로 명령별 플래그를 확인할 수 있어요.

## 세션

세션은 하나의 작업과 그 에이전트 스페이스에 이름을 붙여요. 기본 세션의 이름은 `cli`예요. 목표가 다르면 `-s`로 각각 세션을 만들어 주세요:

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

다른 모든 에이전트 스페이스처럼 세션의 스페이스도 기본적으로 임시라서, 작업이 잠잠해지고 얼마 지나면 스스로 닫혀요. 계속 남는 작업 공간으로 유지하고 싶으면 `--persistent`를 추가하세요.

## 명령이 실행되는 곳

기본적으로 모든 일은 세션의 숨겨진 에이전트 스페이스에서 일어나요. 이 범위를 넓히는 것이 두 가지 있어요:

- **내 실제 창.** `phi -U "Work" goto …`(그리고 `click`, `fill`, `snapshot` 등도 마찬가지)는 숨겨진 창 대신 내 스페이스 중 하나의 보이는 창을 조종해요. 내 클릭과 CLI의 클릭이 같은 창에서 섞이기 때문에, CLI는 작은 단계로 나눠 행동하고 단계 사이마다 페이지를 다시 읽어요.
- **브라우저 관리.** `space-list`, `bookmark-add`, `rules`, `pins`, `downloads` 같은 명령은 phi-browser 스킬이 할 수 있는 일과 똑같이, 앱 전체에 걸쳐 실제 브라우저 데이터를 조작해요.

둘 다 코딩 에이전트와 똑같이 **설정 → 개발자 → "에이전트가 내 스페이스를 조작하도록 허용"** 뒤에 잠겨 있고, 기본값은 꺼짐이에요. 이 설정을 켜기 전까지 CLI는 자신의 에이전트 스페이스에만 머물러요.

## 로그인

CLI는 터미널에 비밀번호를 붙여넣어 달라고 하지 않아요. 로그인은 [에이전트 비밀번호 관리자](/ko/agent-passwords/)를 거쳐요. `phi cred-fill`을 실행하면 Phi가 보관함에서 로그인 입력란을 직접 채워요. 비밀 정보는 CLI를 거치지 않고 앱에서 페이지로 바로 이동하고, 요청이 있을 때마다 누가 무엇을 요청하는지 밝힌 Phi의 승인 또는 거부 프롬프트가 떠요. 입력은 로그인 정보가 속한 사이트에 묶여 있고, 2단계 인증 코드는 자동화에 절대 전달되지 않으며, 명령이 다룬 비밀 정보는 그 출력에서 지워져요.

## 주도권은 항상 사용자에게 있어요

CLI는 스킬의 협업 규칙을 그대로 물려받아요. 스페이스 전환기에서 로봇 핍을 클릭하면 세션을 실시간으로 볼 수 있고, 언제든 **제어권 가져오기**를 누를 수 있어요. 내가 운전대를 잡고 있는 동안에는 제어권을 돌려주기 전까지 CLI의 변경 명령이 거부돼요. 로그인, 보안문자(CAPTCHA), 2단계 인증 코드처럼 사람이 해야 할 단계에서는 `phi handoff "Sign in, then hand back"` 흐름을 써요. Phi가 알림을 띄우면 사람이 해야 할 단계를 마치고, 제어권을 돌려주는 순간 작업이 다시 이어져요.

아끼는 계정에 자동화를 들이대기 전에 알아 둘 것이 하나 있어요. 에이전트를 원치 않는 사이트가 있고, 그런 사이트는 실제로 조치를 취해요. 잘 알려진 예가 Reddit이고, 자동화로 판정된 계정은 제한되거나 차단돼요. 내 지시에 따라 CLI가 한 일은 내 책임이고, 그 위험도 내가 지는 거예요. 우리가 대신 이의를 제기하거나 되돌릴 수 있는 일이 아니에요.

## 터미널에서 스킬 설치하기

CLI로 [phi-browser 스킬](/ko/phi-browser-skill/) 자체를 설정할 수도 있어요:

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

이건 **설정 → 개발자**의 **phi-browser 스킬 설치** 버튼이 하는 일을 터미널을 떠나지 않고 그대로 하는 거예요. Phi 안에 번들된 스킬을 각 에이전트의 스킬 폴더에 링크해서, Phi가 업데이트될 때마다 항상 최신으로 유지돼요.

::: tip 브라우저 스킬과는 달라요
[브라우저 스킬](/ko/skills/)은 Phi 안의 어시스턴트에게 가르치는 워크플로예요. `phi install skill`이 설치하는 건 phi-browser 스킬로, 외부 코딩 에이전트가 Phi를 조종할 수 있게 하는 패키지예요.
:::

## 다음 읽을거리

- [phi-browser 스킬](/ko/phi-browser-skill/), 에이전트 스페이스, 에이전트 실시간 지켜보기, 접근 통제 방식까지, 전부 CLI에도 적용돼요.
- [에이전트 비밀번호 관리자](/ko/agent-passwords/), 자동화가 비밀번호를 보지 않고 내 보관함으로 로그인하는 방법이에요.
- [스페이스와 프로필](/ko/spaces/), 에이전트 스페이스의 바탕이 되는 작업 공간과 로그인 신원이에요.
