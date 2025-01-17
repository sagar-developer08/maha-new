import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import BlogsList from "src/components/Blogs/BlogsList/Index";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blogs%20banner.webp";
function Blogs() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Blogs - Dubai Hot Air Balloon Adventure | Maha Balloon </title>
        <meta
          name="title"
          content="Blogs - Dubai Hot Air Balloon Adventure | Maha Balloon "
        />
        <meta
          name="description"
          content="Stay updated with the latest blogs from Maha Balloon Adventures. Learn tips, insights, and the best times for hot air balloon rides in UAE."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }blogs`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }blogs`}
        />
      </Helmet>
      <CommBanner title="Blogs" path="Home - Blogs" bg={banner} />
      <BlogsList />
      <GiftOffer />
      <FaqsComm />
    </div>
  );
}

export default Blogs;
