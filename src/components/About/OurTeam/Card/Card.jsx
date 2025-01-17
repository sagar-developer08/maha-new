import React from "react";

import "./styles.scss";
import { useParams } from "react-router-dom";

function Card(props) {
  const { lang = "en" } = useParams();

  return (
    <div className={`ourTeamCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`}>
      <div className="cardFlight">
        <div className="imageWrapper mb-4">
          <img src={props?.thumb} alt="" />
        </div>
        <div className="name mb-1">{props?.name}</div>
        <div className="para mb-3">{props?.role}</div>
        {/* <div className="social">
          {props?.social?.map((item) => (
            <div>
              <a href={item?.link}>{item?.icon}</a>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Card;
