import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../assets/noimage.jpg";

function Cards({ data, title }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const getMediaType = (item) => {
    return item.media_type || title || (item.first_air_date ? "tv" : "movie");
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "bg-green-500";
    if (rating >= 7) return "bg-yellow-500";
    if (rating >= 6) return "bg-orange-500";
    return "bg-red-500";
  };

  const getGenreNames = (genreIds) => {
    // Common genre mapping - you might want to fetch this from TMDB API
    const genreMap = {
      28: "Action",
      35: "Comedy",
      18: "Drama",
      27: "Horror",
      10749: "Romance",
      878: "Sci-Fi",
      53: "Thriller",
      16: "Animation",
      80: "Crime",
      99: "Documentary",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      10402: "Music",
      9648: "Mystery",
      10770: "TV Movie",
      37: "Western",
      10752: "War",
      12: "Adventure",
    };

    if (!genreIds || genreIds.length === 0) return [];
    return genreIds
      .slice(0, 2)
      .map((id) => genreMap[id])
      .filter(Boolean);
  };

  return (
    <div className="px-4 lg:px-8 py-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {data.map((item, index) => {
          const mediaType = getMediaType(item);
          const rating = item.vote_average || 0;
          const releaseDate = item.release_date || item.first_air_date;
          const genres = getGenreNames(item.genre_ids);

          return (
            <Link
              to={`/${mediaType}/details/${item.id}`}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              key={index}
            >
              {/* Image Container */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={
                    item.backdrop_path || item.poster_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${
                          item.poster_path ||
                          item.backdrop_path ||
                          item.profile_path
                        }`
                      : noimage
                  }
                  alt={item.name || item.title || "Poster"}
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Media Type Badge */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {mediaType === "movie" ? (
                      <i className="ri-movie-line text-blue-400"></i>
                    ) : mediaType === "tv" ? (
                      <i className="ri-tv-line text-green-400"></i>
                    ) : (
                      <i className="ri-user-line text-purple-400"></i>
                    )}
                    <span className="capitalize">{mediaType}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                {rating > 0 && (
                  <div className="absolute top-3 right-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full text-white text-xs font-bold ${getRatingColor(
                        rating
                      )} shadow-lg`}
                    >
                      {(rating * 10).toFixed(0)}
                      <span className="text-[8px] ml-0.5">%</span>
                    </div>
                  </div>
                )}

                {/* Popularity Indicator */}
                {item.popularity && (
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white">
                      <i className="ri-fire-line text-orange-400"></i>
                      <span>{item.popularity.toFixed(0)}</span>
                    </div>
                  </div>
                )}

                {/* Quick Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    {/* Genres */}
                    {genres.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {genres.map((genre, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs text-white font-medium"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      {releaseDate && (
                        <span className="flex items-center gap-1">
                          <i className="ri-calendar-line"></i>
                          {formatDate(releaseDate)}
                        </span>
                      )}
                      {item.adult && (
                        <span className="px-2 py-1 bg-red-600 rounded text-white font-bold">
                          18+
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                {/* Title */}
                <h2 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-300 transition-colors duration-200 leading-tight">
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </h2>

                {/* Release Year & Rating Row */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  {releaseDate && (
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      {formatDate(releaseDate)}
                    </span>
                  )}

                  {rating > 0 && (
                    <div className="flex items-center gap-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <span className="text-white font-medium">
                        {rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Language & Vote Count */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  {item.original_language && (
                    <span className="uppercase font-medium">
                      {item.original_language}
                    </span>
                  )}

                  {item.vote_count && item.vote_count > 0 && (
                    <span className="flex items-center gap-1">
                      <i className="ri-group-line"></i>
                      {item.vote_count.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Overview Preview */}
                {item.overview && (
                  <p className="text-gray-400 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.overview}
                  </p>
                )}

                {/* Action Button */}
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-xs font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                    <i className="ri-play-circle-line"></i>
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              {/* Loading Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </Link>
          );
        })}
      </div>

      {/* No Results State */}
      {data.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-6">
            <i className="ri-film-line text-4xl text-gray-500"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-300 mb-2">
            No Results Found
          </h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any {title || "content"} matching your criteria.
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
}

export default Cards;
