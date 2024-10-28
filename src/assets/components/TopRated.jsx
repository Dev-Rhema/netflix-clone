import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TopRated = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a45eaa38f656416a5855269e1970d2c7"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  // console.log(movieList);

  return (
    <>
      <div className="categoryGroup">
        <h1 className="categoryName">Top Rated Movies</h1>
        <ul className="category container">
          {movieList.map((movie) => (
            <Link key={movie.id} to={`/${movie.id}`} className="categoryItem">
              <img
                className="movieImg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
