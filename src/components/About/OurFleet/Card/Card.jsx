import React from "react";

import "./styles.scss";
import { useParams } from "react-router-dom";

function Card(props) {
  const { lang = "en" } = useParams();

  return (
    <div
      className={`fleetOpotion3Card3i21j ${lang == "ar" ? "r_dir" : "l_dir"}`}
    >
      <div className="cardFlight">
        <div className="imageWrapper mb-4">
          <img src={props?.thumb} alt="" />
        </div>
        <div className="sec-title mb-3">{props?.title}</div>
        <div className="para pr-8">{props?.serial}</div>
        <div className="para pr-8">{props?.year}</div>
        <div className="para pr-8">{props?.capacity}</div>
      </div>
    </div>
  );
}

export default Card;
