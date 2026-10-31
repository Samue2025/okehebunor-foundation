---
target: the website
total_score: 9
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
timestamp: 2026-10-31T20-59-32Z
slug: src-app-page-jsx
---
Method: dual-agent (A: f6d5cb51-1e02-4e21-9db8-4cdb29e926c6 · B: da8fd201-f07e-4a55-84df-f0dc912a3b6c)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | The hero slides with no controls. Donate Now does not say the next step is a bank transfer. Check Our News does not say the headlines are an outside feed. |
| 2 | Match System / Real World | 1 | Typos, leftover Latin, and violent outside headlines are published as the foundation's own news. |
| 3 | User Control and Freedom | 1 | Several primary buttons do nothing. On Donations the bank dialog can open twice, and closing one leaves the other. |
| 4 | Consistency and Standards | 1 | Three spellings of the name, three button colors, Programs titled Our Events, and the same fundraising total on every cause card. |
| 5 | Error Prevention | 1 | Contact Us reports success and sends nothing. The amount a donor picks is discarded when the bank dialog opens. |
| 6 | Recognition Rather Than Recall | 2 | The header labels are clear. The footer renames the same destinations (Events, Causes, Volunteers, Policy Privacy). |
| 7 | Flexibility and Efficiency | n/a | Marketing site. There is no signed-in or repeat-donor workflow that needs a shortcut. |
| 8 | Aesthetic and Minimalist Design | 1 | The same eyebrow, 40px heading, and paragraph repeat down the homepage. The headline sits across the child's face. |
| 9 | Error Recovery | 1 | After a failed Join Us submit, the button stays disabled. Contact Us wipes the message after a fake success. |
| 10 | Help and Documentation | n/a | A marketing site does not need a help center. The trust gaps are already scored under status and real-world language. |
| **Total** | | **9/32** | **Critical** |

#### Design Specificity Verdict

**LLM assessment:** Interchangeable charity template with a specific photograph set dropped in. The child's face on the homepage, the outreach pictures, and the named team on About are the authored layer. The structure is the stock fundraiser stack: slogan hero, logo strip, origin essay, stat band, campaign cards, number mosaic, three icon cards, three cause cards, news, join form, dark footer. Inner pages share one 493px centered banner. Gallery and Get Involved reuse the About banner, and Get Involved reuses the About subtitle. The name is spelled Okehebunor, Okehebonor, and Okehenbunor. The header says Lagos and the wire instructions say Asaba. The mosaic claims "41K Indigenous youth-in-work through EleV," which is not this foundation's program, beside a band that claims 123 children and 67 volunteers.

**Deterministic scan:** CLI detector on `src` exited 2 with 1 finding: `border-accent-on-rounded` at `src/app/globals.css:105`. That match is the circular loading spinner (`border-radius: 50%` plus a top border). False positive. A spinner ring needs both.

Browser injection of detect.js succeeded on `/`, `/about-us`, `/donations`, and `/gallery`, then the overlay server was stopped. There is no live overlay to look at now.

Homepage scan: 24 low-contrast, 8 gray-on-color, 7 line-length, 5 kicker-above-heading, 3 text-occlusion, 1 bounce-easing. About: 17 groups. Donations: 17 groups, mostly long lines and white on `#34b090`. Gallery: 47 advisory hover-zoom hits, one long footer line, one skipped heading (h1 Gallery then h3 Quick Links), one Toastify bounce.

False positives from the browser scan: white-on-white hero headings (the text sits on a photograph, and the detector read a transparent background as white); three "low contrast text" occlusion hits that are the detector's own labels; `Toastify__bounceInLeft` on `body`, which is the toast library, not a bounce playing on the page. Kickers above headings are a style preference. The real kicker problem is the words: "OUR BEGINNINGS" sits above the donate cards.

Agreed, and real: white on mint `#34b090` is about 2.7:1, and white on blue `#47A3E2` is about 2.8:1. Those are the Donate, Get Involved, Learn more, and Submit buttons. Gray `#4f4949` on the yellow and pastel stat tiles is also thin.

#### Overall Impression

The photographs are the site. The words and the controls around them spend that trust. The single biggest opportunity is to make the page tell one true story and take one gift, then stop.

#### What's Working

- The field photography is specific. The homepage hero, the about banner, and the results band are pictures of people, and they carry the first five seconds.
- About Us names the team and shows their faces. That is the only page where the institution becomes a group of people.
- Donation amounts are in naira (NGN 50,000, 100,000, 500,000), and the dialog opens on an NGN account. On a wide screen, Donate Now stays in the header.

#### Priority Issues

- **[P0] Check Our News publishes someone else's headlines under your name.** The homepage fetches an outside feed and shows it as "OUR Blog Posts." On this pass the endings were a Shamonda virus death and a report of gunmen killing villagers. Why it matters: the last thing a donor remembers is fear attached to the foundation. Fix: take the feed off the homepage and the blog. If the section stays, use three reports you wrote, each with a place, a date, and one of your photographs. Suggested command: /impeccable clarify

- **[P0] Donate Now does not complete a gift.** The donations panel shows Stripe, Visa, PayPal, and Mastercard. The button then opens a bank dialog, ignores the amount the donor just chose, misspells the bank ("United Bank Of Africe"), and leaves empty sort-code and IBAN rows on the USD tab. The header and the donations page each mount the same dialog, so it opens twice and closing one leaves the other. Why it matters: a first gift cannot be made with confidence. Fix: one dialog, titled as a transfer. Show the chosen amount. Add copy buttons for the account name and number. Remove the card logos. Fill only the fields you can fill. Suggested command: /impeccable harden

- **[P1] The foundation cannot keep one name, one city, or one set of numbers.** Okehebunor, Okehebonor, and Okehenbunor all appear. Lagos is in the header and on Contact. Asaba is in the wire address. 123 children, 4+ years, 68% African-led partners, and 41K youth through EleV sit on the same homepage. Why it matters: a donor who notices one contradiction stops trusting the account number. Fix: one legal name, one city, and only figures you can point at a program. Remove the EleV tile and the matching stats until each has a source. Suggested command: /impeccable clarify

- **[P1] The main buttons do not go where their labels say.** Hero Learn More, the results-band Get Involved, Learn More About Us, Volunteer Now, and both secondary buttons on Donations do nothing. Programs & Events, Focus Areas, and Volunteers all go to About. Footer Volunteers goes home. Policy Privacy goes to `/services`. Partnership is a relative `get-involved` link. The menu says Get Involed. Why it matters: the path from "I want to help" to a real page is broken in several places. Fix: point each label at the page it names, and delete any button you will not wire. Suggested command: /impeccable clarify

- **[P2] The page repeats one template until nothing is the point.** Inner pages share one banner. The same "uplifting communities" paragraph appears twice on the homepage and again on Donations. The headline covers the child's face. Mint and blue buttons fail contrast. Why it matters: after the hero, every section has the same weight, so the real causes do not stand out. Fix: cut the homepage to the hero, one proof section, three causes with different totals, one donate, and one contact. Give buttons a darker green or blue that clears 4.5:1. Move the headline off the face. Suggested command: /impeccable layout

#### Persona Red Flags

**Jordan (first-time donor):** Card logos versus a UBA transfer. The same "Goals: NGN 10,000,000 / Raised: NGN 2,000,000" on Water Wells, Help to mothers, and Child Support. The leftover word "risus." on that third card. The EleV statistic. The gunmen headline under Check Our News. The chosen amount never appears in Donation Details, and there is no receipt. Lagos in the header, Asaba in the transfer instructions.

**Casey (phone, one-handed):** Header Donate Now is hidden until a wide screen, so the phone header has no gift control until the menu opens. The menu button is an icon with no name. Join Us Today stays a side-by-side row, so the form crushes at 390px. The phone number is plain text, not a tap-to-call link. Hero Learn More and Get Involved sit side by side at a very small size. The donations hero is a full screen, so the amount picker starts below the fold.

**Sam (keyboard and low vision):** Four h1s on the homepage. White on mint and white on blue fail contrast on the primary buttons. Contact fields have placeholders and no labels, and inputs remove the focus outline. Hero slides and partner logos use empty alt text. Social links in the footer have no accessible name. Every gallery image is "Gallery photo," with no place or date. The carousel timer ignores reduced motion. Donation Details is not a dialog, focus is not trapped, and two of them can stack. Team job titles on About are commented out, so the portraits announce names and no roles.

#### Minor Observations

- "Communites", "Volunteers & Supports", "1 Donations", "Policy Privacy", "8:am-6:pm".
- Campaign cards are dated Thursday 6 November 2024. Programs still lists 18 February 2025. Both are presented as current.
- The blog data still contains the Latin filler "Quisque eu euismod arcu… risus."
- The type is named Poppins in the CSS and the file that loads is Geist.
- Contact still has a static map and "City: Lagos, Nigeria" as the only place.
- Child Support and Child Care & Support on Donations are the same offer.
- The top bar's left side is empty. Only Lagos and the Gmail address remain.

#### Questions to Consider

- When a donor in Asaba and a donor abroad both land on the homepage, which city is the foundation?
- Which figure would you sign your name under: 123 children, 4+ years, or 41,000 youth through EleV?
- In the ten seconds after Donate Now, should the donor see the naira amount they just chose and a copyable account, or the card logos the page shows and the dialog never charges?
