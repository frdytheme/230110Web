import { useEffect, useState } from "react";
import { Gnb } from "./WebStyle";



const Header = ({scrollY}) => {
  const [gnbChange, setGnbChange] = useState({})
  const followStyle = {
    padding: "40px 6.5vw 40px",
    position: "fixed",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  }
  useEffect(()=>{
    scrollY > 0 ? setGnbChange(followStyle) : setGnbChange({})
  },[scrollY])
  return (
    <>
      <Gnb style={gnbChange}>
        <li>
          <h1>
            <div>호텔마노아</div>
          </h1>
        </li>
        <li>
          <div>호텔마노아</div>
          <ul className="innerGnb Snb">
            <li>
              <div>브랜드 소개</div>
            </li>
            <li>
              <div>오시는 길</div>
            </li>
          </ul>
        </li>
        <li>
          <div>제품라인</div>
          <ul className="innerGnb Snb">
            <li>
              <div>중분류1</div>
            </li>
            <li>
              <div>중분류2</div>
            </li>
          </ul>
        </li>
        <li>
          <div>홈인테리어</div>
          <ul className="innerGnb Snb">
            <li>
              <div>가구/수납</div>
            </li>
            <li>
              <div>패브릭/생활</div>
            </li>
            <li>
              <div>키친</div>
            </li>
          </ul>
        </li>
        <li>
          <div>테이블웨어</div>
          <ul className="innerGnb Snb">
            <li>
              <div>주방수납</div>
            </li>
            <li>
              <div>디자이너 그릇</div>
            </li>
          </ul>
        </li>
        <li>
          <div>세라믹</div>
        </li>
        <li id="line">구분선</li>
        <li>
          <div>공지사항</div>
        </li>
        <li>
          <div>이벤트</div>
        </li>
        <li>
          <div>상품 사용후기</div>
        </li>
        <li>
          <div>상품 Q&A</div>
        </li>
        <li id="user_info">
          <ul>
            <li>
              <div>
                <span className="material-symbols-outlined">person</span>
              </div>
              <ul className="innerGnb">
                <li>
                  <div>로그인</div>
                </li>
                <li>
                  <div>회원가입</div>
                </li>
                <li>
                  <div>장바구니</div>
                </li>
                <li>
                  <div>주문조회</div>
                </li>
                <li>
                  <div>마이페이지</div>
                </li>
              </ul>
            </li>
            <li>
              <div>
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
            </li>
            <li>
              <div>
                <span className="material-symbols-outlined">search</span>
              </div>
            </li>
          </ul>
        </li>
      </Gnb>
    </>
  );
};

export default Header;
