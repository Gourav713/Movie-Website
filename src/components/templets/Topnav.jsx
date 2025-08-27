import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";
import axios from "../../utils/Axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const GetSearches = async () => {
    if (!query.trim()) {
      setSearches([]);
      setIsDropdownOpen(false);
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results || []);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error("Search Error: ", error);
      setSearches([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      GetSearches();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !searchRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getMediaTypeLabel = (mediaType) => {
    switch (mediaType) {
      case "movie":
        return "Movie";
      case "tv":
        return "TV Show";
      case "person":
        return "Person";
      default:
        return "Media";
    }
  };

  const getMediaTypeColor = (mediaType) => {
    switch (mediaType) {
      case "movie":
        return "bg-blue-100 text-blue-700";
      case "tv":
        return "bg-green-100 text-green-700";
      case "person":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const getRating = (voteAverage) => {
    if (!voteAverage) return null;
    return (voteAverage * 10).toFixed(0) + "%";
  };

  const clearSearch = () => {
    setQuery("");
    setSearches([]);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full h-[8vh] relative flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      {/* Search Container */}
      <div className="relative w-[60%] max-w-3xl" ref={searchRef}>
        {/* Search Input Wrapper */}
        <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400">
          <div className="pl-6 pr-4">
            <i className="text-white/70 text-xl ri-search-line"></i>
          </div>

          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="flex-1 text-white placeholder-white/50 py-4 pr-4 text-lg outline-none bg-transparent font-medium"
            type="text"
            placeholder="Search movies, TV shows, people..."
            onFocus={() => setIsDropdownOpen(true)}
            autoFocus
          />

          {/* Loading Spinner */}
          {isLoading && (
            <div className="pr-4">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
            </div>
          )}

          {/* Clear Button */}
          {query.length > 0 && !isLoading && (
            <button
              onClick={clearSearch}
              className="pr-4 text-white/70 hover:text-white transition-colors duration-200"
            >
              <i className="text-xl ri-close-line"></i>
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {isDropdownOpen && query.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-[70vh] overflow-y-auto custom-scrollbar"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape") setIsDropdownOpen(false);
            }}
          >
            {searches.length === 0 && !isLoading ? (
              <div className="p-6 text-center text-gray-500">
                <i className="ri-search-2-line text-3xl mb-2 block"></i>
                <p>No results found for "{query}"</p>
              </div>
            ) : (
              <>
                {/* Results Header */}
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-600">
                    {searches.length} result{searches.length !== 1 ? "s" : ""}{" "}
                    found
                  </p>
                </div>

                {/* Results List */}
                <div className="divide-y divide-gray-100">
                  {searches.slice(0, 8).map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.media_type}/details/${item.id}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200 group focus:bg-purple-50 outline-none"
                      tabIndex={0}
                    >
                      {/* Image */}
                      <div className="flex-shrink-0 mr-4">
                        <img
                          className="w-16 h-24 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200"
                          src={
                            item.backdrop_path || item.profile_path
                              ? `https://image.tmdb.org/t/p/w200${
                                  item.poster_path ||
                                  item.backdrop_path ||
                                  item.profile_path
                                }`
                              : noimage
                          }
                          alt={item.name || item.title || "No image"}
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                          {item.name ||
                            item.title ||
                            item.original_name ||
                            item.original_title}
                        </h3>

                        {/* Media Type Badge */}
                        <div className="flex items-center mt-1 mb-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMediaTypeColor(
                              item.media_type
                            )}`}
                          >
                            {getMediaTypeLabel(item.media_type)}
                          </span>

                          {/* Release Date */}
                          {(item.release_date || item.first_air_date) && (
                            <span className="ml-2 text-sm text-gray-500">
                              {formatDate(
                                item.release_date || item.first_air_date
                              )}
                            </span>
                          )}
                        </div>

                        {/* Overview */}
                        {item.overview && (
                          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {item.overview}
                          </p>
                        )}

                        {/* Known For (for people) */}
                        {item.media_type === "person" &&
                          item.known_for_department && (
                            <p className="text-sm text-gray-600 mt-1">
                              Known for: {item.known_for_department}
                            </p>
                          )}

                        {/* Rating and Popularity */}
                        <div className="flex items-center mt-2 space-x-4">
                          {item.vote_average > 0 && (
                            <div className="flex items-center">
                              <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                              <span className="text-sm text-gray-600">
                                {getRating(item.vote_average)}
                              </span>
                            </div>
                          )}

                          {item.popularity && (
                            <div className="flex items-center">
                              <i className="ri-fire-fill text-red-400 text-sm mr-1"></i>
                              <span className="text-sm text-gray-600">
                                {Math.round(item.popularity)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 ml-4">
                        <i className="ri-arrow-right-line text-gray-400 group-hover:text-gray-600 transition-colors duration-200"></i>
                      </div>
                    </Link>
                  ))}

                  {/* Show More Results */}
                  {searches.length > 8 && (
                    <div className="p-4 text-center bg-gray-50">
                      <p className="text-sm text-gray-600">
                        Showing 8 of {searches.length} results
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Topnav;
