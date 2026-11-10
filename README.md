# lbelegu.github.io

Personal portfolio for Leon Belegu, live at **[lbelegu.github.io](https://lbelegu.github.io/)**.

Plain HTML and CSS with no framework and no build step: GitHub Pages serves the files as they are.

## Structure

```
index.html                    Home page
work/data-rescue-portal.html  Case study
404.html                      Not-found page
css/styles.css                All styles (design tokens at the top)
assets/                       Photo, favicon and link-preview image
```

## Run locally

Open `index.html` in a browser, or serve the folder so absolute paths (used by `404.html`) resolve:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Notes

- Colors, type, spacing and radii are CSS custom properties in `:root` at the top of `css/styles.css`.
- Scroll animations use CSS scroll-driven animations (`animation-timeline: view()`); browsers without support show the page without motion.
- All animation is disabled for visitors with "reduce motion" turned on.
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts.
