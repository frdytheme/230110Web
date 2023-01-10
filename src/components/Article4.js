import { Container4 } from "./WebStyle";

const Article4 = ({ path }) => {
  const data = [
    { id: 1, url: "/images/03.jpg" },
    { id: 2, url: "/images/04.jpg" },
    { id: 3, url: "/images/05.jpg" },
    { id: 4, url: "/images/05_big.jpg" },
  ];
  return (
    <>
      <Container4>
        <div className="txtBox">
          <h4>Hotel Manoah Collection</h4>
          <h2 className="underLine">마노아 클래식 라인</h2>
        </div>
        <div className="product_container">
          {data.map((item) => {
            return (
              <div className="product_box" key={item.id}>
                <a href="#">
                  <img src={path + item.url} alt={`이미지4${item.id}`} />
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
      </Container4>
    </>
  );
};

export default Article4;
