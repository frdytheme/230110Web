import TxtBox from "./TxtBox";
import { Container5 } from "./WebStyle";

const Article5 = ({path}) => {
  return (
    <>
      <Container5>
        <TxtBox />
        <div className="video_wrapper">
          <video src={path + "/images/video.mp4"} autoPlay loop muted>
            비디오
          </video>
        </div>
      </Container5>
    </>
  );
};

export default Article5;
