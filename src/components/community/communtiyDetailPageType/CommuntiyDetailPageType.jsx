import React, { useEffect, useState } from "react";
import * as S from "./style";
import RightArrowBlue from "../../../assets/images/icon/rightArrowBlue.png";

function CommuntiyDetailPageType({ type }) {
  return (
    <S.DetailPageType>
      <S.RightArrowBlueIcon src={RightArrowBlue}></S.RightArrowBlueIcon>
      <S.DetailPageTypeText>
        {type === "commons"
          ? "자유게시판"
          : type === "tips"
          ? "이용꿀팁"
          : "Q&A"}
      </S.DetailPageTypeText>
    </S.DetailPageType>
  );
}

export default CommuntiyDetailPageType;
