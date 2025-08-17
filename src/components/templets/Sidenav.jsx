import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-600 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-fill text-[#6556CD] mr-2 "></i>
        <span className="text-2xl">Moviez Point</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-7 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-movie-fill"></i>
          Movies
        </Link>

        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-user-2-fill"></i>
          People
        </Link>
      </nav>
      <hr />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-7 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-information-2-fill"></i>
          About MP
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-phone-fill"></i>
          Contact us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
