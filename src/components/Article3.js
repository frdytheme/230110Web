import { Container3 } from "./WebStyle";

const Article3 = ({ path }) => {
  const data = [
    { id: 1, url: "/images/02.jpg" },
    { id: 2, url: "/images/03.jpg" },
    { id: 3, url: "/images/04.jpg" },
  ];
  return (
    <>
      <Container3>
        <div className="txtBox">
          <h4>Hotel Manoah Collection</h4>
          <h2>호텔마노아 베스트</h2>
        </div>
        <div className="category">
          <a href="#">#신혼맞춤</a>
          <a href="#">#홈인테리어</a>
          <a href="#">#테이블웨어</a>
          <a href="#">#세라믹</a>
          <a href="#">#Etc</a>
        </div>
        <div className="product_container">
          <div className="arrow_box">
            <span className="material-symbols-outlined"> arrow_back_ios </span>
            <span className="material-symbols-outlined"> arrow_forward_ios </span>
          </div>
          {data.map((item) => {
            return (
              <div className="product_box" key={item.id}>
                <div className="best">BEST1</div>
                <a href="#">
                  <img src={path + item.url} alt={`이미지${item.id}`} />
                </a>
                <div className="popUp">
                  <span>찜</span>
                  <span>장바구니</span>
                </div>
                <div className="product_info">
                  <a href="#" className="subTitle">
                    쓰임 레고트 도자기 면기
                  </a>
                  <p className="subTxt">
                    고객의 마음을 끄는 담백하고 정돈된 디자인,
                    <br />
                    이곳에는 상품요약설명을 넣어주세요.
                  </p>
                  <span className="price">37,500</span>
                  <ul className="product_color">
                    <li>컬러1</li>
                    <li>컬러2</li>
                    <li>컬러3</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container3>
    </>
  );
};

export default Article3;
