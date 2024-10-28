// Overlay.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import netflixIcon from "../netflix-icon.png";

const Overlay = ({ isVisible, onClose }) => {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});
  const getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a45eaa38f656416a5855269e1970d2c7`
    )
      .then((res) => res.json())
      .then((json) => setMovie(json));
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  if (!isVisible) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <div
          className="overlayBanner"
          style={{
            backgroundImage: `url(
          https://image.tmdb.org/t/p/w500${movie.backdrop_path}
        )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            margin: "0",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <div className="overlayTexts">
            <div className="netflixFilm">
              <img src={netflixIcon} alt="netflix icon" />
              <p>FILM</p>
            </div>
            <h1 className="overlayTitle">{movie.original_title}</h1>
            <h4 className="movieTagline">{movie.tagline}</h4>
          </div>
        </div>
        <div className="overlayBody">
          <div className="overlayGroup">
            <div>
              <span>Release Date: </span>
              {`${movie.release_date}`}
            </div>
            <div className="genres">
              <span>Genre: </span>
              {`
            ${
              movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "No genres available"
            }`}
            </div>
            <div className="overlayOverwiew">
              <span>Overview: </span>
              {` ${movie.overview}`}
            </div>
          </div>
          <div className="overlayGroup">
            <div className="productionCompany">
              <span>Produced by: </span>
              {`
            ${movie.production_companies.map((company) => company.name)}`}
            </div>
            <div className="overlayRating">
              <span>Movie rating: </span>
              {` ${movie.vote_average}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
