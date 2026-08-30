Hi Everyone, 
# Abdul Aiyaz Mohammed — Portfolio

My personal developer portfolio, built as a single self-contained HTML page — no build step, no framework, deployed straight to Netlify.

🔗 **Live site:** (https://mohammed-aiyaz-portfolio.netlify.app/)

## About

This is a front-end developer portfolio designed around a "developer terminal" theme

## Features

- **Typewriter hero** — animated role text using jQuery
- **Live stats counters** — animated count-up on scroll (years of experience, key achievement metrics)
- **Skills** — organized by category (front-end, back-end/APIs, data & databases, tools) with Devicon icons
- **Experience timeline** — styled as a version-tagged changelog
- **Live GitHub stats** — pulled in real time via the GitHub public API (AJAX/`fetch`)
- **Contact form** — client-side validated with jQuery
- **Responsive navigation** — collapsible hamburger menu on mobile
- **Back-to-top button**
- **Fully responsive** — works across mobile, tablet, and desktop

## Tech Stack

- HTML5 / CSS3 (custom properties, Flexbox, Grid)
- Vanilla JavaScript
- [jQuery](https://jquery.com/) — form handling, typewriter effect
- [Devicon](https://devicon.dev/) — technology icons
- [Google Fonts](https://fonts.google.com/) — IBM Plex Mono / IBM Plex Sans
- GitHub REST API — live profile stats via `fetch`

## Project Structure

```
├── index.html      # HTML file
├── script.js        # Script File
├── style.css        # JavaScript File
├── aiyaz.jpg        # Profile image used in the nav
├── resume.pdf       # Downloadable resume (linked from the hero section)
└── README.md
```

## Running Locally

No build tools or dependencies to install — just open the file directly:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
open index.html   # or double-click it, or use a local server:
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

This site is deployed on [Netlify](https://www.netlify.com/):

1. Push this repo to GitHub
2. In Netlify, choose **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Leave the build command empty and set the publish directory to `/` (root)
5. Deploy — Netlify auto-redeploys on every push to `main`

## Customization

- Update `GITHUB_USERNAME` in the `<script>` section to your GitHub handle to show your live stats
- Replace `aiyaz.jpg` and `resume.pdf` with your own files (same filenames, or update the references in `index.html`)
- Edit the skills, experience, and education sections directly in the HTML — all content is plain markup, no data files or templating

## Contact

- Email: mohammadaiyaz99@gmail.com
- Phone: +971 52 449 4764
- LinkedIn: [linkedin.com/in/aiyaz-mohammed-abdul](https://www.linkedin.com/in/aiyaz-mohammed-abdul-98a117147)

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't reuse the content or design as-is for your own portfolio.
