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
| **GitHub Pages** | Push the repo, then in **Settings → Pages** choose “Deploy from a branch” and set the branch to `main` and folder to `/ (root)`. Use a GitHub Action to run `npm run build` and publish the `dist` contents to the `gh-pages` branch (or use the `gh-pages` package). |
| **AWS S3 + CloudFront** | Upload the contents of `dist` to an S3 bucket, enable static website hosting, and optionally put CloudFront in front for HTTPS and caching. |
| **Any web host** | Upload the contents of `dist` via FTP/SFTP to your host’s `public_html` or `www` directory. |

**3. Custom domain and HTTPS**

- **Netlify / Vercel**: Add your domain in the dashboard; they provide free HTTPS.  
- **S3/CloudFront**: Use Route 53 (or your DNS) to point the domain to CloudFront and use an ACM certificate for HTTPS.  
- **Traditional host**: Configure the domain in the host’s control panel and enable SSL if offered.

**Quick test before deploy**

To confirm the packaged site works locally:

```bash
npm run preview
```

Then open the URL shown (e.g. `http://localhost:4173`) and click through the site.

