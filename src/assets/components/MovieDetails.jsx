import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import netflixIcon from "../netflix-icon.png";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import YouTube from "react-youtube";
import { PopularMovies } from "./PopularMovies";
import Overlay from "./Overlay";

export const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});
  const [trailerId, setTrailerId] = useState([]);

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleMoreInfoClick = () => {
    setOverlayVisible(true);
  };
  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  const getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a45eaa38f656416a5855269e1970d2c7`
    )
      .then((res) => res.json())
      .then((json) => setMovie(json));
  };

  const getVideos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a45eaa38f656416a5855269e1970d2c7`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const youtubeVideo = json.results.find(
          (video) => video.site === "YouTube"
        );
        if (youtubeVideo) {
          setTrailerId(youtubeVideo.key);
        } else {
          console.error("No YouTube trailer found.");
        }
      });
  };
  useEffect(() => {
    getMovieDetails();
    getVideos();
  }, [movieId]);

  console.log(movie);
  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(
          https://image.tmdb.org/t/p/w500${movie.backdrop_path}
        )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "93vh",
          padding: "20px",
          margin: "0",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="backdropTexts">
          <div className="netflixFilm">
            <img src={netflixIcon} alt="netflix icon" />
            <p>FILM</p>
          </div>
          <h1 className="backdropTitle">{movie.original_title}</h1>
          <h2 className="movieTagline">{movie.tagline}</h2>
          <p className="backdropOverwiew">{movie.overview}</p>
          <div className="backdropButtons">
            <button className="backdropBtn">
              <Link
                to={`https://www.youtube.com/watch?v=${trailerId}`}
                target="_blank"
                className="backdropBtnLink"
              >
                <FaPlay />
                Play
              </Link>
            </button>
            <div className="ol">
              <button className="backdropBtn" onClick={handleMoreInfoClick}>
                <GoInfo />
                More Info
                <Overlay
                  isVisible={isOverlayVisible}
                  onClose={handleCloseOverlay}
                />
                <Overlay />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
