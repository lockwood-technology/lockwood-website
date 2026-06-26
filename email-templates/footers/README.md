# Lockwood Email Footers

Four reusable, copy-paste HTML footers for Lockwood Technology emails. Built with table-based layout and inline styles for max client compatibility (Gmail, Outlook 2007+, Apple Mail, mobile clients).

| File | Use case | Notes |
|---|---|---|
| `01-transactional.html` | Auto-replies, contact-form receipts, password resets, system notices | Quiet, no social/promo. Wire into `/api/contact` Nodemailer template. |
| `02-marketing.html` | Newsletters, announcements, product launches | Dark brand band + product strip + social row + unsubscribe. Replace `{{unsubscribe_url}}` and `{{preferences_url}}`. |
| `03-staff-signature.html` | Personal Gmail / Outlook signatures for the team | Replace `{{NAME}}`, `{{ROLE}}`, `{{EMAIL}}`, `{{PHONE}}`, `{{PHONE_E164}}`, `{{CALENDAR_LINK}}`. |
| `04-compact-dark.html` | Sales outreach, partner emails, short sign-offs | One-row dark strip, ~80px tall. |

## Brand tokens used

- Primary blue: `#1F49FF`
- Ink (text): `#111111`, `#43434c`, `#63636e`, `#8e8e99`
- Surface: `#f7f7f8`, `#ffffff`
- Border: `#eeeef1`, `#dadadf`

## Asset URLs

Logos resolve from the live site so they don't need to be attached:
- Light bg: `https://lockwood.co.tz/logos/lockwood-mark.png`
- Dark bg: `https://lockwood.co.tz/logos/lockwood-mark-negative.png`

## Testing

Before rolling out, paste each footer into:
- [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com) for cross-client preview, OR
- Send a test from the actual sending platform (Mailchimp, Postmark, SendGrid, Gmail SMTP) to a Gmail, Outlook, and Apple Mail inbox.

## Wiring into Nodemailer (`/api/contact`)

For the auto-reply, append `01-transactional.html` to the message body:

```ts
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const footer = await readFile(
  path.join(process.cwd(), 'email-templates/footers/01-transactional.html'),
  'utf-8'
);

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: customerEmail,
  subject: 'We received your message',
  html: `${bodyHtml}\n${footer}`,
});
```
