import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="bg-[rgba(0,0,0,.9)] fixed z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="fixed z-[200] text-3xl right-4 top-4 bg-black/70 border-none outline-none cursor-pointer rounded-full p-2 flex items-center justify-center"
        aria-label="Close"
      >
        <i
          className="ri-close-large-fill"
          style={{ color: "#fff", fontSize: "2rem" }}
        ></i>
      </button>
      <div className="w-[90vw] h-[60vw] max-w-[900px] max-h-[60vh] flex items-center justify-center">
        {ytvideo && ytvideo.key ? (
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          />
        ) : (
          <div className="text-white text-xl">Trailer not available</div>
        )}
      </div>
    </div>
  );
}

export default Trailer;
