import React, { useState } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import CommunityCommonPost from "../../../components/community/communityCommonPost/CommunityCommonPost";
import CommunityTipsPost from "../../../components/community/communityTipsPost/CommunityTipsPost";
import CommunityQnaPost from "../../../components/community/communityQnaPost/CommunityQnaPost";

function CommunityCreatPost() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const tabContents = [
    <CommunityCommonPost />,
    <CommunityTipsPost />,
    <CommunityQnaPost />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <>
      <AIS.AiServiceDetailCommentWrap>
        <AIS.AiServiceDetailCommentCategory>
          <AIS.AiServiceDetailCommentCategoryTabMenu>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 0}
              onClick={() => selectMenuHandler(0)}
            >
              자유 게시판
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 1}
              onClick={() => selectMenuHandler(1)}
            >
              이용꿀팁
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 2}
              onClick={() => selectMenuHandler(2)}
            >
              Q&A
            </AIS.AiServiceDetailCommentCategoryMenuItem>
          </AIS.AiServiceDetailCommentCategoryTabMenu>
        </AIS.AiServiceDetailCommentCategory>
        {tabContents[currentTab]}
      </AIS.AiServiceDetailCommentWrap>
    </>
  );
}

export default CommunityCreatPost;
