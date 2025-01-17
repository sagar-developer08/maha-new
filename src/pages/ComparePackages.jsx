import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import CompareMain from "src/components/ComparePackages/Index";

function ComparePackages() {
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
          }compare-packages`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }compare-packages`}
        />
      </Helmet>
      <CommBanner title="Compare Packages" path="Home - Compare Packages" />
      <CompareMain />
    </div>
  );
}

export default ComparePackages;
