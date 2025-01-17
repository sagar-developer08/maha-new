import React from "react";
import { Outlet, useParams } from "react-router-dom";
import FooterBasic from "./FooterBasic/Index";
function LayoutB() {
  const { lang = "en" } = useParams();
  return (
    <>
      {/* <Navbar /> */}
      <main className={lang == "ar" ? "r_dir" : "l_dir"}>
        <Outlet />
      </main>
      <FooterBasic />
    </>
  );
}

export default LayoutB;
