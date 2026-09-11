# Google Business Profile — setup kit for Jordy Quiroz

This profile has to be created by Jordy, or by someone he authorizes, from a Google account the
business controls. Google verifies the owner directly, usually with a short video. Everything
else is prepared here so setup is copy and paste, and every value matches the website exactly.
Consistent details across the site, Google, and Booksy are what let search engines treat them
as one business.

Photos, logo, and cover are in the `gbp-kit` folder next to this file, sized to Google's
requirements: JPG or PNG, 10 KB to 5 MB, at least 720 × 720 recommended.
([Google photo guidelines](https://support.google.com/business/answer/6103862))

---

## Before you start — five things only Jordy can settle

1. **Check whether a listing already exists.** Search Google Maps for "J.Barber 1", "Jordy Quiroz",
   "Jordy Cutz", and "1407 Forest Dr Annapolis". If a listing for him shows up, choose
   **Own this business?** and claim it. Do not create a second one. Duplicate listings are a
   common suspension trigger.

2. **Is there permanent signage at 1407 Forest Drive naming his business?** This decides the
   setup, and getting it wrong is the riskiest mistake in the whole process.
   - **Yes, his name is on the sign** → use **Setup A**: show the address and add service areas.
   - **No, or the sign names someone else's shop** → use **Setup B**: service-area business
     with the address hidden. This still ranks, and it is the safe choice when unsure.
     Another barber operates from the same building, which raises Google's scrutiny.

3. **A phone number.** The website has none yet, and Google uses it for verification and calls.
   A dedicated business line is best; Google Voice is free. Once there's a number, the same one
   goes on the profile, the website, and Booksy.

4. **The Google account.** Use an account the business controls, not a personal one that might
   be abandoned later. After setup, add John as a **Manager** so he can help without holding
   the ownership.

5. **Rename Booksy first.** The profile name must match how the business presents itself. The
   website says Jordy Quiroz, Booksy still says "J.Barber 1". Edit the existing Booksy listing's
   name — never create a new one, or the 40 reviews stay behind.

---

## Step by step

Go to [business.google.com](https://business.google.com) and choose **Add business**.

| Field | Enter exactly |
|---|---|
| Business name | `Jordy Quiroz` |
| Primary category | `Barber shop` |
| Additional category | `Hairdresser` — nothing else. Extra categories for services he doesn't offer can trigger suspension. |
| Customers visit your location? | **Setup A:** Yes · **Setup B:** No |
| Address (Setup A only) | `1407 Forest Drive, Suite 1, Annapolis, MD 21403` |
| Serve customers outside that location? | Yes |
| Service areas | The 13 below, one at a time |
| Phone | Jordy's business number |
| Website | `https://jordyquiroz.com/` |
| Hours | Every day, 8:00 AM – 7:00 PM |

**Do not add anything to the name.** "Jordy Quiroz Mobile Barber Annapolis" gets profiles
suspended. The descriptive words belong in the description and services.

**The ZIP is 21403.** Booksy currently shows 21401, which is wrong. The USPS geocoder confirms
21403 for this address.

### Service areas

These match the website's structured data exactly:

Annapolis · Parole · Edgewater · Riva · Arnold · Cape St. Claire · Severna Park · Millersville ·
Crofton · Davidsonville · Gambrills · Bowie · Kent Island

Google allows up to 20, within about two hours' drive. Add more only where he'll genuinely
travel; a wider area dilutes relevance without adding reach.
([Google service-area rules](https://support.google.com/business/answer/9157481))

---

## Description — pick the one that matches the setup

The limit is 750 characters. Both are under it. Neither includes prices, links, or ratings,
which belong in other fields.

**Setup A — studio plus house calls**

```text
Jordy Quiroz is a bilingual barber in Annapolis, Maryland. Take the chair at the Forest Drive studio, or book a house call and the full setup comes to your home, office, hotel or event: chair, cape, tools and hot towels. Services include low, mid and high fades, tapers, line-ups, beard sculpting, hot-towel shaves and custom hair designs. Jordy works in English and Spanish and serves Annapolis and Anne Arundel County, seven days a week by appointment. Hablamos español.
```

**Setup B — service-area business**

```text
Jordy Quiroz is a bilingual mobile barber serving Annapolis and Anne Arundel County, Maryland. Book a house call and the full setup comes to your home, office, hotel or event: chair, cape, tools and hot towels. Services include low, mid and high fades, tapers, line-ups, beard sculpting, hot-towel shaves and custom hair designs. Jordy works in English and Spanish, seven days a week by appointment. Hablamos español.
```

Setup B leaves out the studio on purpose. With the address hidden, pointing people to a
location they can't see would contradict the listing.

---

## Services

In the **Services** section, first tick every predefined service Google offers that matches,
such as haircut, beard trim, shave, and kids' haircut. Google weighs its own predefined
services more heavily, and they're the most commonly skipped field. Then add these as custom
services. Prices match the website, which lists regular prices rather than Booksy's promotions.

| Service | Price | Description |
|---|---|---|
| Fade | $40 | Low, mid or high fade. Clean, modern and seamless, short to long with no lines. About 40 minutes. |
| Taper | $40 | Low, mid or high taper. Tight around the edges with weight kept up top. About 35 minutes. |
| Haircut & Beard with Hot Towel | $50 | Fade or taper plus beard alignment and profiling, steam, hot towel massage and a razor finish. The signature service, about 45 minutes. |
| Regular Haircut | $30 | #1 or #2 all around. Even, sharp, done right. About 25 minutes. |
| Beard Maintenance | $25 | Shape, profile and a hot towel massage. About 25 minutes. |
| Beard Trim | $10 | Length down, edges tidy. About 15 minutes. |
| Shave | $30 | Razor or shaver. Close and clean, no irritation. About 20 minutes. |
| Line Up | $25 | Crisp edges from hairline to nape. About 30 minutes. |
| Design + Fade | $50 | Custom hair design with a fade: lines, arrows, logos or lettering. Bring a reference. About 55 minutes. |
| Kids Haircut | $30 | Regular cut or fade for kids, with patience. About 30 minutes. |
| House Call | $200 | Any services from the menu at your home, office, hotel or event, one flat price per visit. Chair, cape, tools and hot towels included, with travel across Anne Arundel County. |

---

## Attributes

Only set what's true:

- **Appointments** — online appointments through Booksy.
- **Onsite services** — yes, for house calls.
- **Language** — Spanish, if Google offers it for this category.
- **Latino-owned** — Google offers an "identifies as" attribute. It's Jordy's choice whether to show it.
- **Payments** — whatever he actually accepts.

---

## Photos

The `gbp-kit` folder holds:

| File | Use |
|---|---|
| `01-logo.png` | Logo. The JQ monogram from the website, 720 × 720. |
| `02-cover.jpg` | Cover photo, 16:9. |
| `work-*.jpg` | Eleven photos of his work, all from his own Booksy gallery. |

**Deliberately left out:**

- **The website's hero photo.** It was edited with AI to add sunglasses. Google requires photos
  without significant alterations, and AI-altered images on a profile carry suspension risk.
  It's fine on the website, but not here.
- **The kids' design photo.** It shows a child's face. Add it only if the parent is comfortable
  with it appearing on Google.
- **Three low-resolution shots** that fall under Google's recommended size.

**What he should shoot fresh**, because Google weighs real, recent photos and the kit can't
supply them:

- The storefront or entrance, with signage visible (Setup A only)
- The chair and station inside
- The house-call kit unpacked in a client's space
- Jordy himself at work

Aim for a few new photos a week once the profile is live. Don't add location tags to them.
Testing showed it does nothing, and Google's own staff have said so.

---

## Verification

Google will offer one or more methods. Video is the most common now. It's usually a single
unedited clip that shows:

- The street or area, so Google can match the location
- The signage or the business equipment and tools
- Proof that he manages the business, such as opening the Booksy dashboard or business paperwork

Photos and edits don't appear publicly until verification is done.

---

## After verification

**For the first two weeks, change nothing.** Rapid edits right after verification are themselves
a suspension trigger. After that, change one thing at a time.

Then, in order:

1. **Connect Booksy.** Booksy's **Reserve with Google** puts a Book button on the profile. It
   supports mobile services, so the house call can be booked from Google.
2. **Get the review link.** In the profile, choose **Ask for reviews** and copy the short link.
3. **Start asking every client.** The same words every time, at the mirror, then hand them the
   link or a QR code to use later on their own phone.

   > If you're happy with it, would you leave me a Google review? It takes twenty seconds.

   > Si te gustó el corte, ¿me dejarías una reseña en Google? Toma veinte segundos.

   Ask everyone, not only the happy ones. Never offer a discount or anything else in return.
   Both of those get every review in that period deleted, and incentives now carry federal
   penalties. Two or three new reviews a week, steadily, beats any burst.
4. **Reply to every review** within a day, in the language it was written in.
5. **Post weekly.** Four posts are drafted below.

---

## First four posts

Post one a week. Each has a photo from the kit and a **Book** button pointing to Booksy.

**Week 1 — House calls** · photo `work-hot-towel.jpg`
> A barber who comes to you. One flat $200 per visit anywhere in Annapolis and Anne Arundel
> County, with the chair, tools and hot towels included.

**Week 2 — The signature** · photo `work-beard-lineup.jpg`
> Haircut and beard with the full hot-towel ritual: steam, massage, and a razor-clean finish.
> About 45 minutes.

**Week 3 — En español** · photo `work-fade-curls.jpg`
> Hablamos español. Fades, cortes y barba con toalla caliente, en el estudio o a domicilio.

**Week 4 — Custom designs** · photo `work-design-cross.jpg`
> Lines, arrows, logos, lettering. Bring the idea, leave with it cut in.

---

## Send these back once it's live

- The profile's share link
- The review link from **Ask for reviews**
- The phone number, if there is one

With those, the website gets a "Review us on Google" button, a printable QR card for the
chair, the phone number as a tap-to-call link, and a link from the site's structured data to
the profile, which is one of the clearest signals that the website and the listing are the
same business.
