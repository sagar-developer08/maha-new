import React from "react";
import { Container } from "react-bootstrap";
import CommBanner from "src/components/Common/Banner/Index";
import Comp404 from "src/components/404";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
function NotFound() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Maha Hot Air Balloons in Dubai</title>
        <meta name="title" content="Maha Hot Air Balloons in Dubai" />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${lang && `${lang}/`}404`}
        />
      </Helmet>
      {/* <CommBanner title="Not Found" path="Home | 404" /> */}
      <Comp404 />
    </div>
  );
}

export default NotFound;
