import Article2TxtBox from "./Article2TxtBox";
import { Container2 } from "../WebStyle";

const Article2 = ({ path, scrollStyle }) => {
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
            <div className="img_box" key={item.id} style={scrollStyle(800)}>
              <span>
                <img src={path + item.url} alt={`image ${item.id}`} />
              </span>
              <Article2TxtBox />
            </div>
          );
        })}
      </Container2>
    </>
  );
};

export default Article2;
