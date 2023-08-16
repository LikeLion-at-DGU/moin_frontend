import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import ThumbIcon from "../../../assets/images/icon/mypageThumb.png";
import ThumbOutlineIcon from "../../../assets/images/icon/thumb_outline.png";
import EyeOutlineIcon from "../../../assets/images/icon/eye_outline.png";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import { AiServiceDetailContentDescriptionCompanyImg } from "../../../components/aiServiceDetail/aiServiceDetailIntro/style";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import CommentInput from "../../../components/common/commentInput/CommentInput";
import CommonCommentList from "../../../components/common/commonCommentList/CommonCommentList";

function DetailPage() {
  const [user, setUser] = useRecoilState(userState);

  const [comments, setComments] = useState({});
  const [viewCnt, setViewCnt] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;
  const navigate = useNavigate();
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // type에는 common,tips, qnas 들어갈 수 있음
  const { type, id } = useParams();

  // detail와서 ai name받기
  const [aiName, setAiName] = useState("ChatGPT-3");
  const [isUser, setIsUser] = useState(true);
  const [isWriter, setIsWriter] = useState(false);
  const [detail, setDetail] = useState({});
  const [likeImage, setLikeImage] = useState(ThumbOutlineIcon);
  let nowView = 0;
  const handleLikeToggle = async () => {
    if (!user) {
      // 로그인 모달창\
      // 로그인하지 않은 경우 로그인 페이지로 이동
      navigate("/login");
      return;
    }

    try {
      // 좋아요 상태 확인

      const accessToken = user.accessToken;
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };

      // isLiked가 true이면 좋아요 취소, delete 요청보내기
      if (likeImage === ThumbIcon) {
        const response = await axios.delete(`communities/${type}/${id}`, {
          headers
        });
        console.log(response);
        console.log("안좋아요ㅕ");
        if (response.status === 200) {
          setLikeImage(ThumbOutlineIcon);
        }
      } else {
        const response = await axios.post(`communities/${type}/${id}`, null, {
          headers
        });
        console.log(response);
        console.log("좋아요");
        if (response.status === 200) {
          setLikeImage(ThumbIcon);
        }
      }
    } catch (error) {}
  };

  const fetchDetail = async () => {
    try {
      const response = await axios.get(`communities/${type}/${id}`);
      setDetail(response.data);
      if (isFirst) {
        setViewCnt(response.data.view_cnt);
        setIsFirst(false);
      }
      setAiName(response.data.ai);
    } catch (error) {
      console.log(error);
    }
  };

  // writer 확인
  const fetchIsWriter = async () => {
    try {
      const accessToken = user.accessToken; // 추출한 accessToken
      console.log(user);
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`users/check?type=community&id=${id}`, {
        headers
      });
      setIsWriter(response.data.is_writer);
    } catch (error) {
      console.log(error);
    }
  };

  // 처음 Detail 렌더링
  useEffect(() => {
    // 유저가 있을 경우 writer인지 확인
    if (user) {
      fetchIsWriter();
    }
    fetchDetail();
  }, []);

  // 처음 Detail 렌더링
  useEffect(() => {
    // 좋아요 바꼈을때 리렌더링
    fetchDetail();
  }, [likeImage]);

  // 디테일 렌더링
  const renderDetail = () => {
    return !detail ? (
      <>
        <S.DetailTitle>로딩중</S.DetailTitle>
        <S.DetailDiviner />
      </>
    ) : (
      <>
        <CommunityDetailContent
          detail={detail}
          isWriter={isWriter}
          id={detail.id}
          user={user}
        />
        <S.DetailDiviner />
        <S.LikeViewWrapper>
          <S.Thumbnailimg src={EyeOutlineIcon} alt="조회수" />
          <S.DetailViewText>{viewCnt}</S.DetailViewText>
          {/* is_liked 여부에 따라 */}
          <S.Thumbnailimg
            src={likeImage}
            alt="좋아요"
            onClick={handleLikeToggle}
          />
          <S.DetailViewText>{detail.likes_cnt}</S.DetailViewText>
        </S.LikeViewWrapper>
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType
        type={type}
        aiName={
          type === "tips" || type == "qnas" ? (aiName ? aiName : null) : null
        }
      />
      <S.DetailDiviner />
      {/* detail 불러오기 */}
      {renderDetail(isWriter)}

      {/* 댓글 입력 */}
      <S.DetailCommentHeader>답변 {detail.comments_cnt}</S.DetailCommentHeader>
      <CommentInput isUser={isUser} id={detail.id} />
      {/* <S.DetailDiviner /> */}
      {/* <CommonCommentList
        currentItems={comments.results} // 사용할 댓글 데이터 배열
        comments={comments.results} // 전체 댓글 데이터 배열
        itemsPerPage={itemsPerPage} // 한 페이지당 보여줄 댓글 수
        currentPage={currentPage} // 현재 페이지
        handlePageChange={pageNumber => setCurrentPage(pageNumber)} // 페이지 변경 핸들러
        onUpdate={null} // 댓글 업데이트 핸들러
        onDelete={null}
        userInfo={user} // 사용자 정보
      /> */}
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
