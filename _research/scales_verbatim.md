# Clinical Rating Scales - Verbatim Items & Scoring (research 2026-06-23)

**Honesty notes (no-fabrication):**
- PHQ-9, GAD-7: 100% verbatim from official Pfizer-distributed PDFs ("No permission required to reproduce").
- QIDS-SR16, MADRS: items verbatim from authoritative sources.
- CADSS: the 23 *subjective* items are verbatim; only 1 of 8 observer items could be sourced verbatim - the other 7 are NOT reproduced.
- C-SSRS: Screener verbatim; two official variants (wording differs in 3 places).
- **Licensing for deployed app:** MADRS (© Stuart Montgomery 1978), CADSS (Bremner/Emory via Mapi Trust), C-SSRS (© Research Foundation for Mental Hygiene - free but requires permission via cssrs.columbia.edu). PHQ-9, GAD-7, QIDS-SR16 free to reproduce.

---

## 1. PHQ-9 — Depression
Lead-in: "Over the last 2 weeks, how often have you been bothered by any of the following problems?"
Options (items 1-9): Not at all=0 | Several days=1 | More than half the days=2 | Nearly every day=3
1. Little interest or pleasure in doing things
2. Feeling down, depressed, or hopeless
3. Trouble falling or staying asleep, or sleeping too much
4. Feeling tired or having little energy
5. Poor appetite or overeating
6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down
7. Trouble concentrating on things, such as reading the newspaper or watching television
8. Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual
9. Thoughts that you would be better off dead or of hurting yourself in some way
Functional item (NOT scored): "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?" - Not difficult at all / Somewhat difficult / Very difficult / Extremely difficult
Score: sum items 1-9. Range 0-27.
Severity: 1-4 minimal | 5-9 mild | 10-14 moderate | 15-19 moderately severe | 20-27 severe. (>=10 = standard screen-positive.)
Response = >=50% reduction (or drop >=5 pts). Remission commonly <5. SAFETY: any non-zero item 9 -> escalate.
Source: https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf

## 2. GAD-7 — Anxiety
Lead-in: "Over the last 2 weeks, how often have you been bothered by the following problems?"
Options: Not at all=0 | Several days=1 | More than half the days=2 | Nearly every day=3
1. Feeling nervous, anxious or on edge
2. Not being able to stop or control worrying
3. Worrying too much about different things
4. Trouble relaxing
5. Being so restless that it is hard to sit still
6. Becoming easily annoyed or irritable
7. Feeling afraid as if something awful might happen
Score: sum 7. Range 0-21. Severity: 0-4 minimal | 5-9 mild | 10-14 moderate | 15-21 severe. >=10 = probable GAD.
Source: https://www.phqscreeners.com

## 3. QIDS-SR16
Lead-in: "Check the 1 response to each item that best describes you for the past 7 days." (Items 8 & 9 use 2-week window.)
(See app JS for all 16 verbatim 0/1/2/3 anchors.)
Domain scoring (16 items -> 9 domains, total 0-27):
total = max(i1..i4 sleep) + i5(sad) + max(i6..i9 appetite/weight) + i10(concentration) + i11(self) + i12(suicide) + i13(interest) + i14(energy) + max(i15,i16 psychomotor)
Severity (0-27): 0-5 none | 6-10 mild | 11-15 moderate | 16-20 severe | 21-27 very severe. SAFETY: item 12 >=2.
Source: Rush AJ et al., Biol Psychiatry 2003;54:573-583; http://www.ids-qids.org

## 4. MADRS
10 clinician items, each 0-6 (anchors at 0,2,4,6; odd points intermediate). Total 0-60.
(See app JS for all 10 verbatim anchors.)
Severity (convention, NOT original paper): 0-6 normal | 7-19 mild | 20-34 moderate | 35-60 severe.
Response = >=50% reduction. Remission commonly <=10 (alt <=12). Make configurable (default <=10). SAFETY: item 10 >=4.
Source: Montgomery & Asberg, Br J Psychiatry 1979;134:382-389; https://www.apa.org/depression-guideline/montgomery-asberg-scale.pdf

## 5. CADSS (dissociation)
Use the 23-item revised subjective component (modern ketamine/esketamine research). Each item 0-4 (Not at all/Mild/Moderate/Severe/Extreme). Present-state.
(See app JS for all 23 verbatim items.)
Subscales (Janssen 23-item map): Depersonalization = 3,4,5,6,7,20,23 (0-28); Derealization = 1,2,8,9,10,11,12,13,16,17,18,19,21 (0-52); Amnesia = 14,15,22 (0-12). Total = sum 1-23 (0-92).
NO standardized severity cutoffs. Use as continuous change-from-baseline (pre-dose, ~40min, ~1.5h). CADSS-6 short form exists (Rodrigues 2021). Observer items NOT included (only 1 of 8 sourceable).
Source: Bremner JD et al., J Trauma Stress 1998;11(1):125-136; verbatim items Mertens & Daniels J Trauma Dissociation 2022; scoring Janssen SAP NCT02497287.

## 6. C-SSRS (Screener with Triage)
© 2008 Research Foundation for Mental Hygiene. Free but requires permission via cssrs.columbia.edu. Triage = highest-numbered YES item (NOT a sum).
Ideation (Past month):
1) Wish to be Dead: "Have you wished you were dead or wished you could go to sleep and not wake up?"
2) Suicidal Thoughts: "Have you actually had any thoughts of killing yourself?"
SKIP: If YES to 2, ask 3,4,5,6. If NO to 2, go directly to 6.
3) Thoughts w/ Method (no plan/intent): "Have you been thinking about how you might kill yourself?"
4) Intent (no plan): "Have you had these thoughts and had some intention of acting on them?"
5) Intent w/ Plan: "Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?"
6) Behavior (lifetime + recency): "Have you ever done anything, started to do anything, or prepared to do anything to end your life?" (recency: >1yr / 3mo-1yr / <=3mo)
3-tier risk:
- LOW = highest YES is 1 or 2 -> Mental/Behavioral Health Referral
- MODERATE = highest YES is 3, OR behavior (6) outside recent window -> Care Team Consult + consider safety precautions
- HIGH = highest YES is 4 or 5, OR behavior (6) in recent window (<=3mo) -> Psychiatric Consultation + Patient Safety Precautions
Source: https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/
