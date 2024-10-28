import React from "react";
import { PopularMovies } from "./assets/components/PopularMovies";
import { NowPlaying } from "./assets/components/NowPlaying";
import { Upcoming } from "./assets/components/Upcoming";
import { TopRated } from "./assets/components/TopRated";

export const TvShows = () => {
  return (
    <div>
      <TopRated />
      <PopularMovies />
      <NowPlaying />
      <Upcoming />
    </div>
  );
};
