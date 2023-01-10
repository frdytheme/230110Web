import { Container6 } from "./WebStyle";

const Article6 = () => {
  const data = [
    { id: 1, des: "안락함을 느낄 수 있는 디자인" },
    { id: 2, des: "예술적 영감을 디자인으로 불어 넣는 것" },
    { id: 3, des: "당신을 맞이하는 공간이 당신의 삶을 바꿉니다" },
    { id: 4, des: "과장이나 거짓 없이, 자연이 만들어 낸 디자인" },
  ];
  return (
    <>
      <Container6>
        <div className="txtBox">
          <h4>Hotel Manoah Collection</h4>
          <h2 className="underLine">호텔마노아 매거진</h2>
        </div>
        <ul className="magazine">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <a href="#">{`매거진${item.id}`}</a>
                <div className="magazine_info">
                  <p>Manoah Magazine</p>
                  <a href="#">{item.des}</a>
                  <a href="#" className="viewMore">
                    view more
                    <span className="material-symbols-outlined"> chevron_right </span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container6>
    </>
  );
};

export default Article6;
