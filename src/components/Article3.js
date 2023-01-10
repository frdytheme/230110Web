import ProductDetail from "./ProductDetail";
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
                <ProductDetail />
              </div>
            );
          })}
        </div>
      </Container3>
    </>
  );
};

export default Article3;
