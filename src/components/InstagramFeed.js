import { InstaFeed } from "./WebStyle";

const InstagramFeed = () => {
  const box = new Array(22).fill(0);
  return (
    <>
      <InstaFeed>
        <div className="user_follow">
          <p>idio20</p>
          <div className="follow">follow</div>
        </div>
        <div className="box_container">
          {box.map((item, idx) => {
            return (
              <div className="box" key={idx}>
                <a href="#">{`box${idx + 1}`}</a>
              </div>
            );
          })}
        </div>
      </InstaFeed>
    </>
  );
};

export default InstagramFeed;
