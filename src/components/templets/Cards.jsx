import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function Cards({ data, title }) {
  return (
    <div className="px-[3%] flex flex-wrap w-full bg-[#1f1e24]">
      {data.map((item, index) => (
        <Link className="relative w-[27vh] ml-18 mt-5 mb-3 " key={index}>
          <img
            className="h-[33vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
            src={
              item.backdrop_path || item.poster_path || item.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    item.poster_path || item.backdrop_path || item.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-2xl text-zinc-400 mt-3 font-semibold">
            {item.name ||
              item.title ||
              item.original_name ||
              item.original_title}
          </h1>
          {item.vote_average && (
            <div className="absolute right-[8%] bottom-[26%] rounded-full text-sm font-semibold bg-yellow-400 w-[5vh] h-[5vh] flex justify-center items-center text-white">
              {(item.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
