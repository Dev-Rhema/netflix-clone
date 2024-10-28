import React from "react";
import { PopularMovies } from "./assets/components/PopularMovies";
import { TopRated } from "./assets/components/TopRated";
import { NowPlaying } from "./assets/components/NowPlaying";
import { Upcoming } from "./assets/components/Upcoming";

export const MyList = () => {
  return (
    <div>
      <PopularMovies />
      <TopRated />
      <NowPlaying />
      <Upcoming />
    </div>
  );
};
