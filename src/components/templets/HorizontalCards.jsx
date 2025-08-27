import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data, title = "Recommendations" }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef(null);

  // Handle empty or missing data
  if (!data || data.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full mb-4">
          <i className="ri-film-line text-3xl text-gray-600"></i>
        </div>
        <p className="text-gray-400 text-lg font-medium">
          No content available
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Check back later for updates
        </p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).getFullYear();
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "bg-green-500";
    if (rating >= 7) return "bg-yellow-500";
    if (rating >= 6) return "bg-orange-500";
    return "bg-red-500";
  };

  const getMediaTypeIcon = (mediaType) => {
    switch (mediaType) {
      case "movie":
        return "ri-movie-line";
      case "tv":
        return "ri-tv-line";
      case "person":
        return "ri-user-line";
      default:
        return "ri-play-circle-line";
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const newScrollLeft =
        containerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      // Initial check
      setTimeout(checkScrollButtons, 100);

      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [data]);

  return (
    <div className="w-full py-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="px-3 py-1 bg-gray-700 rounded-full text-gray-300 text-sm font-medium">
            {data.length} items
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border transition-all duration-200 ${
              canScrollLeft
                ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-purple-500"
                : "bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed"
            }`}
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border transition-all duration-200 ${
              canScrollRight
                ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-purple-500"
                : "bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed"
            }`}
          >
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((item, index) => {
          const mediaType =
            item.media_type || (item.first_air_date ? "tv" : "movie");
          const releaseDate = item.release_date || item.first_air_date;
          const rating = item.vote_average || 0;
          const popularity = item.popularity || 0;

          return (
            <Link
              to={`/${mediaType}/details/${item.id}`}
              key={`${item.id}-${index}`}
              className="group flex-shrink-0 w-80 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={
                    item.backdrop_path || item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${
                          item.backdrop_path || item.poster_path
                        }`
                      : "/noimage.jpg"
                  }
                  alt={item.name || item.title || "Poster"}
                  onError={(e) => (e.currentTarget.src = "/noimage.jpg")}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Media Type Badge */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-full">
                    <i
                      className={`${getMediaTypeIcon(
                        mediaType
                      )} text-purple-400 text-xs`}
                    ></i>
                    <span className="text-white text-xs font-medium capitalize">
                      {mediaType}
                    </span>
                  </div>
                </div>

                {/* Rating Badge */}
                {rating > 0 && (
                  <div className="absolute top-3 right-3">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold ${getRatingColor(
                        rating
                      )}`}
                    >
                      {(rating * 10).toFixed(0)}
                    </div>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/50 hover:bg-purple-500 transition-colors duration-200">
                    <i className="ri-play-fill text-2xl text-white ml-1"></i>
                  </div>
                </div>

                {/* Popularity Indicator */}
                {popularity > 50 && (
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 px-2 py-1 bg-orange-600/90 backdrop-blur-sm rounded-full">
                      <i className="ri-fire-line text-white text-xs"></i>
                      <span className="text-white text-xs font-medium">
                        Trending
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 space-y-3">
                {/* Title and Year */}
                <div className="space-y-1">
                  <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors duration-200">
                    {item.name ||
                      item.title ||
                      item.original_name ||
                      item.original_title}
                  </h3>

                  <div className="flex items-center justify-between">
                    {releaseDate && (
                      <span className="text-gray-400 text-sm font-medium">
                        {formatDate(releaseDate)}
                      </span>
                    )}

                    {rating > 0 && (
                      <div className="flex items-center gap-1">
                        <i className="ri-star-fill text-yellow-400 text-sm"></i>
                        <span className="text-white text-sm font-medium">
                          {rating.toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {item.overview
                    ? item.overview.length > 120
                      ? item.overview.slice(0, 120) + "..."
                      : item.overview
                    : "No description available for this content."}
                </p>

                {/* Additional Info */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    {item.adult && (
                      <span className="px-2 py-1 bg-red-600 rounded text-white font-bold">
                        18+
                      </span>
                    )}

                    {item.original_language && (
                      <span className="uppercase font-medium">
                        {item.original_language}
                      </span>
                    )}

                    {item.vote_count && item.vote_count > 0 && (
                      <span className="flex items-center gap-1">
                        <i className="ri-group-line"></i>
                        {item.vote_count > 1000
                          ? `${(item.vote_count / 1000).toFixed(1)}k`
                          : item.vote_count}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-purple-400 text-sm font-medium">
                      <span>View</span>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </Link>
          );
        })}
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -webkit-scrollbar: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default HorizontalCards;
