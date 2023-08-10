import React from "react";
import * as S from "./style";
import Banner from "../../../components/common/banner/Banner";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <S.AuthWrapper>
      <Banner
        titleKorean="회원가입"
        titleEnglish="JOIN MEMBERSHIP"
        image={<S.AuthIconImg />}
      />
      <Outlet />
    </S.AuthWrapper>
  );
}

export default Auth;
