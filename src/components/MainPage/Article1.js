import TxtBox from "./TxtBox";
import { Container1 } from "../WebStyle";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const Article1 = ({ path, scrollStyle }) => {
  const [onBtn, setOnBtn] = useState(true);
  const switchBtn = (e) => {
    if (e.target.style.backgroundColor === "rgb(51, 51, 51)") return;
    setOnBtn(!onBtn);
  };

  return (
    <>
      <Container1>
        <img src={path + "/images/mainBnr_01.jpg"} alt="이미지1" />
        <img src={path + "/images/mainBnr_02.jpg"} alt="이미지2" style={{ opacity: onBtn ? 0 : 1 }} />
        <div className="mainBtn">
          <div onClick={switchBtn} style={{ backgroundColor: `${onBtn ? "#333" : "#fff"}` }}>
            버튼1
          </div>
          <div onClick={switchBtn} style={{ backgroundColor: `${onBtn ? "#fff" : "#333"}` }}>
            버튼2
          </div>
        </div>
      </Container1>
      <div style={scrollStyle(400)}>
        <TxtBox />
      </div>
    </>
  );
};

export default Article1;
