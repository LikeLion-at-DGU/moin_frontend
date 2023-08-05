import React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
function AiServiceDetail() {
  const location = useLocation();
  const item = location.state.item;
  return (
    <>
      {item.name}
      <S.AiServiceDetailWrap>
        <S.AiServiceDetailBanner></S.AiServiceDetailBanner>
      </S.AiServiceDetailWrap>
    </>
  );
}

export default AiServiceDetail;
