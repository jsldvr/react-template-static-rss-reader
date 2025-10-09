const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Last updated: September 27, 2025
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Collection
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This RSS aggregator is a static website that does not collect,
                store, or process any personal data. All RSS content is fetched
                at build time and served as static files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Local Storage
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The only data stored locally in your browser is your theme
                preference (light/dark mode) using localStorage. This
                information never leaves your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                External Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This site contains links to external news sources. When you
                click these links, you will be redirected to the respective news
                websites, which have their own privacy policies and terms of
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Hosting
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This website is hosted on GitHub Pages. GitHub may collect
                certain information as outlined in their privacy policy. We do
                not have access to any analytics or visitor data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                No Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This website does not use cookies, tracking pixels, or any other
                tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Contact
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please
                contact via GitHub issues on the project repository.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
