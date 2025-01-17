import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import GalleryList from "src/components/Testimonials/GalleryList/Index";
import { Helmet } from "react-helmet";
import testimonial from "src/Db/testimonial";
import { useParams } from "react-router-dom";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";

function Testimonial() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Testimonials | Hot Air Balloons in Dubai | Maha Balloons</title>
        <meta
          name="title"
          content="Testimonials | Hot Air Balloons in Dubai | Maha Balloons"
        />
        <meta
          name="description"
          content="Read reviews and testimonials from our satisfied customers. See why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }testimonial`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }testimonial`}
        />
      </Helmet>
      <CommBanner title="Testimonials" path="Home - Testimonials" bg={banner} />
      <GalleryList />
      <GiftOffer />
      <FaqsComm content={testimonial?.faqsList} />
    </div>
  );
}

export default Testimonial;
