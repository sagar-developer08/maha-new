import React, { useState, useEffect, useContext } from "react";
import { lazy, Suspense } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LangContext from "src/utils/LanguageContext";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import { FaAngleRight, FaSearch } from "react-icons/fa";
// import serviceImg from "src/assets/Navbar/maha.png";
// import AuthComp from "src/components/Common/Auth/Index";
// import CustomerAuthComp from "src/components/Common/CustomerAuth/Index";
const cart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/cart.svg";
const heart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/heart.svg";
const person = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/person.svg";
const avatar = "https://d3gelo9cifr8ed.cloudfront.net/avatar.png";
const navLogo = "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png";
const logo = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";
const AuthComp = lazy(() => import("src/components/Common/Auth/Index"));
const CustomerAuthComp = lazy(() =>
  import("src/components/Common/CustomerAuth/Index")
);
const Booking = lazy(() => import("src/components/Booking/Index"));

// import { MdOutlineLanguage } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import useSize from "src/utils/useSize";
import { useAnimate } from "framer-motion";
// import { clearCart } from "src/store/cart";
import { LogOutUser } from "src/store/auth";

// scss
import "./style.scss";
import { MdOutlineLanguage } from "react-icons/md";

const MainNavbar = () => {
  const { pathname } = useLocation();
  let { lang: NavLang } = useParams();
  const cartItems = useSelector((state) => state.cart.products);
  const UserData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isBookingModal = useSelector((state) => state.booking.isBookingModal);

  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(LangContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [CustomermodalShow, setCustomerModalShow] = React.useState(false);
  //
  const [showDropDownDesk, setshowDropDownDesk] = React.useState(false);
  const [showDropDownDeskAvatr, setshowDropDownDeskAvatr] =
    React.useState(false);

  const { height, width } = useSize();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (NavLang == "en" || NavLang == "ar") {
      setLang(NavLang);
    }
  }, []);

  useEffect(() => {
    animate("span", { scale: [1, 2, 1] }, { duration: 0.5 });
  }, [cartItems?.length]);

  let [searchParams, setSearchParams] = useSearchParams();
  const userRef = searchParams.get("referral");

  useEffect(() => {
    localStorage.setItem("referral_code", userRef);
  }, [userRef]);

  // Todo: Remove Window Open and Return
  const handleLogin = () => {
    // window.open(`https://b2b-maha-balloons.prismcloudhosting.com/`, "_blank");
    // return;
    setModalShow(true);
  };
  // Todo: Remove Window Open and Return
  const handleCustomerLogin = () => {
    // window.open(`https://b2c-maha-balloons.prismcloudhosting.com/`, "_blank");
    // return;
    setCustomerModalShow(true);
  };
  const [hoveredItem, setHoveredItem] = useState({
    section: "experiences",
    item: null,
  });

  const handleLanguageChange = (value) => {
    setLang(value);
    let paths = pathname.split("/");
    let langsData = ["en", "ar"];
    if (langsData?.includes(paths?.[1])) {
      let newPath = [...paths];
      newPath[1] = value;
      let CombinePath = newPath.join("/");
      navigate(CombinePath);
    } else {
      navigate(`/${value}${pathname}`);
    }
    setshowDropDownDesk(false);
  };
  const closeToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse";
  };
  const OpenToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse show";
  };
  const handleMouseEnter = (section, item) => {
    setHoveredItem({ section, item });
  };

  const handleMouseLeave = () => {
    setHoveredItem({ section: "experiences", item: null });
  };

  const TogglerLang = () => {
    setshowDropDownDesk(!showDropDownDesk);
  };
  const getContent = (section, item) => {
    const content = {
      experiences: {
        all: {
          title: { en: "All Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "standard-balloon-rides": {
          title: { en: "Standard Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "luxury-balloon-rides": {
          title: { en: "Luxury Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "private-balloon-rides": {
          title: { en: "Private Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "special-packages": {
          title: { en: "Special Packages", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
      },
      // merchandise: {
      //   products: {
      //     title: { en: "Products", ar: "" },
      //     description: {
      //       en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      //       ar: "",
      //     },
      //   },
      // },
    };

    return (
      content[section][item] || {
        title: { en: "", ar: "" },
        description: { en: "", ar: "" },
      }
    );
  };

  const { section, item } = hoveredItem;
  const content = getContent(section, item);

  useEffect(() => {}, []);

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AuthComp
          show={modalShow}
          setShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </Suspense>
      {/* cust log */}
      {CustomermodalShow ? (
        <Suspense fallback={"Loading..."}>
          <CustomerAuthComp
            show={CustomermodalShow}
            onHide={() => setCustomerModalShow(false)}
          />
        </Suspense>
      ) : null}
      <Suspense fallback={"Loading..."}>
        <Booking />
      </Suspense>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${
          scrolled ? "fixed-top BgScroll" : "fixed-top"
        } ${lang === "ar" ? "r_dir" : "l_dir"}`}
      >
        <Container fluid={width <= 1200 ? true : false}>
          {/* //# brand navbar */}
          <Navbar.Brand as={Link} to={`/${lang}`}>
            <div className="brandWrapper">
              <img
                className="imageWrapper"
                src={navLogo}
                alt="logo"
                width="180px"
              />
              <img
                src={logo}
                alt="Logo"
                className="imageWrapper MobilNavLogo"
              />
            </div>
          </Navbar.Brand>
          <div className="d-flex gap-1">
            {/* <div className="mobile_nav_icon">
            <Navbar>
              <Nav>
                <select
                  className="language_select"
                  aria-label="Language"
                  onChange={handleLanguageChange}
                  value={lang}
                >
                  <option value="en">En</option>
                  <option value="ar">AR</option>
                </select>
              </Nav>
            </Navbar>
          </div> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* //# Mobile Nav Icons */}
            <div className="NavBtMobl">
              <div className="iconsWrapper IconMobile">
                {/* <Dropdown
                  className={`lang_dropdown lang_dropdownMobil borderEnd ${
                    lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                  }`}
                  show={showDropDownDesk}
                >
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    // onClick={TogglerLang}
                    onClick={() => {
                      setshowDropDownDesk(!showDropDownDesk);
                      setshowDropDownDeskAvatr(false);
                    }}
                  >
                    <MdOutlineLanguage size={25} />
                  </Dropdown.Toggle>
                  {showDropDownDesk ? (
                    <Dropdown.Menu className="dropItemsList">
                      <Dropdown.Item disabled>Language</Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleLanguageChange("en")}
                        className={
                          lang === "en" ? "active langItem" : "langItem"
                        }
                      >
                        <GoDot className="icon_lang" />
                        English
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleLanguageChange("ar")}
                        className={
                          lang === "ar" ? "active langItem" : "langItem"
                        }
                      >
                        <GoDot className="icon_lang" />
                        Arabic
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  ) : null}
                </Dropdown> */}

                <div
                  className="icons2"
                  onClick={() => {
                    navigate(`/${lang}/wishlist`);
                  }}
                >
                  <span>0</span>
                  {/* <img className="icns" src={heart} alt="" /> */}
                  <FaRegHeart size={20} />
                </div>
                <div
                  ref={scope}
                  className=" icons2"
                  onClick={() => {
                    // dispatch(clearCart());
                    navigate(`/${lang}/cart`);
                  }}
                >
                  <span>{cartItems?.length}</span>
                  {/* <img className="icns" src={cart} alt="" /> */}
                  <IoCartOutline size={25} />
                </div>
                <div
                  className="icons1"
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleCustomerLogin(e);
                  }}
                >
                  {/* <img className="icns" src={heart} alt="" /> */}
                  {UserData?.isAuth ? (
                    <>
                      <Dropdown
                        className={`lang_dropdown lang_dropdownMobil ${
                          lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                        }`}
                        show={showDropDownDeskAvatr}
                      >
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic2"
                          // onClick={TogglerLang}
                          onClick={() => {
                            setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                            setshowDropDownDesk(false);
                          }}
                        >
                          <img
                            src={avatar}
                            alt=""
                            height={25}
                            width={25}
                            className="avatrk"
                          />
                        </Dropdown.Toggle>
                        {showDropDownDeskAvatr ? (
                          <Dropdown.Menu className="dropItemsList">
                            <Dropdown.Item
                              onClick={() => dispatch(LogOutUser())}
                              className={
                                lang === "en"
                                  ? "langItem link_Itemsk"
                                  : "langItem link_Itemsk"
                              }
                            >
                              <GoDot className="icon_lang" />
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        ) : null}
                      </Dropdown>
                    </>
                  ) : (
                    <FaRegUser size={20} />
                  )}
                </div>
              </div>
              {UserData?.isAuth ? (
                ""
              ) : (
                <button
                  className={
                    scrolled
                      ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                      : "btnNl btnNl-primary logBtn"
                  }
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleLogin(e);
                  }}
                >
                  B2B Login
                </button>
              )}
            </div>
            {/* //# Nav Items */}

            <Nav className="mx-auto">
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/why-us`}
                className={`nav-item ${
                  pathname === `/${lang}/why-us` && "active"
                }`}
              >
                {lang == "ar" ? "Why Us" : "Why Us"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/experiences`}
                className={`nav-item ${
                  pathname === `/${lang}/experiences` && "active"
                }`}
              >
                {lang == "ar" ? "Experiences" : "Experiences"}
              </Nav.Link>
              {/* <NavDropdown
              title={lang == "ar" ? "" : "Experiences"}
              id="experiences-dropdown"
            >
              {/* <Container> */}
              {/* <div
                className={
                  lang == "ar"
                    ? "d-flex justify-content-between align-items-start r_dir"
                    : "d-flex justify-content-between align-items-start"
                }
              >
                <div className="dropdown-links-style dropdown-links-style-dropDs me-3">
                  <NavDropdown.Item
                    onMouseEnter={() => handleMouseEnter("experiences", "all")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/experiences/all`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences/all` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "All"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "standard-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/experiences/rides`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Standard Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "luxury-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Luxury Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "private-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Private Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "special-packages")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Special Packages"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                </div>
                <div className="content_wrap">
                  <div className="nav_content_sec">
                    <h3>
                      {content.title[lang]
                        ? content.title[lang]
                        : lang == "ar"
                        ? ""
                        : "Standard Balloon Rides"}{" "}
                      <FaAngleRight className="angle-arrow" />{" "}
                    </h3>
                    <p>
                      {content.description[lang]
                        ? content.description[lang]
                        : lang == "ar"
                        ? ""
                        : "Soar above the stunning landscapes of Dubai with our unforgettable hot air balloon rides. Discover breathtaking views, serene skies, and the adventure of a lifetime. Book your flight today and see Dubai like never before!"}
                    </p>
                  </div>
                </div>
                <div className="img_wrap">
                  <figure>
                    <img src={serviceImg} alt="service" />
                  </figure>
                </div>
              </div> */}
              {/* </Container> */}
              {/* </NavDropdown>   */}
              {/* new dropdonw */}
              {/* <NavDropdown
              title={lang == "ar" ? "" : "Merchandise"}
              id="merchandise-dropdown"
            >
              {/* <Container> */}
              {/* <div
                className={
                  lang == "ar"
                    ? "d-flex justify-content-between align-items-start r_dir"
                    : "d-flex justify-content-between align-items-start"
                }
              >
                <div className="dropdown-links-style dropdown-links-style-dropDs me-3">
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("merchandise", "merchandise")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      to={`/${lang}/merchandise`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/merchandise` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Merchandise"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                </div>
                <div className="content_wrap">
                  <div className="nav_content_sec">
                    <h3>
                      {content.title[lang]
                        ? content.title[lang]
                        : lang == "ar"
                        ? ""
                        : "Standard Balloon Rides"}{" "}
                      <FaAngleRight className="angle-arrow" />{" "}
                    </h3>
                    <p>
                      {content.description[lang]
                        ? content.description[lang]
                        : lang == "ar"
                        ? ""
                        : "Soar above the stunning landscapes of Dubai with our unforgettable hot air balloon rides. Discover breathtaking views, serene skies, and the adventure of a lifetime. Book your flight today and see Dubai like never before!"}
                    </p>
                  </div>
                </div>
                <div className="img_wrap">
                  <figure>
                    <img src={serviceImg} alt="service" />
                  </figure>
                </div>
              </div> */}
              {/* </Container> */}
              {/* </NavDropdown>  */}
              {/* <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/merchandise`}
                className={`nav-item ${
                  pathname === `/${lang}/merchandise` && "active"
                }`}
              >
                {lang == "ar" ? "Merchandise" : "Merchandise"}
              </Nav.Link> */}
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/things-to-do`}
                className={`nav-item ${
                  pathname === `/${lang}/things-to-do` && "active"
                }`}
              >
                {lang == "ar"
                  ? "Things To Do In Dubai"
                  : "Things To Do In Dubai"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/testimonial`}
                className={`nav-item ${
                  pathname === `/${lang}/testimonial` && "active"
                }`}
              >
                {lang == "ar" ? "Testimonials" : "Testimonials"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/blogs`}
                className={`nav-item ${
                  pathname === `/${lang}/blogs` && "active"
                }`}
              >
                {lang == "ar" ? "Blogs" : "Blogs"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                to={`/${lang}/contact-us`}
                className={`nav-item ${
                  pathname === `/${lang}/contact-us` && "active"
                }`}
              >
                {lang == "ar" ? "Contact Us" : "Contact Us"}
              </Nav.Link>
            </Nav>
            <Nav className="desktop_nav_icon">
              {/* <Nav.Link href="#en">En</Nav.Link> */}
              {/* <Nav>
                <select
                  className="language_select"
                  aria-label="Language"
                  onChange={handleLanguageChange}
                  value={lang}
                >
                  <option value="en">En</option>
                  <option value="ar">AR</option>
                </select>
              </Nav> */}
              <div className="d-flex justify-content-end align-items-center w-100">
                {/* //# Desktop Nav Icons */}

                <div className="iconsWrapper">
                  <div
                    className="icons1"
                    onClick={() => {
                      navigate(`/${lang}/wishlist`);
                    }}
                  >
                    <img className="icns" src={heart} alt="" />
                  </div>
                  <div
                    className="icons1"
                    onClick={(e) => {
                      if (UserData?.isAuth) {
                        return;
                      }
                      handleCustomerLogin(e);
                    }}
                  >
                    {UserData?.isAuth ? (
                      <>
                        <Dropdown
                          className={`lang_dropdown lang_dropdownMobil ${
                            lang === "ar"
                              ? "lang_dropdownAr"
                              : "lang_dropdownEn"
                          }`}
                          show={showDropDownDeskAvatr}
                        >
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basicdd"
                            // onClick={TogglerLang}
                            onClick={() => {
                              setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                              setshowDropDownDesk(false);
                            }}
                          >
                            <img
                              src={avatar}
                              alt=""
                              height={25}
                              width={25}
                              className="avatrk"
                            />
                          </Dropdown.Toggle>
                          {showDropDownDeskAvatr ? (
                            <Dropdown.Menu className="dropItemsList">
                              <Dropdown.Item
                                onClick={() => dispatch(LogOutUser())}
                                className={
                                  lang === "en"
                                    ? "langItem link_Itemsk"
                                    : "langItem link_Itemsk"
                                }
                              >
                                <GoDot className="icon_lang" />
                                Logout
                              </Dropdown.Item>

                              {/* <Dropdown.Item
                                className="link_Itemsk"
                                onClick={() => dispatch(LogOutUser())}
                              >
                                Logout
                              </Dropdown.Item> */}
                            </Dropdown.Menu>
                          ) : null}
                        </Dropdown>
                      </>
                    ) : (
                      <img className="icns" src={person} alt="" />
                    )}
                  </div>
                  <div
                    className="icons2"
                    ref={scope}
                    onClick={() => {
                      navigate(`/${lang}/cart`);

                      // dispatch(clearCart());
                    }}
                  >
                    <span>{cartItems?.length}</span>
                    <img className="icns" src={cart} alt="" />
                  </div>
                </div>
                <div className="btnWrapper">
                  {/* <Nav>
                    <Dropdown
                      className={`lang_dropdown ${
                        lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                      }`}
                      show={showDropDownDesk}
                    >
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        // onClick={TogglerLang}
                        onClick={() => {
                          setshowDropDownDesk(!showDropDownDesk);
                          setshowDropDownDeskAvatr(false);
                        }}
                      >
                        <MdOutlineLanguage size={20} />
                      </Dropdown.Toggle>
                      {showDropDownDesk ? (
                        <Dropdown.Menu className="dropItemsList">
                          <Dropdown.Item disabled>Language</Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("en")}
                            className={
                              lang === "en" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            English
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("ar")}
                            className={
                              lang === "ar" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            Arabic
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      ) : null}
                    </Dropdown>
                  </Nav> */}
                  {UserData?.isAuth ? (
                    ""
                  ) : (
                    <button
                      className={
                        scrolled
                          ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                          : "btnNl btnNl-primary logBtn"
                      }
                      onClick={(e) => {
                        if (UserData?.isAuth) {
                          return;
                        }
                        handleLogin(e);
                      }}
                    >
                      B2B Login
                    </button>
                  )}
                </div>
              </div>
              {/* <Nav.Link href="#search">
              <FaSearch fontSize={"20px"} />
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <div className="NavBtMobl">
          <Dropdown
            className={`lang_dropdown lang_dropdownMobil ${
              lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
            }`}
            show={showDropDownDesk}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              // onClick={TogglerLang}
              onClick={() => setshowDropDownDesk(!showDropDownDesk)}
            >
              <MdOutlineLanguage size={20} />
            </Dropdown.Toggle>
            {showDropDownDesk ? (
              <Dropdown.Menu className="dropItemsList">
                <Dropdown.Item disabled>Language</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange("en")}
                  className={lang === "en" ? "active langItem" : "langItem"}
                >
                  <GoDot className="icon_lang" />
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange("ar")}
                  className={lang === "ar" ? "active langItem" : "langItem"}
                >
                  <GoDot className="icon_lang" />
                  Arabic
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : null}
          </Dropdown>
          <button
            className={
              scrolled
                ? "btnNl btnNl-primary logBtn borderfixed"
                : "btnNl btnNl-primary logBtn"
            }
            onClick={handleLogin}
          >
            B2B Login
          </button>
        </div> */}
      </Navbar>
    </>
  );
};

export default MainNavbar;
