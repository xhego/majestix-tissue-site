# Majestix Tissue

Modern Angular landing page for Majestix Tissue Manufacturing.

## Local development

```bash
npm install
npm start
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push the `main` branch to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.

The workflow builds the app with:

```bash
npm run build:pages
```

The published URL should be:

```text
https://umhlubi.github.io/majestix-tissue/
```
