import React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import ShareIcon from "../../assets/images/icon/share.png";
import CompanyIcon from "../../assets/images/icon/company.png";
import Like from "../../components/like/Like";
import Star from "../../components/star/Star";

function AiServiceDetail() {
  const location = useLocation();
  const item = location.state.item;
  console.log(item.name);
  return (
    <>
      {/* {item.name} */}
      <S.AiServiceDetailWrap>
        <S.AiServiceDetailBanner></S.AiServiceDetailBanner>
        <S.AiServiceDetailHeader>
          <S.AiServiceDetailShare>
            <S.AiServiceDetailShareImg src={ShareIcon} alt="공유 아이콘" />
          </S.AiServiceDetailShare>
          <S.AiServiceDetailRegistrant>
            MOIN 등록자 : 희찬
          </S.AiServiceDetailRegistrant>
          {/* AI 설명 내용 */}
          <S.AiServiceDetailContent>
            {/* 썸네일 */}
            <S.AiServiceThumbnail>
              <S.AiServiceThumbnailImg src={item.thumbnail} />
            </S.AiServiceThumbnail>
            {/* 설명 */}
            <S.AiServiceDetailContentDescription>
              {/* 회사명 */}
              <S.AiServiceDetailContentDescriptionCompany>
                <S.AiServiceDetailContentDescriptionCompanyImg
                  src={CompanyIcon}
                  alt="회사 아이콘"
                />
                Open AI
              </S.AiServiceDetailContentDescriptionCompany>
              {/* 서비스명 */}
              <S.AiServiceDetailContentDescriptionName>
                {item.title}
              </S.AiServiceDetailContentDescriptionName>
              <S.AiServiceDetailContentDescriptionIntro>
                {item.content}
              </S.AiServiceDetailContentDescriptionIntro>

              {/* 인기직군 */}
              <S.AiServiceDetailContentDescriptionJob>
                <S.AiServiceDetailContentDescriptionJobTitle>
                  인기직군
                </S.AiServiceDetailContentDescriptionJobTitle>
                <S.AiServiceDetailContentDescriptionJobContent>
                  개발자 디자이너
                </S.AiServiceDetailContentDescriptionJobContent>
              </S.AiServiceDetailContentDescriptionJob>
              {/* 별점 */}
              <S.AiServiceDetailContentDescriptionStar>
                <S.AiServiceDetailContentDescriptionStarIcon>
                  <Star starNum={item.rating_point} starSize={"2.4rem"} />
                </S.AiServiceDetailContentDescriptionStarIcon>

                <S.AiServiceDetailContentDescriptionStarCnt>
                  (42)
                </S.AiServiceDetailContentDescriptionStarCnt>
              </S.AiServiceDetailContentDescriptionStar>
              <S.AiServiceDetailContentDescriptionKeywordWrap>
                <S.AiServiceDetailContentDescriptionKeyword>
                  챗봇
                </S.AiServiceDetailContentDescriptionKeyword>
                <S.AiServiceDetailContentDescriptionKeyword>
                  챗지피티
                </S.AiServiceDetailContentDescriptionKeyword>
              </S.AiServiceDetailContentDescriptionKeywordWrap>
              <S.AiServiceDetailContentDescriptionBottom>
                <S.AiServiceDetailContentDescriptionBottomLink>
                  <S.AiServiceDetailContentDescriptionBottomLinkBox>
                    서비스 바로가기
                  </S.AiServiceDetailContentDescriptionBottomLinkBox>
                </S.AiServiceDetailContentDescriptionBottomLink>
                <S.AiServiceDetailContentDescriptionBottomHeart>
                  <S.AiServiceDetailContentDescriptionBottomHeartIcon>
                    <Like likeSize={"4rem"} likeCheck={true}></Like>
                  </S.AiServiceDetailContentDescriptionBottomHeartIcon>
                  <S.AiServiceDetailContentDescriptionBottomHeartCnt>
                    354
                  </S.AiServiceDetailContentDescriptionBottomHeartCnt>
                </S.AiServiceDetailContentDescriptionBottomHeart>
              </S.AiServiceDetailContentDescriptionBottom>
            </S.AiServiceDetailContentDescription>
          </S.AiServiceDetailContent>
        </S.AiServiceDetailHeader>
      </S.AiServiceDetailWrap>
    </>
  );
}

export default AiServiceDetail;
