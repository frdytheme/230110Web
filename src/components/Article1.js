import { useRef, useState } from "react";
import img1 from "./images/mainBnr_01.jpg";
import TxtBox from "./TxtBox";
import { Container1 } from "./WebStyle";

const Article1 = () => {
  return (
    <>
      <Container1>
        <div className="mainBtn">
          <div>버튼1</div>
          <div>버튼2</div>
        </div>
        <a href="#">
          <img src={img1} alt="메인이미지1" />
        </a>
      </Container1>
      <TxtBox />
    </>
  );
};

export default Article1;
