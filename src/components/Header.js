import styled from "styled-components";
import { Gnb } from "./WebStyle";

const Header = () => {
  return (
    <>
      <Gnb>
        <li>
          <h1>
            <a href="#">호텔마노아</a>
          </h1>
        </li>
        <li>
          <a href="#">호텔마노아</a>
          <ul className="innerGnb">
            <li>
              <a href="#">브랜드 소개</a>
            </li>
            <li>
              <a href="#">오시는 길</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">제품라인</a>
          <ul className="innerGnb">
            <li>
              <a href="#">중분류1</a>
            </li>
            <li>
              <a href="#">중분류2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">홈인테리어</a>
          <ul className="innerGnb">
            <li>
              <a href="#">가구/수납</a>
            </li>
            <li>
              <a href="#">패브릭/생활</a>
            </li>
            <li>
              <a href="#">키친</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">테이블웨어</a>
          <ul className="innerGnb">
            <li>
              <a href="#">주방수납</a>
            </li>
            <li>
              <a href="#">디자이너 그릇</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">세라믹</a>
        </li>
        <li id="line">구분선</li>
        <li>
          <a href="#">공지사항</a>
        </li>
        <li>
          <a href="#">이벤트</a>
        </li>
        <li>
          <a href="#">상품 사용후기</a>
        </li>
        <li>
          <a href="#">상품 Q&A</a>
        </li>
        <li id="user_info">
          <ul>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">person</span>
              </a>
              <ul className="innerGnb">
                <li>
                  <a href="#">로그인</a>
                </li>
                <li>
                  <a href="#">회원가입</a>
                </li>
                <li>
                  <a href="#">장바구니</a>
                </li>
                <li>
                  <a href="#">주문조회</a>
                </li>
                <li>
                  <a href="#">마이페이지</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">shopping_bag</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">search</span>
              </a>
            </li>
          </ul>
        </li>
      </Gnb>
    </>
  );
};

export default Header;
