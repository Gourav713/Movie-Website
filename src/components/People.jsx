import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templets/Topnav";
import Dropdown from "./templets/Dropdown";
import axios from "../utils/Axios";
import Cards from "./templets/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
function People() {
     document.title = "MP | Person ";
     const navigate = useNavigate();
     const [category, setCategory] = useState("popular");
     const [person, setPerson] = useState([]);
     const [page, setPage] = useState(1);
     const getPerson = async () => {
       try {
         const { data } = await axios.get(`/person/${category}?page=${page}`);

         setPerson((prev) => [...prev, ...data.results]);
         setPage((prev) => prev + 1);
         //   console.log(data);
       } catch (error) {
         console.log("Error: ", error);
       }
     };
     console.log(person)
     useEffect(() => {
       setPerson([]);
       setPage(1);
       getPerson();
     }, [category]);
  return person.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className="px-[5%] w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-[#6556cd]  ri-arrow-left-long-line"
          ></i>
          People
        </h1>
        <Topnav />
        <div className="w-[2%]"></div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;
