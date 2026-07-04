# PsychBridge — Build & Submit Runbook (iOS + Android) — PUBLIC DEMO BUILD

This packages the **public demo build** of PsychBridge as installable App Store / Google Play apps. The
demo-specific changes (de-identification, licensed-scale gating) and the native scaffolding are **already done
and committed on the `native-app` branch**. iOS must be built on a Mac; Android can build on Mac or Windows.

> ⚠️ **Read the compliance note (section 0) before submitting.** PsychBridge is a health-adjacent app; Apple
> review is meaningfully stricter than for SignBridge, and there are real decisions here.

## 0. Compliance posture of this demo build (what changed vs. your live app)
The `native-app` branch is a **de-identified educational demo**, deliberately narrowed to lower legal/review risk:
- **PHI mode removed.** No name/MRN/DOB fields; records are de-identified (study/session codes) only. This
  removes the HIPAA surface. (Verified: no `npName` input exists in the build.)
- **Licensed scales gated.** MADRS, CADSS, and the C-SSRS screener are **locked**, and their verbatim
  copyrighted item text has been **removed from the shipped file** (verified: signature phrases absent). Only
  the freely-reproducible instruments (**PHQ-9, GAD-7, QIDS-SR16**) are functional. Tapping a locked scale shows
  a "licensed instrument — obtain permission" notice.
- Everything is **on-device**: no network calls, no accounts, data in local browser storage (IndexedDB).

**Still your call before public launch:**
- **Category / positioning.** Submit as **Medical** or **Education/Reference**, positioned explicitly as an
  *educational prototype / reference tool, not a medical device.* Apple Guideline 1.4.1 & 5.1.1 apply; a solo
  developer submitting a clinical-parameter app can draw extra scrutiny or a request for institutional backing.
- **Enable the licensed scales only in a private/institutional build** once you've cleared permissions
  (Columbia for C-SSRS; Mapi/relevant holders for CADSS; MADRS terms). `deidentify.mjs` documents exactly what
  was stripped so a private build can restore it.

## 1. One-time prerequisites
Same as SignBridge: Apple Developer ($99/yr), Google Play ($25 once), a **privacy policy URL** (publish
`PRIVACY.md` to GitHub Pages), Xcode (Mac) + Android Studio, Node 20+.

## 2. Get it on your Mac
```bash
git clone https://github.com/dkawjr/PsychBridge.git
cd PsychBridge
git checkout native-app
npm install
npm run build:www      # regenerate packaged www/ (offline, de-identified)
npx cap sync
```

## 3. iOS → App Store
```bash
npx cap open ios
```
Then in Xcode: set Team + Bundle ID `com.dkawjr.psychbridge`, deployment target iOS 14+, version 1.0.0 / build 1,
**Product → Archive → Distribute → App Store Connect**. In App Store Connect fill the listing (`STORE_LISTING.md`),
App Privacy (below), review notes (below), submit.

**App Privacy:** Data collection = **None** (all on-device; de-identified; nothing transmitted).

**Review notes to paste:**
> PsychBridge is an educational/reference companion for interventional-psychiatry workflows (ECT, ketamine, TMS,
> DBS). It is not a medical device and makes no diagnosis or treatment recommendation. This build keeps only
> de-identified records (no names/MRNs) and stores them on-device (IndexedDB); it makes no network calls and has
> no account. Rating scales are limited to freely-reproducible instruments (PHQ-9, GAD-7, QIDS-SR16); licensed
> instruments are shown only as locked placeholders with no item content. The camera powers an on-device ASL
> fingerspelling aid for deaf/non-speaking patients; no video is recorded or transmitted.

## 4. Android → Google Play
```bash
npx cap open android
```
Create/keep an upload keystore (see SignBridge runbook), **Build → Generate Signed App Bundle (.aab)**, upload to
**Internal testing** first, complete the **Data safety** form (no data collected/shared; on-device), content
rating, privacy policy URL, then promote.

## 5. Updates
Edit `index.html` → (the demo transforms are already applied on this branch) → `npm run build:www` → `npx cap
sync` → rebuild, bump version, re-upload. If you re-run `deidentify.mjs`, it's guarded to be safe/idempotent on
already-stripped text (it asserts anchors and refuses if copyrighted phrases reappear).

## 6. Reproducing the demo transforms (for reference)
- `deidentify.mjs` — removes MADRS/CADSS/C-SSRS verbatim text and marks them locked (asserts + verifies).
- PHI removal + scale-locking UI edits are already committed in `index.html` on this branch.
