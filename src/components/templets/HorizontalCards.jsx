import React from "react";
import Dropdown from "./Dropdown";

function HorizontalCards({ data }) {
  return (
      <div className="w-[100%]  overflow-y-hidden flex mb-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[15%] bg-zinc-800 mb-5 mr-5 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-full h-[55%] object-cover "
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
              <h1 className="text-xl font-semibold line-clamp-2">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h1>
              <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
                {item.overview || "No description available."}
                <span className="ml-1 text-zinc-400">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default HorizontalCards;
