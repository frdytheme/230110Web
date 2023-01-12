import Article1 from "./MainPage/Article1";
import Article2 from "./MainPage/Article2";
import Article3 from "./MainPage/Article3";
import Article4 from "./MainPage/Article4";
import Article5 from "./MainPage/Article5";
import Article6 from "./MainPage/Article6";
import CompanyInfo from "./MainPage/CompanyInfo";
import InstagramFeed from "./MainPage/InstagramFeed";

const Main = ({ scrollY }) => {
  const path = process.env.PUBLIC_URL;

  const scrollStyle = (thisPos) => {
    return {
      transition: ".7s",
      transform: scrollY > thisPos ? "translateY(0)" : "translateY(50px)",
      opacity: scrollY > thisPos ? 1 : 0,
    };
  };

  return (
    <>
      <Article1 path={path} scrollY={scrollY} scrollStyle={scrollStyle} />
      <Article2 path={path} scrollY={scrollY} scrollStyle={scrollStyle}/>
      <Article3 path={path} scrollY={scrollY} scrollStyle={scrollStyle}/>
      <Article4 path={path} scrollY={scrollY} scrollStyle={scrollStyle}/>
      <Article5 path={path} scrollY={scrollY} scrollStyle={scrollStyle}/>
      <Article6 scrollY={scrollY} scrollStyle={scrollStyle} />
      <InstagramFeed scrollY={scrollY} scrollStyle={scrollStyle} />
      <CompanyInfo path={path} />
    </>
  );
};

export default Main;
