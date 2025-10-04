import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
        {/* Header */}
        <header className="shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-6">
                <Link
                  to="/"
                  className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  News
                </Link>
                <nav className="flex space-x-4">
                  <Link
                    to="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/privacy"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* Footer - fixed height to prevent layout shift */}
        <footer className="border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500 dark:text-gray-400 text-sm min-h-[120px] flex flex-col justify-center">
              {/* Navigation Links */}
              <div className="flex justify-center space-x-6 mb-4">
                <Link
                  to="/about"
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              
              {/* Template Information */}
              <p className="mb-2 font-medium">
                RSS Aggregator Template
              </p>
              
              {/* Tech Stack */}
              <p className="mb-3">Built with React, Vite, and Tailwind CSS</p>
              
              {/* Template Action */}
              <div className="text-xs">
                <a
                  href="https://github.com/jsldvr/react-rss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Fork this repository to create your own news aggregator
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
