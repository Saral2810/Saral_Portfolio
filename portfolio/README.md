# Saral Singhal — Portfolio

Next.js 15 (App Router). No CSS framework, no external UI deps — just `next`, `react`, `react-dom`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Everything you'll want to change lives in one file

`lib/data.js`. Fields marked `// ← EDIT` are waiting on you:

| What | Where |
| --- | --- |
| GitHub repo URLs | `projects[].repo` — currently falls back to your profile |
| Certificate credential links | `certifications[].url` — leave `""` to hide the Verify link |
| Photos and captions | `experience[].exhibits` and `projects[].exhibits` |

## Swapping in your photos

1. Drop the image into `public/exhibits/` (JPG, PNG or WebP all work).
2. In `lib/data.js`, point `src` at it and update `caption` and `source`.

```js
{
  src: "/exhibits/deloitte-1.jpg",
  caption: "Asset Registration System dashboard, Power BI",
  source: "Deloitte, Strategy Risk & Transactions, 2026",
}
```

Delete an exhibit object to remove that slot; add one to create a new slot. Exhibit numbers
(`1.1`, `1.2`, …) renumber themselves.

Images look best at **4:3, at least 1200 px wide**. Anything else is cropped to fit the frame.

**Redact before you upload.** Offer letters and certificates should have employee IDs, salary
lines, signatures and phone numbers blacked out. Don't post client-confidential deliverables from
Deloitte or EY — a blurred or reconstructed version reads just as credibly and keeps you clear of
your NDA.

## Résumé download

`public/Saral_Singhal_Resume.pdf`. Overwrite the file to update it; the filename is referenced in
`lib/data.js` as `profile.resume`.

## Design notes

- **Palette:** graphite `#16181d` on soft white `#faf9f7`, burgundy `#7a2e35` as the single signal.
- **Type:** Source Serif 4 (display) / IBM Plex Sans (body) / IBM Plex Mono (labels and data).
- **Signature:** the Exhibit system — every photo carries a number, caption and source line, the way
  a consulting report does. Click to enlarge; arrow keys move between exhibits.
- Responsive to mobile, keyboard focus visible, `prefers-reduced-motion` respected.
