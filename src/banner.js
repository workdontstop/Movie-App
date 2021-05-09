import React, { useState, useEffect } from "react";
import axios from "./axios";
import requestx from "./requests";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestx.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents   ">
        <h1 className="banner_title  zuperking" style={{ marginLeft: "-12px" }}>
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="col-xs-12" style={{ marginLeft: "-15px" }}>
          <div className="banner_buttons"></div>

          <button className="banner_button">Play</button>

          <button className="banner_button">My List</button>
        </div>
        <div class="col-xs-12 zeropad1"> </div>
        <h1
          className="banner_description  col-xs-12   zuperking"
          style={{ textAlign: "left" }}
        >
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner_fadebottom col-xs-12 "></div>
    </header>
  );
}

export default Banner;
