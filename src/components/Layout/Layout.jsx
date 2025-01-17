import React from "react";
import { Outlet, useParams } from "react-router-dom";
// const Navbar = lazy(() => import("src/components/Layout/Navbar/Navbar"));
import Navbar from "src/components/Layout/Navbar/Navbar";

import Footer from "src/components/Layout/Footer/Footer";
// import Navbar from "src/components/Layout/Navbar/Navbar";
// import FooterMbl from "./Footer/FooterMobile/FooterMbl";
function Layout() {
  const { lang = "en" } = useParams();
  return (
    <>
      {/* <Suspense fallback={"Loading..."}> */}
      <Navbar />
      {/* </Suspense> */}
      <main className={lang == "ar" ? "r_dir" : "l_dir"}>
        <Outlet />
      </main>
      <Footer />
      {/* <FooterMbl /> */}
    </>
  );
}

export default Layout;
