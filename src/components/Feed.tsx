import { useState, useEffect } from "react";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  creator?: string;
  source?: string;
  thumbnail?: string;
  videoId?: string;
  isVideo?: boolean;
}

const ITEMS_PER_PAGE = 24;

const Feed = () => {
  const [allItems, setAllItems] = useState<FeedItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<FeedItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);
  const [modalVideoTitle, setModalVideoTitle] = useState<string>("");

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        setLoading(true);

        // Load pre-fetched RSS data
        const response = await fetch(`${import.meta.env.BASE_URL}feeds.json`);

        if (!response.ok) {
          throw new Error("Failed to load news feeds");
        }

        const feedData: FeedItem[] = await response.json();
        setAllItems(feedData);
        setFilteredItems(feedData);
        setError(null);
      } catch (err) {
        setError(
          "Failed to load news feeds. The RSS data may not be available."
        );
        console.error("Feed loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFeeds();
  }, []);

  // Filter items based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter((item) => {
        const searchLower = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.contentSnippet?.toLowerCase().includes(searchLower) ||
          item.source?.toLowerCase().includes(searchLower) ||
          item.creator?.toLowerCase().includes(searchLower)
        );
      });
      setFilteredItems(filtered);
    }
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery, allItems]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Unknown date";
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination (responsive)
  const getPageNumbers = () => {
    const pages = [];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const maxVisiblePages = isMobile ? 3 : 5;
    const sidePages = isMobile ? 1 : 2;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - sidePages);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Modal functions
  const openVideoModal = (videoId: string, title: string) => {
    setModalVideoId(videoId);
    setModalVideoTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setModalVideoId(null);
    setModalVideoTitle("");
    document.body.style.overflow = "unset";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading news feeds...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 font-medium">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (allItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No news items found.</p>
      </div>
    );
  }

  if (filteredItems.length === 0 && searchQuery) {
    return (
      <div>
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto sm:mx-0 md:mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No articles found matching "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto sm:mx-0 md:mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <p className="text-gray-600 dark:text-gray-300">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredItems.length)} of{" "}
          {filteredItems.length} articles
          {searchQuery && ` (filtered from ${allItems.length})`}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.map((item, index) => (
          <article
            key={`${item.link}-${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-200 overflow-hidden"
          >
            {/* YouTube Thumbnail */}
            {item.isVideo && item.thumbnail && (
              <div
                className="relative aspect-video bg-gray-100 dark:bg-gray-700 cursor-pointer"
                onClick={() =>
                  item.videoId && openVideoModal(item.videoId, item.title)
                }
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition-all">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  VIDEO
                </div>
              </div>
            )}
            <div className="p-6">
              <h3
                className={`font-bold text-lg mb-2 line-clamp-2 ${
                  item.isVideo ? "mt-0" : ""
                }`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </a>
              </h3>

              {item.contentSnippet && (
                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 text-sm">
                  {item.contentSnippet.length > 150
                    ? `${item.contentSnippet.substring(0, 150)}...`
                    : item.contentSnippet}
                </p>
              )}

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {item.source || item.creator}
                  </span>
                  {item.isVideo && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      VIDEO
                    </span>
                  )}
                </div>
                <time dateTime={item.pubDate}>{formatDate(item.pubDate)}</time>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="px-2 sm:px-3 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">‹</span>
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && goToPage(page)}
                disabled={page === "..."}
                className={`px-2 sm:px-3 py-2 rounded-md text-sm transition-colors min-w-[2rem] sm:min-w-[2.5rem] ${
                  page === currentPage
                    ? "bg-blue-600 dark:bg-blue-600 text-white"
                    : page === "..."
                    ? "text-gray-400 dark:text-gray-500 cursor-default"
                    : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="px-2 sm:px-3 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">›</span>
          </button>
        </div>
      )}

      {/* Video Modal */}
      {modalVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                {modalVideoTitle}
              </h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title={modalVideoTitle}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
