import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import BlogDetails from "src/components/BlogDetails/Details/Index";
import BlogsRelated from "src/components/BlogDetails/BlogsRelated/Index";
import { useInView } from "react-intersection-observer";
import ReisterFormModal from "src/components/BlogDetails/DiscountPop/Index";
import { useParams } from "react-router-dom";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blog%20Inner%20banner.webp";

function BlogInner() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
    delay: 300,
  });

  const [FormModalShow, setFormModalShow] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setFormModalShow(true);
    }
  }, [inView]);

  return (
    <div>
      <CommBanner title="Blogs" path="Home - Blogs" bg={banner} />
      <BlogDetails />
      <BlogsRelated />
      <GiftOffer />
      <FaqsComm />
      {/*  */}
      <ReisterFormModal show={FormModalShow} setShow={setFormModalShow} />
      <div ref={ref} style={{ minHeight: "20px" }}></div>
    </div>
  );
}

export default BlogInner;
