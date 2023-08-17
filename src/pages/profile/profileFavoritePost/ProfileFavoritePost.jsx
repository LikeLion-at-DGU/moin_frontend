import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import MypageStar from "../../../assets/images/icon/mypageStarBlue.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";

import ProfileCommon from "../../../components/profile/profileCommunityList/ProfileCommon";

function ProfileFavoritePost() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <ProfileCommon category={"total"} />,
    <ProfileCommon category={"common"} />,
    <ProfileCommon category={"tip"} />,
    <ProfileCommon category={"qna"} />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <ProfileHeader title="좋아요한 게시글" img={MypageStar} />
      <S.CommunityWrapper>
        <S.CommunityContentWrapper>
          <S.AiServiceDetailCommentWrap>
            <AIS.AiServiceDetailCommentCategory>
              <AIS.AiServiceDetailCommentCategoryTabMenu>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  isActive={currentTab === 0}
                  onClick={() => selectMenuHandler(0)}
                >
                  전체
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  isActive={currentTab === 1}
                  onClick={() => selectMenuHandler(1)}
                >
                  자유 게시판
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  isActive={currentTab === 2}
                  onClick={() => selectMenuHandler(2)}
                >
                  이용꿀팁
                </AIS.AiServiceDetailCommentCategoryMenuItem>
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  isActive={currentTab === 3}
                  onClick={() => selectMenuHandler(3)}
                >
                  Q&A
                </AIS.AiServiceDetailCommentCategoryMenuItem>
              </AIS.AiServiceDetailCommentCategoryTabMenu>
            </AIS.AiServiceDetailCommentCategory>
            {tabContents[currentTab]}
          </S.AiServiceDetailCommentWrap>
        </S.CommunityContentWrapper>
      </S.CommunityWrapper>
    </>
  );
}

export default ProfileFavoritePost;
