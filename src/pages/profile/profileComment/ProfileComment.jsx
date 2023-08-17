import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import MypageChat from "../../../assets/images/icon/mypageChat.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import ProfileCommon from "../../../components/profile/profileCommunityList/ProfileCommon";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfileComment() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  // 좋아요한 게시물인지 판별
  const [islike, setIslike] = useState(false);

  // 댓글인지 판별
  const [iscomment, setIscomment] = useState(true);

  // 카테고리
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, [currentTab]);

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(
        `/mypage/comments${category}?page=${currentPage}`,
        {
          headers
        }
      );

      setData(response.data.results);
      setCount(response.data.count);
      setIscomment(true);

      // console.log("작성한 댓글");
      // console.log(data); // 데이터 확인용

      // console.log(category);
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const tabContents = [
    <ProfileCommon
      category={"total"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
      iscomment={iscomment}
    />,
    <ProfileCommon
      category={"common"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
      iscomment={iscomment}
    />,
    <ProfileCommon
      category={"tip"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
      iscomment={iscomment}
    />,
    <ProfileCommon
      category={"qna"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
      iscomment={iscomment}
    />,
    <ProfileCommon
      category={"ai"}
      data={data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      count={count}
      islike={islike}
      iscomment={iscomment}
    />
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
    if (index === 0) {
      setCategory("");
    } else if (index === 1) {
      setCategory("/commons");
    } else if (index === 2) {
      setCategory("/tips");
    } else if (index === 3) {
      setCategory("/qnas");
    } else if (index === 4) {
      setCategory("/ai");
    }
  };
  return (
    <>
      <ProfileHeader title="댓글" img={MypageChat} />
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
                <AIS.AiServiceDetailCommentCategoryMenuItem
                  isActive={currentTab === 4}
                  onClick={() => selectMenuHandler(4)}
                >
                  ai
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

export default ProfileComment;
