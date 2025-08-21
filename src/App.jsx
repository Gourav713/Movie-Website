import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import PersonDetails from "./components/PersonDetails";
import TvDetails from "./components/tvDetails";

function App() {
  return (
    <div className=" bg-[#1f1e24] h-full w-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />}/>
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<Tvshows />}/>
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/person" element={<People />}/>
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
