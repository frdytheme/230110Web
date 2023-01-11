import TxtBox from "./TxtBox";
import { Container1 } from "./WebStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Article1 = ({path}) => {
  return (
    <>
      <Container1>
        <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <img src={path + "/images/mainBnr_01.jpg"} alt="이미지1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={path + "/images/mainBnr_02.jpg"} alt="이미지2" />
          </SwiperSlide>
        </Swiper>
      </Container1>
      <TxtBox />
    </>
  );
};

export default Article1;
