import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import likes from "../images/like.png";
import shopping from "../images/shoppingbag.png";

const GlobalStyle = createGlobalStyle`
  ${reset}
  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    --swiper-theme-color: #414141;
}
  * {
    box-sizing: border-box;
  }
  @keyframes vision {
  100% {
    opacity: 1;
  }
  }
  body {
  font-family: 'Noto Serif KR', serif, 'Roboto', 'Noto Sans KR', sans-serif;
  text-align: center;
  line-height: 1.6;
  font-weight: 300;
  overflow-x:hidden;
  }
  h2 {
    margin: 20px 0;
  }
  a {
    text-decoration: none;
    display: block;
    color:inherit;
  }
  ul {
    list-style:none;
    padding-left:0;
  }
  img {
    object-fit: cover;
    vertical-align: top;
    width:100%;
  }
  input {
    display: none;
  }
  .subTitle {
    display: block;
    cursor:pointer;
    font-size: 19px;
    color: #333;
    margin: 20px 0 10px;
  }
  .subTxt {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: #999;
    margin-bottom: 7px;
  }
  .price {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    color: #333;
    margin-bottom: 10px;
  }
  .txtBox h4 {
    font-size: 12px;
    color: #333;
    letter-spacing: 0.12em;
  }
  
  .txtBox h2 {
    font-size: 40px;
    font-weight: 300;
  }
  
  .txtBox h3 {
    font-size: 17px;
    font-weight: 300;
    margin-top: 12px;
    color: #333;
    line-height: 1.7;
  }
  
  .viewMore {
    margin: 17px 0;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.05em;
    transition: .2s cubic-bezier(.49, .06, .08, 1);
    cursor: pointer;
  }
  .viewMore span {
    font-size: 20px;
    color: #bbb;
    vertical-align: top;
  }
  .viewMore:hover {
    transform: translateX(7px);
  }
  .underLine::after {
    content: "";
    display: block;
    background-color: #aaa;
    width: 15px;
    height: 1px;
    margin: 15px auto 25px;
  }
  .product_color {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      text-indent: -9999px;
      width: 10px;
      height: 10px;
      background-color: #333;
      margin: 0 3px;
      border-radius: 50%;
      cursor: pointer;
      &:nth-child(2) {
        background-color: #ddd;
      }
      &:nth-child(3) {
        background-color: #aaa;
      }
    }
  }
  .product_box .popUp {
  text-indent: -9999px;
  width: 100%;
  height: 370px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
    span {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 20px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: .3s;
    &:first-child {
    background: url(${likes}) no-repeat 50% / cover;
    }

    &:last-child {
    background: url(${shopping}) no-repeat 50% / cover;
    }
    }
  }
  `;

export default GlobalStyle;
