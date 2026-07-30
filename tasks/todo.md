# Texas Ringer Next Gen — build plan

Clone of the Texas Ringer EOS-sync + Next.js static site, re-pointed at the
**2026 Texas Ringer The Next Gen** tournament (EOS id `d2hHaFVkWEFKNDdoSTRQNWVwQ0pxZz09`,
Aug 29 2026, bracket). Standalone repo, GitHub Pages, reuses the Ringer brand kit.

## Tasks
- [ ] Remove old historical event data (2024/2025) — Next Gen is inaugural 2026
- [ ] Point `scripts/sync-events.ts` TOURNAMENTS at the Next Gen id → 2026.json
- [ ] `src/data/events.ts` imports only the 2026 Next Gen event
- [ ] `src/data/events/2026.json` = Next Gen, coming-soon (no scores until Aug 29)
- [ ] `src/lib/live-config.ts` = null now; ready to point at Next Gen id when live
- [ ] Rebrand copy: layout title/nav/footer, home eyebrow, live page, 404, metadata
- [ ] `next.config.mjs` basePath → `/texas-ringer-nextgen`
- [ ] `deploy.yml` comment → new repo name
- [ ] `package.json` name/description
- [ ] Rewrite README for the annual-event / EOS-sync model (old one is stale)
- [ ] Rewrite `events.test.ts` for Next Gen (coming-soon + getPodium unit test)
- [ ] `.env` with public EOS read token for `pnpm sync:events`
- [ ] `pnpm install` → `pnpm typecheck` → `pnpm test` → `pnpm build` all green — verify
- [ ] Preview in browser, confirm coming-soon home + event page render
- [ ] git init + commit (do NOT push until Michael says so)
- [ ] GATED: create public repo `mhojnacki979/texas-ringer-nextgen` + push + Pages

## Post-event (Aug 29+)
- [ ] `pnpm sync:events` bakes qualification + brackets into 2026.json
- [ ] Flip `live-config.ts` to the Next Gen id during the event; back to null after
