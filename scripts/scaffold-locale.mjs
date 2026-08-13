import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import {
  LOCALIZATION_DIRECTORY,
  SITE_DIRECTORY,
  collectFiles,
  createStatus,
  getRootContentFiles,
  getRootContentRevision,
  readRegisteredResources,
  writeJson,
} from "./i18n-utils.mjs";

const locale = process.argv[2];
const label = process.argv[3];

if (!locale || !label) {
  console.error(
    "Usage: pnpm i18n:scaffold <BCP-47-locale> <language-menu-label>",
  );
  process.exit(1);
}

if (!/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(locale)) {
  console.error(`${JSON.stringify(locale)} is not a supported BCP 47 form.`);
  process.exit(1);
}

const workspace = path.join(LOCALIZATION_DIRECTORY, locale);
const contentDirectory = path.join(workspace, "content");
const resourceFile = path.join(workspace, "resource.json");
const statusFile = path.join(workspace, "status.json");

try {
  await stat(workspace);
  console.error(`${workspace} already exists; refusing to overwrite it.`);
  process.exit(1);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const registered = await readRegisteredResources();
if (registered.some(({ resource }) => resource.key === locale)) {
  console.error(`${locale} is already registered for publication.`);
  process.exit(1);
}

const localizedKeys = registered
  .filter(({ resource }) => !resource.root)
  .map(({ resource }) => resource.key);
const rootFiles = getRootContentFiles(
  await collectFiles(SITE_DIRECTORY, ".md"),
  localizedKeys,
);
const rootRelativeFiles = rootFiles.map((file) =>
  path.relative(SITE_DIRECTORY, file),
);
const sourceRevision = getRootContentRevision(rootFiles);
const rootResource = registered.find(({ resource }) => resource.root)?.resource;

if (!rootResource) throw new Error("No root locale resource is registered.");

try {
  await mkdir(workspace);
  for (const relativeFile of rootRelativeFiles) {
    const destination = path.join(contentDirectory, relativeFile);
    await mkdir(path.dirname(destination), { recursive: true });
    await cp(path.join(SITE_DIRECTORY, relativeFile), destination);
  }

  await writeJson(resourceFile, {
    ...rootResource,
    key: locale,
    label,
    lang: locale,
    root: false,
  });
  await writeJson(
    statusFile,
    createStatus(locale, sourceRevision, rootRelativeFiles),
  );
} catch (error) {
  await rm(workspace, { recursive: true, force: true });
  throw error;
}

console.log(`Created ${workspace} from root content at ${sourceRevision}.`);
console.log(
  "The draft is not registered or published. Translate resource.json and content/, then update status.json.",
);
