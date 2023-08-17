import React, { useState, useEffect } from "react";
import * as S from "./style";
import Banner from "./Banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./pagination.css";

import bannerImg1 from "./banner1.png";
import bannerImg2 from "./banner2.png";
import bannerImg3 from "./banner3.png";

import bannerMobileImg1 from "./bannerMobile1.svg";

function MainBannerList() {
  const bannersDesktop = [bannerImg1, bannerImg2, bannerImg3];
  const bannersMobile = [bannerMobileImg1];

  const [currentBanners, setCurrentBanners] = useState(bannersDesktop);
  //윈도우가 640px 이하면  모바일버전을 연다
  const resizingHandler = () => {
    if (window.innerWidth <= 550) {
      setCurrentBanners(bannersMobile);
    } else {
      setCurrentBanners(bannersDesktop);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setCurrentBanner(bannersMobile);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return (
    <>
      <S.BannerListWrapper>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {currentBanners.map(banner => (
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
