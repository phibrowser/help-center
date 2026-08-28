import path from "node:path";
import process from "node:process";

import {
  defaultLocaleCode,
  getSupportedLocale,
} from "../site/.vitepress/i18n/supported-locales.ts";
import {
  LOCALIZATION_DIRECTORY,
  SITE_DIRECTORY,
  collectFiles,
  getPromotionBlockers,
  getRootContentFiles,
  isRootContentCurrent,
  readLocalizationStatus,
  readRegisteredResources,
} from "./i18n-utils.mjs";

const requestedLocale = process.argv[2];
const registered = await readRegisteredResources();
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

let workspaces = [];
try {
  workspaces = (await collectFiles(LOCALIZATION_DIRECTORY, "status.json")).map(
    (file) => path.dirname(file),
  );
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

if (requestedLocale) {
  workspaces = workspaces.filter(
    (workspace) => path.basename(workspace) === requestedLocale,
  );
  if (workspaces.length === 0) {
    console.error(`No localization workspace exists for ${requestedLocale}.`);
    process.exit(1);
  }
}

if (workspaces.length === 0) {
  console.log("No localization workspaces are in progress.");
  process.exit(0);
}

let blocked = false;
for (const workspace of workspaces.sort()) {
  const locale = path.basename(workspace);
  const isPublished = registered.some(
    ({ resource }) => resource.key === locale,
  );
  const status = await readLocalizationStatus(
    path.join(workspace, "status.json"),
  );
  const currentBlockers = getPromotionBlockers(status, rootRelativeFiles, {
    requireApproval: false,
  });
  const approvalBlockers = getPromotionBlockers(
    status,
    rootRelativeFiles,
  ).filter((blocker) => !currentBlockers.includes(blocker));
  const blockers = isPublished
    ? currentBlockers
    : [...currentBlockers, ...approvalBlockers];
  if (!isRootContentCurrent(status.sourceRevision, rootFiles)) {
    blockers.unshift(
      `root content changed after ${status.sourceRevision}; rebase the translation and update sourceRevision`,
    );
  }
  if (!getSupportedLocale(locale) || locale === defaultLocaleCode) {
    blockers.unshift(
      `${locale} is not a translatable locale in site/.vitepress/i18n/supported-locales.json`,
    );
  }

  const state = isPublished
    ? blockers.length > 0
      ? "registered/attention-needed"
      : approvalBlockers.length > 0
        ? "registered/review-pending"
        : "registered/reviewed"
    : blockers.length === 0
      ? "ready-to-promote"
      : "draft/blocked";
  console.log(`${locale}: ${state}`);
  for (const blocker of blockers) console.log(`  - ${blocker}`);
  if (isPublished) {
    for (const blocker of approvalBlockers) {
      console.log(`  - review pending: ${blocker}`);
    }
  }
  blocked ||= blockers.length > 0;
}

if (blocked) process.exitCode = 1;
