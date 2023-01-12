import { FixedBtnStyle } from "./WebStyle";

const FixedBtn = () => {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBottom = (e) => {
    e.preventDefault();
    const toBottom = window.document.documentElement.offsetHeight;
    window.scrollTo({ top: toBottom, behavior: "smooth" });
  };
  return (
    <>
      <FixedBtnStyle>
        <div href="#" onClick={scrollTop}>
          <span className="material-symbols-outlined"> expand_less </span>
        </div>
        <div href="#" onClick={scrollBottom}>
          <span className="material-symbols-outlined"> expand_more </span>
        </div>
      </FixedBtnStyle>
    </>
  );
};

export default FixedBtn;
