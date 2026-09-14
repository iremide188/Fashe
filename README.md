# Fashe

A fashion e-commerce front-end built with plain HTML, CSS and JavaScript — no build step required.

## Pages

- `index.html` — main store page (home)
- `shop.html` — shop page

## Structure

```
├── index.html       # main store page (was fashe.html)
├── shop.html        # shop page
├── style1.css
├── css/
│   ├── style.css          # main stylesheet
│   └── style-shop.css     # shop page stylesheet
├── js/
│   └── script.js
├── image/                 # all site images
└── fontawesome-free-6.1.1-web/  # bundled Font Awesome 6
```

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server
```

## GitHub Pages

To publish via GitHub Pages: repo **Settings → Pages → Source: `main` branch, `/ (root)`**. The site will be available at `https://iremide188.github.io/Fashe/`.

All asset paths are relative, so the site works both locally and on GitHub Pages.
