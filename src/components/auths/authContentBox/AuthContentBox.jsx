import React from "react";
import * as S from "./style";

function AuthContentBox({ content, img }) {
  return (
    <>
      <S.ProfileInfoContent>
        <S.ProfileInfoContentIcon src={img} />
        <S.ProfileInfoContentTitle>{content}</S.ProfileInfoContentTitle>
      </S.ProfileInfoContent>
    </>
  );
}

export default AuthContentBox;
