import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "src/components/DrSliderArrows/Index";
import ModalVideo from "react-modal-video";
import useWindowSize from "src/Hook/useWindowSize";
import { IoIosCloseCircle } from "react-icons/io";
import useOutsideAlerter from "src/Hook/useOutsideAlerter";
import "./styles.scss";

const imgt1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/testimonial.jpg";
// testimonial
const testimonial1 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials1.webp";
const testimonial2 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials2.webp";
const testimonial3 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials3.webp";
const testimonial4 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials4.webp";
const testimonial5 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials5.webp";
const testimonial6 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials6.webp";
const testimonial7 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials7.webp";
  const testimonial8 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/filipino.jpg";
const testimonial9 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/german+couple+.jpg";
const testimonial10 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/german+girl.jpg";
const testimonial11 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/indian+family.jpg";
const testimonial12 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/indian+family.jpg";
const testimonial13 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/MBA+27nov+thumbnail+copy.jpg";
const testimonial14 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/MBA+27nov+thumbnail+copy.jpg";
const testimonial15 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/MBA-2-29nov-thumbnail.jpg";
const testimonial16 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/arabic.jpg";
const testimonial17 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/chinies+2.jpg";
const testimonial18 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/russian+girl.jpg";
const testimonial19 =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/russian+man+.jpg";

function Index(props) {
  const { content } = props;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let cardData = [
    {
      id: 1,
      thumb: testimonial1,
      date: "January 31, 2024",
      title: "Amazing journey!",
      details:
        "I had an exciting sky journey. The pilot was respectful, experienced, and funny, making the balloon ride simple and enjoyable. I would recommend this company; you can trust them.",
      author: "Ajay",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Ajay%20Family_V1.mp4",
    },
    {
      id: 2,
      thumb: testimonial2,
      date: "December 4, 2023",
      title: "Best Experience",
      details:
        "This was one of my favorite experiences while in Dubai. Everyone was very nice and accommodating. They enjoyed taking pictures and videos for us to capture our memories. I would 10/10 recommend this place again! All of the staff were excellent.",
      author: "Danielle J",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha_story_04.mp4",
    },
    {
      id: 3,
      thumb: testimonial3,
      date: "December 4, 2023",
      title: "Exciting experience with Maha Balloons",
      details:
        "It was a wonderful experience with Maha’s hot air balloon. We got to see the sunrise by flying at the highest altitude possible of 4000 ft. Excellent and seamless customer service from Regina and great hospitality from Julie. I recommend Maha Balloons if you are interested in experiencing a hot air balloon flight.",
      author: "Suhail Ismail",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Yara Family_V1.mp4",
    },
    {
      id: 4,
      thumb: testimonial4,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: `Excellent service Nice and super friendly staff\n
Amazing pilots\n
Excellent service with a nice and super friendly staff. The pilots were amazing! Special thanks to Ms. Julie and Ms. Regina for making our trip memorable. You guys are amazing!
`,
      author: "Shweta Dubey",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Dellany_V1.mp4",
    },
    {
      id: 5,
      thumb: testimonial7,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maya_story_03.mp4",
    },
    {
      id: 6,
      thumb: testimonial6,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha Story_02.mp4",
    },
    {
      id: 7,
      thumb: testimonial5,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "Parag",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Parag_V1.mp4",
    },
    {
      id: 8,
      thumb: testimonial8,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Filpino.mp4",
    },
    {
      id: 9,
      thumb: testimonial9,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/German+male.mp4",
    },
    {
      id: 10,
      thumb: testimonial10,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/German+Female.mp4",
    },
    {
      id: 11,
      thumb: testimonial11,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Indian+Female.mp4",
    },
    {
      id: 12,
      thumb: testimonial12,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Indian+Male.mp4",
    },
    {
      id: 13,
      thumb: testimonial13,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Italian+Female.mp4",
    },
    {
      id: 14,
      thumb: testimonial14,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Italian+Male.mp4",
    },
    {
      id: 15,
      thumb: testimonial15,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Arabic+Female.mp4",
    },
    {
      id: 16,
      thumb: testimonial16,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Arabic+Male.mp4",
    },
    {
      id: 17,
      thumb: testimonial17,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Chinese+Male+2.mp4",
    },
    {
      id: 18,
      thumb: testimonial18,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Russian+Female.mp4",
    },
    {
      id: 19,
      thumb: testimonial19,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Russian+male.mp4",
    },
  ];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoPoster, setVideoPoster] = useState("");
  const wrapperRef = useRef();
  const videoRef = useRef();

  const handleOpen = async (link, poster) => {
    await setVideoPoster(poster);
    await setVideoLink(link);
    setVideoOpen(true);
    videoRef.current.play();
  };
  const handleClose = () => {
    setVideoPoster("");
    setVideoLink("");
    setVideoOpen(false);
    videoRef.current.pause();
  };

  useEffect(() => {
    if (videoLink) {
      videoRef.current.play();
    }
  }, [videoLink]);

  useEffect(() => {
    useOutsideAlerter(wrapperRef, handleClose);
  }, [wrapperRef]);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const { width } = useWindowSize();
  let toCut = width > 992 ? 4 : width >= 776 ? 3 : 1;
  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= cardData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="TestimonialHOmepage23 py-60">
      <Container>
        <h2 className="tag-line mb-3">
          Customer Feedback about the best hot air balloon in Uae
        </h2>
        <Row>
          <Col md={12} lg={12}>
            <h3 className="main-title mb-3">Customer Testimonials</h3>
          </Col>
          {/* <Col className="sliderArrows" md={12} lg={4}>
            <div className="sliderArrows slider_pd-end">
              <DrSliderArrows
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              />
            </div>
          </Col> */}
        </Row>

        <div className="SliderWrapper3 mt-3 mt-md-5">
          {/* <div className="arrowslic22dernext">
            <NextArrow />
          </div>
          <div className="arrowslic22derprev">
            <PrevArrow />
          </div> */}
          {content?.length ? (
            <>
              <Slider ref={sliderRef} {...settings}>
                {content?.map((item, i) => (
                  <Card
                    {...item}
                    currentSlide={currentSlide}
                    index={i}
                    handleopen={handleOpen}
                  />
                ))}
              </Slider>
            </>
          ) : (
            <>
              <Slider ref={sliderRef} {...settings}>
                {cardData?.map((item, i) => (
                  <Card
                    {...item}
                    currentSlide={currentSlide}
                    index={i}
                    handleopen={handleOpen}
                  />
                ))}
              </Slider>
            </>
          )}
        </div>
        <div className="d-flex justify-content-between justify-content-lg-end align-content-center  mt-5">
          {content?.length ? (
            <div className="dots">
              {content?.map((item, i) => (
                <div
                  className={`dot ${currentSlide == i ? "active" : null}`}
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.slickGoTo(i);
                      setCurrentSlide(i);
                    }
                  }}
                ></div>
              ))}
            </div>
          ) : (
            <div className="dots">
              {cardData?.map((item, i) => (
                <div
                  className={`dot ${currentSlide == i ? "active" : null}`}
                  onClick={() => {
                    if (sliderRef.current) {
                      console.log("🚀 ~ Index ~ sliderRef:", sliderRef, i);

                      sliderRef.current.slickGoTo(i);
                      setCurrentSlide(i);
                    }
                  }}
                ></div>
              ))}
            </div>
          )}
          <div className="sliderArrows sliderMobile">
            <DrSliderArrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            />
          </div>
        </div>
      </Container>
      {videoLink ? (
        <div className={`${"cst_modal"}`} ref={wrapperRef}>
          <div className="closeIcon_wrapper">
            <div className="closeIcon" onClick={() => handleClose()}>
              <IoIosCloseCircle className="closeIcon" size={35} />
            </div>
          </div>
          <video
            autoPlay
            playsInline
            controls
            preload="metadata"
            ref={videoRef}
          >
            <source
              poster={videoPoster}
              src={videoLink}
              // src={ReferalVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}

      {/* <ModalVideo
        channel={videoType}
        isOpen={videoOpen}
        videoId={videoLink}
        onClose={() => setVideoOpen(false)}
        allowFullScreen={true}
        portrait={false}
        ratio="16:19"
      /> */}
    </div>
  );
}

export default Index;
