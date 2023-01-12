import ProductDetail from "./ProductDetail";
import { Container4 } from "../WebStyle";

const Article4 = ({ path, scrollStyle }) => {
  const data = [
    { id: 1, url: "/images/03.jpg" },
    { id: 2, url: "/images/04.jpg" },
    { id: 3, url: "/images/05.jpg" },
    { id: 4, url: "/images/05_big.jpg" },
  ];
  return (
    <>
      <div style={scrollStyle(2700)}>
        <Container4>
          <div className="txtBox">
            <h4>Hotel Manoah Collection</h4>
            <h2 className="underLine">마노아 클래식 라인</h2>
          </div>
          <div className="product_container">
            {data.map((item) => {
              return (
                <div className="product_box" key={item.id}>
                  <div className="imgBox">
                  <a href="#">
                    <img src={path + item.url} alt={`이미지4${item.id}`} />
                  </a>
                  <ProductDetail />
                  </div>
                </div>
              );
            })}
          </div>
        </Container4>
      </div>
    </>
  );
};

export default Article4;
