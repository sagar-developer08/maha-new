import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setBooking } from "src/store/booking";
import "./styles.scss";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "src/config/general";
function Index(props) {
  const { comp } = props;
  const dispatch = useDispatch();

  return (
    <div className="giftOfferK312">
      <Container>
        <Row>
          <Col md="12" lg="6">
            <h3 className="title">
              {props?.title
                ? props?.title
                : "Gift An Unforgettable Hot Air Balloon Adventure Today"}
            </h3>
          </Col>
          <Col md="12" lg="6">
            {/* <p className="para">
              {props?.detail
                ? props?.detail
                : "Gift a loved one the memory of a lifetime. a bucket list adventure they will remeber for every"}
            </p> */}
            <div>
              {/* <button
                className="btnNl bookNow"
                onClick={() => {
                  dispatch(setBooking(true));
                }}
              >
                Book Now
              </button> */}
              <ReactWhatsapp
                className="Wtp btnNl whtsappUs mt-5"
                number={whatsappNo}
                message={` Hi There,   I am interested in Gift. Please get in touch with me to send me a customized quote.`}
              >
                WhatsApp Us
              </ReactWhatsapp>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
