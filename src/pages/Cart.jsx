import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import CartBody from "src/components/Cart/index";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
function Cart() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Maha Hot Air Balloons in Dubai</title>
        <meta name="title" content=" Maha Hot Air Balloons in Dubai" />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }cart`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }cart`}
        />
      </Helmet>
      <CommBanner title="Cart" path="Home - Cart" />
      <CartBody />
    </div>
  );
}

export default Cart;
