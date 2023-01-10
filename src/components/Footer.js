import { FooterDiv } from "./WebStyle";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <ul>
          <li>
            상호명 <em>호텔마노아</em>
          </li>
          <li>
            대표자 <em>홍길동</em>
          </li>
          <li>사업자등록번호</li>
          <li>통신판매업신고번호</li>
          <li>
            고객센터 <em>1588-0000</em>
          </li>
          <li>
            주소 <em>06252 서울특별시 강남구 강남대로 324-2(역삼동)</em>
          </li>
          <li>
            개인정보보호책임자 <em>홍길동(idio20@naver.com)</em>
          </li>
        </ul>
        <p>
          ※ 호텔마노아에서 제공하는 모든 컨텐츠는 저작권법에 보호받는 저작물로서, 무단으로 복제, 배포하는 경우에는
          저작권법에 의하여 처벌을 받을 수 있습니다.
        </p>
        <p>Copyright &copy; 2022 호텔마노아. All rights reserved.</p>
      </FooterDiv>
    </>
  );
};

export default Footer;
