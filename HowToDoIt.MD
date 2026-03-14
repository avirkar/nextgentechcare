# Deployment Guide: GitHub Pages

This document outlines the steps taken to deploy the **Next Gen Tech Care** website using Node.js and the GitHub Pages deployment utility.

---

## 🛠 Prerequisites

- **Node.js** installed on macOS.
- **GitHub Repository** set up with your source code on the `main` branch.
- **Custom Domain** (`nextgentechcare.com`) configured in Hostinger.

---

## 📦 Step 1: Installing the Deployment "Plugin"

GitHub Pages natively hosts static files but doesn't know how to "find" them inside a Node.js project structure. To solve this, we use the `gh-pages` utility as a deployment plugin.

1. **Install the utility:**
   ```bash
   npm install gh-pages --save-dev