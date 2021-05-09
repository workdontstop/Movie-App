import React, { useState, useEffect } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, clic }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  var k = "row_posters";

  var k2 = "row_postersx";

  if (clic) {
    var k = "row_postersz";

    var k2 = "row_postersxz";
  }

  ///run once when row loads,, then dont run gagain
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // options for the youtube  preview
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //use || cause sometimes name is undefined
      // ? to protect if movie is undefined
      // using then because its a promise
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row  zeropad ">
      <div className="textcol1" style={{ marginLeft: "15px" }}>
        {" "}
        {title}{" "}
      </div>
      <div className="row_postersout   ">
        {movies.map((movie) => (
          <img
            onClick={() => handleclick(movie)}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            style={{
              cursor: "pointer",
              padding: "5px",
              paddingTop: "0.35px",
              paddingBottom: "0.35px",
            }}
            className={`${k}  ${isLargeRow && k2}`}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

{
  /*comment*/
}
{
  /* title */
}
{
  /* div */
}

{
  /* description */
}
