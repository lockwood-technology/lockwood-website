# Lockwood Email Signatures

Modern, table-based HTML signatures for the Lockwood team. One template, one file per person.

## Files

| File | Person | Role |
|---|---|---|
| `andrew.html` | Andrew William Uiso | Managing Partner |
| `francis.html` | Francis Richard Mwakatumbula | Managing Director |
| `arden.html` | Arden Mogere | Technical Lead |
| `harvey.html` | Harvey Kadyanji | Technical Director & Lead Implementation |
| `brian.html` | Brian Biamah | Creative Director & Client Relations |
| `_template.html` | — | Master template with `{{TOKENS}}` for adding new team members |
| `_preview.html` | — | Open in a browser to preview all five side-by-side |

## Design

- **Two-column table**: 56×56 brand mark on the left with a 3px Lockwood-blue (`#1F49FF`) vertical accent rule, identity + contact stacked on the right.
- **Typography**: bold name (17px), medium role (13px), uppercase subtle org label, monospace-ish key/value rows for E / T / W.
- **Brand cues**: Lockwood blue accent rule, "Built for East Africa" endorsement footer, thin divider rule between identity and contact.
- **Width**: ~480px on desktop, collapses gracefully on mobile.
- **Compatibility**: tested against Gmail (web + iOS), Outlook 2016+, Apple Mail, Outlook.com.

## Logo URL (important)

The signature files reference `lockwood-mark.png` as a **relative path** so the local preview works. Email clients need an **absolute** URL. Before installing in Gmail/Outlook, swap:

```
src="lockwood-mark.png"
   →
src="https://lockwood.co.tz/logos/lockwood-mark.png"
```

(or any other public URL where the mark is hosted). Until the new Next.js site is deployed, you can host `lockwood-mark.png` on Cloudinary, ImgBB, or a Netlify deploy preview to get a working absolute URL.

## Install in Gmail

1. Open the relevant `.html` file in a code editor.
2. **Swap the logo src** to an absolute URL (see section above).
3. Copy everything from `<table` through `</table>` (skip the HTML comment).
4. Gmail → Settings (gear icon) → See all settings → General → Signature → Create new.
5. Paste. Gmail preserves the inline styles.
6. Set as default for new mail and replies/forwards.

## Install in Outlook (Mac)

1. Open Outlook → Preferences → Signatures → +.
2. Open the `.html` file in your browser.
3. Select all (⌘A), copy (⌘C), paste into the Outlook signature editor.

## Install in Apple Mail

1. Mail → Settings → Signatures → +.
2. Open the `.html` file in Safari.
3. Select all, copy, paste into the signature editor. **Important**: turn off "Always match my default message font" for that signature, or Mail will strip the styles.

## Adding a new team member

Copy `_template.html` to `firstname.html`, then replace:

| Token | Example |
|---|---|
| `{{NAME}}` | `Joyce Mwombeki` |
| `{{ROLE}}` | `Product Designer` |
| `{{EMAIL}}` | `joyce@lockwood.co.tz` |
| `{{PHONE}}` | `+255 712 345 678` |
| `{{PHONE_E164}}` | `+255712345678` (no spaces, for `tel:` link) |

Done. No design changes needed — visual consistency is enforced by the shared markup.
