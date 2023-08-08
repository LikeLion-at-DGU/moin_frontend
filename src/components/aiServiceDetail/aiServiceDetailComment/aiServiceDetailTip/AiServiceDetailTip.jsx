import React, { useState, useEffect } from "react";
import * as S from "./style";

// 컴포넌트
import Selector from "../../../selector/Selector";

export function AiServiceDetailTip() {
  const [tipContent, setTipContent] = useState([]);

  useEffect(() => {
    const tipData = [
      {
        id: 1,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 2,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 3,
        title: "챗지피티에 대해 보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 4,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 5,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 6,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 7,
        title: "챗지피티에 대해 알아보자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 8,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 9,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 10,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 11,
        title: "챗지피티에",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 12,
        title: "챗지피티에 ",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      },
      {
        id: 13,
        title: "챗지피티에 해자",
        name: "Chat GPT",
        date: "2023/01/01 23:00",
        like: 17,
        comment_cnt: 5
      }

      // 추가.....
    ];
    setTipContent(tipData);
  }, []);

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
            {tipContent.map(tip => (
              <S.AiServiceDetailTipTableTr key={tip.id}>
                <S.AiServiceDetailTipTableTd>
                  {tip.id}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.title}{" "}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.name}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {tip.date}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  <S.LikeIcon />
                  {tip.like}
                  <S.CommentIcon />
                  {tip.comment_cnt}
                </S.AiServiceDetailTipTableTd>
              </S.AiServiceDetailTipTableTr>
            ))}
          </S.AiServiceDetailTipTableTbody>
        </S.AiServiceDetailTipTable>
      </S.AiServiceDetailTipWrap>
    </>
  );
}
