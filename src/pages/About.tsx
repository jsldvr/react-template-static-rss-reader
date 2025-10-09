const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Howdy, I'm Jorge and this is my private RSS aggregator. It's a
            React-based news reader that aggregates content from 24+ diverse
            sources across politics, technology, business, and more. Built with
            React 19, Vite, and Tailwind CSS, it features real-time search,
            mobile-responsive pagination, and dark mode support.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you'd like to try something similar, run the following prompt to
            scaffold your own RSS reader:
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">
              "Create a modern RSS aggregator using React 19, TypeScript, Vite,
              and Tailwind CSS. Include real-time search functionality,
              mobile-responsive pagination, dark mode support, and build-time
              RSS parsing from multiple news sources. Set up GitHub Pages
              deployment with GitHub Actions CI/CD pipeline."
            </code>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 italic">
              The links and content aggregated on this site do not express my
              personal opinions or endorsements. I simply like having access to
              all sides of the story across a diverse range of topics and
              sources. This platform serves as a neutral aggregation tool for
              staying informed from multiple perspectives.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Technical Details
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>• React 19 with TypeScript</li>
              <li>• Vite build system</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Build-time RSS parsing</li>
              <li>• GitHub Pages deployment</li>
              <li>• Mobile-first responsive design</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              News Sources
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Aggregating from 24+ sources including NY Times, CBS, NBC,
              Politico, TechCrunch, The Verge, Hacker News, and many more across
              the political and technological spectrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
