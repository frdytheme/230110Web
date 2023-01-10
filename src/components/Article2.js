import { Container2 } from "./WebStyle";

const Article2 = ({path}) => {
  const data = [
    { id: 1, url: "/images/bnrArea2_01.jpg" },
    { id: 2, url: "/images/bnrArea2_02.jpg" },
    { id: 3, url: "/images/bnrArea2_03.jpg" },
  ];

  return (
    <>
      <Container2>
        {data.map((item) => {
          return (
            <div className="img_box" key={item.id}>
              <a href="#">
                <img src={path + item.url} alt={`image ${item.id}`} />
              </a>
              <div className="txt_box">
                <p>
                  <a href="#">장인의 열정 그리고 디자인 에너지</a>
                </p>
                <p>
                  <a href="#">
                    느리게 완성하는 호텔 마노아의 철학,
                    <br />
                    면과 선 그리고 공간의 조화를 추구합니다
                  </a>
                </p>
                <a href="#" className="viewMore">
                  view more
                  <span className="material-symbols-outlined"> chevron_right </span>
                </a>
              </div>
            </div>
          );
        })}
      </Container2>
    </>
  );
};

export default Article2;
