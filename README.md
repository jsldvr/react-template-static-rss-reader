# News

A modern news aggregator built with React, Vite, and Tailwind CSS. Fetches and displays the latest articles from 24+ RSS feeds including NY Times, CBS, NBC, Politico, and more.

## Features

- 📱 **Responsive Design** - Mobile-first responsive layout with Tailwind CSS v4
- 🔄 **Build-time Feeds** - Fetches latest articles from 24+ RSS sources at build time
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean card-based design with smooth hover effects
- 📰 **Multiple Sources** - Aggregates 670+ articles from major news outlets
- 🌙 **Dark Mode** - System-aware light/dark theme with manual toggle
- 📄 **Pagination** - Smart pagination with 24 articles per page
- 🎯 **Local Fonts** - Newsreader font served locally (zero CDN dependencies)

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

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jsldvr/news.git
cd news
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://jsldvr.github.io/news/`

### Manual Deployment

```bash
npm run build
# Upload the contents of the 'dist' folder to your hosting provider
```

## Configuration

### RSS Feed Sources

RSS feeds are configured in `scripts/fetch-rss.js` and fetched at build time. The script includes 24+ sources covering:

- **Politics**: NY Times Politics, RealClearPolitics, Politico, The Hill
- **Technology**: TechCrunch, The Verge, Hacker News, NY Times Technology
- **Business**: NY Times Business, Business Insider
- **General News**: CBS, NBC, Yahoo News, NY Post, Newsweek
- **Conservative**: National Review, Breitbart, The Blaze, The Federalist
- **Specialty**: Military.com, The Firearm Blog, Jonathan Turley

To add or modify sources, edit the `feeds` array in `scripts/fetch-rss.js`.

### Tailwind CSS

Customize the design by editing `tailwind.config.js` or adding custom styles to `src/index.css`.

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

## Acknowledgments

- RSS feeds provided by NY Times, CBS, NBC, Politico, TechCrunch, and 20+ other sources
- Newsreader font by Production Type (served locally)
- Built with React 19, Vite 7, and Tailwind CSS v4
