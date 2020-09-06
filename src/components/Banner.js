import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './Banner.css';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
const randomIndex = (element) => {
  const position = Math.floor(Math.random() * element.length);
  return element[position];
};

const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1)+"..." : str;
    
}

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflix);
      const { results } = request.data;
      setMovie(randomIndex(results));
      return request;
    }
    fetchData();
  }, []);


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">
            {/* <PlayArrowIcon />  */}Play
          </button>
          <button className="banner__button"> My List</button>
        </div>

        <h1 className="banner__descrition">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
      {/* description */}
    </header>
  );
}

export default Banner;
