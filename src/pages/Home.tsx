import Feed from "../components/Feed";

const Home = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Latest News
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Stay updated with the latest news from politics, technology, business
          and more
        </p>
      </div>

      <Feed />
    </>
  );
};

export default Home;
