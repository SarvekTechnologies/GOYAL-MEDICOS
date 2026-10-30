# The Neurocare & Stroke Clinic — Dr. Gourav Goyal

A responsive multi-page Next.js website using the existing visual system: navy utility bar, white navigation, pale-blue gradient sections, teal medical accents, coral appointment CTA, rounded cards and soft shadows.

## Pages
- `/` — Home
- `/doctor` — Doctor profile and qualifications
- `/conditions` — Neurological conditions
- `/treatments` — Treatments and procedures
- `/diagnostics` — Diagnostic services
- `/contact` — Appointment requests, clinic contact and reception details

## Components
Shared header/footer and reusable hero, doctor, conditions, treatments, diagnostics, appointment and contact sections live in `components/`.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before publishing
Replace doctor-photo placeholders with an approved photograph. Verify credentials, fellowship wording, clinic address, phone number and OPD hours with the clinic. The appointment form currently prepares a WhatsApp message; it does not create a confirmed appointment or store patient data. Add a secure backend and staff-only reception dashboard before collecting/storing patient information.
