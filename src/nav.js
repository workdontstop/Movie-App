import React, { useState, useEffect } from "react";
import imy from "./images/a.png";
import imyz from "./images/bb.png";

function Nav() {
  const [shownav, setShownav] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShownav(true);
      } else {
        setShownav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav  ${shownav && "navblack"} `}>
      <img className="nav_logo" src={imyz} alt="Netflix logo" />

      <img className="nav_avatar" src={imy} alt="Netflix logo" />
    </div>
  );
}

export default Nav;
