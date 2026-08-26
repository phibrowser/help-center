---
description: "Controla Phi Browser desde tu terminal con el comando phi: abre páginas, haz clic, rellena formularios y toma capturas de pantalla en Espacios de agente que reutilizan los sitios donde ya has iniciado sesión."
---

# La CLI de Phi

La **CLI de Phi** pone la automatización de navegador de Phi en tu línea de comandos como un único comando, **`phi`**. Cualquier cosa capaz de ejecutar un comando de terminal puede controlar tu navegador con ella: tú, un script de shell, un trabajo de CI o un agente de programación.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

A diferencia de las herramientas de automatización que lanzan un navegador vacío y desechable, la CLI controla **tu** Phi. Es una interfaz de línea de comandos para el mismo motor que usa la [habilidad phi-browser](/es/phi-browser-skill/), así que todo lo que describe esa página también se aplica aquí: el trabajo ocurre en un **Espacio de agente** oculto con los sitios en los que ya has iniciado sesión, aparece como un distintivo de robot en tu selector de Espacios, puedes verlo en directo y puedes tomar el control en cualquier momento.

## Instalación

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

Ambos instalan el comando `phi`, más `phibrowser` como alias. Necesita macOS, Node 22 o más reciente y Phi Browser 2.4.0 o más reciente, porque la CLI es un cliente, no un navegador. Si Phi Browser falta o es demasiado antiguo, la CLI se ofrece a instalarlo o actualizarlo por ti, desde el mismo canal de versiones firmado con el que la app se actualiza a sí misma; `phi install browser` hace lo mismo sin preguntar.

No hay nada más que configurar. Phi Browser no tiene que estar en ejecución, porque la CLI lo arranca cuando hace falta. La primera vez que la CLI se conecta, Phi muestra su solicitud de aprobación habitual (**Permitir una vez**, **Permitir siempre** o **Denegar**), y aprobar la CLI activa el control de agentes como parte de la aprobación. En compilaciones antiguas de Phi, el acceso de agentes se activa a mano en **Configuración → Desarrollador**; la CLI te lo indica cuando se encuentra con una.

## El mapa de elementos

Tras cualquier navegación, la CLI imprime la cabecera de la página más una línea por cada elemento interactivo, exactamente en la sintaxis que aceptan los comandos de acción:

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

Las referencias `@N` siguen siendo válidas mientras el elemento exista, así que puedes leer el mapa, decidir y actuar en comandos separados. Tras una acción, la CLI imprime solo lo que cambió en la página; si la acción navegó, imprime en su lugar el mapa completo de la página nueva. Para scripts, `--json` emite JSON sin procesar y `--quiet` suprime los resúmenes.

Ejecuta `phi help` para ver la lista completa de comandos (navegación, instantáneas, capturas de pantalla y PDF, cookies y almacenamiento, esperas, grupos de pestañas, descargas y más) y `phi help <command>` para las opciones de cada comando.

## Sesiones

Una sesión nombra una tarea y su Espacio de agente. La sesión predeterminada se llama `cli`; da a cada objetivo separado la suya propia con `-s`:

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

Como todo Espacio de agente, el Espacio de una sesión es efímero de forma predeterminada, así que se cierra solo un rato después de que la tarea quede inactiva. Añade `--persistent` cuando quieras conservarlo como un área de trabajo duradera.

## Dónde se ejecutan los comandos

De forma predeterminada, todo ocurre en el Espacio de agente oculto de la sesión. Dos cosas lo amplían:

- **Tus ventanas reales.** `phi -U "Work" goto …` (y lo mismo con `click`, `fill`, `snapshot` y el resto) controla la ventana visible de uno de tus propios Espacios en lugar de una oculta. Tus clics y los de la CLI se entrelazan en la misma ventana, así que actúa en pasos pequeños y vuelve a leer la página entre uno y otro.
- **Gestión del navegador.** Comandos como `space-list`, `bookmark-add`, `rules`, `pins` y `downloads` operan sobre tus datos reales del navegador en toda la app, reflejando lo que puede hacer la habilidad phi-browser.

Ambas cosas están detrás de **Configuración → Desarrollador → "Permitir que los agentes operen tus Espacios"**, desactivado de forma predeterminada, exactamente igual que para los agentes de programación. Hasta que lo actives, la CLI queda confinada a sus propios Espacios de agente.

## Iniciar sesión

La CLI nunca te pide que pegues una contraseña en tu terminal. El inicio de sesión pasa por el [Administrador de contraseñas para agentes](/es/agent-passwords/): con `phi cred-fill`, Phi rellena el campo de inicio de sesión directamente desde tu caja fuerte, de modo que el secreto viaja de la app a la página sin pasar por la CLI, y cada petición abre la solicitud de aprobar o denegar de Phi, indicando quién pide y para qué. Los rellenados quedan vinculados al sitio al que pertenece la credencial, los códigos de verificación en dos pasos nunca se entregan a la automatización y cualquier secreto que haya manejado un comando se elimina de su salida.

## Tú sigues al mando

La CLI hereda las reglas de trabajo conjunto de la habilidad. Haz clic en el distintivo de robot de tu selector de Espacios para ver una sesión en directo, y **Tomar el control** en cualquier momento. Mientras tú tienes el volante, los comandos de la CLI que modifican la página se rechazan hasta que devuelvas el control. Cuando un paso te corresponde a ti (un inicio de sesión, un captcha, un código de verificación en dos pasos), el flujo es `phi handoff "Sign in, then hand back"`: Phi te avisa, haces el paso humano y el trabajo se reanuda cuando devuelves el control.

Algo que debes saber antes de apuntar la automatización a una cuenta que te importa: algunos sitios no quieren agentes, y actúan en consecuencia. Reddit es el ejemplo conocido, y las cuentas identificadas como automatizadas quedan restringidas o suspendidas. Lo que la CLI hace bajo tus instrucciones es tuyo, y ese riesgo recae en ti; no es algo que podamos apelar ni deshacer en tu nombre.

## Instalar la habilidad desde tu terminal

La CLI también puede configurar la propia [habilidad phi-browser](/es/phi-browser-skill/):

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

Es lo mismo que hacen los botones de **Instalar la habilidad phi-browser** en **Configuración → Desarrollador**, sin salir de tu terminal: enlaza la habilidad incluida dentro de Phi en la carpeta de habilidades de cada agente, de modo que se mantiene al día con cada actualización de Phi.

::: tip No es lo mismo que las Habilidades del navegador
Las [Habilidades del navegador](/es/skills/) son los flujos de trabajo que le enseñas al asistente dentro de Phi. Lo que `phi install skill` instala es la habilidad phi-browser, el paquete que permite a un agente de programación externo controlar Phi.
:::

## Próximos pasos

- [La habilidad phi-browser](/es/phi-browser-skill/), los Espacios de agente, cómo ver a los agentes en directo y cómo se contiene el acceso. Todo se aplica también a la CLI.
- [Administrador de contraseñas para agentes](/es/agent-passwords/), cómo la automatización inicia sesión con tu caja fuerte sin ver tus contraseñas.
- [Espacios y perfiles](/es/spaces/), las áreas de trabajo y las identidades de inicio de sesión sobre las que se construyen los Espacios de agente.
