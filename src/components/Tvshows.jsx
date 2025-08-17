import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav";
import Dropdown from "./templets/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templets/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
function Tvshows() {
    document.title = "MP | Tv ";

    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const getTv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);

        setTv((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
        //   console.log(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    useEffect(() => {
      setTv([]);
      setPage(1);
      getTv();
    }, [category]);

  return tv.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className="px-[5%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-[#6556cd]  ri-arrow-left-long-line"
          ></i>
          Tv
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["on_the_air", "popular", "top_rated", "airing_today"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows;
