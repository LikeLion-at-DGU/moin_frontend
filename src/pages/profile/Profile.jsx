import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../context/authState"; // Update the path to your authState.js
import * as SAuth from "../auths/style";
import * as S from "./style";
import Banner from "../../components/common/banner/Banner";
import MyPageUser from "../../assets/images/icon/mypageUserIcon.png";

function Profile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃
    setUserInfo(null);

    // 로컬 스토리지에서 로그인 정보 삭제
    localStorage.removeItem("userInfo");

    // 로그인 페이지로 이동
    navigate("/");

    // // 페이지 새로고침
    // window.location.reload();
  };

  return (
    <S.ProfileWrapper>
      <Banner
        titleKorean="마이페이지"
        titleEnglish="MyPage"
        image={<S.MypageBookImg />}
      />

      <S.ProfileInfoWrapper>
        <S.ProfileInfoHeaderWrapper>
          <S.ProfileInfoHeaderTitle>
            <S.myPageUserIcon src={MyPageUser} />
            <S.ProfileInfoHeaderTitleName>
              {userInfo && userInfo.email}
            </S.ProfileInfoHeaderTitleName>
            님의 마이페이지
          </S.ProfileInfoHeaderTitle>
          <S.ProfileInfoHeaderButton>로그아웃</S.ProfileInfoHeaderButton>
        </S.ProfileInfoHeaderWrapper>
        <SAuth.AuthButton onClick={handleLogout}>로그아웃</SAuth.AuthButton>
      </S.ProfileInfoWrapper>
    </S.ProfileWrapper>
  );
}

export default Profile;
