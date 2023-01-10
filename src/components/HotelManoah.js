import React from "react";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Article5 from "./Article5";
import Article6 from "./Article6";
import CompanyInfo from "./CompanyInfo";
import Footer from "./Footer";
import Header from "./Header";
import InstagramFeed from "./InstagramFeed";

const HotelManoah = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Header />
      <Article1 />
      <Article2 path={path} />
      <Article3 path={path} />
      <Article4 path={path} />
      <Article5 />
      <Article6 />
      <InstagramFeed />
      <CompanyInfo />
      <Footer />
    </>
  );
};

export default HotelManoah;
