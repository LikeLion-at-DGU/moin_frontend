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

        {/* 이용꿀팁 목록 */}
        <S.AiServiceDetailTipTable>
          <S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTr>
              <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                서비스명
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                등록일시
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh> </S.AiServiceDetailTipTableTh>
            </S.AiServiceDetailTipTableTr>
          </S.AiServiceDetailTipTableThead>
          <S.AiServiceDetailTipTableTbody>
            <S.AiServiceDetailTipTableTr>
              <S.AiServiceDetailTipTableTd>1</S.AiServiceDetailTipTableTd>
              <S.AiServiceDetailTipTableTd>
                챗지피티에 대해 알아보자
              </S.AiServiceDetailTipTableTd>
              <S.AiServiceDetailTipTableTd>
                Chat GPT
              </S.AiServiceDetailTipTableTd>
              <S.AiServiceDetailTipTableTd>
                2023/01/01 23:00
              </S.AiServiceDetailTipTableTd>
              <S.AiServiceDetailTipTableTd>
                <S.LikeIcon />
                17
                <S.CommentIcon />5
              </S.AiServiceDetailTipTableTd>
            </S.AiServiceDetailTipTableTr>
          </S.AiServiceDetailTipTableTbody>
        </S.AiServiceDetailTipTable>
      </S.AiServiceDetailTipWrap>
    </>
  );
}
