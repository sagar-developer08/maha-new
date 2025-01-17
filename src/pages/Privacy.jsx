import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import Details from "src/components/Privacy/Details/Index";

function Privacy() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Customer Privacy Policy | Maha Hot Air Balloons in Dubai</title>
        <meta
          name="title"
          content="Customer Privacy Policy | Maha Hot Air Balloons in Dubai"
        />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }privacy-policy`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }privacy-policy`}
        />
      </Helmet>{" "}
      <CommBanner title="Privacy Policy" path="Home - Privacy Policy" />
      <Details />
    </div>
  );
}

export default Privacy;
