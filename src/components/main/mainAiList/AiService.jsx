import React from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import Star from "../../star/Star";
import Like from "../../like/Like";

function AiService({ item }) {
  // 함수 수정할게용....
  const keywordColor = {
    챗봇: "#FFB6A7",
    과제: "#98ADF2",
    논문: "#FFD494"
  };

  const navigate = useNavigate();

  return (
    <S.AiServiceWrapper
      onClick={() =>
        navigate(`AiService/${item.id}`, {
          state: {
            item: item
          }
        })
      }
    >
      {/* 썸네일 */}
      <S.AiServiceThumbnail>
        <S.AiServiceThumbnailImg src={item.thumbnail} />
      </S.AiServiceThumbnail>
      <S.AiServiceBody>
        {/* Ai이름, 설명 */}
        <S.AiServiceTitle>{item.title}</S.AiServiceTitle>
        <S.AiServiceDescription>{item.content}</S.AiServiceDescription>
        {/* 별점 */}
        <S.AiServiceStar>
          <Star starNum={item.rating_point} starSize={"20px"} />
          <S.AiServiceStarDescription>
            ({item.rating_cnt})
          </S.AiServiceStarDescription>
        </S.AiServiceStar>
        {/* 키워드 */}
        <S.AiServiceKeywords>
          {item.keyword.map((keyword, idx) => (
            <S.AiServiceKeyword
              key={idx}
              style={{ backgroundColor: keywordColor[keyword] }}
            >
              {keyword}
            </S.AiServiceKeyword>
          ))}
        </S.AiServiceKeywords>
      </S.AiServiceBody>
      {/* 좋아요 */}
      <S.AiServiceFooter>
        <S.AiServiceLikeDescription>{item.like_cnt}</S.AiServiceLikeDescription>
        <Like likeSize={"20px"} likeCheck={true}></Like>
      </S.AiServiceFooter>
    </S.AiServiceWrapper>
  );
}

export default AiService;
