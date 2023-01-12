import styled from "styled-components";
import article6Img1 from "../images/magazine_img1.jpg";
import article6Img2 from "../images/magazine_img2.jpg";
import article6Img3 from "../images/magazine_img3.jpg";
import article6Img4 from "../images/magazine_img4.jpg";
import heart from "../images/heart.svg";
import conversation from "../images/conversation.svg";
import art4Img1 from "../images/02.jpg";

// FixedBtn
export const FixedBtnStyle = styled.div`
  position: fixed;
  top: 50%;
  right: 1.5vw;
  transform: translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 30px;
  z-index: 9999;
  background-color: #fff;
  div {
    width: 42px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:first-child {
      border-bottom: 1px solid #ddd;
    }
    span {
      color: #aaa;
    }
  }
`;

// Header Style
export const Gnb = styled.ul`
  width: 1920px;
  padding: 100px 6.5vw 60px;
  height: 80px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 9999;
  transition: 0.7s;
  div {
    cursor: pointer;
  }
  & > li {
    position: relative;
    &:first-child {
      font-size: 27px;
      margin-right: 15vw;
      & ~ li {
        font-size: 17px;
        padding: 12px;
      }
    }
    &:nth-child(6) ~ li {
      color: rgb(146, 146, 146);
    }
  }
  #line {
    text-indent: -9999px;
    background-color: #ddd;
    padding: 0;
    width: 1px;
    margin: 0 1vw;
  }
  #user_info {
    margin-left: 200px;
    padding: 0;
    & > ul {
      width: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > li {
        position: relative;
        display: flex;
        align-items: center;
      }
      li div span {
        color: #000;
        font-size: 27px;
      }
    }
    .innerGnb {
      font-family: "Roboto", "Noto Sans KR", sans-serif;
      background-color: #fff;
      color: rgb(155, 155, 155);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      padding: 10px;
      & li:hover div {
        background-color: #eee;
        color: #000;
      }
    }
  }
  .innerGnb {
    width: 140px;
    padding: 10px 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 14px;
    background-color: rgb(29, 29, 29);
    color: #ddd;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    border-radius: 7px;
    opacity: 0;
    pointer-events: none;
    li div {
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li:hover div {
      width: 100%;
      background-color: #000;
    }
  }
  & > li:hover .Snb,
  #user_info ul > li:hover .innerGnb {
    animation: vision 0.4s forwards;
    animation-play-state: running;
    pointer-events: all;
  }
`;

// Main Style
export const Container1 = styled.article`
  width: 87vw;
  margin: 160px auto 70px;
  position: relative;
  img:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.7s;
  }
  .mainBtn {
    display: flex;
    justify-content: center;
    div {
      text-indent: -9999px;
      border: 1px #000 solid;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 20px 4px;
      cursor: pointer;
    }
  }
`;
export const Container2 = styled.article`
  margin: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img_box {
    margin: 10px;
    &:hover a img {
      opacity: 0.7;
    }
    .txt_box p {
      font-size: 15px;
      font-weight: 300;
      margin: 5px 0;
      &:first-child {
        margin: 25px 0 0;
        font-size: 23px;
        font-weight: 300;
      }
    }
  }
`;
export const Container3 = styled.article`
  background-color: #f7f7f7;
  padding-bottom: 80px;
  .txtBox {
    padding-top: 90px;
  }
  .category {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 22px;
    color: #bbb;
    padding-bottom: 35px;
    div {
      margin: 0 15px;
    }
  }
  .product_container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .arrow_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 150px;
      left: 0;
      padding: 0 100px;
      span {
        display: block;
        font-size: 80px;
        color: #d9d9d9a6;
        cursor: pointer;
        opacity: 0;
        transition: 0.3s;
        transform: translateX(-30px);
        user-select: none;
        &:last-child {
          transform: translateX(30px);
        }
      }
    }
    &:hover .arrow_box span {
      opacity: 1;
      transform: translateX(0);
    }
    .product_box {
      position: relative;
      transition: 0.4s;
      .best {
        border-radius: 50%;
        background-color: #333;
        color: #fff;
        font-size: 11px;
        width: 75px;
        height: 75px;
        line-height: 75px;
        position: absolute;
        top: 10px;
        left: 30px;
        z-index: 9999;
      }
      & > a {
        width: 370px;
        height: 370px;
        margin: 0 25px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
      }
      &:hover .popUp span {
        pointer-events: all;
        opacity: 1;
      }
    }
  }
`;
export const Container4 = styled.article`
  width: 100%;
  padding: 100px 0;
  .product_container {
    display: flex;
    padding: 0 100px;
  }
  .imgBox {
    position: relative;
    cursor: pointer;
    & > a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.4s;
        opacity: 0;
        background: url(${art4Img1}) no-repeat 50% / cover;
      }
    }
    &:hover a::after {
      opacity: 1;
    }
    &:hover .popUp span {
      pointer-events: all;
      opacity: 1;
      transform: translateY(0);
    }
  }
  .popUp span {
    margin: 0 5px;
    transform: translateY(10px);
  }
`;
export const Container5 = styled.article`
  height: 650px;
  background-color: #f6f8fb;
  padding-top: 90px;
  position: relative;
  margin-bottom: 280px;
  .txtBox h2 {
    color: #41556b;
  }
  .video_wrapper {
    width: 80vw;
    height: 530px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    video {
      text-indent: -9999px;
    }
  }
`;
export const Container6 = styled.article`
  .magazine {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    li > a {
      width: 100%;
      height: 360px;
      text-indent: -9999px;
      background: no-repeat 50% / cover;
    }
    li {
      width: 23%;
      transition: 0.3s;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
      &:nth-child(1) > a {
        background-image: url(${article6Img1});
      }
      &:nth-child(2) > a {
        background-image: url(${article6Img2});
      }
      &:nth-child(3) > a {
        background-image: url(${article6Img3});
      }
      &:nth-child(4) > a {
        background-image: url(${article6Img4});
      }
      &:nth-of-type(1) ~ li .magazine_info {
        border-left: none;
      }
    }
    .magazine_info {
      padding: 23px 15px 25px;
      border: 1px solid #ddd;
      p {
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        color: #999;
        margin-bottom: 3px;
      }
      a:first-child {
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
`;
export const InstaFeed = styled.div`
  padding: 80px 0;
  margin-top: 80px;
  background-color: #fafafa;

  .user_follow {
    font-family: "Cabin", sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding-top: 30px;
    .follow {
      text-transform: capitalize;
      border: 1px solid #cccaca;
      color: #333;
      background-color: #fff;
      font-size: 12px;
      font-weight: 400;
      width: 80px;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
  .box_container {
    overflow: auto;
    width: 66.8vw;
    height: 420px;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #999;
      border-radius: 10px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: #999;
    }
    .box span {
      display: block;
      cursor: pointer;
      font-size: 0;
      margin: 5px;
      width: 200px;
      height: 200px;
      background-color: #f1f1f1;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
      }
      &:hover::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        background: url(${conversation}) no-repeat 60% 50% / 15px 15px;
      }
      &:hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        display: block;
        background: rgba(9, 9, 9, 0.7) url(${heart}) no-repeat 40% 50% / 15px 15px;
      }
    }
  }
`;
export const Company = styled.div`
  line-height: 1.7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 65px 100px;
  color: #444;
  ul {
    width: 33.3333%;
    height: 140px;
    border-right: 1px solid #ddd;
  }
  .company1 li {
    font-size: 15px;
    color: #777;
    padding-bottom: 4px;
    strong {
      font-weight: 400;
      color: #444;
    }
  }
  .company2 li:nth-child(1) {
    color: #333;
    margin-bottom: 12px;
  }
  .company2 li:nth-child(2) {
    font-size: 20px;
    font-weight: 400;
  }
  .company2 li:nth-child(3) {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  .company2 li:nth-child(4) {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  .company2 li:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .company2 img {
    width: 14px;
    margin: 7px 3px;
  }
  .company3 li:first-child {
    margin-bottom: 12px;
  }
  .company3 li:first-child ~ li {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
  .company3 li:last-child {
    font-family: "Noto Serif KR", serif;
    font-weight: 300;
    color: #aaa;
    margin-top: 8px;
  }
`;

// Footer Style
export const FooterDiv = styled.footer`
  padding: 45px 0;
  background-color: #f9f9f9;
  & ul,
  & p {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    margin-bottom: 5px;
  }

  & ul li {
    margin: 0 6px;
  }

  & em {
    font-style: normal;
    color: #000;
  }
  & p {
    margin-bottom: 10px;
  }
`;
