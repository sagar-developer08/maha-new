import React from "react";

import "./styles.scss";
import { Link, useParams } from "react-router-dom";

function Card(props) {
  const { lang } = useParams();
  const { title, short_des, category, readTime, thumb, route } = props;
  return (
    <div
      className={`${
        props?.slider
          ? "BlogsList3CardHomepahg32 dkj30329K"
          : "BlogsList3CardHomepahg32"
      }`}
    >
      <div className="cardFlight">
        <div className="imageWrapper">
          <img src={thumb} alt="" />
        </div>
        <div className="blogType">
          <div className="category">{category?.en}</div>
          <div className="readTime">{readTime?.en}</div>
        </div>
        <div className="details mt-3">
          <div className="sec-title">{title?.en}</div>
          <p className="para mt-2">{short_des?.en}</p>
        </div>
        <Link to={`/${lang}/blog/${route}`}>
          <button className="btnNl btnNl-secondary">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
