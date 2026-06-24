# PsychBridge

**A bedside companion for interventional psychiatry — ECT · Ketamine/Esketamine · TMS · DBS.**

PsychBridge is a single-file, fully client-side web app that helps an interventional-psychiatry team **monitor the patient**, **capture how the patient feels** (including anxiety/distress), **track treatment response over time** with validated rating scales, and **generate a structured session note** — all in one place, because the same clinician may run ECT one day and TMS the next.

🔗 **Live:** https://dkawjr.github.io/PsychBridge/

> ⚠️ **This is a prototype.** It is **not** a validated medical device, an EHR, or a HIPAA-compliant PHI system, and it is **not** for clinical decisions without proper validation and compliance work. Clinical content is cited; some rating-scale items carry copyright/permission terms (see below).

---

## What it does

- **One app, four modes.** Pick **Ketamine / ECT / TMS / DBS** and the monitoring panel adapts to that procedure's real, clinically-monitored variables, with live safety flags and a cited reference sheet.
  - **Ketamine/Esketamine** — agent/dose/route; per-timepoint **BP/HR/SpO₂ + RASS/MOAA-S**; automatic flags for the Spravato-relevant hypertension thresholds (SBP ≥180, DBP ≥110, rise ≥40/≥25 from baseline) across the ≥2-hour REMS window.
  - **ECT** — placement, charge/energy/pulse-width, ×seizure-threshold; anesthetic + relaxant; motor/EEG seizure duration with adequacy + prolonged-seizure flags; postictal suppression; **reorientation-time** cognitive red flag.
  - **TMS** — resting motor threshold + % MT (with safety check), protocol (10 Hz / iTBS / SAINT / Deep TMS), target localization, pulses/session, scalp-pain and safety-event capture.
  - **DBS** — target/hemisphere/configuration; **per-contact therapeutic-window mapping** (benefit vs acute side effects: paresthesia, mood shifts, dysarthria, autonomic, gaze) — with the honest investigational-status banner.
- **ASL communication for deaf / non-speaking patients** — a **"Communicate"** camera tool (MediaPipe hand-tracking + an on-device TensorFlow.js fingerspelling model, A–Y) lets a deaf patient sign letter-by-letter; the app builds words, reads each one aloud, and logs the message to the visit. (Same recognition engine as [SignBridge](https://github.com/dkawjr/SignBridge), brought into the interventional-psych setting.)
- **Patient state & distress capture** — a 0–10 distress slider plus big tappable **"I feel…" cards** (scared, in pain, want to stop, feel unreal, nauseous…) for when the patient can't easily speak (post-ECT confusion, ketamine dissociation).
- **Six validated rating scales**, with **verbatim items** and correct scoring: **PHQ-9, GAD-7, QIDS-SR16, MADRS, CADSS** (23-item subjective, with depersonalization/derealization/amnesia subscales) and the **C-SSRS** screener with highest-Yes triage. Built-in safety flags on suicide items.
- **Response monitoring** — plots the scale trajectory across the treatment course with **response (≥50% reduction)** and **remission** flags.
- **Structured note generator** — compiles parameters, vitals, check-ins, and scale results into an editable, copyable, downloadable session note.
- **Privacy by design** — everything is stored locally in your browser (IndexedDB). Default mode is **de-identified** (study/session codes, no names). An optional **identified (PHI)** mode exists behind an explicit warning.

## Tech

Single `index.html`, inline CSS + JS, no build step, no network calls, no dependencies. Deployable on GitHub Pages.

## Clinical sources

All monitoring norms and scale content are cited inside the app (Reference sheet + each scale's citation) and in [`_research/`](./_research/). Highlights: FDA Spravato PI & REMS; Sanacora et al. (JAMA Psychiatry 2017); APA PHQ-9/MADRS; Rush et al. (QIDS); Bremner et al. (CADSS); Posner et al. (C-SSRS); Rossi/IFCN TMS safety; Holtzheimer/Dougherty/FDA HDE (DBS).

**Honest gaps (not papered over):** the 7 non-public CADSS *observer* items are omitted; MADRS/QIDS severity bands are conventions, not from the original validation papers; C-SSRS, MADRS, and CADSS carry copyright/permission terms requiring clearance before clinical/commercial deployment.

---

created by **D. K. Adrian Williams** — [github.com/dkawjr](https://github.com/dkawjr)
