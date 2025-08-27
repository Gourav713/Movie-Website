import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (data.backdrop_path || data.profile_path) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = `https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path
      }`;
    }
  }, [data]);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return null;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "text-green-400";
    if (rating >= 7) return "text-yellow-400";
    if (rating >= 6) return "text-orange-400";
    return "text-red-400";
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

  const mediaType = data.media_type || (data.first_air_date ? "tv" : "movie");
  const releaseDate = data.release_date || data.first_air_date;
  const rating = data.vote_average || 0;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Media Type & Status Badge */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-600/80 backdrop-blur-sm rounded-full border border-purple-500/30">
                  <i
                    className={`${getMediaTypeIcon(mediaType)} text-white`}
                  ></i>
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">
                    {mediaType}
                  </span>
                </div>

                {data.status && (
                  <div className="px-3 py-1 bg-green-600/80 backdrop-blur-sm rounded-full border border-green-500/30">
                    <span className="text-white text-xs font-medium">
                      {data.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
                  {data.name ||
                    data.title ||
                    data.original_name ||
                    data.original_title}
                </h1>

                {/* Original Title (if different) */}
                {(data.original_title || data.original_name) &&
                  (data.original_title !== data.title ||
                    data.original_name !== data.name) && (
                    <p className="text-gray-300 text-lg italic">
                      Originally: {data.original_title || data.original_name}
                    </p>
                  )}
              </div>

              {/* Key Information Bar */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                {/* Rating */}
                {rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full border-2 border-yellow-400">
                      <span
                        className={`font-bold text-sm ${getRatingColor(
                          rating
                        )}`}
                      >
                        {(rating * 10).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <i className="ri-star-fill text-yellow-400"></i>
                        <span className="font-semibold text-white">
                          {rating.toFixed(1)}
                        </span>
                      </div>
                      {data.vote_count && (
                        <span className="text-xs text-gray-400">
                          {data.vote_count.toLocaleString()} votes
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Release Date */}
                {releaseDate && (
                  <div className="flex items-center gap-2">
                    <i className="ri-calendar-line text-blue-400 text-xl"></i>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">
                        {formatDate(releaseDate)}
                      </span>
                      <span className="text-xs text-gray-400">
                        {mediaType === "tv" ? "First Aired" : "Released"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Runtime */}
                {data.runtime && (
                  <div className="flex items-center gap-2">
                    <i className="ri-time-line text-green-400 text-xl"></i>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">
                        {formatRuntime(data.runtime)}
                      </span>
                      <span className="text-xs text-gray-400">Duration</span>
                    </div>
                  </div>
                )}

                {/* Seasons (for TV shows) */}
                {data.number_of_seasons && (
                  <div className="flex items-center gap-2">
                    <i className="ri-playlist-line text-purple-400 text-xl"></i>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">
                        {data.number_of_seasons} Season
                        {data.number_of_seasons > 1 ? "s" : ""}
                      </span>
                      {data.number_of_episodes && (
                        <span className="text-xs text-gray-400">
                          {data.number_of_episodes} episodes
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Genres */}
              {data.genres && data.genres.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {data.genres.slice(0, 4).map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full text-gray-300 text-sm font-medium hover:bg-gray-700/80 transition-colors duration-200"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Overview */}
              <div className="space-y-3 max-w-3xl">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {data.overview
                    ? data.overview.length > 300
                      ? `${data.overview.slice(0, 300)}...`
                      : data.overview
                    : "No description available."}
                </p>

                {data.overview && data.overview.length > 300 && (
                  <Link
                    to={`/${mediaType}/details/${data.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to={`/${mediaType}/details/${data.id}/trailer`}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <i className="ri-play-fill text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span>Watch Trailer</span>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  to={`/${mediaType}/details/${data.id}`}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/50 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-information-line text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span>More Info</span>
                </Link>

                {/* Add to Watchlist Button */}
                <button className="group inline-flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/10">
                  <i className="ri-bookmark-line text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span className="hidden sm:inline">Watchlist</span>
                </button>

                {/* More Button (for overflow actions) */}
                <button className="group inline-flex items-center gap-2 px-6 py-4 bg-transparent border-2 border-white/10 hover:border-purple-400 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-purple-600/10">
                  <i className="ri-more-2-fill text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span className="hidden sm:inline">More</span>
                </button>
              </div>
            </div>

            {/* Side Information Panel */}
            <div className="lg:col-span-4">
              <div className="bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-information-line text-blue-400"></i>
                  Quick Facts
                </h3>

                <div className="space-y-3 text-sm">
                  {data.production_countries &&
                    data.production_countries.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Country:</span>
                        <span className="text-white font-medium">
                          {data.production_countries[0].name}
                        </span>
                      </div>
                    )}

                  {data.spoken_languages &&
                    data.spoken_languages.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Language:</span>
                        <span className="text-white font-medium">
                          {data.spoken_languages[0].english_name}
                        </span>
                      </div>
                    )}

                  {data.budget && data.budget > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Budget:</span>
                      <span className="text-white font-medium">
                        ${(data.budget / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  )}

                  {data.revenue && data.revenue > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Revenue:</span>
                      <span className="text-white font-medium">
                        ${(data.revenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  )}

                  {data.popularity && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Popularity:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                            style={{
                              width: `${Math.min(
                                (data.popularity / 1000) * 100,
                                100
                              )}%`,
                            }}
                          />
                        </div>
                        <span className="text-white font-medium text-xs">
                          {data.popularity.toFixed(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-white/60"></i>
      </div>

      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse">
          <div className="h-full bg-gradient-to-t from-gray-800 to-gray-700" />
        </div>
      )}
    </div>
  );
}

export default Header;
