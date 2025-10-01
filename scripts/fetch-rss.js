import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';

const feedSources = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' },
  { name: 'RealClearPolitics', url: 'https://feeds.feedburner.com/realclearpolitics/qlMj' },
  { name: 'New York Post', url: 'https://nypost.com/rss' },
  { name: 'Politico Congress', url: 'https://rss.politico.com/congress.xml' },
  { name: 'Yahoo News', url: 'https://news.yahoo.com/rss' },
  { name: 'CBS News', url: 'https://www.cbsnews.com/latest/rss/main' },
  { name: 'NBC News', url: 'https://feeds.nbcnews.com/nbcnews/public/news' },
  { name: 'National Review', url: 'https://www.nationalreview.com/feed/' },
  { name: 'The Hill', url: 'https://thehill.com/rss/syndicator/19109' },
  { name: 'Breitbart', url: 'https://feeds.feedburner.com/breitbart' },
  { name: 'The Blaze', url: 'https://www.theblaze.com/rss' },
  { name: 'The Federalist', url: 'https://thefederalist.com/feed/' },
  { name: 'The Epoch Times', url: 'https://www.theepochtimes.com/feed' },
  { name: 'Business Insider', url: 'https://www.businessinsider.com/rss' },
  { name: 'Military.com', url: 'https://www.military.com/rss-feeds/content?keyword=headlines&channel=news&type=news' },
  { name: 'Jonathan Turley', url: 'https://jonathanturley.org/rss' },
  { name: 'NY Times Politics', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml' },
  { name: 'NY Times Business', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml' },
  { name: 'NY Times Technology', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml' },
  { name: 'The Firearm Blog', url: 'https://www.thefirearmblog.com/blog/feed/' },
  { name: 'AOL News', url: 'https://www.aol.com/rss' },
  { name: 'Newsweek', url: 'https://www.newsweek.com/rss' },
  { name: 'Marques Brownlee', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCBJycsmduvYEL83R_U4JriQ' },
  { name: 'Richard Gene The Fishing Machine', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCzGaX29DR0VlH2tUCODFixg' },
  { name: 'Funniest Animals Ever', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCP83iCyLq0Q5VdaQKp0r7kg' },
  { name: 'Astrum', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC-9b7aDP6ZN0coj9-xFnrtw' },
  { name: 'ABC News', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCBi2mrWuNuyYy4gbM6fU18Q' },
  { name: 'CBS News', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC8p1vwvWtl6T73JiExfWs1g' },
  { name: 'NBC News', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCeY0bbntWzzVIaj2z3QigXg' },
  { name: 'Fox News', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCXIJgqnII2ZOINSWNOGFThA' },
  { name: 'CNN', url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCupvZG-5ko_eiXAupbDfxWw' },
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
