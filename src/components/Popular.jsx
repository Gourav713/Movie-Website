import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav";
import Dropdown from "./templets/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templets/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {

  document.title = "MP | Popular ";

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      setPopular((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
      //   console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    setPopular([]);
    setPage(1);
    getPopular();
  }, [category]);

  return popular.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className="px-[5%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-[#6556cd]  ri-arrow-left-long-line"
          ></i>
          Popular
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
