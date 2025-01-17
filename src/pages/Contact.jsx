import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import Details from "src/components/Contact/Detail/Index";
import ContactForm from "src/components/Contact/Form/index";
import { Helmet } from "react-helmet";
import contactData from "src/Db/contact";
import { useParams } from "react-router-dom";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";
function Contact() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>
          Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai
        </title>
        <meta
          name="title"
          content="Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai"
        />
        <meta
          name="description"
          content="Reach out to Maha Balloon Adventures for inquiries or bookings. Contact us today to plan your unforgettable hot air balloon experience in Dubai."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }contact-us`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }contact-us`}
        />
      </Helmet>
      <CommBanner title="Contact Us" path="Home - Contact Us" bg={banner} />
      <Details />
      <ContactForm />
      <GiftOffer />
      <FaqsComm content={contactData?.faqsList} />
    </div>
  );
}

export default Contact;
