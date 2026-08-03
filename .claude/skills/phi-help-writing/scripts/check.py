#!/usr/bin/env python3
"""Mechanical checks for Phi help-centre pages.

    python3 scripts/check.py site/**/*.md
    python3 scripts/check.py site/ai/index.md --quiet

Catches only what a machine can catch. A clean run does not mean the page is
good, it means the page is not obviously wrong. Read it afterwards.
Exit code 1 if anything failed.
"""
import re, sys, glob, os

# (pattern, message, case_sensitive)
BANNED_TERMS = [
    (r"—|–",                       "em/en dash. See SKILL.md section 2. There is always a better mark.", False),
    # "a login" as a NOUN is correct (a saved credential). Only the verb is wrong,
    # and only when it is not quoting a UI label, which we write in bold.
    (r"(?<!\*\*)\blog in\b(?! wall)",  "'log in' as a verb. Use 'sign in'. ('a login' as a noun is fine.)", False),
    (r"(?<!\*\*)\blog out\b",          "'log out' as a verb. Use 'sign out'.", False),
    (r"\bregister\b|\bsign up for an account\b", "'register'. Use 'create an account'.", False),
    # "just"/"simply" are only a problem when they minimise a task the reader has to do.
    # "not just X" and "it is simply there" are ordinary English and stay.
    (r"(?<!not )\b(just|simply)\s+(click|open|type|select|choose|drag|press|add|enable|disable|turn|use|run|install|set|hit|tap)\b",
                                   "'just'/'simply' before an instruction. Only read by someone who is stuck.", False),
    (r"\bseamless\w*|\bintuitive\b|\brobust\b", "marketing adjective, carries no information.", False),
    (r"\bleverage[sd]?\b|\butili[sz]e[sd]?\b", "use 'use'.", False),
    (r"\bin order to\b",           "'in order to'. Use 'to'.", False),
    (r"\ballows you to\b|\benables you to\b", "'allows you to'. Use 'lets you', or make the reader the subject.", False),
    (r"phi-browser Skill\b",        "the phi-browser skill is lowercase and singular.", True),
    (r"phi-browser skills\b",       "the phi-browser skill is singular. There is only one.", True),
    (r"\bMacOS\b|\bMac OS\b|\bOSX\b", "write 'macOS'.", True),
]

# "Skills" alone, where it could mean either thing. Advisory, not fatal.
AMBIGUOUS_SKILLS = re.compile(r"(?<!Browser )(?<!browser )\bSkills\b")

DASH_GLOSS = re.compile(r"^\s*[-*] .*\)\s+[—–]\s", re.M)


def check(path, quiet=False):
    src = open(path, encoding="utf-8").read()
    fails, warns = [], []

    for pat, msg, cased in BANNED_TERMS:
        for m in re.finditer(pat, src, 0 if cased else re.I):
            line = src[:m.start()].count("\n") + 1
            fails.append(f"{path}:{line}: {msg}  ->  {m.group(0)!r}")

    if DASH_GLOSS.search(src):
        fails.append(f"{path}: list item uses a dash gloss. Use a comma: '- [Link](/url), gloss'.")

    if path.endswith(".md") and "/site/" in path.replace(os.sep, "/"):
        if not re.match(r'^---\n(.*\n)*?description:', src):
            fails.append(f"{path}: missing frontmatter 'description:'.")
        if len(re.findall(r"^# ", src, re.M)) != 1:
            fails.append(f"{path}: needs exactly one H1.")

    for m in AMBIGUOUS_SKILLS.finditer(src):
        line = src[:m.start()].count("\n") + 1
        warns.append(f"{path}:{line}: bare 'Skills'. Did you mean 'Browser Skills'?")

    if not quiet:
        for w in warns:
            print("  warn  " + w)
    for f in fails:
        print("  FAIL  " + f)
    return len(fails)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    quiet = "--quiet" in sys.argv
    paths = []
    for a in args:
        paths.extend(sorted(glob.glob(a, recursive=True)) or [a])
    paths = [p for p in paths if p.endswith(".md") and os.path.isfile(p)]
    if not paths:
        print("no markdown files matched"); sys.exit(2)

    total = sum(check(p, quiet) for p in paths)
    print(f"\n{len(paths)} file(s) checked, {total} problem(s).")
    if total:
        print("Fix them, or if you believe the rule is wrong, argue it in the PR rather than working around it.")
    sys.exit(1 if total else 0)


main()
