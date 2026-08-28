import { execFileSync } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  LocaleResourceSchema,
  LocalizationStatusSchema,
} from "../site/.vitepress/i18n/schema.ts";

export const SITE_DIRECTORY = "site";
export const LOCALIZATION_DIRECTORY = "localization";
export const LOCALE_RESOURCE_DIRECTORY = path.join(
  SITE_DIRECTORY,
  ".vitepress/i18n/locales",
);
export const LOCALE_REGISTRY_FILE = path.join(
  LOCALE_RESOURCE_DIRECTORY,
  "registry.json",
);

export async function collectFiles(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const resolvedPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(resolvedPath, extension)));
    } else if (!extension || entry.name.endsWith(extension)) {
      files.push(resolvedPath);
    }
  }

  return files.sort();
}

export async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

export async function writeJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}

export async function readRegistry() {
  const registry = await readJson(LOCALE_REGISTRY_FILE);
  if (
    typeof registry !== "object" ||
    registry === null ||
    !Array.isArray(registry.resources) ||
    registry.resources.some((entry) => typeof entry !== "string")
  ) {
    throw new Error(`${LOCALE_REGISTRY_FILE} has an invalid resources list.`);
  }
  return registry;
}

export async function readLocalizationStatus(file) {
  return LocalizationStatusSchema.parse(await readJson(file));
}

export async function readRegisteredResources() {
  const registry = await readRegistry();
  return Promise.all(
    registry.resources.map(async (resourceFile) => ({
      file: resourceFile,
      resource: LocaleResourceSchema.parse(
        await readJson(path.join(LOCALE_RESOURCE_DIRECTORY, resourceFile)),
      ),
    })),
  );
}

export function getRootContentFiles(allMarkdownFiles, localizedKeys) {
  return allMarkdownFiles.filter((file) => {
    const relativePath = path.relative(SITE_DIRECTORY, file);
    return !localizedKeys.some(
      (key) => relativePath === key || relativePath.startsWith(`${key}/`),
    );
  });
}

export function getRootContentRevision(rootFiles) {
  const dirtyFiles = execFileSync(
    "git",
    ["status", "--porcelain", "--", ...rootFiles],
    { encoding: "utf8" },
  ).trim();
  if (dirtyFiles) {
    throw new Error(
      "Root-language Markdown has uncommitted changes. Commit or stash it before scaffolding or promotion.",
    );
  }

  return execFileSync("git", ["log", "-1", "--format=%H", "--", ...rootFiles], {
    encoding: "utf8",
  }).trim();
}

export function isRevisionAvailable(revision) {
  try {
    execFileSync("git", ["cat-file", "-e", `${revision}^{commit}`], {
      stdio: "ignore",
    });
    return true;
  } catch {
    return false;
  }
}

export function isRootContentCurrent(sourceRevision, rootFiles) {
  try {
    const committedChanges = execFileSync(
      "git",
      ["diff", "--name-only", `${sourceRevision}..HEAD`, "--", ...rootFiles],
      { encoding: "utf8" },
    ).trim();
    const workingTreeChanges = execFileSync(
      "git",
      ["status", "--porcelain", "--", ...rootFiles],
      { encoding: "utf8" },
    ).trim();
    return committedChanges === "" && workingTreeChanges === "";
  } catch {
    return false;
  }
}

export function createStatus(locale, sourceRevision, rootRelativeFiles) {
  const reviewGate = () => ({ status: "todo", owner: "", evidence: "" });

  return {
    locale,
    sourceRevision,
    owners: {
      translation: "",
      contentReview: "",
    },
    pages: Object.fromEntries(
      rootRelativeFiles.map((file) => [
        file,
        { translation: "todo", contentReview: "todo" },
      ]),
    ),
    reviews: {
      productTerminology: reviewGate(),
      privacyLegal: reviewGate(),
      searchQa: reviewGate(),
    },
  };
}

export function getPromotionBlockers(
  status,
  rootRelativeFiles,
  { requireApproval = true } = {},
) {
  const blockers = [];
  const statusFiles = Object.keys(status.pages ?? {});

  for (const file of rootRelativeFiles) {
    const page = status.pages?.[file];
    if (!page) {
      blockers.push(`status is missing page ${file}`);
      continue;
    }
    if (requireApproval && page.translation !== "approved") {
      blockers.push(`${file} translation is ${page.translation ?? "missing"}`);
    }
    if (requireApproval && page.contentReview !== "approved") {
      blockers.push(
        `${file} content review is ${page.contentReview ?? "missing"}`,
      );
    }
  }

  for (const file of statusFiles) {
    if (!rootRelativeFiles.includes(file)) {
      blockers.push(`status contains obsolete page ${file}`);
    }
  }

  if (requireApproval) {
    for (const [role, owner] of Object.entries(status.owners ?? {})) {
      if (!owner.trim()) blockers.push(`${role} owner is not assigned`);
    }

    for (const [review, gate] of Object.entries(status.reviews ?? {})) {
      if (gate.status !== "approved") {
        blockers.push(`${review} review is ${gate.status}`);
      }
      if (!gate.owner.trim()) blockers.push(`${review} owner is not assigned`);
      if (!gate.evidence.trim()) blockers.push(`${review} evidence is missing`);
    }
  }

  return blockers;
}
