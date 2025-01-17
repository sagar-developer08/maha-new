import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import Testimonial from "src/components/Common/Testimonial/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import TimeLine from "src/components/Experiences/Timeline/Index";
import OurPackages from "src/components/Experiences/OurPackages/Index";
import AdditionalServices from "src/components/Experiences/AdditionalServices/Index";
import BucketList from "src/components/Experiences/BucketList/Index";
import experiencesData from "src/Db/experiences";
import FlightOptions from "src/components/Home/FlightOption/Index";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
const bg =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/experience_banner.webp";

function Experiences() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>
          Hot Air Balloon Experiences in Dubai | Maha Balloon Adventures
        </title>
        <meta
          name="title"
          content="Hot Air Balloon Experiences in Dubai | Maha Balloon Adventures"
        />
        <meta
          name="description"
          content="Explore a range of thrilling hot air balloon experiences with Maha Balloon Adventures in Dubai. Perfect for adventure seekers, couples, and families."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }experiences`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }experiences`}
        />
      </Helmet>
      <CommBanner title="Experiences" path="Home - Experiences" bg={bg} />
      <OurPackages />
      {/* <BucketList /> */}
      {/* <TimeLine content={experiencesData?.timeLine} /> */}
      <GiftOffer title={"Contact Us for Group Bookings and Special Requests"} />
      <FlightOptions />
      <Testimonial />
      <AdditionalServices content={experiencesData?.additionalServices} />
      <FaqsComm content={experiencesData?.faqsList} />
    </div>
  );
}

export default Experiences;
