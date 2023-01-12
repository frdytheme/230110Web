import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState, useEffect } from "react";
import FixedBtn from "./FixedBtn";

const HotelManoah = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    return () => window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  return (
    <>
      <FixedBtn />
      <Header scrollY={scrollY} />
      <Main scrollY={scrollY} />
      <Footer />
    </>
  );
};

export default HotelManoah;
