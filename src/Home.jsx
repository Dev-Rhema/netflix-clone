import React from "react";
import { PopularMovies } from "./assets/components/PopularMovies";
import { NowPlaying } from "./assets/components/NowPlaying";
import { TopRated } from "./assets/components/TopRated";
import { Upcoming } from "./assets/components/Upcoming";

export const Home = () => {
  return (
    <div>
      <PopularMovies />
      <TopRated />
      <NowPlaying />
      <Upcoming />
    </div>
  );
};
