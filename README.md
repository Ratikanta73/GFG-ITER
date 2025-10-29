Premium Green Social Links Card

A responsive, accessible link-in-bio style card with a premium green theme and micro-animations. Works great on mobile and desktop.

Quick start
- Open `index.html` directly in your browser or deploy the folder with any static host (GitHub Pages, Netlify, Vercel).

Customize your profile
- Title and subtitle: Edit the heading and paragraph inside the `header.profile` block in `index.html`.
- Avatar: Replace the `img` `src` with your image URL.
- Links: Duplicate one of the `<a class="link">` items under `nav.links` and change the `href` and text. Icons are inline SVG; swap as needed.
- Theme: Click “Toggle theme” to switch Light/Dark. Preference is saved in `localStorage`.

Colors
- Tokens live in `styles.css` under `:root` (`--green-50` … `--green-900`). Key ones: `--green-500` (accent), `--bg`, `--card`, `--text`.

Micro-animations
- Animated conic-gradient border on the card
- Hover lift and subtle saturation on links
- Click/tap ripple feedback (from `script.js`)
- Focus-visible rings for keyboard users
- Honors `prefers-reduced-motion`

Notes
- No build tools; purely static assets
- Fonts: Inter (Google Fonts)
- Favicon is inline SVG; replace if desired


