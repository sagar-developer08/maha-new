import React from "react";
import CommBanner from "src/components/Common/Banner/Index";
import GiftOffer from "src/components/Common/GiftOffer/Index";
import FaqsComm from "src/components/Common/Faqs/Index";
import ProductList from "src/components/Shop/ProductsList/Index";
import merchandiseDat from "src/Db/merchandise";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
function Shop() {
  const { lang } = useParams();

  return (
    <div>
      <Helmet>
        <title>Shop Merchandise | Maha Hot Air Balloons Dubai</title>
        <meta
          name="title"
          content="Shop Merchandise | Maha Hot Air Balloons Dubai"
        />
        <meta
          name="description"
          content="Shop from our exclusive and captivating merchandise at Maha Hot Air Balloons in Dubai! Delightful souvenirs, perfect mementos of your unforgettable hot air balloon adventure."
        />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }merchandise`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }merchandise`}
        />
      </Helmet>
      <CommBanner title="Merchandise" path="Home - Merchandise" />
      <ProductList />
      <GiftOffer />
      <FaqsComm content={merchandiseDat?.faqsList} />
    </div>
  );
}

export default Shop;
