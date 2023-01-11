import { useEffect, useState } from "react";
import { InstaFeed } from "./WebStyle";
import axios from "axios";

const InstagramFeed = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    const URL = "https://pixabay.com/api/?key=11387821-67a69d50b056e2710953ad188&q=white+texture&image_type=photo";
    axios.get(URL).then((json) => setImg(json.data.hits));
  }, []);
  return (
    <>
      <InstaFeed>
        <div className="user_follow">
          <p>idio20</p>
          <div className="follow">follow</div>
        </div>
        <div className="box_container">
          {img.map((item, idx) => {
            return (
              <div className="box" key={idx}>
                <a href="#">
                  <img src={item.largeImageURL} alt={item.tags} />{" "}
                </a>
              </div>
            );
          })}
        </div>
      </InstaFeed>
    </>
  );
};

export default InstagramFeed;
