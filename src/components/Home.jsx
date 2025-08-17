import React, { useEffect, useState } from "react";
import Sidenav from "./templets/Sidenav";
import Topnav from "./templets/Topnav";
import axios from "../utils/Axios";
import Header from "./templets/Header";
import HorizontalCards from "./templets/HorizontalCards";
import Dropdown from "./templets/Dropdown";
import Loading from "./Loading";
const Home = () => {
  document.title = "MP | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category,setCategory]=useState("all");




  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };



  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };



  
  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />
        <div className="mb-2 flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}/>
        </div>
        <HorizontalCards data={trending}/>
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
