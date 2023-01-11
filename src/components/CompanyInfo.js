import { Company } from "./WebStyle";

const CompanyInfo = ({path}) => {
  return (
    <>
      <Company>
        <ul className="company1">
          <li>
            <a href="#">홈</a>
          </li>
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">
              <strong>개인정보처리방침</strong>
            </a>
          </li>
          <li>
            <a href="#">이용안내</a>
          </li>
        </ul>
        <ul className="company2">
          <li>문의 및 안내</li>
          <li>1588-0000</li>
          <li>평일 09:00 ~ 18:00 / 점심 12:00 ~ 13:00</li>
          <li>(토, 일, 공휴일 휴무)</li>
          <li>
            <a href="#">
              <img src={path + "/images/insta.png"} alt="인스타" />
            </a>
            <a href="#">
              <img src={path + "/images/facebook.png"} alt="페북" style={{ width: "9px" }} />
            </a>
          </li>
        </ul>
        <ul className="company3">
          <li>입금계좌정보</li>
          <li>신한 000-00-00000-000</li>
          <li>농협 000-00-00000-000</li>
          <li>하나 000-00-00000-000</li>
          <li>예금주 : 이디오(이디오디자인)</li>
        </ul>
      </Company>
    </>
  );
};

export default CompanyInfo;
