import React from "react";
import prod1 from "src/assets/Products/prod1.jpg";
import "./styles.scss";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useCart from "src/Hook/useCart";

function Index(props) {
  const { lang = "en" } = useParams();
  // const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addItemstoCart } = useCart();

  return (
    <div
      className={`ProductListingDCardKk3 ${props?.slider ? "slidersps" : ""} ${
        lang == "ar" ? "r_dir" : "l_dir"
      }`}
      {...props}
    >
      <div className="cardProd">
        <div className="imageWrapper">
          <Link to={`/${lang}/merchandise/ds`}>
            <img src={props?.product?.thumb} alt="" />
          </Link>
        </div>
        <Link to={`/${lang}/merchandise/ds`}>
          <div className="namePrice mt-2">
            <div className="name">{props?.product?.name}</div>
            <div className="price">{props?.product?.price}</div>
          </div>
        </Link>
        <div className="colors">{props?.product?.category}</div>
        <button
          className="btnNl btnNl-secondary w-100 mt-3"
          onClick={() => addItemstoCart(props?.product)}
        >
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Index;
