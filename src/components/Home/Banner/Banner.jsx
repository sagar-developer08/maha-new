import React from "react";
import { Container } from "react-bootstrap";
import BookingField from "src/components/Common/BookingField/Index";
import content from "./content";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import "./styles.scss";

function Banner() {
  // const { lang = "en" } = useParams();
  const lang = "en";
  return (
    <div className="homePageBanner">
      <Helmet>
        <meta
          name="keywords"
          content="Balloon Rides, Adventures, and More in Dubai"
        />
      </Helmet>
      <Container>
        <div className="bannerWrapper">
          <div className="content">
            <h1 className="bannerTitle desktopD3">{content?.title?.en}</h1>
            <h1 className="bannerTitle MObiled93">{content?.title_Mbl?.en}</h1>
            <p className="desktopD3">{content?.description?.en}</p>
            <p className="MObiled93">{content?.description_mbl?.en}</p>
            <BookingField />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
