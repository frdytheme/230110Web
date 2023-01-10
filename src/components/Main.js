import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Article5 from "./Article5";
import Article6 from "./Article6";
import CompanyInfo from "./CompanyInfo";
import InstagramFeed from "./InstagramFeed";

const Main = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Article1 />
      <Article2 path={path} />
      <Article3 path={path} />
      <Article4 path={path} />
      <Article5 />
      <Article6 />
      <InstagramFeed />
      <CompanyInfo />
    </>
  );
};

export default Main;
