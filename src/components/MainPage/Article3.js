import { useRef, useState } from "react";
import Article3Set1 from "./Article3Set1";
import Article3Set2 from "./Article3Set2";
import Article3Set3 from "./Article3Set3";
import { Container3 } from "../WebStyle";

const Article3 = ({ path, scrollStyle }) => {
  const [number, setNumber] = useState(0);
  const itemSet = [
    <Article3Set1 path={path} />,
    <Article3Set2 path={path} />,
    <Article3Set3 path={path} />,
    <Article3Set1 path={path} />,
    <Article3Set2 path={path} />,
  ];
  return (
    <>
      <div style={scrollStyle(1700)}>
        <Container3>
          <div className="txtBox">
            <h4>Hotel Manoah Collection</h4>
            <h2>호텔마노아 베스트</h2>
          </div>
          <div className="category">
            <a href="#" style={number === 0 ? { color: "#333" } : { color: "#BBB" }}>
              #신혼맞춤
            </a>
            <a href="#" style={number === 1 ? { color: "#333" } : { color: "#BBB" }}>
              #홈인테리어
            </a>
            <a href="#" style={number === 2 ? { color: "#333" } : { color: "#BBB" }}>
              #테이블웨어
            </a>
            <a href="#" style={number === 3 ? { color: "#333" } : { color: "#BBB" }}>
              #세라믹
            </a>
            <a href="#" style={number === 4 ? { color: "#333" } : { color: "#BBB" }}>
              #Etc
            </a>
          </div>
          <div className="product_container">
            <div className="arrow_box">
              <span
                className="material-symbols-outlined"
                onClick={() => setNumber(number > 0 ? number - 1 : itemSet.length - 1)}>
                {" "}
                arrow_back_ios{" "}
              </span>
              <span
                className="material-symbols-outlined"
                onClick={() => setNumber(number < itemSet.length - 1 ? number + 1 : 0)}>
                {" "}
                arrow_forward_ios{" "}
              </span>
            </div>
            {itemSet[number]}
          </div>
        </Container3>
      </div>
    </>
  );
};

export default Article3;
