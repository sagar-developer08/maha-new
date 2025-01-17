import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Banner from "src/components/Business/Banner/Index";
import Step1 from "src/components/Business/Step1/Index";
import FollowUS from "src/components/Business/FollowUs/Index";
import ConnectUS from "src/components/Business/Connect/Index";
import IduploadsForm from "src/components/Business/IduploadsForm/Index";
import useAuthApi from "src/api/useAuthApi";
import { getallusers } from "src/api/commonApi";

function B2b() {
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
  let [referralcodes, setreferralcodes] = useState([]);
  // Get all Users For Checking if Referral code Added while Registering is valid
  useEffect(() => {
    // console.log("hello bro")
    const getusers = async () => {
      try {
        const response = await getallusers();
        let temp = response.data.map((data) => data.referral_code);
        console.log(temp);
        setreferralcodes(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getusers();
  }, []);

  const [formData, setFormdata] = useState({
    FName: "",
    LName: "",
    email: "",
    phone: "",
    role: "", // initially empty to force user selection
  });
  const [respData, setRespData] = useState({ id: "" });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);
  const [soicalClick, setSocialClick] = useState(0);

  const { PostRegister, PostUploadId } = useAuthApi();
  // slider
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleRoleChange = (e) => {
    setFormdata((prev) => ({ ...prev, role: e.target.value }));
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
    UpdatedData.role = formData.role; // Pass the selected role
    UpdatedData.referral_code = formData.ReferenceCode;

    setIsRegisterLoading(true);
    console.log(UpdatedData);
    // Validation checks
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
    if (!formData?.role) {
      toast.error("Please select a role");
      setIsRegisterLoading(false);
      return;
    }
    if (
      formData.ReferenceCode != undefined &&
      !referralcodes.includes(formData.ReferenceCode)
    ) {
      toast.error("Invalid Reference Code");
      setIsRegisterLoading(false);
      return;
    }

    const response = await PostRegister(UpdatedData);
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Registration Successful");
      setIsRegisterLoading(false);
      setRegisterComplete(true);
      // setFormdata({});
      setRespData(response?.data?.user);
      nextSlide();
    } else {
      console.log("🚀 ~ handleRegisterSubmit ~ response:", response?.data);
      toast.error(response?.data?.error || "Something Went Wrong");
      setIsRegisterLoading(false);
      // toast.error("Something Went Wrong");
    }
  };

  //# upload ID
  // sending to backend APi
  const [UserIdsUpload, setUserIdsUpload] = useState({});
  // for read only
  const [UserIdsUploadForRead, setUserIdsUploadForRead] = useState({});

  const [UploadTermsAgree, setUploadTermsAgree] = useState(false);

  const [isIdUploading, setIsIdUploading] = useState(false);
  const [IdUploadComplete, setIdUploadComplete] = useState(false);

  const handleIDupload = (e) => {
    setUserIdsUpload((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
    // for Read Only
    setUserIdsUploadForRead((prev) => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleIDUploadsSubmit = async (e) => {
    e.preventDefault();
    setIsIdUploading(true);

    //! validation
    if (!UserIdsUploadForRead?.emt_id) {
      setIsIdUploading(false);
      toast.error("Please Upload Your Emirates ID / National ID");
      return;
    }
    if (!UserIdsUploadForRead?.passport_id) {
      setIsIdUploading(false);
      toast.error("Please Upload Your Passport Copy");

      return;
    }
    if (!UploadTermsAgree) {
      setIsIdUploading(false);
      toast.error("Please Accept to our Terms");

      return;
    }
    if (!respData?.id) {
      setIsIdUploading(false);
      toast.error("Invalid ID");

      return;
    }
    console.log("UserIdsUpload: ", UserIdsUpload);
    const formData = new FormData();
    // let img1 = Base64.encode(UserIdsUpload?.emt_id);
    // debugger;
    formData.append("userId", respData?.id);
    // formData.append("emt_id", img1);
    // formData.append("passport_id", img2);
    formData.append("emt_id", UserIdsUpload?.emt_id);
    formData.append("passport_id", UserIdsUpload?.passport_id);

    const formProps = Object.fromEntries(formData);
    console.log("FormData Entries: ", formProps);

    // let header = { headers: { "Content-Type": "multipart/form-data" } };
    // debugger;

    const response = await PostUploadId(formData);

    // debugger;
    console.log("🚀 ~ handleIDUploadsSubmit ~ response:", response);
    // setIsIdUploading(false);

    if (response?.status == 200 || response?.status == 201) {
      toast.success("Docs Uploaded");
      setUserIdsUpload({});
      setUserIdsUploadForRead({});
      setIdUploadComplete(true);
      setIsIdUploading(false);
      nextSlide();
    } else {
      setIsIdUploading(false);
      toast.error(response?.data?.error || "Something Went Wrong");
    }
  };

  useEffect(() => {
    window.location.replace("https://b2b.mahaballoonadventures.ae/");
  }, []);

  return "Loading...";

  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>
          Hot Air Balloon Dubai | Breathtaking Aerial Views in Dubai
        </title>
        <meta
          name="title"
          content="Hot Air Balloon Dubai | Breathtaking Aerial Views in Dubai"
        />
        <meta
          name="description"
          content="Experience the adventure of a lifetime with a hot air balloon ride in Dubai. Soar over the stunning desert landscape at sunrise and create unforgettable memories. Book your hot air balloon Dubai experience today!"
        />
      </Helmet>
      <Banner
        title={"Earn AED 10,000 Every Month as Our B2B Referral Partner!"}
        subtitle={"Watch This Video To Know How! "}
      />
      <Container className="py-60">
        <Slider ref={sliderRef} {...settings}>
          <Step1
            handlePhoneChange={handlePhoneChange}
            handleChange={handleChange}
            handleRoleChange={handleRoleChange}
            isRegisterLoading={isRegisterLoading}
            formData={formData}
            role={true}
            title={
              <>
                <div className="title">Step 1 </div>
                <div className="title">Register as a Referral Partner</div>
              </>
            }
            handleSubmit={handleRegisterSubmit}
          />
          {/* <IduploadsForm
            Currentb2bType={formData?.role}
            handleChange={handleIDupload}
            UserIdsUploadForRead={UserIdsUploadForRead}
            UploadTermsAgree={UploadTermsAgree}
            setUploadTermsAgree={setUploadTermsAgree}
            isIdUploading={isIdUploading}
            handleIDUploadsSubmit={handleIDUploadsSubmit}
          /> */}
          {/* Dropdown for selecting the role */}
          {/* <div className="mb-4">
            <label>Select Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              className="form-control"
            >
              <option value="" disabled>
                -- Select a Role --
              </option>
              <option value="B2B Individual">B2B Individual</option>
              <option value="B2B Influencer">B2B Influencer</option>
              <option value="B2B Company">B2B Company</option>
            </select>
          </div> */}
          <FollowUS
            nextSlide={nextSlide}
            soicalClick={soicalClick}
            setSocialClick={setSocialClick}
          />

          <ConnectUS
            title={
              "Connect With Us On WhatsApp To Receive Your Unique Referral Link!"
            }
            nextSlide={nextSlide}
          />
        </Slider>
      </Container>
    </div>
  );
}

export default B2b;
