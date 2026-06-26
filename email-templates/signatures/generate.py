#!/usr/bin/env python3
"""
Lockwood signature generator.

Generates 6 design variants × 5 team members = 30 signature HTML files
into design-numbered subfolders. Re-run any time data or designs change.
"""
from pathlib import Path

ROOT = Path(__file__).parent

PEOPLE = [
    {
        "slug": "andrew",
        "name": "Andrew William Uiso",
        "initials": "AWU",
        "role": "Managing Partner",
        "email": "andrew@lockwood.co.tz",
        "phone": "+255 766 168 877",
        "phone_e164": "+255766168877",
    },
    {
        "slug": "francis",
        "name": "Francis Richard Mwakatumbula",
        "initials": "FRM",
        "role": "Managing Director",
        "email": "francis@lockwood.co.tz",
        "phone": "+255 684 118 011",
        "phone_e164": "+255684118011",
    },
    {
        "slug": "arden",
        "name": "Arden Mogere",
        "initials": "AM",
        "role": "Technical Lead",
        "email": "arden@lockwood.co.tz",
        "phone": "+255 756 990 474",
        "phone_e164": "+255756990474",
    },
    {
        "slug": "harvey",
        "name": "Harvey Kadyanji",
        "initials": "HK",
        "role": "Technical Director &middot; Lead Implementation",
        "email": "harvey@lockwood.co.tz",
        "phone": "+255 744 174 923",
        "phone_e164": "+255744174923",
    },
    {
        "slug": "brian",
        "name": "Brian Biamah",
        "initials": "BB",
        "role": "Creative Director &middot; Client Relations",
        "email": "brian@lockwood.co.tz",
        "phone": "+254 736 584 706",
        "phone_e164": "+254736584706",
    },
]

# ---------- 6 design templates ---------------------------------------------

DESIGN_01_BLUE_CARD = """<!-- {NAME} - {ROLE} - 01 Blue Card -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#ffffff;width:540px;background:#0938CC;border-radius:14px;">
  <tr>
    <td background="../pattern-band-blue.png" style="padding:0;background-image:url(../pattern-band-blue.png);background-color:#0938CC;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:14px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
        <tr>
          <td style="padding:22px 26px 20px;vertical-align:top;">
            <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#A8C2FF;text-transform:uppercase;">Lockwood &nbsp;&middot;&nbsp; {INITIALS}</div>
            <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;margin-top:8px;line-height:1.12;">{NAME}</div>
            <div style="font-size:12.5px;font-weight:600;color:#A8C2FF;margin-top:3px;letter-spacing:0.01em;">{ROLE}</div>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:16px;font-family:'JetBrains Mono',Consolas,monospace;">
              <tr>
                <td style="padding-right:14px;font-size:11px;color:#ffffff;"><a href="mailto:{EMAIL}" style="color:#ffffff;text-decoration:none;">{EMAIL}</a></td>
                <td style="border-left:1px solid rgba(255,255,255,0.3);padding-left:14px;font-size:11px;color:#ffffff;"><a href="tel:{PHONE_E164}" style="color:#ffffff;text-decoration:none;">{PHONE}</a></td>
              </tr>
            </table>
            <div style="margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.22);font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;color:#A8C2FF;letter-spacing:0.1em;text-transform:uppercase;"><a href="https://lockwood.co.tz" style="color:#ffffff;text-decoration:none;">lockwood.co.tz</a> &nbsp;&middot;&nbsp; Transforming data, powering decisions.</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
"""

DESIGN_02_LIGHT_CARD = """<!-- {NAME} - {ROLE} - 02 Light Card -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#111111;width:540px;background:#ffffff;border:1px solid #eeeef1;border-radius:14px;">
  <tr>
    <td style="padding:22px 26px 20px;vertical-align:top;">
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#1F49FF;text-transform:uppercase;">Lockwood &nbsp;&middot;&nbsp; {INITIALS}</div>
      <div style="font-size:22px;font-weight:800;color:#111111;letter-spacing:-0.02em;margin-top:8px;line-height:1.12;">{NAME}</div>
      <div style="font-size:12.5px;font-weight:600;color:#63636e;margin-top:3px;letter-spacing:0.01em;">{ROLE}</div>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:16px;font-family:'JetBrains Mono',Consolas,monospace;">
        <tr>
          <td style="padding-right:14px;font-size:11px;color:#43434c;"><a href="mailto:{EMAIL}" style="color:#1F49FF;text-decoration:none;">{EMAIL}</a></td>
          <td style="border-left:1px solid #dadadf;padding-left:14px;font-size:11px;color:#43434c;"><a href="tel:{PHONE_E164}" style="color:#43434c;text-decoration:none;">{PHONE}</a></td>
        </tr>
      </table>
      <div style="margin-top:16px;padding-top:12px;border-top:1px solid #eeeef1;font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;color:#8e8e99;letter-spacing:0.1em;text-transform:uppercase;"><a href="https://lockwood.co.tz" style="color:#1F49FF;text-decoration:none;">lockwood.co.tz</a> &nbsp;&middot;&nbsp; Transforming data, powering decisions.</div>
    </td>
  </tr>
</table>
"""

DESIGN_03_MINIMAL = """<!-- {NAME} - {ROLE} - 03 Minimal Mono -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#111111;width:540px;">
  <tr>
    <td style="padding:0;vertical-align:top;">
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#1F49FF;text-transform:uppercase;">Lockwood &nbsp;&middot;&nbsp; {INITIALS}</div>
      <div style="font-size:24px;font-weight:800;color:#111111;letter-spacing:-0.025em;margin-top:6px;line-height:1.1;">{NAME}</div>
      <div style="font-size:13px;font-weight:500;color:#63636e;margin-top:3px;">{ROLE}</div>
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;color:#43434c;margin-top:14px;"><a href="mailto:{EMAIL}" style="color:#1F49FF;text-decoration:none;">{EMAIL}</a> &nbsp;&middot;&nbsp; <a href="tel:{PHONE_E164}" style="color:#43434c;text-decoration:none;">{PHONE}</a></div>
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;color:#8e8e99;letter-spacing:0.08em;text-transform:uppercase;margin-top:14px;"><a href="https://lockwood.co.tz" style="color:#8e8e99;text-decoration:none;">lockwood.co.tz</a> &middot; Transforming data, powering decisions.</div>
    </td>
  </tr>
</table>
"""

DESIGN_04_MONOGRAM = """<!-- {NAME} - {ROLE} - 04 Monogram Tile -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#111111;width:540px;">
  <tr>
    <td valign="top" width="100" style="padding:0 18px 0 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:84px;height:84px;background:#0938CC;background-image:linear-gradient(135deg,#0938CC,#0625A8);border-radius:14px;">
        <tr>
          <td align="center" valign="middle" height="84" style="font-family:Manrope,Helvetica,Arial,sans-serif;font-size:30px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1;">{INITIALS}</td>
        </tr>
      </table>
    </td>
    <td valign="top" style="padding:2px 0 0 0;">
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#1F49FF;text-transform:uppercase;">Lockwood Technology</div>
      <div style="font-size:20px;font-weight:800;color:#111111;letter-spacing:-0.02em;margin-top:6px;line-height:1.12;">{NAME}</div>
      <div style="font-size:12.5px;font-weight:600;color:#63636e;margin-top:2px;">{ROLE}</div>
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;color:#43434c;margin-top:12px;"><a href="mailto:{EMAIL}" style="color:#1F49FF;text-decoration:none;">{EMAIL}</a> &nbsp;&middot;&nbsp; <a href="tel:{PHONE_E164}" style="color:#43434c;text-decoration:none;">{PHONE}</a></div>
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;color:#8e8e99;letter-spacing:0.08em;text-transform:uppercase;margin-top:10px;"><a href="https://lockwood.co.tz" style="color:#8e8e99;text-decoration:none;">lockwood.co.tz</a></div>
    </td>
  </tr>
</table>
"""

DESIGN_05_MIDNIGHT = """<!-- {NAME} - {ROLE} - 05 Midnight -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#ffffff;width:540px;background:#0A0F1F;border-radius:14px;">
  <tr>
    <td style="padding:24px 28px;vertical-align:top;background:#0A0F1F;border-radius:14px;">
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#5877FF;text-transform:uppercase;">Lockwood &nbsp;&middot;&nbsp; {INITIALS}</div>
      <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;margin-top:8px;line-height:1.12;">{NAME}</div>
      <div style="font-size:12.5px;font-weight:600;color:#8e9bcd;margin-top:3px;">{ROLE}</div>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:16px;font-family:'JetBrains Mono',Consolas,monospace;">
        <tr>
          <td style="padding-right:14px;font-size:11px;color:#ffffff;"><a href="mailto:{EMAIL}" style="color:#5877FF;text-decoration:none;">{EMAIL}</a></td>
          <td style="border-left:1px solid rgba(255,255,255,0.18);padding-left:14px;font-size:11px;color:#ffffff;"><a href="tel:{PHONE_E164}" style="color:#ffffff;text-decoration:none;">{PHONE}</a></td>
        </tr>
      </table>
      <div style="margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.12);font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;color:#8e9bcd;letter-spacing:0.1em;text-transform:uppercase;"><a href="https://lockwood.co.tz" style="color:#5877FF;text-decoration:none;">lockwood.co.tz</a> &nbsp;&middot;&nbsp; Transforming data, powering decisions.</div>
    </td>
  </tr>
</table>
"""

DESIGN_06_RULE = """<!-- {NAME} - {ROLE} - 06 Vertical Rule -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Manrope,Helvetica,Arial,sans-serif;color:#111111;width:540px;">
  <tr>
    <td valign="top" width="4" style="background:#1F49FF;width:4px;font-size:0;line-height:0;">&nbsp;</td>
    <td valign="top" style="padding:2px 0 2px 18px;">
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:0.22em;color:#1F49FF;text-transform:uppercase;">Lockwood &nbsp;&middot;&nbsp; {INITIALS}</div>
      <div style="font-size:18px;font-weight:800;color:#111111;letter-spacing:-0.015em;margin-top:6px;line-height:1.2;">{NAME}</div>
      <div style="font-size:12px;font-weight:500;color:#63636e;margin-top:1px;">{ROLE}</div>
      <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;color:#43434c;margin-top:10px;"><a href="mailto:{EMAIL}" style="color:#43434c;text-decoration:none;">{EMAIL}</a> &nbsp;&middot;&nbsp; <a href="tel:{PHONE_E164}" style="color:#43434c;text-decoration:none;">{PHONE}</a> &nbsp;&middot;&nbsp; <a href="https://lockwood.co.tz" style="color:#1F49FF;text-decoration:none;">lockwood.co.tz</a></div>
    </td>
  </tr>
</table>
"""

DESIGNS = [
    ("01-blue-card", "Blue Card", DESIGN_01_BLUE_CARD),
    ("02-light-card", "Light Card", DESIGN_02_LIGHT_CARD),
    ("03-minimal", "Minimal Mono", DESIGN_03_MINIMAL),
    ("04-monogram", "Monogram Tile", DESIGN_04_MONOGRAM),
    ("05-midnight", "Midnight", DESIGN_05_MIDNIGHT),
    ("06-rule", "Vertical Rule", DESIGN_06_RULE),
]


def render(template: str, person: dict) -> str:
    return template.format(
        NAME=person["name"],
        INITIALS=person["initials"],
        ROLE=person["role"],
        EMAIL=person["email"],
        PHONE=person["phone"],
        PHONE_E164=person["phone_e164"],
    )


def write_signatures():
    for design_slug, _label, template in DESIGNS:
        design_dir = ROOT / design_slug
        design_dir.mkdir(exist_ok=True)
        for person in PEOPLE:
            html = render(template, person)
            (design_dir / f"{person['slug']}.html").write_text(html)


def write_preview():
    rows = []
    for design_slug, label, _t in DESIGNS:
        cells = "".join(
            f'<div class="card"><div class="label">{p["name"]} &middot; {p["role"]}</div>'
            f'<iframe src="{design_slug}/{p["slug"]}.html"></iframe></div>'
            for p in PEOPLE
        )
        rows.append(
            f'<section class="design"><h2>{label} <span>{design_slug}</span></h2>'
            f'<div class="grid">{cells}</div></section>'
        )

    html = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lockwood Email Signatures - 6 designs x 5 people</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { margin:0; background:#f7f7f8; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; padding:32px 24px 64px; color:#111; }
    h1 { font-size:24px; font-weight:700; letter-spacing:-0.02em; margin:0 0 6px; }
    .lead { color:#63636e; font-size:14px; margin:0 0 32px; max-width:720px; line-height:1.5; }
    .design { margin-bottom:48px; }
    .design h2 { font-size:18px; font-weight:700; letter-spacing:-0.01em; margin:0 0 16px; padding-bottom:10px; border-bottom:1px solid #eeeef1; }
    .design h2 span { font-family:'JetBrains Mono',Consolas,monospace; font-size:11px; color:#8e8e99; letter-spacing:0.08em; text-transform:uppercase; margin-left:10px; font-weight:500; }
    .grid { display:grid; gap:18px; max-width:620px; }
    .card { background:transparent; }
    .label { font-size:10px; font-weight:700; color:#8e8e99; letter-spacing:0.16em; text-transform:uppercase; margin-bottom:8px; }
    iframe { width:100%; height:240px; border:0; display:block; background:transparent; }
  </style>
</head>
<body>
  <h1>Lockwood Email Signatures</h1>
  <p class="lead">Six design directions, each rendered for the five team members. Pick one direction and we ship it across the team. Source files live in numbered folders; regenerate by editing <code>generate.py</code> and re-running.</p>
""" + "\n".join(rows) + """
</body>
</html>
"""
    (ROOT / "_preview.html").write_text(html)


if __name__ == "__main__":
    write_signatures()
    write_preview()
    total = len(DESIGNS) * len(PEOPLE)
    print(f"Generated {total} signature files across {len(DESIGNS)} designs.")
