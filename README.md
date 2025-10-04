# React RSS

A modern, customizable RSS aggregator template built with React, Vite, and Tailwind CSS. Create your own news aggregator by configuring RSS feeds and deploying to any platform.

## Features

- 📱 **Responsive Design** - Mobile-first responsive layout with Tailwind CSS v4
- 🔄 **Build-time Feeds** - Fetches latest articles from configurable RSS sources at build time
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean card-based design with smooth hover effects
- 📰 **Customizable Sources** - Add any RSS feeds you want to aggregate
- 🌙 **Dark Mode** - System-aware light/dark theme with manual toggle
- 📄 **Pagination** - Smart pagination for unlimited articles
- 🎯 **Local Fonts** - Newsreader font served locally (zero CDN dependencies)
- 🛠️ **Easy Customization** - Simple configuration for feeds, styling, and deployment

## Why Use This Template?

- **Zero CORS Issues** - Build-time RSS parsing eliminates cross-origin problems
- **SEO Friendly** - Static generation for better search indexing
- **Performance Optimized** - Local fonts, dark mode, responsive design
- **Production Ready** - Includes CI/CD, error handling, and accessibility features
- **Highly Customizable** - Easy to modify feeds, styling, and functionality

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS v4 with PostCSS
- **RSS Parsing**: rss-parser library (build-time only)
- **Fonts**: Newsreader (local)
- **Deployment**: GitHub Pages with GitHub Actions

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Fork this repository to your GitHub account

2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/react-rss.git
cd react-rss
```

3. Install dependencies:

```bash
npm install
```

4. Configure your RSS feeds (see [Configuration](#configuration) section)

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages (Recommended)

This template is pre-configured for GitHub Pages deployment:

1. Push your code to the `main` branch
2. Enable GitHub Pages in your repository settings
3. GitHub Actions will automatically build and deploy your site
4. Your site will be available at `https://YOUR_USERNAME.github.io/react-rss/`

### Other Platforms

The build output in the `dist` folder can be deployed to any static hosting platform:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your repository for zero-config deployment  
- **Cloudflare Pages**: Connect via GitHub integration
- **Manual**: Upload `dist` folder contents to any web server

```bash
npm run build
# Upload the contents of the 'dist' folder to your hosting provider
```

## Configuration

### RSS Feed Sources

RSS feeds are configured in `scripts/fetch-rss.js` and fetched at build time. The template includes a sample Hacker News feed to get you started.

**To customize your feeds:**

1. Open `scripts/fetch-rss.js`
2. Edit the `feedSources` array with your desired RSS feeds:

```javascript
const feedSources = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'BBC News', url: 'http://feeds.bbci.co.uk/news/rss.xml' },
  { name: 'Reuters', url: 'https://feeds.reuters.com/reuters/topNews' },
  // Add more feeds here
];
```

**Popular RSS Feed Categories:**
- **Technology**: TechCrunch, The Verge, Ars Technica, Hacker News
- **News**: BBC, Reuters, AP News, NPR
- **Business**: Financial Times, Wall Street Journal, Bloomberg
- **Science**: Science Daily, Nature, Scientific American

**Finding RSS Feeds:**
- Look for RSS/XML icons on websites
- Try adding `/feed`, `/rss`, or `/feed.xml` to website URLs
- Use tools like RSS Feed Finder or Feedly's search

### Styling Customization

**Tailwind CSS:**
- Edit `tailwind.config.js` for theme customization
- Add custom styles in `src/index.css`
- Modify component styling in individual `.tsx` files

**Color Themes:**
- Light/dark mode is built-in
- Customize colors in Tailwind config
- Theme switching handled automatically

**Layout:**
- Adjust pagination settings in `Feed.tsx`
- Modify card layouts and grid responsive breakpoints
- Customize header and footer in `App.tsx`

## Architecture

This project uses **build-time RSS parsing** to avoid CORS issues and improve performance:

- RSS feeds are fetched during the build process using Node.js
- Articles are saved to `public/feeds.json` as static data
- The React app loads pre-parsed articles from JSON
- No runtime RSS parsing or CORS proxy needed
- Feeds are refreshed on each deployment

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Template Usage

This is a template repository - you're encouraged to:

- Fork it to create your own RSS aggregator
- Customize the feeds for your needs
- Deploy it to your preferred platform
- Contribute improvements back to the template

## Acknowledgments

- Newsreader font by Production Type (served locally)
- Built with React 19, Vite 7, and Tailwind CSS v4
- RSS parsing powered by rss-parser library
