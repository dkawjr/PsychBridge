# PsychBridge — Store privacy/questionnaire answers (copy-paste cheat sheet)

For the **public de-identified demo build**. PsychBridge stores only de-identified data **on-device** and makes
no network calls, so for both stores this is "Data Not Collected." The one place to be careful is that it's a
**health-adjacent** app — answer the medical/health prompts honestly as an *educational* tool.

---
## Apple — App Store Connect

### App Privacy → "Data Collection"
- **Do you or your third-party partners collect data from this app?** → **No.**
  - Rationale: Apple defines "collect" as transmitting data off-device. PsychBridge keeps everything in local
    browser storage (IndexedDB); nothing is sent anywhere. Result label: **"Data Not Collected."**
  - Note: this build has **no PHI mode** — no names/MRNs are even entered, only de-identified codes.

### App Review → Export Compliance (encryption)
- **Uses non-exempt encryption?** → **No.** (Add `ITSAppUsesNonExemptEncryption = false` to `Info.plist` if
  not already present — SignBridge has it; mirror it here. App is offline, OS-provided TLS only.)

### Content Rights
- **Third-party content?** → The rating scales included (PHQ-9, GAD-7, QIDS) are free to reproduce; licensed
  instruments (MADRS/CADSS/C-SSRS) are **not** included (locked placeholders only). Answer **No** to
  containing third-party content you're not authorized to use.

### Age Rating questionnaire
- **Medical/Treatment Information** → **Infrequent/Mild** (it discusses psychiatric assessment concepts,
  including suicide-risk screening at a high level). Everything else → None. Expected result: **12+**.

### Review notes (paste this — pre-empts medical-app scrutiny)
> PsychBridge is an educational/reference companion for interventional-psychiatry workflows (ECT, ketamine,
> TMS, DBS). It is not a medical device and makes no diagnosis or treatment recommendation. This build stores
> only de-identified data on-device (IndexedDB), makes no network calls, and has no account. Rating scales are
> limited to freely-reproducible instruments (PHQ-9, GAD-7, QIDS); licensed instruments appear only as locked
> placeholders with no item content. The camera powers an on-device ASL fingerspelling aid; no video is
> recorded or transmitted.

### Other
- **Sign-in required?** → No. **IDFA/tracking?** → No. **Third-party SDKs?** → None.
- **Category:** Medical (secondary Education) — or Education/Reference to reduce review friction.

---
## Google — Play Console

### Data safety form
- **Collects or shares user data?** → **No.** All data stays on-device; nothing transmitted or shared.
- **Data deletion:** users clear it in-app / system settings (on-device only).

### Health apps declaration (Play asks this for medical-category apps)
- Declare it as an **educational/informational** tool. It does **not** provide medical services, diagnosis,
  treatment, telehealth, or drug information lookups; it does not collect or transmit health data.

### Content rating (IARC)
- References to **mental health / suicide-risk screening concepts** → answer honestly (mild references to
  medical/health topics). Expected: **Teen**.

### App content
- **Privacy policy URL:** `https://dkawjr.github.io/PsychBridge/PRIVACY`
- **Ads:** none. **Permissions:** Camera — on-device ASL tool only (justify in the form).

---
## One-line summary you can reuse
> PsychBridge (public build) collects no data, stores only de-identified information on-device, makes no
> network calls, and is an educational reference tool — not a medical device.
