import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidenav() {
  const { pathname } = useLocation();

  const links = [
    { to: "/trending", icon: "ri-fire-fill", label: "Trending", badge: "Hot" },
    { to: "/popular", icon: "ri-bard-fill", label: "Popular", badge: "Top" },
    { to: "/movie", icon: "ri-movie-fill", label: "Movies" },
    { to: "/tv", icon: "ri-tv-2-fill", label: "TV Shows" },
    { to: "/person", icon: "ri-user-2-fill", label: "People" },
  ];

  const infoLinks = [
    { to: "/about", icon: "ri-information-2-fill", label: "About MP" },
    { to: "/contact", icon: "ri-phone-fill", label: "Contact Us" },
    { to: "/privacy", icon: "ri-shield-check-fill", label: "Privacy Policy" },
    { to: "/terms", icon: "ri-file-text-fill", label: "Terms of Service" },
  ];

  const quickStats = [
    { label: "Movies", count: "50K+", icon: "ri-movie-2-fill" },
    { label: "TV Shows", count: "15K+", icon: "ri-tv-fill" },
    { label: "Episodes", count: "500K+", icon: "ri-play-circle-fill" },
  ];

  return (
    <div className="hidden md:flex flex-col w-[20%] h-full border-r border-zinc-700 bg-gradient-to-b from-[#1f1e24] to-[#17161b] relative overflow-y-auto custom-scrollbar">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#6556CD] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#6556CD] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Logo Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-white font-bold flex items-center mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-lg flex items-center justify-center mr-3 shadow-lg">
              <i className="ri-tv-fill text-white text-xl"></i>
            </div>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Moviez Point
            </span>
          </h1>
          <p className="text-zinc-500 text-sm ml-13 font-medium">
            Your Ultimate Entertainment Hub
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-6">
          <div className="bg-[#252431] rounded-xl p-4 border border-zinc-700/50">
            <h3 className="text-white font-semibold text-sm mb-3 flex items-center">
              <i className="ri-bar-chart-fill text-[#6556CD] mr-2"></i>
              Quick Stats
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center text-zinc-400">
                    <i
                      className={`${stat.icon} text-[#6556CD] mr-2 text-xs`}
                    ></i>
                    {stat.label}
                  </div>
                  <span className="text-white font-semibold">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col text-zinc-400 text-lg gap-1 mb-6">
          <h2 className="text-white font-semibold mb-3 flex items-center text-sm uppercase tracking-wide">
            <div className="w-4 h-[2px] bg-[#6556CD] mr-2 rounded-full"></div>
            New Feeds
          </h2>
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className={`group flex items-center justify-between p-3 rounded-xl duration-300 transition-all
                ${
                  pathname === item.to
                    ? "bg-gradient-to-r from-[#6556cd] to-[#7c6bd3] text-white shadow-lg shadow-[#6556cd]/20 transform scale-[1.02]"
                    : "hover:bg-[#2a2835] hover:text-white hover:transform hover:translate-x-1"
                }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 
                  ${
                    pathname === item.to
                      ? "bg-white/20"
                      : "bg-[#6556cd]/10 group-hover:bg-[#6556cd]/20"
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold transition-colors duration-300
                  ${
                    pathname === item.to
                      ? "bg-white/20 text-white"
                      : "bg-[#6556cd]/20 text-[#6556cd] group-hover:bg-[#6556cd] group-hover:text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="relative mb-6">
          <hr className="border-zinc-700/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#1f1e24] px-3">
              <i className="ri-more-fill text-zinc-600"></i>
            </div>
          </div>
        </div>

        {/* Info Links */}
        <nav className="flex flex-col text-zinc-400 text-lg gap-1 flex-1">
          <h2 className="text-white font-semibold mb-3 flex items-center text-sm uppercase tracking-wide">
            <div className="w-4 h-[2px] bg-[#6556CD] mr-2 rounded-full"></div>
            Website Info
          </h2>
          {infoLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className={`group flex items-center p-3 rounded-xl duration-300 transition-all
                ${
                  pathname === item.to
                    ? "bg-gradient-to-r from-[#6556cd] to-[#7c6bd3] text-white shadow-lg shadow-[#6556cd]/20 transform scale-[1.02]"
                    : "hover:bg-[#2a2835] hover:text-white hover:transform hover:translate-x-1"
                }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300 
                ${
                  pathname === item.to
                    ? "bg-white/20"
                    : "bg-[#6556cd]/10 group-hover:bg-[#6556cd]/20"
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
              </div>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Info */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-r from-[#252431] to-[#2a2835] rounded-xl p-4 border border-zinc-700/30">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <i className="ri-movie-2-fill text-white text-xl"></i>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">
                Premium Experience
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                Discover unlimited movies, TV shows, and exclusive content.
              </p>
              <div className="flex items-center justify-center text-xs text-zinc-500">
                <i className="ri-shield-check-line mr-1"></i>
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="text-center mt-4 pt-4 border-t border-zinc-700/30">
          <p className="text-zinc-500 text-xs">
            Version 2.1.0 • <span className="text-[#6556CD]">Updated</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
