import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  return (
    <div className="w-full overflow-y-hidden flex mt-5 mb-5">
      {data.map((item) => (
        <Link
          to={`/${item.media_type}/details/${item.id}`}
          key={item.id}
          className="min-w-[15%] h-[35vh] md:h-[40vh] bg-zinc-800 mb-5 mr-5 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          <img
            className="w-full h-[55%] object-cover"
            src={
              item.backdrop_path || item.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.poster_path
                  }`
                : "/noimage.jpg"
            }
            alt={item.name || item.title || "Trending Movie"}
          />
          <div className="text-white p-3 overflow-hidden">
            <h1 className="text-lg font-semibold line-clamp-2">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
              {item.overview || "No description available."}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HorizontalCards;
