import React from "react";
import { PopularMovies } from "./assets/components/PopularMovies";
import { Upcoming } from "./assets/components/Upcoming";
import { TopRated } from "./assets/components/TopRated";
import { NowPlaying } from "./assets/components/NowPlaying";

export const Movies = () => {
  return (
    <div>
      <Upcoming />
      <TopRated />
      <PopularMovies />
      <NowPlaying />
    </div>
  );
};
