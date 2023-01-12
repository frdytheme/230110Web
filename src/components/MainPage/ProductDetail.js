import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div className="popUp">
        <span>찜</span>
        <span>장바구니</span>
      </div>
      <div className="product_info">
        <span className="subTitle">
          쓰임 레고트 도자기 면기
        </span>
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
    </>
  );
};

export default ProductDetail;
