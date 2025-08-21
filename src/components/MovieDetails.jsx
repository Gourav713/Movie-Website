import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import Loading from "../components/Loading";
import HorizontalCards from "./templets/HorizontalCards";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noimage from "../../public/noimage.jpg";

function MovieDetails() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(
          to top,
          rgba(0,0,0,0.9) 20%,
          rgba(0,0,0,0.4) 60%,
          rgba(0,0,0,0) 100%
        ),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen min-h-screen px-[6%] py-4"
    >
      {/* 🔙 Navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-6 text-xl">
        <button
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={info.detail.homepage}
          title="Official Website"
          className="ri-earth-fill hover:text-[#6556cd]"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          title="IMDb"
        >
          <img
            src="/imdb.png"
            alt="IMDb"
            className="w-10 h-6 object-contain"
          />
        </a>
      </nav>

      {/* 🎬 Poster + Details */}
      <div className="w-full flex flex-col md:flex-row gap-8 mt-6">
        {/* Poster */}
        <img
          className="h-[60vh] w-[40vh] rounded-xl shadow-lg object-cover"
          src={
            info.detail.poster_path
              ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path}`
              : noimage
          }
          alt={info.detail.title || info.detail.name}
        />

        {/* Details */}
        <div className="flex flex-col text-white md:ml-8">
          {/* Title */}
          <h1 className="text-4xl font-bold">
            {info.detail.title || info.detail.name}
            <small className="ml-2 text-xl text-gray-300">
              ({info.detail.release_date?.split("-")[0]})
            </small>
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i className="ri-calendar-line text-lg"></i>
              {info.detail.release_date}
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-film-line text-lg"></i>
              {info.detail.genres.map((g) => (
                <span
                  key={g.id}
                  className="px-2 py-1 bg-zinc-800 rounded-md text-xs"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-time-line text-lg"></i>
              {info.detail.runtime ? `${info.detail.runtime} min` : "N/A"}
            </div>
          </div>

          {/* User Score */}
          <div className="flex items-center gap-4 mt-5">
            <div className="w-[60px] h-[60px]">
              <CircularProgressbar
                value={info.detail.vote_average * 10}
                text={`${(info.detail.vote_average * 10).toFixed()}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor:
                    info.detail.vote_average * 10 >= 70
                      ? "green"
                      : info.detail.vote_average * 10 >= 40
                      ? "orange"
                      : "red",
                  trailColor: "#333",
                })}
              />
            </div>
            <h1 className="text-lg">User Score</h1>
          </div>

          {/* Tagline */}
          {info.detail.tagline && (
            <h2 className="italic text-gray-400 mt-3">
              “{info.detail.tagline}”
            </h2>
          )}

          {/* Overview */}
          <h1 className="text-2xl font-semibold mt-6 mb-2">Overview</h1>
          <p className="text-gray-200 leading-relaxed max-w-2xl">
            {info.detail.overview}
          </p>

          {/* Trailer Button */}
          <Link
            className="mt-6 inline-flex items-center gap-2 bg-[#6556cd] px-5 py-3 rounded-xl shadow-md hover:bg-[#4a3ebd] transition"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill text-xl"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* 👥 Top Cast */}
      {info.credits?.cast?.length > 0 && (
        <div className="mt-10 text-white">
          <h2 className="text-2xl font-semibold mb-3">Top Cast</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
            {info.credits.cast.slice(0, 5).map((actor) => (
              <div
                key={actor.id}
                className="flex-shrink-0 w-[120px] text-center"
              >
                <img
                  className="w-[120px] h-[160px] object-cover rounded-lg"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                      : noimage
                  }
                  alt={actor.name}
                />
                <p className="mt-2 text-sm font-semibold">{actor.name}</p>
                <p className="text-xs text-gray-400">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 📺 Watch Providers */}
      <div className="w-full mt-10 space-y-6 text-white">
        {info.watchproviders?.flatrate && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Available On</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {info.watchproviders.flatrate.map((item, index) => (
                <img
                  key={index}
                  title={item.provider_name}
                  className="w-[60px] h-[60px] object-cover rounded-md"
                  src={
                    item.logo_path
                      ? `https://image.tmdb.org/t/p/original/${item.logo_path}`
                      : noimage
                  }
                  alt={item.provider_name}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders?.rent && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Available on Rent</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {info.watchproviders.rent.map((item, index) => (
                <img
                  key={index}
                  title={item.provider_name}
                  className="w-[60px] h-[60px] object-cover rounded-md"
                  src={
                    item.logo_path
                      ? `https://image.tmdb.org/t/p/original/${item.logo_path}`
                      : noimage
                  }
                  alt={item.provider_name}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchproviders?.buy && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Available to Buy</h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {info.watchproviders.buy.map((item, index) => (
                <img
                  key={index}
                  title={item.provider_name}
                  className="w-[60px] h-[60px] object-cover rounded-md"
                  src={
                    item.logo_path
                      ? `https://image.tmdb.org/t/p/original/${item.logo_path}`
                      : noimage
                  }
                  alt={item.provider_name}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 🎞 Recommendations */}
      <hr className="mt-12 mb-6 border-none h-[1px] bg-zinc-600" />
      <h1 className="text-3xl font-semibold text-white mb-4">
        You May Also Like
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
    </div>
  ) : (
    <Loading />
  );
}

export default MovieDetails;
