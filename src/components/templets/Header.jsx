import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(
        to top,
        rgba(0,0,0,0.9) 20%,
        rgba(0,0,0,0.4) 60%,
        rgba(0,0,0,0) 100%),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[70vh] flex flex-col items-start justify-end p-[5%] text-white"
    >
      <h1 className="w-[70%] text-4xl font-black">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 mb-3">
        {data.overview
          ? `${data.overview.slice(0, 200)}...`
          : "No description available."}
        <Link className="text-blue-400">more</Link>
      </p>
      <p>
        <i className="text-yellow-500 mx-1 ri-calendar-2-fill"></i>
        {data.release_date || "No Information"}
        <i className=" ml-5 mx-1 text-yellow-500 ri-play-circle-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-3 bg-[#6556CD] mt-5 rounded">Watch Trailer</Link>
    </div>
  );
}

export default Header;
