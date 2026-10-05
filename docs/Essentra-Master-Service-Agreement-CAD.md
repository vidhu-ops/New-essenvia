# MASTER SERVICE AGREEMENT — ESSENTRA PLATFORM & DIGITAL SERVICES

**Agreement date:** _______________, 2026  

This Master Service Agreement (“**Agreement**”) is entered into as of the Agreement date above by and between:

**Client:** Essentra ______________________ (“**Essentra**” or “**Client**”)  
Address: _______________________________________________  
Contact: Josh ______________________, ______________________  

and  

**Service Provider:** IIDATECH (“**IIDATECH**” or “**Provider**”)  
Contact: Vidhu, Founder  
Email: _______________________________________________  

Essentra and IIDATECH may each be referred to as a “**Party**” and together the “**Parties**.”

---

## 1. Purpose and scope

1.1 **Purpose.** IIDATECH will design, develop, and deliver the Essentra unified digital platform and related services described in the **Statement of Work (“SOW”)** attached as **Schedule A** and incorporated herein, including the design proposal dated October 5, 2026 (`Essentra-Platform-Design-Proposal-CAD.md`).

1.2 **Unified platform.** Deliverables are intended to share **one backend API and one PostgreSQL database** serving the public website, customer accounts, salesperson tablet experience, admin dashboard, and warehouse/fulfillment interfaces, unless a later written change order states otherwise.

1.3 **Out of scope unless added by change order:** legal drafting or lawyer review; payment of Essentra’s supplier or retail contracts; purchase of hardware (tablets, Stripe Terminal readers); third-party penetration testing fees; media ad spend; Essentra’s AWS/Stripe/pass-through infrastructure billed directly to Essentra.

---

## 2. Phased delivery and approvals

2.1 Work is delivered in **phases** listed in Schedule A. Each phase begins when: (a) the prior phase acceptance criteria are met or waived in writing, (b) Essentra pays the **phase start invoice** if applicable, and (c) any phase-specific prerequisites (content, brand assets, Stripe account, etc.) are provided.

2.2 **Phase 0** produces approved wireframes/UI, data model, business-rules configuration sheet, and a **fixed-price CAD quote** for Phases 1–7. Essentra may approve or request revisions within the revision limits in Section 6.

2.3 **Acceptance.** Essentra has **ten (10) business days** after delivery of a phase deliverable to accept in writing or provide a consolidated defect list of material non-conformance to the SOW. If Essentra does not respond within ten business days, the phase is deemed accepted except for latent defects.

2.4 **Pilot launch** (Phase 7) targets approximately weeks 16–20 from Phase 0 kickoff, subject to Essentra approvals, legal sign-off on customer-facing policies, and third-party integrations.

---

## 3. Fees, currency, and payment

3.1 **Currency.** All fees are in **Canadian dollars (CAD)** unless stated otherwise.

3.2 **FX reference.** USD figures in historical proposals are converted using **1 USD = 1.4246 CAD** (Bank of Canada reference, October 2026). Fixed CAD amounts in Schedule A control over converted estimates.

3.3 **Platform fees (indicative until Phase 0 fix):**

| Phase | CAD fee | Invoice timing |
|-------|---------|----------------|
| 0 — Discovery & design | $285 | On signing / approval |
| 1 — Foundation | $425 | Start of phase |
| 2 — Customer web | $2,135 | Start of phase |
| 3 — Operations | $425 | Start of phase |
| 4 — Sales | $285 | Start of phase |
| 5 — Admin & analytics | $710 | Start of phase |
| 6 — Customer app | $355 | Start of phase |
| 7 — Launch & hardening | $285 | Start of phase |
| **Total (Phases 0–7)** | **$4,905** | |

3.4 **Marketing & growth services** (Schedule B) are optional and invoiced separately when authorized.

3.5 **Payment terms.** Invoices are due **Net 14** unless otherwise agreed. Late amounts may accrue interest at **1.5% per month** (or the maximum allowed by law).

3.6 **Taxes.** Fees exclude HST/GST and similar taxes, which Essentra pays if applicable.

3.7 **Pass-through costs.** AWS, Stripe, SMS, email, domain, and similar third-party costs are paid by Essentra directly or reimbursed per prior written approval.

---

## 4. Client responsibilities

Essentra will:

- Designate a single **decision-maker** for approvals and a technical/contact owner.  
- Provide brand direction, product/catalog information, delivery rules, and policy placeholders in timely fashion.  
- Create and own **Stripe**, **AWS**, domain, and production accounts in Essentra’s name.  
- Ensure **legal review** of all customer-facing terms, privacy, and subscription agreements before public launch.  
- Not provide unlawful scraping or competitor data; retail comparisons must use **verified** sources only.  
- Comply with Canadian privacy law (PIPEDA and applicable provincial law) for customer data Essentra controls.

---

## 5. Intellectual property

5.1 **Custom deliverables.** Upon **full payment** of all fees due for the phase that delivered them, Essentra receives ownership of **custom application code, designs, and documentation** created specifically for Essentra under this Agreement, excluding IIDATECH pre-existing tools, libraries, and general methodologies.

5.2 **Provider tools.** IIDATECH retains ownership of reusable frameworks, templates, and know-how. IIDATECH grants Essentra a perpetual, royalty-free license to use such embedded components as part of the delivered solution.

5.3 **Open source.** Deliverables may include open-source components subject to their licenses; IIDATECH will disclose major OSS dependencies in documentation.

5.4 **Portfolio.** IIDATECH may display non-confidential visuals and high-level project description in its portfolio unless Essentra opts out in writing before launch.

---

## 6. Revisions and change orders

6.1 **Phase 0** includes up to **two (2) consolidated revision rounds** on wireframes/UI per major surface (marketing site, Build My Box, checkout, account, sales tablet, admin).

6.2 Changes that materially alter scope, integrations, or timelines require a written **Change Order** with adjusted fees and schedule.

6.3 Essentra’s requirement that catalog, pricing, thresholds, and rules be **admin-configurable** is in scope for V1 as defined in Schedule A; new modules (e.g. loyalty, AI routing) are out of scope unless added.

---

## 7. Confidentiality

Each Party will protect the other’s confidential information with reasonable care and use it only to perform under this Agreement. Confidential information includes business plans, pricing, wholesale costs, customer data, and unreleased designs. Exclusions apply for public information, independent development, and legally compelled disclosure (with notice where permitted).

---

## 8. Data protection and security

8.1 IIDATECH will implement **industry-standard security** as described in Schedule A: TLS, hashed passwords (Argon2), RBAC, audit logging for sensitive admin actions, no storage of raw payment card numbers, and secrets outside source control.

8.2 **Payment card data** is processed via **Stripe**; Essentra maintains the Stripe account relationship.

8.3 **Hosting.** Production workloads are intended for **AWS Canada (ca-central-1)** unless Essentra directs otherwise in writing.

8.4 On Essentra’s request and at Essentra’s expense, Parties will execute a data processing agreement consistent with applicable privacy law.

---

## 9. Warranties and disclaimer

9.1 IIDATECH warrants that services will be performed in a **professional and workmanlike** manner.

9.2 **Essentra acknowledges** that software requires ongoing maintenance; IIDATECH does not warrant uninterrupted or error-free operation except during the warranty period in Section 10.

9.3 **EXCEPT AS STATED ABOVE, SERVICES AND DELIVERABLES ARE PROVIDED “AS IS.”** IIDATECH DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

---

## 10. Defect warranty

For **thirty (30) days** after phase acceptance, IIDATECH will correct material defects reproducible from the SOW at no additional fee. Warranty excludes issues caused by third-party services, Essentra modifications, or scope changes.

---

## 11. Limitation of liability

11.1 **Cap.** Except for breach of confidentiality, IP indemnity obligations, or gross negligence/willful misconduct, each Party’s total liability under this Agreement is capped at **fees paid by Essentra to IIDATECH in the twelve (12) months** preceding the claim.

11.2 **Consequential damages.** Neither Party is liable for indirect, incidental, special, or consequential damages, including lost profits, except where prohibited by law.

---

## 12. Term and termination

12.1 This Agreement begins on the Agreement date and continues until completion of all authorized SOW phases or earlier termination.

12.2 Either Party may terminate for **material breach** not cured within **fifteen (15) days** of written notice.

12.3 Essentra may terminate **for convenience** on **fifteen (15) days** written notice; Essentra pays for work performed and non-cancellable commitments through the termination date.

12.4 On termination, IIDATECH delivers work-in-progress and Essentra pays undisputed amounts due. Sections intended to survive (confidentiality, IP upon payment, limitation of liability) survive.

---

## 13. Independent contractor

IIDATECH is an independent contractor. Nothing creates a partnership, joint venture, or employment relationship.

---

## 14. Governing law

This Agreement is governed by the laws of **________________** (e.g. Province of Ontario and the federal laws of Canada applicable therein), without regard to conflict-of-law rules. Courts in **________________** have exclusive jurisdiction, unless the Parties agree to arbitration in writing.

---

## 15. General

15.1 **Entire agreement.** This Agreement, Schedules A–B, and executed Change Orders constitute the entire agreement and supersede prior proposals except as incorporated.

15.2 **Amendments** must be in writing signed by both Parties.

15.3 **Assignment.** Neither Party may assign without consent, except IIDATECH may use subcontractors bound by confidentiality and quality obligations.

15.4 **Notices.** Email to designated contacts is sufficient for day-to-day notices; legal notices require registered mail or courier to addresses above.

---

## Signatures

**ESSENTRA**

Signature: _______________________________  
Name: _______________________________  
Title: _______________________________  
Date: _______________________________  

**IIDATECH**

Signature: _______________________________  
Name: Vidhu _______________________________  
Title: Founder _______________________________  
Date: _______________________________  

---

# SCHEDULE A — STATEMENT OF WORK (PLATFORM)

## A.1 Objectives

Deliver Version 1 fundamentals:

1. Professional public website (Canada-focused)  
2. Build My Essentra Box guided flow  
3. Three-package **internal calculation engine** (admin-configurable thresholds; wholesale costs hidden from customers and reps)  
4. Product/SKU database and admin catalog  
5. Customer accounts and dashboard  
6. Subscription checkout and **Stripe Billing** recurring payments  
7. Salesperson tablet workflow, retail comparison, Terminal payment, attribution  
8. Admin dashboard (catalog, packages, customers, subscriptions, orders, inventory, reps)  
9. Basic inventory and order/fulfillment management  
10. Basic delivery management and notifications  
11. Essential analytics (MRR, churn, rep retention)  

## A.2 Technical standards

- Next.js public site; NestJS API; PostgreSQL; Expo mobile (Phase 6)  
- RBAC roles: Customer, Sales Rep, Warehouse, Support, Manager, Administrator  
- Audit log for sensitive admin actions  
- Dev, staging, production environments  

## A.3 Configurable business rules (not hard-coded)

Package names/prices, internal cost thresholds, SKUs/brands/sizes, supplier costs, delivery areas/schedules, skip/pause/cancel/cut-off rules, commission parameters.

## A.4 Legal/content

IIDATECH implements **placeholder** policy pages. Essentra’s lawyer must approve customer-facing legal text before production launch.

## A.5 Acceptance criteria (summary)

| Phase | Key acceptance tests |
|-------|----------------------|
| 0 | Approved Figma/wireframes + ERD + rules sheet + fixed quote |
| 1 | Admin can CRUD categories/brands/SKUs; package engine returns plan from basket cost |
| 2 | End-to-end web signup with Stripe test mode; customer sees one CAD price |
| 3 | Order created on subscription; inventory decremented/reserved; status workflow |
| 4 | Rep flow creates attributed subscription with Terminal test payment |
| 5 | Dashboards show MRR, active subs, retention by rep |
| 6 | Mobile app login and core account actions against same API |
| 7 | Pilot checklist, load/smoke tests, runbook |

---

# SCHEDULE B — OPTIONAL GROWTH SERVICES

Authorized only when initialed by both Parties:

| Service | CAD fee | Frequency |
|---------|---------|-----------|
| Brand & identity package | $855–$1,210 | One-time |
| Market & competitor research (Canada) | $355 | One-time |
| Go-to-market plan | $355 | One-time |
| Social media management | $710 | Monthly |
| SEO & content | $100 | Monthly |
| Paid acquisition management | $140 + ad spend | Monthly |
| Operations automation setup | $140 | One-time |
| Support / AI assistant setup | $140 | One-time |
| Sales enablement & launch campaign | TBD after Phase 0 | One-time |

**Growth Foundation bundle (reference):** Phase 0 platform design ($285) + research + brand tier + GTM ≈ **$1,565+ CAD** depending on brand tier selected.

---

*This template is for business negotiation and is not legal advice. Essentra should have qualified Canadian counsel review before execution.*
