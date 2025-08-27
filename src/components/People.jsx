import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav";
import Dropdown from "./templets/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templets/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  document.title = "MP | Person";
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPerson = async (resetData = false) => {
    if (loading) return;
    try {
      setLoading(true);
      setError(null);
      const currentPage = resetData ? 1 : page;
      const { data } = await axios.get(
        `/person/${category}?page=${currentPage}`
      );
      if (resetData) {
        setPerson(data.results);
        setPage(2);
      } else {
        setPerson((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      }
      setTotalResults(data.total_results);
      // setHasMore(currentPage < data.total_pages && data.total_pages <= 500);
    } catch (error) {
      setError("Failed to load people. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerson(true);
  }, [category]);

  if (person.length === 0 && loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-900">
      {/* Header Section */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-2 md:px-6 py-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                title="Back"
              >
                <i className="ri-arrow-left-line text-xl"></i>
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <i className="ri-user-2-fill text-pink-500 text-2xl"></i>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    People
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="px-6 py-4">
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 flex items-center gap-3">
            <i className="ri-error-warning-line text-red-400 text-xl"></i>
            <div>
              <p className="text-red-400 font-medium">Error</p>
              <p className="text-gray-300 text-sm">{error}</p>
            </div>
            <button
              onClick={() => getPerson(true)}
              className="ml-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors duration-200"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* People Content */}
      <div className="px-4 md:px-6 pb-8">
        <InfiniteScroll
          dataLength={person.length}
          next={() => getPerson(false)}
          hasMore={hasMore}
          loader={
            <div className="py-8">
              <Loading />
            </div>
          }
          endMessage={
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
                <i className="ri-check-line text-green-400"></i>
                <span className="text-gray-300">
                  You've seen all {person.length} people!
                </span>
              </div>
            </div>
          }
        >
          <Cards data={person} title="person" />
        </InfiniteScroll>

        {/* Stats Footer */}
        {person.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/50 rounded-full">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <i className="ri-user-2-fill"></i>
                <span>
                  Showing {person.length} of {totalResults.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {person.length > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all duration-200 z-40"
          title="Scroll to Top"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}
    </div>
  );
}

export default People;
