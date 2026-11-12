# Hostinger Deployment Guide — Learn with Meher

This website is built with React, TypeScript, and Vite, pre-configured for static export to **Hostinger Web Hosting** or **Hostinger Cloud Hosting**.

---

## 1. Quick Build & Export (Step-by-Step)

### Step 1: Install Dependencies (if building locally)
```bash
npm install
```

### Step 2: Generate the Production Build
```bash
npm run build
```
This will compile and bundle all TypeScript, React, and CSS assets into a clean, standalone production folder:
`dist/`

The `dist/` directory includes:
- `index.html` (Complete with SEO tags, OpenGraph, and Schema.org markup)
- `assets/` (Optimized JS, CSS, and all high-resolution images)
- `.htaccess` (Pre-configured for Apache & LiteSpeed rewrite rules)
- `robots.txt` & `sitemap.xml`
- `favicon.svg`

---

## 2. Uploading to Hostinger via File Manager

1. Log into your **Hostinger hPanel** (https://hpanel.hostinger.com).
2. Go to **Websites** and click **Manage** next to your domain.
3. In the sidebar under **Files**, select **File Manager**.
4. Open the `public_html` directory of your website.
5. If there is a default `default.php` or placeholder file, delete it.
6. Upload all files and folders from your local `dist/` folder directly into `public_html/`.
   * **Important:** Upload the *contents* of `dist/` (so `index.html` sits directly inside `public_html/index.html`), not the `dist` folder itself.

---

## 3. Uploading via FTP / FileZilla (Alternative)

1. In Hostinger hPanel, search for **FTP Accounts** to retrieve your Host, Username, and Password.
2. Connect using an FTP client like **FileZilla** or **Cyberduck**.
3. Navigate to remote directory `/public_html`.
4. Drag and drop everything inside your local `dist/` folder into `/public_html`.

---

## 4. Single-Page Application (SPA) Routing & `.htaccess`

Hostinger servers run Apache/LiteSpeed. To prevent 404 errors when visitors refresh a page or click anchor routes, a `.htaccess` file is already included in the `public/` directory (which Vite automatically copies into `dist/`).

Contents of `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 5. Custom Domain & Free SSL Setup on Hostinger

1. In hPanel, go to **Security** → **SSL**.
2. Select your domain and click **Install SSL** (Let's Encrypt Free SSL).
3. Toggle on **Force HTTPS** to redirect all HTTP traffic to secure HTTPS.

---

## 6. Updating Contact Details & Content

All phone numbers, emails, WhatsApp links, and course data are centralized in:
`src/config/siteConfig.ts`

Whenever you update your phone number, email address, or syllabus, simply run `npm run build` and re-upload the updated files to `public_html`.
