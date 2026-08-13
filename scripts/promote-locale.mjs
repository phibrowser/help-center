import { execFileSync } from "node:child_process";
import { cp, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import { LocaleResourceSchema } from "../site/.vitepress/i18n/schema.ts";
import {
  LOCALIZATION_DIRECTORY,
  LOCALE_REGISTRY_FILE,
  LOCALE_RESOURCE_DIRECTORY,
  SITE_DIRECTORY,
  collectFiles,
  getPromotionBlockers,
  getRootContentFiles,
  isRootContentCurrent,
  readJson,
  readLocalizationStatus,
  readRegisteredResources,
  readRegistry,
  writeJson,
} from "./i18n-utils.mjs";

const locale = process.argv[2];
if (!locale) {
  console.error("Usage: pnpm i18n:promote <locale>");
  process.exit(1);
}

const workspace = path.join(LOCALIZATION_DIRECTORY, locale);
const sourceContent = path.join(workspace, "content");
const sourceResource = path.join(workspace, "resource.json");
const sourceStatus = path.join(workspace, "status.json");
const registered = await readRegisteredResources();

if (registered.some(({ resource }) => resource.key === locale)) {
  console.error(`${locale} is already registered.`);
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
const status = await readLocalizationStatus(sourceStatus);
const resource = LocaleResourceSchema.parse(await readJson(sourceResource));
const draftFiles = (await collectFiles(sourceContent, ".md")).map((file) =>
  path.relative(sourceContent, file),
);
const blockers = getPromotionBlockers(status, rootRelativeFiles);

if (status.locale !== locale) {
  blockers.push(`status locale is ${status.locale}, expected ${locale}`);
}
if (resource.key !== locale || resource.lang !== locale || resource.root) {
  blockers.push(
    "resource key/lang/root do not describe this non-root locale workspace",
  );
}
for (const file of rootRelativeFiles) {
  if (!draftFiles.includes(file)) blockers.push(`draft is missing ${file}`);
}
for (const file of draftFiles) {
  if (!rootRelativeFiles.includes(file))
    blockers.push(`draft has extra ${file}`);
}
if (!isRootContentCurrent(status.sourceRevision, rootFiles)) {
  blockers.push(
    `root content changed after ${status.sourceRevision}; synchronize the draft first`,
  );
}

if (blockers.length > 0) {
  console.error(`Cannot promote ${locale}:`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  process.exit(1);
}

const destinationContent = path.join(SITE_DIRECTORY, locale);
const destinationResourceName = `${locale}.json`;
const destinationResource = path.join(
  LOCALE_RESOURCE_DIRECTORY,
  destinationResourceName,
);
const registry = await readRegistry();

for (const target of [destinationContent, destinationResource]) {
  try {
    await stat(target);
    console.error(`${target} already exists; refusing to overwrite it.`);
    process.exit(1);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

let contentCreated = false;
let resourceCreated = false;
let registryChanged = false;

try {
  await cp(sourceContent, destinationContent, {
    recursive: true,
    errorOnExist: true,
  });
  contentCreated = true;
  await cp(sourceResource, destinationResource, { errorOnExist: true });
  resourceCreated = true;
  await writeJson(LOCALE_REGISTRY_FILE, {
    resources: [...registry.resources, destinationResourceName],
  });
  registryChanged = true;
  execFileSync(process.execPath, ["scripts/test-i18n.mjs"], {
    stdio: "inherit",
  });
} catch (error) {
  if (registryChanged) await writeJson(LOCALE_REGISTRY_FILE, registry);
  if (contentCreated) {
    await rm(destinationContent, { recursive: true, force: true });
  }
  if (resourceCreated) await rm(destinationResource, { force: true });
  throw error;
}

console.log(`Promoted ${locale} into the publishable site tree.`);
console.log(
  `Keep ${workspace} as the review record until the published locale is accepted.`,
);
