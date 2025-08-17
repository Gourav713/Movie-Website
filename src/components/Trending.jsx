import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav"
import Dropdown from "./templets/Dropdown"
import axios from "../utils/Axios";
function Trending() {
  const [trending, setTrending] = useState(null);
  const [duration, setDuration] = useState("day");
  const [category, setCategory] = useState("all");
  
  const navigate = useNavigate();
const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/${category}/${duration}`);
    setTrending(data.results);
  } catch (error) {
    console.log("Error: ", error);
  }
};


console.log(trending)
  useEffect(()=>{
    getTrending();
  },[category,duration])

  return (
    <div className="p-[3%] w-screen h-screen">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-[#6556cd]  ri-arrow-left-long-line"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["all", "tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["Week", "day"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>
      
    </div>
  );
}

export default Trending;
