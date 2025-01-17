import React, { lazy, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Layout from "src/components/Layout/Layout";
// import LayoutB from "src/components/Layout/LayoutB";

// lazy load routes
const Home = lazy(() => import("src/pages/Home"));
const About = lazy(() => import("src/pages/About"));
const Experiences = lazy(() => import("src/pages/Experiences"));
const Shop = lazy(() => import("src/pages/Shop"));
const ShopInner = lazy(() => import("src/pages/ProductDetails"));
const Blogs = lazy(() => import("src/pages/Blogs"));
const BlogInner = lazy(() => import("src/pages/BlogInner"));
const ThingsToDo = lazy(() => import("src/pages/ThingsToDo"));
const Testimonials = lazy(() => import("src/pages/Testimonial"));
const Contact = lazy(() => import("src/pages/Contact"));
const Privary = lazy(() => import("src/pages/Privacy"));
const Terms = lazy(() => import("src/pages/Terms"));
const Faqs = lazy(() => import("src/pages/Faqs"));
const Cart = lazy(() => import("src/pages/Cart"));
const Wishlist = lazy(() => import("src/pages/Wishlist"));
const ComparePackages = lazy(() => import("src/pages/ComparePackages"));
const PassengersForm = lazy(() => import("src/pages/PassengersForm"));
const B2b = lazy(() => import("src/pages/B2b"));
const B2C = lazy(() => import("src/pages/B2C"));
const NotFound = lazy(() => import("src/pages/NotFound"));

function NavRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname.endsWith("/")) {
      navigate(location.pathname.slice(0, location.pathname?.length - 1));
    }
  }, [navigate]);

  useEffect(() => {
    // navigate(location.pathname.slice(0, location.pathname?.length - 1));
    let routesCheck = location.pathname?.split("/").slice(0, 2);
    if (!["", "en", "ar"]?.includes(routesCheck[1])) {
      navigate("/404");
    }
  }, [navigate]);

  useEffect(() => {
    // navigate(location.pathname.slice(0, location.pathname?.length - 1));
    let routesCheck = window.location.href;

    if (routesCheck.includes("www")) {
      let newRoute = routesCheck?.replace("www.", "");
      window.location.replace(newRoute);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/en" element={<Navigate to="/" replace />} />
        <Route path="/ar" element={<Navigate to="/" replace />} />
        <Route path="/:lang?/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route path="why-us" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="things-to-do" element={<ThingsToDo />} />
          <Route path="testimonial" element={<Testimonials />} />
          {/* <Route path="merchandise" element={<Shop />} /> */}
          {/* <Route path="merchandise/:id" element={<ShopInner />} /> */}
          <Route
            path="merchandise"
            element={<Navigate to="/" replace={true} />}
          />
          <Route
            path="merchandise/:id"
            element={<Navigate to="/" replace={true} />}
          />

          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<BlogInner />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="privacy-policy" element={<Privary />} />
          <Route path="terms" element={<Terms />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="compare-packages" element={<ComparePackages />} />
          <Route path="passengers-details/:id" element={<PassengersForm />} />

          <Route path="wishlist" element={<Wishlist />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
        </Route>
        <Route
          path="/:lang?/"
          // element={<LayoutB />}
        >
          <Route path="b2b" element={<B2b />} />
          <Route path="b2c" element={<B2C />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default NavRoutes;
