## NextGenTechCare LLC – Marketing Website

Static marketing site for **NextGenTechCare LLC**, a business providing patient, one-on-one technology services for seniors. Built with **Node tooling**, **React**, **TypeScript**, and **Vite**.

### Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build the static site for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

The static files will be output to the `dist` folder and can be deployed to any static hosting provider.

---

### Packaging and deployment

**1. Package the app (production build)**

From the project root:

```bash
npm install
npm run build
```

This creates a **`dist`** folder containing:

- `index.html` – entry page  
- `assets/` – minified JS and CSS (hashed filenames for caching)

No server or Node.js is required at runtime; everything is static files.

**2. Deploy the `dist` folder**

Upload the **contents** of `dist` (or the whole `dist` folder, depending on the host) to any static host. Examples:

| Option | How |
|--------|-----|
| **Netlify** | Drag-and-drop the `dist` folder at [app.netlify.com](https://app.netlify.com), or connect your Git repo and set build command `npm run build` and publish directory `dist`. |
| **Vercel** | Run `npx vercel` in the project (or connect the repo in the Vercel dashboard). Vercel detects Vite and uses `dist` automatically. |
| **GitHub Pages** | See **GitHub Pages** section below. ~~Push the repo, then in **Settings → Pages** choose “Deploy from a branch” and set the branch to `main` and folder to `/ (root)`. Use a GitHub Action to run `npm run build` and publish the `dist` contents to the `gh-pages` branch (or use the `gh-pages` package). |
| **AWS S3 + CloudFront** | Upload the contents of `dist` to an S3 bucket, enable static website hosting, and optionally put CloudFront in front for HTTPS and caching. |
| **Any web host** | Upload the contents of `dist` via FTP/SFTP to your host’s `public_html` or `www` directory. |

**3. Custom domain and HTTPS**

- **Netlify / Vercel**: Add your domain in the dashboard; they provide free HTTPS.  
- **S3/CloudFront**: Use Route 53 (or your DNS) to point the domain to CloudFront and use an ACM certificate for HTTPS.  
- **Traditional host**: Configure the domain in the host’s control panel and enable SSL if offered.

**GitHub Pages (project site)**

Your site will be at `https://<username>.github.io/<repo-name>/`. To avoid 404s:

1. In **`vite.config.ts`**, set `base` to your repo name with slashes: `base: "/nextgentechcare/"`. If your repo is named something else, use that (e.g. `"/my-repo/"`).
2. Build: `npm run build`.
3. Deploy the **contents** of `dist` to the branch and folder GitHub Pages uses (e.g. push the contents to the `gh-pages` branch root, or use a GitHub Action that runs `npm run build` and publishes `dist`).

If `base` does not match your repo path, the browser will request assets from the wrong URL and you’ll get 404s.

**Quick test before deploy**

To confirm the packaged site works locally:

```bash
npm run preview
```

Then open the URL shown (e.g. `http://localhost:4173`) and click through the site.

---

### Issues & troubleshooting

Numbered issues and fixes for common problems. Add new entries as **#2**, **#3**, etc.

#### #1 – Custom domain resets to `*.github.io` after each deploy (GitHub Pages + gh-pages)

**What happens:** You set a custom domain (e.g. `nextgentechcare.com`) in GitHub **Settings → Pages**, but after running `npm run deploy` the site reverts to `username.github.io/nextgentechcare/` and the custom domain is lost.

**Why:** The `gh-pages` plugin does a **destructive** deploy: each run creates a fresh commit on the `gh-pages` branch and replaces the whole branch with the contents of `dist`. The custom domain is stored in a **CNAME** file that GitHub creates on the `gh-pages` branch when you type the domain in the UI. That file only exists on GitHub’s side, not in your repo. So when `gh-pages` overwrites the branch with your local `dist`, it **deletes the CNAME file**. GitHub then assumes the custom domain was removed and resets the Pages URL.

**Fix (permanent):**

1. **`package.json`** – Set the intended URL so the deploy tool and app know the canonical host:
   ```json
   "homepage": "https://nextgentechcare.com"
   ```

2. **Include CNAME in every deploy** – Put a **CNAME** file (no extension) in the **`public`** folder. Vite copies `public/` into the root of `dist` when you build, so CNAME is deployed with every `npm run deploy`.  
   Content of `public/CNAME`: exactly one line:
   ```
   nextgentechcare.com
   ```

3. **One-time in GitHub:** In the repo **Settings → Pages**, re-enter your custom domain (`nextgentechcare.com`) if it was cleared.

After this, future `npm run deploy` runs will keep CNAME on the `gh-pages` branch, and the custom domain will no longer reset.

