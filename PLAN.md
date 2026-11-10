# OS Dental Design: Website Plan

The plan for the OS Dental Design website. It is also a public portfolio piece.
Tick items off as they are done and add a date, e.g. `- [x] Pick host (2026-11-12)`.

## Goals

1. A fast, professional brochure site for a newly independent dental design business.
2. It deploys automatically from this GitHub repo on every push to `main`.
3. Visitor analytics, plus an admin hub to view them later.
4. An enquiry form, switched on only once the data handling is right (see GDPR below).
5. A custom domain for the site and for a professional email address.
6. Free or close to free to run.

## Progress

**Phase 1: Foundations**
- [x] Choose hosting (see options below) (2026-11-10: Cloudflare Pages)
- [x] Create a `main` branch to deploy from (2026-11-10)
- [x] Scaffold the site (static HTML/CSS/JS, or a static site generator) (2026-11-10: plain HTML/CSS/JS in `site/`, one file per page, no build step)
- [ ] Hook up auto-deploy from GitHub (Cloudflare Pages, production branch `main`)
- [ ] Add a `LICENSE` that keeps the client's content and images "all rights reserved"

**Phase 2: Domain & email**
- [ ] Choose and buy the domain
- [ ] Point the domain at the site (HTTPS is automatic)
- [ ] Set up the business email on the domain (MX, SPF, DKIM, DMARC records)

**Phase 3: Content**
- [ ] Pages: Home, Services, About, Gallery/Work, Contact
  - 2026-11-10: first draft of Home (About is a section on it), Services (with prices) and Get in touch, from the copy doc. Work/gallery waits for copy and images.
- [ ] Optimise images and add them (see Images below)
  - 2026-11-10: placeholder renders in place; `site/images/README.md` lists what to source for each slot.
- [ ] Privacy notice page
  - 2026-11-10: outline drafted in `site/privacy.html`; Owen to check and complete.

**Phase 4: Analytics**
- [ ] Add analytics (preferably cookieless)
- [ ] Cookie banner, only if anything non-essential sets cookies
- [ ] Admin hub behind a login

**Phase 5: Enquiry form (only once GDPR is ready)**
- [x] Contact form shown as a mailto/"coming soon" placeholder, not live (2026-11-10: both forms are built but send nothing; submitting points to email and phone)
- [ ] Data handling agreed (see checklist below)
- [ ] Form goes live, sending to the business email

## Hosting options

All of these deploy from GitHub on push and give free HTTPS on a custom domain.

| Service | Free tier fits? | Notes |
|---|---|---|
| **Azure Static Web Apps (Free)** | ⚠️ | Microsoft describes the Free plan as "for hobby or personal projects" and steers production sites to Standard (about $9/month). That's guidance rather than a ban, but the Free plan has no uptime guarantee (SLA). The same Azure + GitHub Actions workflow already used at work. Gives a preview URL for every pull request, which is handy for showing the client changes before they go live. Includes built-in login (for the admin hub) and Azure Functions (for the form later). |
| **Cloudflare Pages** | ✅ | Commercial use is allowed on the free plan. No bandwidth limits. Cloudflare can also be the domain registrar (sold at cost), the DNS, a free email forwarder and the free cookieless analytics, all in one place. |
| **Netlify (Free)** | ✅ | Easy to use, and has built-in form handling. The free plan now runs on monthly credits, so a traffic spike can pause the site. |
| **GitHub Pages** | ⚠️ | The simplest option, but GitHub's terms discourage using it to host a business. Fine for demos. |
| **Vercel (Hobby)** | ❌ | The free plan is non-commercial only, so it doesn't suit a business site. |

**Decision (2026-11-10):** Cloudflare Pages. The two options that were considered:
- **Cloudflare Pages + Cloudflare domain/analytics:** free, allowed for commercial use, and everything in one place.
- **Azure Static Web Apps:** matches the skills used at work. Build it on the Free plan, then move to Standard (about $9/month) when it becomes the business's live site.
Free tiers change, so check the current limits before committing.

## Domain & email

- **Registrar:** Cloudflare Registrar (sold at cost, no markup on renewals) or Namecheap. Keep DNS in one place.
- **Domain bought elsewhere?** It still works with Cloudflare. Change the domain's nameservers to Cloudflare's (on the free plan) and keep paying the original registrar. Moving the domain itself to Cloudflare later is optional.
- **Email:** for a client-facing business, use a paid mailbox: Microsoft 365 Business Basic or Google Workspace (each a few £ per user per month).
  The budget option is Zoho Mail's free plan, or Cloudflare Email Routing, which only forwards mail to an existing inbox and can't send from the domain on its own.

## Analytics & cookies

- **Cloudflare Web Analytics** is free and sets no cookies, so it needs no consent banner. The privacy notice still has to mention it.
- Google Analytics and Microsoft Clarity set cookies, so they need a consent banner that blocks them until the visitor accepts.
- **Admin hub:** protect it with Static Web Apps' built-in login and a route restricted to an `admin` role.
  The data can come from the analytics provider's API. The repo is public, so never commit API keys; put them in the app settings in Azure.

## Enquiry form & GDPR

Leave the form switched off until everything below is decided. Meanwhile a `mailto:` link or a plain email address is fine.

- **Lawful basis:** "legitimate interests" or "steps prior to a contract" covers replying to enquiries.
- **Data minimisation:** ask only for name, email, an optional phone number and the message.
- **⚠️ Cases are health data.** Dentists' cases (patient scans, photos, prescriptions) count as special category data.
  Don't accept them through the website. Use the industry's secure case-transfer tools, or an agreed secure channel.
- **Delivery:** send submissions straight to the business email and store nothing on the site. Options:
  an Azure Function plus an email service, or a form service (e.g. Formspree, Web3Forms) that offers a data processing agreement and EU/UK hosting.
- **Paperwork:** a privacy notice on the site, ICO registration and the data protection fee (the client, as the controller),
  and a retention rule such as deleting enquiries after 12 months if they don't lead to work.
- **Spam:** a honeypot field or Cloudflare Turnstile (free, no cookies).

## Images

- **Store them in the repo.** A few dozen optimised images is only a few MB, well within the hosting limits. No blob storage is needed.
- Before committing, resize to the size actually displayed (around 1600px wide at most) and convert to **WebP/AVIF**, aiming for under 300 KB each.
  Git keeps every version forever, so optimise before committing and don't keep swapping files.
- Keep the original high-resolution files out of the repo, e.g. in OneDrive.
- Revisit this (Azure Blob Storage or Cloudflare R2) only if the gallery grows into the hundreds, or the client needs to upload images without a code change.
