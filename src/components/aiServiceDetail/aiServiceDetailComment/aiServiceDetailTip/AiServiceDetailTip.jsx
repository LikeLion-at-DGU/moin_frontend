import React from "react";
import * as S from "./style";

// 컴포넌트
import Selector from "../../../selector/Selector";

export function AiServiceDetailTip() {
  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWrite>
            <S.StyledPencilIcon />
            글쓰기
          </S.AiServiceDetailTipHeaderWrite>
          <S.AiServiceDetailTipHeaderSort>
            <Selector /> {/* 임시로 넣어둠 */}
          </S.AiServiceDetailTipHeaderSort>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
      </S.AiServiceDetailTipWrap>
    </>
  );
}
