import { Container6 } from "./WebStyle";

const Article6 = () => {
  return (
    <>
      <Container6>
        <div className="txtBox">
          <h4>Hotel Manoah Collection</h4>
          <h2 className="underLine">호텔마노아 매거진</h2>
        </div>
        <ul className="magazine">
          <li>
            <a href="#">매거진1</a>
            <div className="magazine_info">
              <p>Manoah Magazine</p>
              <a href="#">안락함을 느낄 수 있는 디자인</a>
              <a href="#" className="viewMore">
                view more
                <span className="material-symbols-outlined"> chevron_right </span>
              </a>
            </div>
          </li>
          <li>
            <a href="#">매거진2</a>
            <div className="magazine_info">
              <p>Manoah Magazine</p>
              <a href="#">예술적 영감을 디자인으로 불어 넣는 것</a>
              <a href="#" className="viewMore">
                view more
                <span className="material-symbols-outlined"> chevron_right </span>
              </a>
            </div>
          </li>
          <li>
            <a href="#">매거진3</a>
            <div className="magazine_info">
              <p>Manoah Magazine</p>
              <a href="#">당신을 맞이하는 공간이 당신의 삶을 바꿉니다</a>
              <a href="#" className="viewMore">
                view more
                <span className="material-symbols-outlined"> chevron_right </span>
              </a>
            </div>
          </li>
          <li>
            <a href="#">매거진4</a>
            <div className="magazine_info">
              <p>Manoah Magazine</p>
              <a href="#">과장이나 거짓 없이, 자연이 만들어 낸 디자인</a>
              <a href="#" className="viewMore">
                view more
                <span className="material-symbols-outlined"> chevron_right </span>
              </a>
            </div>
          </li>
        </ul>
      </Container6>
    </>
  );
};

export default Article6;
