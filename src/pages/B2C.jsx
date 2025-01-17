import React, { useEffect, useRef, useState } from "react";
import Banner from "src/components/Business/Banner/Index";
import Step1 from "src/components/Business/Step1/Index";
import FollowUS from "src/components/Business/FollowUs/Index";
import ConnectUS from "src/components/Business/Connect/Index";
import thumb1 from "src/assets//img1.jpg";
import thumb2 from "src/assets/img2.jpg";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import useAuthApi from "src/api/useAuthApi";

function B2C() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    fade: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    swipe: false,
  };
  const [formData, setFormdata] = useState({
    FName: "",
    LName: "",
    email: "",
    phone: "",
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);
  const [soicalClick, setSocialClick] = useState(0);
  // slider
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  // API
  const { PostRegister } = useAuthApi();

  const nextSlide = () => {
    if (currentSlide >= 3) {
      return;
    }
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (currentSlide === 0) {
      return;
    }
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePhoneChange = (value) => {
    setFormdata((prev) => ({ ...prev, phone: value }));
  };
  const handleRegisterSubmit = async () => {
    let UpdatedData = {};
    const passd = window.crypto.randomUUID();
    UpdatedData.first_name = formData?.FName;
    UpdatedData.last_name = formData?.LName;
    UpdatedData.email = formData?.email;
    UpdatedData.phone = formData?.phone;
    UpdatedData.password = passd;
    UpdatedData.vrify_password = passd;
    UpdatedData.role = "Customer";

    setIsRegisterLoading(true);
    if (!formData?.FName) {
      toast.error("Please Add First Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!formData?.LName) {
      toast.error("Please Add Last Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!formData?.email) {
      toast.error("Please Add Email");
      setIsRegisterLoading(false);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
      toast.error("Please Add a valid Email");
      setIsRegisterLoading(false);
      return;
    }
    if (formData?.phone?.length <= 6) {
      toast.error("Please Add a valid Whatsapp Number");
      setIsRegisterLoading(false);
      return;
    }

    const response = await PostRegister(UpdatedData);
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Registration Successfull");
      setIsRegisterLoading(false);
      setRegisterComplete(true);
      setFormdata({});
      nextSlide();
    } else {
      console.log("🚀 ~ handleRegisterSubmit ~ response:", response?.data);
      toast.error(response?.data?.error || "Something Went Wrong");
      setIsRegisterLoading(false);
    }
  };

  useEffect(() => {
    window.location.replace("https://b2c.mahaballoonadventures.ae/");
  }, []);

  return "Loading...";

  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner
        title={
          "Experience Dubai's Most Exclusive Hot Air Balloon Adventure For Free!"
        }
        subtitle={"Watch This Video To Know How! "}
      />
      <Container className="py-60">
        <Slider ref={sliderRef} {...settings}>
          <Step1
            handlePhoneChange={handlePhoneChange}
            handleChange={handleChange}
            isRegisterLoading={isRegisterLoading}
            formData={formData}
            handleSubmit={handleRegisterSubmit}
            title={<div className="title">Step 1 Register</div>}
            role={false}
          />
          <FollowUS
            img={thumb1}
            nextSlide={nextSlide}
            soicalClick={soicalClick}
            setSocialClick={setSocialClick}
          />
          <ConnectUS title={"Connect With Us On WhatsApp!"} img={thumb2} />
        </Slider>
      </Container>
    </div>
  );
}

export default B2C;
