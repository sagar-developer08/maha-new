import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import Intro from "src/components/About/Intro/Index";
import IntroV2 from "src/components/About/IntroV2/Index";
import FeaturedIn from "src/components/About/FeaturedIn/Index";
import Safety from "src/components/About/Safety/Index";
// import OurFleet from "src/components/About/OurFleet/Index";
import OurTeam from "src/components/About/OurTeam/Index";
import OurCerti from "src/components/About/OurCertificate/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import { Helmet } from "react-helmet";
import whyusData from "src/Db/whyus";
import { useParams } from "react-router-dom";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/banner.webp";

function About() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>
          Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai
        </title>
        <meta
          name="title"
          content="Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai"
        />
        <meta
          name="description"
          content="Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }why-us`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }why-us`}
        />
      </Helmet>
      <CommBanner title="Why Us" path="Home - Why Us" bg={banner} />
      <Intro content={whyusData?.intro} />
      <FeaturedIn />
      <IntroV2 content={whyusData?.intro} />
      <Safety content={whyusData?.safetyMethods} />
      {/* <OurFleet content={whyusData?.ourFleet} /> */}
      {/* <OurTeam /> */}
      <OurCerti />
      <GiftOffer
        title={"Gift an Unforgettable Hot Air Balloon Adventure!"}
        detail={
          "Customize a package for your loved one and enjoy a FREE adventure for yourself—limited time only!"
        }
      />
      <FaqsComm content={whyusData?.faqsList} />
    </div>
  );
}

export default About;
