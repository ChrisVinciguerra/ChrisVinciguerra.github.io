# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment. Here's how it works:

### 1. Push to Main Branch
When you push changes to the `main` branch, GitHub Actions will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

### 2. GitHub Repository Settings
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will handle the rest automatically

### 3. Custom Domain (Optional)
If you want to use a custom domain (like chrisv.us):
1. In the **Pages** settings, enter your domain in the **Custom domain** field
2. The `CNAME` file will be automatically created
3. Update your DNS settings to point to `yourusername.github.io`

## Manual Deployment

If you prefer manual deployment:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   ./deploy.sh
   ```

3. **Upload to GitHub:**
   - Push the `dist` folder contents to a `gh-pages` branch
   - Or use GitHub Pages with the `dist` folder as source

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify Vite configuration

### Deployment Issues
- Check GitHub Actions logs for build errors
- Ensure repository has Pages enabled
- Verify custom domain DNS settings if applicable

### Asset Loading Issues
- Check that all assets are in the `public` folder
- Verify paths in `src/data/portfolio.ts`
- Ensure Vite base path is set correctly

## URLs

- **GitHub Pages**: `https://yourusername.github.io`
- **Custom Domain**: `https://chrisv.us` (if configured)

## File Structure for Deployment

```
dist/
├── index.html
├── CNAME
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── Chris Vinciguerra Resume 7-25-25.pdf
```

This structure will be automatically created by the GitHub Actions workflow. 