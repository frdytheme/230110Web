import TxtBox from "./TxtBox";
import bgVid from "./images/video.mp4";
import { Container5 } from "./WebStyle";

const Article5 = () => {
  return (
    <>
      <Container5>
        <TxtBox />
        <div className="video_wrapper">
          <video src={bgVid} autoPlay loop muted>
            비디오
          </video>
        </div>
      </Container5>
    </>
  );
};

export default Article5;
