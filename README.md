# Portfolio

Static portfolio site. No build step, no dependencies.

## Structure

    my-portfolio/
    ├── index.html
    ├── style.css
    ├── script.js
    └── assets/
        ├── favicon.svg
        ├── grain.svg
        ├── emblem.svg
        └── skyline.svg

## Run locally

Open index.html in a browser, or serve the folder:

    npx serve .

## Deploy

All paths are relative, so the folder can be hosted anywhere static files are served.

GitHub Pages: push the folder contents to a repository, then Settings > Pages > Deploy from branch (main, root).

Netlify: drag the my-portfolio folder onto app.netlify.com/drop.

Vercel: run `npx vercel` inside the folder, or import the repository. Framework preset: Other. No build command.

## Notes

Fonts (Space Grotesk, JetBrains Mono) load from Google Fonts. The page falls back to system fonts if they are blocked.
