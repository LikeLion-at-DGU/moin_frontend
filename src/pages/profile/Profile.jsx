import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../context/authState"; // Update the path to your authState.js
import * as S from "./style";
// png
import Banner from "../../components/common/banner/Banner";

function Profile() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <S.ProfileWrapper>
      <Banner
        titleKorean="마이페이지"
        titleEnglish="MyPage"
        image={<S.MypageBookImg />}
      />
      <Outlet userInfo={userInfo} setUserInfo={setUserInfo} />
    </S.ProfileWrapper>
  );
}

export default Profile;
