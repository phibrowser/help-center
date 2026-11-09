# Brief: Deleting a Profile (run 2026-11-05-migrate, round 3)

Fangzhou (feature author) reviewed the Migrate page: telling readers to
delete the first run's Spaces before migrating again leaves its Profiles
behind, because deleting a Space never deletes its Profile. English now:

- `site/spaces/index.md`: a new H2 section **Deleting a Profile**
  `{#deleting-a-profile}` between "Creating, switching, and managing Spaces"
  and "URL Rules", with one paragraph, three numbered steps, and one closing
  sentence.
- `site/migrate/index.md`: the "Migrating again" paragraph now says to delete
  the first run's Spaces, then its Profiles, and links to the new section.

See `english-delta-round3.diff` for both changes.

## Per-locale tasks

1. In `site/<locale>/spaces/index.md`, insert the translated section at the
   same position. Keep the explicit id `{#deleting-a-profile}` on the H2
   exactly as written. Same paragraph, three steps, closing sentence.
2. In `site/<locale>/migrate/index.md`, rewrite only the matching sentences
   of the "Migrating again" paragraph to follow the new English. The link is
   `/<locale>/spaces/#deleting-a-profile` and its text is your translated H2.
3. Quote UI labels in bold exactly as your locale ships them in
   `refs-delete-profile.json` (BINDING):
   - **Spaces → Delete Profile**: the Spaces menu name exactly as your
     page already writes it in **Spaces → Delete Space…** on the line above,
     then `app.spacesMenu.deleteProfile.submenuTitle`.
   - **Settings → Profiles**: your locale's Settings word as your existing
     pages write it, then `settings.navigation.profilesTitle`.
   - **in use by a Space**: the fixed part of
     `app.spacesMenu.deleteProfile.inUseLabel` without `%@` and without the
     separator or brackets around it.
   - **Uncategorized**: the Phi Chat folder name exactly as it appears inside
     `settings.profiles.deleteConfirmation.browserDataAndChats` in your
     locale, without the quote marks around it.
     The facts (permanent removal, synced devices, conversations kept) should
     read consistently with those shipped strings.
4. Vocabulary: reuse the words your existing Spaces page already uses for
   Space, Profile, cookies, history, extensions, Sync, and "cannot be
   undone". No coined terms; if one is unavoidable, flag it.
5. House rules as before: no em or en dashes, no 您, no Sie or usted, the
   locale's existing register and quote characters. Do not touch anything
   else: no other pages, no `localization/`, no `status.json`, no locale
   JSON, no git. Run `npx prettier --write` on the two files you edited.

## Report back

Under 100 words: the H2 you chose, the four quoted labels as written, and
anything you could not apply or verify. Do not paste the page.
