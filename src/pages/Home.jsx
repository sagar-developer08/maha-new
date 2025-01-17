import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "src/components/Home/Banner/Banner";
import FeaturedIn from "src/components/Home/FeaturedIn/Index";
import WhyUs from "src/components/Home/WhyUs/Index";
import OurPackages from "src/components/Home/OurPackages/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FlightOptions from "src/components/Home/FlightOption/Index";
import Testimonial from "src/components/Common/Testimonial/Index";
// import Merchandise from "src/components/Home/Merchandise/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import BlogsComm from "src/components/Common/Blogs/Index";
import { useInView } from "react-intersection-observer";
//

import BlogListData from "src/Db/blogs";
import HomeContent from "src/Db/Home";
import { useParams } from "react-router-dom";
function Home() {
  const [BlogsData, setBlogsData] = useState([]);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const { lang = "en" } = useParams();

  useEffect(() => {
    let UpdatedBlog = BlogListData?.filter((item) => item?.page == "home");
    setBlogsData(UpdatedBlog);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE
        </title>
        <meta
          name="title"
          content="Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE"
        />
        <meta
          name="description"
          content="Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
        />
        <link rel="canonical" href={`${import.meta.env.VITE_BASE_SITEURL}/`} />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/`}
        />
      </Helmet>
      <Banner />
      <FeaturedIn />
      <div ref={ref} style={{ minHeight: "2px" }}></div>
      {inView ? (
        <>
          <WhyUs />
          <OurPackages />
          <GiftOffer
            title={"Gift an Unforgettable Hot Air Balloon Adventure Today !!"}
          />
          <FlightOptions />
          <Testimonial />
          {/* <Merchandise /> */}
          <FaqsComm
            content={HomeContent?.faqsList}
            title={"Frequently Asked Questions about Hot Air Balloons in UAE"}
          />
          <BlogsComm
            blogData={BlogsData}
            subTitle={"Tourist Guides on Things To Do In Dubai UAE"}
            title={"Blogs about things to do in Dubai"}
          />
        </>
      ) : null}
    </>
  );
}

export default Home;
