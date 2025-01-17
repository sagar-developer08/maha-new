import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import Passengers from "src/components/Passengers";
function PassengersForm() {
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
          }passengers-details/${id}`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }passengers-details/${id}`}
        />
      </Helmet>
      <CommBanner title="Passenger Details Form" path="passengers-details" />
      <Passengers />
    </div>
  );
}

export default PassengersForm;
