import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";
import { TvShows } from "./TvShows";
import { NewPopular } from "./NewPopular";
import { MyList } from "./MyList";
import { Navbar } from "./assets/components/Navbar";
import { MovieDetails } from "./assets/components/MovieDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="new&popular" element={<NewPopular />} />
        <Route path="mylist" element={<MyList />} />
      </Routes>
    </>
  );
}

export default App;
