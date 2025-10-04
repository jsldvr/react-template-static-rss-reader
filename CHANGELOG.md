# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.0] - 2025-10-04

Simplified RSS feed aggregation for improved performance and maintainability.

**Changed**

- Reduced RSS feeds from 33 sources to single Hacker News feed
- RSS fetch time significantly improved (now fetches from 1 source vs 33)
- Streamlined content focus to tech-related news from Hacker News

**Removed**

- 32 RSS feed sources including news outlets, YouTube channels, and political sources
- Multiple timeout-prone feed sources that could cause build failures
- Complex multi-source aggregation logic overhead

**Technical**

- Updated `feedSources` array in `scripts/fetch-rss.js` to single entry
- Maintained all existing functionality with simplified data source
- Preserved video handling, thumbnail extraction, and content formatting
- Build and development processes now run faster and more reliably

## [1.7.2] - 2025-09-28

Enhanced video experience with modal playback and footer improvements.

**Added**

- Video modal functionality for YouTube thumbnails
- Click-to-play modal overlay for video content
- Amazon Associates affiliate link in footer
- CNN YouTube feed added to RSS sources

**Changed**

- Video thumbnails now open in modal instead of navigating to YouTube
- Header background color removed for cleaner appearance
- Play button SVG margin (`ml-1`) removed for better centering

**Technical**

- Modal state management with body scroll locking
- YouTube iframe embedding with autoplay support
- Responsive modal design with dark mode compatibility
- Proper accessibility attributes for modal interactions

## [1.7.1] - 2025-09-27

Fixed dark mode regression and added comprehensive agent documentation.

**Fixed**

- Dark mode functionality restored after YouTube thumbnails update
- Tailwind CSS `dark:` utilities now respond correctly to theme changes
- Body background color switching fixed for all theme modes (light/dark/system)
- Theme toggle cycling restored (light → dark → system)

**Added**

- AGENTS.md with comprehensive dark mode and performance guidelines
- Code protection documentation for critical CSS directives
- Inline comments warning against removal of required Tailwind variant
- Detailed troubleshooting guide for theme functionality

**Technical**

- Restored required `@variant dark (.dark &);` directive in src/index.css
- Maintained performance optimizations (font preloading, critical CSS)
- Preserved theme-aware body background rules
- Added editor warning explanations for Tailwind v4 at-rules

## [1.7.0] - 2025-09-27

Added YouTube video thumbnails and visual enhancements for video content.

**Added**

- YouTube video thumbnail extraction from RSS feeds and direct URL construction
- Visual play button overlay for YouTube video thumbnails
- Video indicator badges for YouTube content in source display
- Thumbnail fallback handling with error recovery
- Enhanced article cards with responsive image layout
- Support for both YouTube `/watch?v=` and `/shorts/` URL formats

**Enhanced**

- RSS parser now extracts `media:group` data for YouTube thumbnail URLs
- Feed items include `thumbnail`, `videoId`, and `isVideo` properties
- Article cards differentiate between video and text content visually
- Improved visual hierarchy with consistent thumbnail dimensions (192px height)

**DMCA Compliant**

- Only YouTube thumbnails are used (official API, embedding-friendly)
- No local hosting or caching of copyrighted news images
- Direct linking to YouTube's official thumbnail CDN

## [1.6.0] - 2025-09-27

Fixed Cumulative Layout Shift (CLS) issues and improved Core Web Vitals performance.

**Added**

- Font preloading for Newsreader fonts to prevent layout shifts
- Inlined critical font CSS in HTML head for immediate font availability
- Stable footer layout with minimum height constraints
- Flexbox layout structure to prevent content shifting
- robots.txt file to prohibit search engine indexing
- Meta robots tag with noindex, nofollow, noarchive, nosnippet directives

**Changed**

- Moved font loading from CSS import to inline HTML for better performance
- Footer positioning changed from margin-based to flexbox auto-margin
- App container now uses flexbox layout for stable content positioning
- Main content area grows to fill available space with flex-1

**Fixed**

- Cumulative Layout Shift (CLS) score reduced from 0.261 to minimal
- Font loading no longer causes Flash of Unstyled Text (FOUT)
- Footer no longer shifts during page load
- Search container layout stability improved

**Performance**

- Preloaded critical font files (400, 500, 700 weights)
- Eliminated double font loading
- Improved Core Web Vitals scores
- Reduced layout shift impact from footer (was 0.259)

## [1.5.0] - 2025-09-27

Added About and Privacy Policy pages with client-side routing and improved navigation.

**Added**

- About page with project description and technical details
- Privacy Policy page with comprehensive privacy information
- React Router for client-side navigation
- Navigation links in header and footer
- Disclaimer about content neutrality and diverse perspectives
- Code prompt for users to create similar RSS aggregators
- Professional page layouts with responsive cards and sections

**Changed**

- Header now includes navigation links to About and Privacy pages
- Footer background color removed for cleaner appearance
- Footer now includes additional navigation links
- App restructured with separate page components (Home, About, PrivacyPolicy)
- Navigation with hover effects and proper accessibility

**Dependencies**

- Added react-router-dom for client-side routing
- Added @types/react-router-dom for TypeScript support

## [1.4.0] - 2025-09-27

Added search functionality and improved mobile pagination experience.

**Added**

- Real-time search functionality to filter articles by title, content, source, or creator
- Search input with clear button and search icon
- "No results found" state with clear search option
- Mobile-responsive pagination with reduced visible page numbers on small screens
- Compact pagination buttons with arrow symbols on mobile devices
- Filtered article count display showing search results vs total articles

**Changed**

- Pagination now works with filtered search results and resets to page 1 on search
- Mobile pagination shows maximum 3 pages instead of 5 for better touch interaction
- Pagination buttons use smaller padding and responsive text on mobile
- Stats display now shows filtered vs total article counts when searching
- Page navigation optimized for mobile with larger touch targets

**Fixed**

- Pagination overflow issues on mobile devices
- Touch interaction improvements for pagination controls
- Responsive layout for stats and controls section

## [1.3.0] - 2025-09-24

Added comprehensive dark mode support with system theme detection and manual toggle.

**Added**

- Light/dark mode toggle with system preference detection
- Theme context provider for application-wide theme management
- Theme persistence via localStorage
- Responsive theme toggle button with icons and labels
- System theme change listener for automatic updates
- Dark mode styling for all UI components (header, articles, pagination, footer)
- Smooth theme transitions across all elements

**Changed**

- All components updated with dark mode variants using Tailwind's dark: prefix
- Article cards now have proper dark mode backgrounds and text colors
- Navigation and pagination controls adapt to current theme
- Theme hook converted to React Context pattern for better state management
- Updated Tailwind CSS v4 configuration for proper dark mode support
- Removed excessive padding from root element for better layout

**Fixed**

- Theme toggle now properly updates UI state and DOM classes
- Removed awkward borders from article grid containers
- Theme state properly synchronized between hook and DOM
- Tailwind v4 dark mode class generation and CSS processing
- Cleaned up debug logging from theme components## [1.2.0] - 2025-09-24

Added local Google Fonts integration and improved build reliability.

**Added**

- Newsreader Google Font downloaded locally (zero CDN dependencies)
- Font loading via local CSS files in `public/fonts/`
- Timeout protection for RSS feed fetching (10s parser + 15s Promise timeout)
- Explicit process exit handling to prevent build hangs
- Proper error handling with exit codes for RSS fetch script
- Global font declaration in CSS for consistent typography

**Changed**

- Tailwind CSS configured to use Newsreader as default sans-serif font
- RSS fetch script now properly terminates after completion
- All typography now uses Newsreader font family
- Font CSS paths updated to use absolute paths for proper loading

**Fixed**

- Build process hanging during RSS feed fetching
- Font loading without external CDN dependencies
- Script termination issues in Node.js environment
- Newsreader font rendering issues with proper path resolution

## [1.1.0] - 2025-09-24

Expanded news coverage and added pagination for hundreds of articles.

**Added**

- Pagination system with 24 articles per page
- Support for 24+ RSS sources (670+ articles total)
- Article count display and page navigation
- Smart pagination with ellipsis for large page counts
- Smooth scroll to top when changing pages
- Additional RSS sources: RealClearPolitics, NY Post, Politico, Yahoo News, CBS, NBC, National Review, The Hill, Breitbart, The Blaze, The Federalist, Business Insider, Military.com, Jonathan Turley, NY Times (Politics/Business/Technology), The Firearm Blog, Newsweek

**Changed**

- RSS fetcher now collects all articles instead of limiting to 10 per source
- Updated app description to reflect broader news coverage beyond tech
- Footer now mentions 24+ sources instead of just 3
- Copyright year updated to 2025

**Fixed**

- Removed artificial 30-article limit for better news coverage

## [1.0.0] - 2025-09-24

Initial release of React News - a modern RSS feed aggregator.

**Added**

- Initial React News application with Vite build system
- RSS feed aggregation from TechCrunch, Hacker News, and The Verge
- Responsive card-based layout using Tailwind CSS v4
- Build-time RSS parsing for optimal performance
- GitHub Pages deployment workflow with GitHub Actions
- TypeScript support with strict type checking
- Mobile-first responsive design
- Loading states and error handling
- Automatic feed refresh on build/dev start

**Technical Details**

- **Frontend**: React 19 + TypeScript + Vite 7.1.7
- **Styling**: Tailwind CSS v4 with PostCSS and autoprefixer
- **RSS Parsing**: rss-parser library (build-time only)
- **Deployment**: GitHub Actions workflow for GitHub Pages
- **Development**: Hot reload with Vite dev server

**Features**

- Aggregates up to 30 latest articles from multiple sources
- Clean card-based UI with hover effects
- Responsive grid layout (1/2/3 columns based on screen size)
- Publication dates and source attribution
- External link handling with proper security attributes
- Build-time feed fetching eliminates CORS issues
- Conditional base path for development vs production

**Infrastructure**

- GitHub Actions CI/CD pipeline
- Automatic dependency caching
- Production builds optimized for GitHub Pages
- Static JSON feed data for fast loading
- Error handling for failed RSS fetches

**Configuration Files**

- `vite.config.ts` - Vite configuration with conditional base paths
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `scripts/fetch-rss.js` - Build-time RSS fetching script

**Scripts**

- `npm run dev` - Start development server with fresh RSS data
- `npm run build` - Build for production with RSS data fetch
- `npm run fetch-feeds` - Manually fetch RSS feeds
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Known Limitations**

- RSS feeds are fetched at build time, not real-time
- Limited to 30 total articles across all sources
- Requires internet connection during build process
- Feed parsing errors are logged but don't fail the build
