import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav";
import Dropdown from "./templets/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templets/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
function Movies() {

    document.title = "MP | movie ";

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const getMovie = async () => {
      try {
        const { data } = await axios.get(`/movie/${category}?page=${page}`);

        setMovie((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
        //   console.log(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    useEffect(() => {
      setMovie([]);
      setPage(1);
      getMovie();
    }, [category]);

  return movie.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className="px-[5%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-[#6556cd]  ri-arrow-left-long-line"
          ></i>
          Movie
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movies;
