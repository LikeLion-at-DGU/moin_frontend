import React from "react";
import * as S from "./style";
import Banner from "./banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 나중에 베너 데이터 생기면 삭제할게요!
import bannerImg1 from "./banner1.png";
import bannerImg2 from "./banner2.png";

function MainBannerList() {
  const banners = [bannerImg1, bannerImg2];
  return (
    <>
      <S.BannerListWrapper>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          // pagination={{ clickable: true }}
        >
          {banners.map(banner => (
            <SwiperSlide key={banner}>
              <Banner bannerImg={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.BannerListWrapper>
    </>
  );
}

export default MainBannerList;
