import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";

// 아이콘
import MyStar from "../../../../assets/images/icon/starMy.png";
import AvgStar from "../../../../assets/images/icon/starAvg.png";

// 컴포넌트
import Star from "../../../common/star/Star";
import Review from "./Review";
import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";

export function AiServiceDetailReview({ introContent }) {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);
  console.log(introContent);
  console.log("Rating Point:", introContent[0].rating_point);
  console.log("여기");
  return (
    <>
      <S.AiServiceDetailReviewWrap>
        <S.AiServiceDetailReviewStarWrap>
          <S.AiServiceDetailReviewStarMy>
            <S.AiServiceDetailReviewStarMyHeader>
              <S.AiServiceDetailReviewStarMyHeaderIcon
                src={MyStar}
                alt="이용 만족도 아이콘"
              />
              <S.AiServiceDetailReviewStarHeaderTitle>
                이용 만족도
              </S.AiServiceDetailReviewStarHeaderTitle>
            </S.AiServiceDetailReviewStarMyHeader>
            <S.AiServiceDetailReviewStarMyContent>
              <S.AiServiceDetailReviewStarMyContentIcon>
                <Star
                  starNum={userInfo ? introContent[0].my_rating_point : 0}
                  starSize={2.4}
                />
              </S.AiServiceDetailReviewStarMyContentIcon>
              <S.AiServiceDetailReviewStarMyContentSubmit>
                등록
              </S.AiServiceDetailReviewStarMyContentSubmit>
            </S.AiServiceDetailReviewStarMyContent>
          </S.AiServiceDetailReviewStarMy>

          {/* 평균만족도 */}
          <S.AiServiceDetailReviewStarAvg>
            <S.AiServiceDetailReviewStarAvgHeader>
              <S.AiServiceDetailReviewStarAvgHeaderIcon
                src={AvgStar}
                alt="평균 만족도 아이콘"
              />
              <S.AiServiceDetailReviewStarHeaderTitle>
                평균 만족도
              </S.AiServiceDetailReviewStarHeaderTitle>
            </S.AiServiceDetailReviewStarAvgHeader>
            <S.AiServiceDetailReviewStarAvgContent>
              <S.AiServiceDetailReviewStarAvgContentResult>
                <S.AiServiceDetailReviewStarAvgContentResultAi>
                  {introContent[0].rating_point}
                </S.AiServiceDetailReviewStarAvgContentResultAi>
                <S.AiServiceDetailReviewStarAvgContentResultTotal>
                  / 5.0
                </S.AiServiceDetailReviewStarAvgContentResultTotal>
                <S.AiServiceDetailReviewStarAvgContentResultCnt>
                  ({introContent[0].rating_cnt})
                </S.AiServiceDetailReviewStarAvgContentResultCnt>
              </S.AiServiceDetailReviewStarAvgContentResult>
              <S.AiServiceDetailReviewStarAvgContentIcon>
                <Star starNum={introContent[0].rating_point} starSize={2.4} />
              </S.AiServiceDetailReviewStarAvgContentIcon>
            </S.AiServiceDetailReviewStarAvgContent>
          </S.AiServiceDetailReviewStarAvg>
        </S.AiServiceDetailReviewStarWrap>
      </S.AiServiceDetailReviewWrap>
      <Review />
    </>
  );
}
