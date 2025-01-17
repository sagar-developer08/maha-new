import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CommBanner from "src/components/Common/Banner/Index";
import FaqsList from "src/components/Faqs/FaqsList/Index";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Faqs%20banner.webp";
function Faqs() {
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
          }faqs`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }faqs`}
        />
      </Helmet>
      <CommBanner title="Faqs" path="Home - Faqs" bg={banner} />
      <FaqsList />
    </div>
  );
}

export default Faqs;
