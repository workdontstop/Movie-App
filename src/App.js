import "./App.css";
import React, { useState } from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./banner";
import Nav from "./nav";

function App() {
  const [clic, setClic] = useState(false);

  const boy = () => {
    setClic(!clic);
  };

  return (
    <div className="App  ">
      <div className="zeropad ">
        <div className="zeropad ">
          <div className="col-xs-12  zeropad">
            <Nav />
            <Banner />
            <Row
              clic={clic}
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <div className="zeropad3"></div>
            <Row
              clic={clic}
              title="Trending Now"
              fetchUrl={requests.fetchTopRated}
            />
            <div className="zeropad3"></div>
            <Row
              clic={clic}
              title="Top Rated"
              fetchUrl={requests.fetchTrending}
            />
            <div className="zeropad3"></div>
            <Row
              clic={clic}
              title="Action Movies"
              fetchUrl={requests.fetchActionMovies}
            />
            <div className="zeropad3"></div>
            <Row
              clic={clic}
              title="Comedy Movies"
              fetchUrl={requests.fetchComedyMovies}
            />
            <div className="zeropad3"></div>
            <Row
              clic={clic}
              title="Horror movies"
              fetchUrl={requests.fetchHorrorMovies}
            />
            <div
              onClick={boy}
              className="tur"
              style={{
                position: "fixed",
                borderRadius: "50px",
                bottom: "4em",
                right: "0px",
                cursor: "pointer",
              }}
            >
              Created By Tega Ogheneovo
            </div>
          </div>
          <div class="col-xs-12 zeropad10"> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
