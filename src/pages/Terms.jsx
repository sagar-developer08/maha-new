import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import Details from "src/components/Terms/Details/Index";

function Terms() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Maha Hot Air Balloons | Get Your Aerial Adventure Ride</title>
        <meta
          name="title"
          content="Maha Hot Air Balloons | Get Your Aerial Adventure Ride"
        />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }terms`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }terms`}
        />
      </Helmet>
      <CommBanner
        title="Terms and Conditions"
        path="Home - Terms and Conditions"
      />
      <Details />
    </div>
  );
}

export default Terms;
