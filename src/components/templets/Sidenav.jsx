import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidenav() {
  const { pathname } = useLocation();

  const links = [
    { to: "/trending", icon: "ri-fire-fill", label: "Trending" },
    { to: "/popular", icon: "ri-bard-fill", label: "Popular" },
    { to: "/movies", icon: "ri-movie-fill", label: "Movies" },
    { to: "/tv", icon: "ri-tv-2-fill", label: "Tv Shows" },
    { to: "/person", icon: "ri-user-2-fill", label: "People" },
    
  ];

  const infoLinks = [
    { to: "/about", icon: "ri-information-2-fill", label: "About MP" },
    { to: "/contact", icon: "ri-phone-fill", label: "Contact Us" },
  ];

  return (
    <div className="hidden md:flex flex-col w-[20%] h-full border-r border-zinc-700 p-6 bg-[#1f1e24]">
      <h1 className="text-2xl text-white font-bold flex items-center mb-6">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>Moviez Point</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h2 className="text-white font-semibold mt-4 mb-2">New Feeds</h2>
        {links.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={`flex items-center p-3 rounded-lg duration-300 
              ${
                pathname === item.to
                  ? "bg-[#6556cd] text-white shadow-md"
                  : "hover:bg-[#6556cd] hover:text-white"
              }`}
          >
            <i className={`mr-3 ${item.icon}`}></i>
            {item.label}
          </Link>
        ))}
      </nav>

      <hr className="my-5 border-zinc-700" />

      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h2 className="text-white font-semibold mt-4 mb-2">Website Info</h2>
        {infoLinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={`flex items-center p-3 rounded-lg duration-300 
              ${
                pathname === item.to
                  ? "bg-[#6556cd] text-white shadow-md"
                  : "hover:bg-[#6556cd] hover:text-white"
              }`}
          >
            <i className={`mr-3 ${item.icon}`}></i>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidenav;
