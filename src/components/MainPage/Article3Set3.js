import ProductDetail from "./ProductDetail";

const Article3Set3 = ({ path }) => {
  const data = [
    { id: 1, url: "/images/05_big.jpg" },
    { id: 2, url: "/images/03.jpg" },
    { id: 3, url: "/images/02.jpg" },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product_box" key={item.id}>
            <div className="best">BEST1</div>
            <span>
              <img src={path + item.url} alt={`이미지${item.id}`} />
            </span>
            <ProductDetail />
          </div>
        );
      })}
    </>
  );
};

export default Article3Set3;
