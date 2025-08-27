import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import Loading from "../components/Loading";
import HorizontalCards from "./templets/HorizontalCards";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noimage from "../assets/noimage.jpg";
import imdb from "../assets/imdb.png";

function MovieDetails() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return info ? (
    <div className="relative w-screen min-h-screen bg-gray-900">
      {/* Hero Section with Backdrop */}
      <div
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(17,24,39,0.3) 0%,
            rgba(17,24,39,0.7) 50%,
            rgba(17,24,39,1) 100%
          ), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-[70vh] flex items-end"
      >
        {/* Navigation Overlay */}
        <nav className="absolute top-0 left-0 w-full h-[80px] px-6 flex items-center gap-6 text-white z-10 bg-gradient-to-b from-black/50 to-transparent">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm transition-all duration-200"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            Back
          </button>

          <div className="flex gap-4 ml-auto">
            <a
              target="_blank"
              rel="noreferrer"
              href={info.detail.homepage}
              title="Official Website"
              className="p-3 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
              <i className="ri-earth-fill text-xl"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
              title="IMDb"
              className="p-3 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm transition-all duration-200"
            >
              <img src={imdb} alt="IMDb" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="w-full px-6 pb-12">
          <div className="flex items-end gap-8 max-w-7xl mx-auto">
            {/* Poster */}
            <div className="flex-shrink-0 relative group">
              <img
                className="w-[300px] h-[450px] rounded-2xl shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                src={
                  info.detail.poster_path
                    ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path}`
                    : noimage
                }
                alt={info.detail.title || info.detail.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Title and Basic Info */}
            <div className="flex-1 text-white pb-8">
              <h1 className="text-5xl font-bold mb-2 leading-tight">
                {info.detail.title || info.detail.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {info.detail.release_date &&
                  formatDate(info.detail.release_date)}
                {info.detail.runtime && ` • ${info.detail.runtime} min`}
              </p>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {info.detail.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Rating and Trailer */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={info.detail.vote_average * 10}
                      text={`${(info.detail.vote_average * 10).toFixed()}%`}
                      styles={buildStyles({
                        textSize: "28px",
                        textColor: "#fff",
                        pathColor:
                          info.detail.vote_average * 10 >= 70
                            ? "#22c55e"
                            : info.detail.vote_average * 10 >= 40
                            ? "#f59e0b"
                            : "#ef4444",
                        trailColor: "#374151",
                        strokeLinecap: "round",
                      })}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">User Score</p>
                    <p className="text-xs text-gray-400">
                      {info.detail.vote_count} votes
                    </p>
                  </div>
                </div>

                <Link
                  className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                  to={`${pathname}/trailer`}
                >
                  <i className="ri-play-fill text-xl"></i>
                  Play Trailer
                </Link>
              </div>

              {/* Tagline */}
              {info.detail.tagline && (
                <p className="text-lg italic text-gray-300 mt-6 font-light">
                  "{info.detail.tagline}"
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 bg-gray-800 p-1 rounded-lg w-fit">
          {[
            { id: "overview", label: "Overview", icon: "ri-file-text-line" },
            { id: "cast", label: "Cast & Crew", icon: "ri-group-line" },
            { id: "details", label: "Details", icon: "ri-information-line" },
            { id: "media", label: "Media", icon: "ri-image-line" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {info.detail.overview}
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-white">{info.detail.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Language</span>
                    <span className="text-white">
                      {info.detail.original_language?.toUpperCase()}
                    </span>
                  </div>
                  {info.detail.budget > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Budget</span>
                      <span className="text-white">
                        {formatCurrency(info.detail.budget)}
                      </span>
                    </div>
                  )}
                  {info.detail.revenue > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Revenue</span>
                      <span className="text-white">
                        {formatCurrency(info.detail.revenue)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "cast" && (
          <div className="space-y-8">
            {/* Top Cast */}
            {info.credits?.cast?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {info.credits.cast.slice(0, 10).map((actor) => (
                    <div
                      key={actor.id}
                      className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-200"
                    >
                      <img
                        className="w-full h-48 object-cover"
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                            : noimage
                        }
                        alt={actor.name}
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-white text-sm mb-1">
                          {actor.name}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {actor.character}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Crew */}
            {info.credits?.crew?.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Key Crew</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {info.credits.crew
                    .filter((person) =>
                      [
                        "Director",
                        "Producer",
                        "Screenplay",
                        "Story",
                        "Writer",
                      ].includes(person.job)
                    )
                    .slice(0, 6)
                    .map((person, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4">
                        <h3 className="font-semibold text-white">
                          {person.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{person.job}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "details" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Production Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Production Companies
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {info.detail.production_companies?.map((company) => (
                      <span
                        key={company.id}
                        className="bg-gray-700 px-3 py-1 rounded-md text-sm text-white"
                      >
                        {company.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Production Countries
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {info.detail.production_countries?.map((country) => (
                      <span
                        key={country.iso_3166_1}
                        className="bg-gray-700 px-3 py-1 rounded-md text-sm text-white"
                      >
                        {country.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Spoken Languages
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {info.detail.spoken_languages?.map((language) => (
                      <span
                        key={language.iso_639_1}
                        className="bg-gray-700 px-3 py-1 rounded-md text-sm text-white"
                      >
                        {language.english_name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Box Office & Ratings
              </h3>
              <div className="space-y-4">
                {info.detail.budget > 0 && (
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Budget
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {formatCurrency(info.detail.budget)}
                    </p>
                  </div>
                )}
                {info.detail.revenue > 0 && (
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Box Office
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {formatCurrency(info.detail.revenue)}
                    </p>
                  </div>
                )}
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    User Rating
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-semibold">
                      {info.detail.vote_average.toFixed(1)}/10
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({info.detail.vote_count.toLocaleString()} votes)
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Popularity Score
                  </label>
                  <p className="text-white text-lg font-semibold">
                    {Math.round(info.detail.popularity)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="space-y-8">
            {/* Watch Providers */}
            {(info.watchproviders?.flatrate ||
              info.watchproviders?.rent ||
              info.watchproviders?.buy) && (
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Where to Watch
                </h3>
                <div className="space-y-6">
                  {info.watchproviders?.flatrate && (
                    <div>
                      <h4 className="text-white font-medium mb-3">Streaming</h4>
                      <div className="flex gap-3 flex-wrap">
                        {info.watchproviders.flatrate.map((item, index) => (
                          <div key={index} className="text-center">
                            <img
                              title={item.provider_name}
                              className="w-12 h-12 rounded-lg object-cover"
                              src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                              alt={item.provider_name}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              {item.provider_name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {info.watchproviders?.rent && (
                    <div>
                      <h4 className="text-white font-medium mb-3">Rent</h4>
                      <div className="flex gap-3 flex-wrap">
                        {info.watchproviders.rent.map((item, index) => (
                          <div key={index} className="text-center">
                            <img
                              title={item.provider_name}
                              className="w-12 h-12 rounded-lg object-cover"
                              src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                              alt={item.provider_name}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              {item.provider_name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {info.watchproviders?.buy && (
                    <div>
                      <h4 className="text-white font-medium mb-3">Buy</h4>
                      <div className="flex gap-3 flex-wrap">
                        {info.watchproviders.buy.map((item, index) => (
                          <div key={index} className="text-center">
                            <img
                              title={item.provider_name}
                              className="w-12 h-12 rounded-lg object-cover"
                              src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                              alt={item.provider_name}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              {item.provider_name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            You May Also Like
          </h2>
          <HorizontalCards
            data={
              info.recommendations.length > 0
                ? info.recommendations
                : info.similar
            }
          />
        </div>
      </div>

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default MovieDetails;
