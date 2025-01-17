import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import BlogsComm from "src/components/Common/Blogs/Index";
import SightSeeing from "src/components/ThingsToDo/OurPackages/Index";
import banner from "src/assets/Banner/Things To Do In Dubai banner.webp";
// details

import { Helmet } from "react-helmet";
import content from "src/Db/thingsTodo";
import { useParams } from "react-router-dom";

function ThingsToDo() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>
          Best Things to Do in Dubai | Outdoor Activities | Maha Balloon
        </title>
        <meta
          name="title"
          content="Best Things to Do in Dubai | Outdoor Activities | Maha Balloon"
        />
        <meta
          name="description"
          content="Explore the Best Things To Do in Dubai! From the Burj Khalifa and Dubai Mall to Desert Safaris and Nightlife, Discover unforgettable Outdoor Activities."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }things-to-do`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }things-to-do`}
        />
      </Helmet>
      <CommBanner
        title="Things To Do In Dubai"
        path="Home - Things To Do In Dubai"
        bg={banner}
      />

      <SightSeeing
        cardData={content?.sightSeeing1}
        title={{ en: "Discover the Best Things to Do in Dubai" }}
      />
      <SightSeeing
        cardData={content?.sightSeeing2}
        title={{
          en: "From Hot Air Balloon Rides to Desert Safaris: Dubai's Top Experiences",
        }}
      />
      <SightSeeing
        cardData={content?.sightSeeing3}
        title={{ en: "Must-Visit Attractions for Every Visitor" }}
      />
      <SightSeeing
        cardData={content?.sightSeeing4}
        title={{ en: "Tours and Safaris" }}
      />
      <GiftOffer />
      <FaqsComm content={content?.faqsList} />
      <BlogsComm />
    </div>
  );
}

export default ThingsToDo;
