import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className=" w-full h-[8vh] relative flex justify-center items-center">
      <i className=" text-zinc-400 text-3xl ri-search-eye-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent "
        type="text"
        placeholder="Search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[70vh] ml-[7%] bg-zinc-200 top-[100%] overflow-auto">
        {searches.map((item, index) => (
          <Link
            key={index}
            className="hover:text-white hover:bg-zinc-700 duration-300 font-semibold text-zinc-600 w-[100%] p-4 flex justify-start  items-center border-b-2 border-zinc-300 "
          >
            <img
              className="w-32 h-18 object-contain overflow-auto rounded mr-5"
              src={
                item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="text-sm">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
