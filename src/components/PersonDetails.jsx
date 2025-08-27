import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import Loading from "../components/Loading";
import HorizontalCards from "./templets/HorizontalCards";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noimage from "../assets/noimage.jpg";
import imdb from "../assets/imdb.png";

function PersonDetails() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  const calculateAge = (birthday) => {
    if (!birthday) return null;
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return info ? (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-700">
        <div className="px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
            <span className="text-lg font-medium">Back</span>
          </button>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Image & Social Links */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Profile Image */}
              <div className="relative group">
                <img
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl border-2 border-gray-700 group-hover:border-purple-500 transition-all duration-300"
                  src={
                    info.detail.profile_path
                      ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
                      : noimage
                  }
                  alt={info.detail.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-links-line text-purple-400"></i>
                  Social Media
                </h3>
                <div className="flex justify-center gap-4">
                  {info.externalid.facebook_id && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
                      title="Facebook"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <i className="ri-facebook-fill text-xl text-white"></i>
                    </a>
                  )}
                  {info.externalid.instagram_id && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
                      title="Instagram"
                      className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <i className="ri-instagram-fill text-xl text-white"></i>
                    </a>
                  )}
                  {info.externalid.twitter_id && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://twitter.com/${info.externalid.twitter_id}/`}
                      title="Twitter/X"
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <i className="ri-twitter-x-fill text-xl text-white"></i>
                    </a>
                  )}
                  {info.externalid.wikidata_id && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                      title="Wikipedia"
                      className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <i className="ri-earth-fill text-xl text-white"></i>
                    </a>
                  )}
                  {info.externalid.imdb_id && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.imdb.com/name/${info.externalid.imdb_id}/`}
                      title="IMDb"
                      className="w-12 h-12 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <img src={imdb} alt="IMDb" className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Information */}
          <div className="lg:col-span-2">
            {/* Name and Title */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                {info.detail.name}
              </h1>
              {info.detail.also_known_as &&
                info.detail.also_known_as.length > 0 && (
                  <p className="text-lg text-gray-400 mb-4">
                    Also known as:{" "}
                    {info.detail.also_known_as.slice(0, 3).join(", ")}
                    {info.detail.also_known_as.length > 3 && "..."}
                  </p>
                )}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-full">
                <i className="ri-star-fill text-yellow-400"></i>
                <span className="font-semibold">
                  {info.detail.known_for_department}
                </span>
              </div>
            </div>

            {/* Personal Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Basic Info Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-user-line text-purple-400"></i>
                  Basic Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 font-medium">Gender:</span>
                    <span className="text-white font-semibold">
                      {info.detail.gender === 2
                        ? "Male"
                        : info.detail.gender === 1
                        ? "Female"
                        : "Unknown"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 font-medium">Birthday:</span>
                    <span className="text-white font-semibold">
                      {formatDate(info.detail.birthday)}
                    </span>
                  </div>
                  {info.detail.birthday && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                      <span className="text-gray-400 font-medium">Age:</span>
                      <span className="text-white font-semibold">
                        {calculateAge(info.detail.birthday)} years old
                      </span>
                    </div>
                  )}
                  {info.detail.deathday && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                      <span className="text-gray-400 font-medium">Death:</span>
                      <span className="text-white font-semibold">
                        {formatDate(info.detail.deathday)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Career Info Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-briefcase-line text-purple-400"></i>
                  Career Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 font-medium">
                      Known For:
                    </span>
                    <span className="text-white font-semibold">
                      {info.detail.known_for_department}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 font-medium">
                      Popularity:
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{
                            width: `${Math.min(
                              (info.detail.popularity / 100) * 100,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold text-sm">
                        {info.detail.popularity?.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  {info.combinedCredits && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400 font-medium">
                          Total Credits:
                        </span>
                        <span className="text-white font-semibold">
                          {(info.combinedCredits.cast?.length || 0) +
                            (info.combinedCredits.crew?.length || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400 font-medium">
                          Acting Credits:
                        </span>
                        <span className="text-white font-semibold">
                          {info.combinedCredits.cast?.length || 0}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Biography */}
            {info.detail.biography && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 mb-8">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-book-open-line text-purple-400"></i>
                  Biography
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {info.detail.biography}
                </p>
              </div>
            )}

            {/* Place of Birth */}
            {info.detail.place_of_birth && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-map-pin-line text-purple-400"></i>
                  Place of Birth
                </h3>
                <p className="text-white text-lg font-medium">
                  {info.detail.place_of_birth}
                </p>
              </div>
            )}

            {/* Known For Works */}
            {info.combinedCredits?.cast &&
              info.combinedCredits.cast.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
                    <i className="ri-film-line text-purple-400"></i>
                    Known For
                  </h3>
                  <HorizontalCards
                    data={info.combinedCredits.cast
                      .filter((item) => item.poster_path)
                      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
                      .slice(0, 10)}
                  />
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Outlet for nested routes */}
      <div className="px-6 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;
