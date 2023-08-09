import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import NavBarTranslate from "./NavBarTranslate";

import LoginLogo from "../../assets/images/moin_logo.png";
import { AiOutlineMenu } from "react-icons/ai";

import * as S from "./style";

export default function NavBar() {
  const sideBar = useRef();
  const sideBarBackground = useRef();

  const sideBarOpen = e => {
    sideBar.current.style.display = "flex";
    sideBarBackground.current.style.display = "block";
  };

  const sideBarClose = e => {
    sideBar.current.style.display = "none";
    sideBarBackground.current.style.display = "none";
  };

  const mobile = useRef();
  const monitor = useRef();

  const [isMobile, setisMobile] = useState(false);

  const resizingHandler = () => {
    if (window.innerWidth < 640) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setisMobile(true);
    }
    window.addEventListener("resize", resizingHandler);

    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      mobile.current.style.display = "flex";
      monitor.current.style.display = "none";
    } else {
      mobile.current.style.display = "none";
      monitor.current.style.display = "flex";
      sideBarClose();
    }
  }, [isMobile]);

  const location = useLocation();
  useEffect(() => {
    sideBarClose();

    console.log(location);
    switch (location) {
      case "/notice":
    }
  }, [location]);

  const [userInfo, setUserInfo] = useRecoilState(userState);
  // 로그인 정보 불러오기
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <S.NavWrapper>
      {/* 모니터용 */}
      <S.NavLogo>
        <S.NavLogoIcon src={LoginLogo} alt="MO:IN" />
        <S.NavLogoTitle to={`/`}> MO:IN</S.NavLogoTitle>
      </S.NavLogo>

      <S.NavMonitorMenu ref={monitor}>
        <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
        <S.NavLink to={`/notice`}>공지사항</S.NavLink>
        <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
        <S.NavLink to={`/about`}>서비스 소개</S.NavLink>
        {userInfo ? (
          <S.NavLink to={`/mypage`}>마이페이지</S.NavLink>
        ) : (
          <S.NavLink to={`/login`}>로그인</S.NavLink>
        )}

        <NavBarTranslate />
      </S.NavMonitorMenu>

      {/* 모바일용  */}
      <S.NavMobileMenu ref={mobile}>
        <AiOutlineMenu size={"3rem"} onClick={sideBarOpen} />
      </S.NavMobileMenu>

      {/* 사이드바 */}
      <S.NavSideBarWrapper ref={sideBar}>
        <S.NavSideBarMenu>
          <S.NavSideBarHeader>
            {userInfo ? (
              <S.NavLink to={`/mypage`}>홍길동 님</S.NavLink>
            ) : (
              <S.NavLink to={`/login`}>로그인하세요!</S.NavLink>
            )}
          </S.NavSideBarHeader>

          <S.NavSideBarBody>
            <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
            <S.NavLink to={`/notice`}>공지사항</S.NavLink>
            <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
            <S.NavLink to={`/about`}>서비스 소개</S.NavLink>
          </S.NavSideBarBody>
        </S.NavSideBarMenu>

        <NavBarTranslate />
      </S.NavSideBarWrapper>

      <S.NavSideBarBackground ref={sideBarBackground} onClick={sideBarClose} />
    </S.NavWrapper>
  );
}
