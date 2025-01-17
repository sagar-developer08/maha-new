import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import WishlistBody from "src/components/Wishlist/index";
function Wishlist() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title> Maha Hot Air Balloons in Dubai</title>
        <meta name="title" content="Maha Hot Air Balloons in Dubai" />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }wishlist`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }wishlist`}
        />
      </Helmet>
      <CommBanner title="Wishlist" path="Home - Wishlist" />
      <WishlistBody />
    </div>
  );
}

export default Wishlist;
