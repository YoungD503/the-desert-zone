# The Desert Zone website

Website for The Desert Zone (TDZ), a startup incubator and accelerator. It is a static site (HTML, CSS and JavaScript, no build step), in English and Spanish, ready to publish free on GitHub Pages.

Founder sign-ups go straight into the **TDZ Founder Pipeline** Google Sheet, where the team reviews founders and tracks next actions on a dashboard. Newsletter sign-ups from the footer and the welcome window go into the sheet's **Newsletter** tab, and "Read past issues" links to noticias.youngdesert.com.

## What is in the project

```
index.html                 Main page (English and Spanish in one file)
learn.html                 Learn page: the founder toolkit (templates, guides, mentorship)
assets/css/styles.css      Styles
assets/js/config.js        Your settings: Google Sheet connection, WhatsApp number, newsletter address
assets/js/main.js          Main page: language switch, sign-up and pitch builder, quiz, newsletter links
assets/js/learn.js         Learn page: language switch and toolkit filters
assets/css/learn.css       Learn page styles
assets/img/                Logo, favicons and the image shown when the link is shared
apps-script/Code.gs        Code that receives sign-ups inside the Google Sheet
brand/                     Brand kit for the team: logos, social images, logo animations
```

## 1. Publish the site on GitHub Pages

1. Sign in to GitHub and create a new repository, for example `the-desert-zone`. Make it **Public** (GitHub Pages is free for public repositories).
2. Upload the files: on the new repository page click **uploading an existing file**, drag in everything from this folder (including the `assets`, `apps-script` and `brand` folders and the `.nojekyll` file), and click **Commit changes**.
   - If you use Git instead: `git init`, `git add .`, `git commit -m "TDZ website"`, then push to the new repository.
3. In the repository go to **Settings > Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, and click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/the-desert-zone/`. The address appears at the top of the Pages settings.

## 2. Connect the sign-up form to the Google Sheet

Until this step is done, the form still works: founders copy their application and email it.

1. Open the **TDZ Founder Pipeline** Google Sheet.
2. Go to **Extensions > Apps Script**. Delete any code in the editor, paste the contents of `apps-script/Code.gs`, and click **Save**.
3. Click **Deploy > New deployment**. Click the gear icon next to *Select type* and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, then **Authorize access** and allow the permissions with the Google account that owns the sheet. (Google may show "Google hasn't verified this app": click *Advanced*, then *Go to ... (unsafe)*. It is your own script.)
5. Copy the **Web app URL** (it starts with `https://script.google.com/macros/s/`).
6. In GitHub, open `assets/js/config.js`, click the pencil icon, paste the URL between the quotes after `endpoint:`, and commit.
7. Test it: open your site, sign up with a test idea, and check that a new row appears in the **Founders** tab with Status *New*. Then subscribe to the newsletter from the footer and check the **Newsletter** tab.

**Confirmation email:** every founder who sends a pitch automatically gets an email in their language (English or Spanish) confirming you received it, explaining the 3-step process (team review, pitch session, welcome to TDZ) and including a copy of their pitch. It is sent from the Google account that owns the sheet, with replies going to `TEAM_EMAIL`. To turn it off, set `SEND_CONFIRMATION` to `false`. Add your website address in `SITE_URL` to show it in the email. Gmail accounts can send up to about 100 of these emails a day.

To get an email for every new sign-up, put your address in `NOTIFY_EMAIL` at the top of the Apps Script and deploy again.

**If you change the Apps Script later:** use **Deploy > Manage deployments**, click the pencil icon, choose *New version* and **Deploy**. The Web app URL stays the same, so the website keeps working.

## Updating the site later

Your live `assets/js/config.js` holds the Web app URL. When you upload a new version of the site, keep your existing `config.js` (update packages from Claude leave it out on purpose).

## 3. Replace the placeholder details

| What | Where | Placeholder now |
|---|---|---|
| WhatsApp number (chat button and footer) | `assets/js/config.js` | `10000000000` |
| Newsletter address | `assets/js/config.js` | `https://noticias.youngdesert.com` (Spanish visitors go to `/suscribirse`, English visitors to `/en/subscribe`) |
| Instagram, Facebook, LinkedIn links | footer in `index.html` | `thedesertzone` |
| Incubator and Accelerator length | `index.html` (search for "16 weeks" and "12 weeks") and `assets/js/main.js` ("16 semanas", "12 semanas") | 16 and 12 weeks |

Spanish text lives in `assets/js/main.js` and `assets/js/learn.js`. English text is in `index.html` and `learn.html`.

The toolkit cards on the Learn page link to the sign-up (`index.html#join`). When a template or guide is ready to share, change that card's link in `learn.html` to the file or page.

## 4. Use a custom domain (optional)

1. In **Settings > Pages > Custom domain**, enter your domain (for example `thedesertzone.com`) and save.
2. At your domain provider, add the DNS records GitHub shows you, then tick **Enforce HTTPS** once it is available.
3. In `index.html`, change the `og:image` line to the full address, for example `https://thedesertzone.com/assets/img/og-image.png`, so WhatsApp, Facebook and LinkedIn show the preview image when the link is shared.

## 5. Working with the Google Sheet

- **Founders**: one row per sign-up. Columns A to T come from the website. The gold columns (U to Z) are for the team: set **Status**, **Score (1 to 5)**, **Owner**, **Next action** and **Next action date**. Overdue actions turn red.
- **Dashboard**: totals, pipeline by status, Incubator vs Accelerator, product stage, customers, biggest need in the next 3 months, what founders need from TDZ, sign-ups by month, founders waiting longest, and follow-ups due this week. It updates by itself.
- **Newsletter**: one row per subscriber from the footer or the welcome window, with the language and where they signed up. Repeat sign-ups with the same email are skipped.
- **Lists**: the values behind the dropdowns. Add your team members in column G so they appear in the Owner dropdown.

Delete the three example rows in the Founders tab (their names start with "(Example)") before you start taking sign-ups.

The form sends category answers (product stage, customers, needs) in English whatever language the founder used, so the dashboard counts both languages together. If you rename a value in **Lists**, change the matching `value="..."` in `index.html` too, or new sign-ups will not be counted under it.
