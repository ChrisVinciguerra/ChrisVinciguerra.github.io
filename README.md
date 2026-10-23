# chrisv.us

Personal website of Christopher Vinciguerra — a single-page, text-first typographic résumé. Hand-typeset in [Newsreader](https://fonts.google.com/specimen/Newsreader) on a paper-colored page, with an automatic dark ("lamplight") palette and a print stylesheet so it prints like the résumé it is.

Live at [chrisv.us](https://chrisv.us).

## Tech Stack

- **React 19** with TypeScript
- **Vite** for dev server and builds
- **Tailwind CSS 4** (CSS-first config via `@theme` in `src/index.css`)
- No animation, icon, or component libraries — the few flourishes are plain CSS and inline SVG

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── assets/Chris_Vinciguerra_resume.pdf
├── src/
│   ├── App.tsx             # The entire page: header, sections, footer
│   ├── data/portfolio.ts   # All content: bio, experience, projects, skills
│   ├── index.css           # Theme tokens, dark mode, animations, print styles
│   └── main.tsx            # Entry point
├── index.html              # Meta tags, font loading
└── CNAME                   # Custom domain for GitHub Pages
```

## Development

Requires Node.js 20+.

```bash
npm install
npm run dev        # dev server
npm run build      # type-check + production build to dist/
npm run lint       # eslint
npm run preview    # serve the production build locally
```

## Updating Content

All content lives in `src/data/portfolio.ts` — edit `personalInfo`, `experience`, `projects`, `education`, `skills`, or `leadership` and the page re-renders accordingly. The downloadable PDF is at `public/assets/Chris_Vinciguerra_resume.pdf`.

Design tokens (paper, ink, accent colors and fonts) are defined in the `@theme` block of `src/index.css`, with dark-mode overrides in the `prefers-color-scheme: dark` media query below it.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `CNAME` file keeps the custom domain pointed at the deployment. See `DEPLOYMENT.md` for details.

## License

MIT

## Author

**Christopher Vinciguerra**
- Email: christophervin1@gmail.com
- LinkedIn: [linkedin.com/in/chris-vinciguerra/](https://linkedin.com/in/chris-vinciguerra/)
- GitHub: [github.com/ChrisVinciguerra](https://github.com/ChrisVinciguerra)
