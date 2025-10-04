import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';

const feedSources = [
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage' }
];

async function fetchAllFeeds() {
  const parser = new Parser({
    customFields: {
      item: ['creator', 'media:group']
    },
    timeout: 10000 // 10 second timeout
  });

  console.log('🔄 Fetching RSS feeds...');
  const allItems = [];

  for (const source of feedSources) {
    try {
      console.log(`📰 Fetching ${source.name}...`);

      // Add timeout wrapper
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 15000)
      );

      const fetchPromise = parser.parseURL(source.url);
      const feed = await Promise.race([fetchPromise, timeoutPromise]);

      const sourceItems = feed.items.map(item => {
        const isYouTube = item.link?.includes('youtube.com');
        let thumbnail = null;
        let videoId = null;

        if (isYouTube) {
          // Extract video ID from URL (handles both /watch?v= and /shorts/ formats)
          videoId = item.link.match(/(?:v=|shorts\/)([^&\?]+)/)?.[1];

          // Try to get thumbnail from media:group first, fallback to constructed URL
          if (item['media:group']?.['media:thumbnail']?.[0]?.$?.url) {
            thumbnail = item['media:group']['media:thumbnail'][0].$.url;
          } else if (videoId) {
            thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }
        }

        return {
          title: item.title || 'No title',
          link: item.link || '#',
          pubDate: item.pubDate || new Date().toISOString(),
          contentSnippet: item.contentSnippet || item.content || '',
          creator: item.creator || source.name,
          source: source.name,
          thumbnail: thumbnail,
          videoId: videoId,
          isVideo: isYouTube
        };
      });

      allItems.push(...sourceItems);
      console.log(`✅ Fetched ${sourceItems.length} items from ${source.name}`);
    } catch (error) {
      console.warn(`❌ Failed to fetch ${source.name}:`, error.message);
    }
  }  // Sort by date (newest first)
  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  // Keep all items for pagination
  const finalItems = allItems;

  // Ensure public directory exists
  await fs.mkdir('public', { recursive: true });

  // Write to public directory so it's available at runtime
  await fs.writeFile(
    path.join('public', 'feeds.json'),
    JSON.stringify(finalItems, null, 2)
  );

  console.log(`✅ Saved ${finalItems.length} items to public/feeds.json`);
  return finalItems;
}

// Run the script
fetchAllFeeds()
  .then(() => {
    console.log('🏁 RSS fetch completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 RSS fetch failed:', error);
    process.exit(1);
  });
