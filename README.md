# Static RSS Reader Template

![Build Status](https://img.shields.io/badge/build-vite%207.x-9b5de5?style=for-the-badge) ![Deployment](https://img.shields.io/badge/deploy-github%20pages-00bbf9?style=for-the-badge) ![License](https://img.shields.io/badge/license-MIT-ffd60a?style=for-the-badge)

> A modern, static RSS aggregation template built with React and TypeScript. This project provides a reliable foundation for creating customizable news readers and content aggregators that can be deployed to any static hosting platform.

## Project Overview

This template offers a comprehensive solution for building static RSS feed readers with the following capabilities:

- **Static React Application**: Built using React 19 with TypeScript for type safety and modern development practices
- **Automated Feed Processing**: Utilizes `rss-parser` to fetch and process RSS feeds from multiple sources
- **Continuous Deployment**: Automatically deploys to GitHub Pages using GitHub Actions on both scheduled intervals and code updates
- **Dynamic Content Updates**: The `public/feeds.json` file is automatically refreshed through the `scripts/fetch-rss.js` script, ensuring content remains current
- **Enhanced Media Support**: YouTube videos automatically generate thumbnail images for improved visual presentation

## Technology Stack

This project leverages modern web development technologies to ensure optimal performance, maintainability, and developer experience:

| Component          | Technology                   | Purpose                                                           |
| ------------------ | ---------------------------- | ----------------------------------------------------------------- |
| Frontend Framework | React 19 with React Router 7 | Provides component-based UI architecture and client-side routing  |
| Styling System     | Tailwind CSS                 | Offers utility-first CSS framework with customization flexibility |
| Build Tooling      | Vite 7 with TypeScript       | Enables fast development builds and type-safe code compilation    |
| Data Processing    | Node.js RSS Parser           | Handles RSS feed fetching with robust timeout and error handling  |

## Getting Started

Follow these commands to set up and run the development environment:

```bash
npm install          # Install all project dependencies
npm run dev          # Refresh feeds and start Vite development server on localhost:5173
npm run build        # Generate feeds, compile TypeScript, and create production build in dist/
npm run preview      # Serve the production build locally for testing
npm run lint         # Run ESLint to check code quality and formatting
npm run fetch-feeds  # Manually refresh RSS feeds without starting the development server
```

### Development Workflow

The development server automatically refreshes RSS feeds before starting, ensuring you always work with current content. The build process includes TypeScript compilation, feed generation, and asset optimization for production deployment.

## Project Structure

The codebase follows a well-organized structure that separates concerns and promotes maintainability:

- **`src/main.tsx`** - Application entry point that bootstraps the React application
- **`src/App.tsx`** - Main application component containing routing configuration and layout structure
- **`src/components/`** - Reusable UI components including feed displays, theme toggles, and other interface elements
- **`src/pages/`** - Route-specific page components for different application screens
- **`src/hooks/`** - Custom React hooks for managing state, data fetching, and side effects
- **`public/`** - Static assets including the generated `feeds.json` file that contains processed RSS data

## Development Guidelines

### Code Quality Standards

- Ensure all code passes ESLint validation and builds successfully before committing changes
- Write descriptive commit messages using imperative mood (example: "Add feed pagination" rather than vague descriptions)
- Include screenshots in pull requests when making visual or user interface changes
- Document manual testing procedures in pull request descriptions, particularly for YouTube thumbnail functionality

### Testing Strategy

While automated tests are not currently configured, contributors are encouraged to implement testing using Vitest and React Testing Library. Test files should be placed in `src/__tests__/` and follow the naming convention `<Component>.test.tsx`.

## Deployment Process

### Automated Deployment

The project uses GitHub Actions for continuous deployment with the following triggers:

- **Push Events**: Automatic deployment occurs when changes are pushed to the main branch
- **Scheduled Updates**: RSS feeds are refreshed and the site is redeployed every four hours via cron job
- **Build Validation**: Failed builds prevent deployment, ensuring only functional code reaches production

### Monitoring and Maintenance

- The RSS fetching script includes robust timeout handling to prevent deployment failures
- Monitor GitHub Actions logs for any issues with feed processing or deployment
- Ensure the `scripts/fetch-rss.js` script remains resilient to network failures and malformed feed data

## Quick Start Summary

1. **Clone the repository** to your local development environment
2. **Run `npm run dev`** to start the development server with live RSS feed updates
3. **Make your changes** following the established coding standards and project structure
4. **Test thoroughly** including manual verification of RSS feed functionality
5. **Submit pull requests** with detailed descriptions and appropriate documentation

This template provides a solid foundation for building sophisticated RSS aggregation applications while maintaining simplicity and performance.
