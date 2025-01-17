import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import Details from "src/components/ProductDetails/Details/Index";
import SuggestedProducts from "src/components/ProductDetails/Suggested/Index";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { lang, id } = useParams();

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
          }merchandise/${id}`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }merchandise/${id}`}
        />
      </Helmet>
      <CommBanner title="Merchandise" path="Home - Merchandise" />
      <Details />
      <SuggestedProducts />
      <GiftOffer />
      <FaqsComm />
    </div>
  );
}

export default ProductDetails;
