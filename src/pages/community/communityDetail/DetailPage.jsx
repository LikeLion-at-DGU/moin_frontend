import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";
import RightArrowBlue from "../../../assets/images/icon/rightArrowBlue.png";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";
import { AiServiceDetailContentDescriptionCompanyImg } from "../../../components/aiServiceDetail/aiServiceDetailIntro/style";
import CommunityDetailContent from "../../../components/common/communityDetailContent/CommunityDetailContent";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import CommentInput from "../../../components/common/CommentInput/CommentInput";
import CommonCommentList from "../../../components/common/commonCommentList/CommonCommentList";

function DetailPage() {
  const [user] = useRecoilState(userState);

  // type에는 common,tips, qnas 들어갈 수 있음
  const { type, id } = useParams();

  // detail와서 ai name받기
  const [aiName, setAiName] = useState("ChatGPT-3");
  const [isWriter, setIsWriter] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const [detail, setDetail] = useState({});

  const [comments, setComments] = useState([
    {
      count: 24,
      next: "http://127.0.0.1:8000/api/v1/moin/detail/ho/comments/?page=${id}",
      previous: "http://127.0.0.1:8000/api/v1/moin/detail/ho/comments/",
      results: [
        {
          id: 43,
          ai: "ho",
          is_tmp: false,
          writer: "admin",
          content: "페이지네이션 테스트\n",
          created_at: "2023/08/10 12:12",
          updated_at: "2023/08/10 12:12"
        },
        {
          id: 52,
          ai: "ho",
          is_tmp: false,
          writer: "admin",
          content: "페이지네이션 테스트\n",
          created_at: "2023/08/10 12:12",
          updated_at: "2023/08/10 12:12"
        }
      ]
    }
  ]);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      // const response = await axios.get(`community/${type}/${id}/`);
      // console.log(response.data);
      // setDetail(response.data);

      // 임시 데이터
      const response = {
        data: {
          id: 1,
          category: "",
          writer: "서찬",
          title: "서차나ㅇ아난",
          content: "안녕하세요! 서찬입니다.",
          is_liked: false,
          view_cnt: 302,
          comments_cnt: 3,
          likes_cnt: 2,
          images:
            "https://velog.velcdn.com/images/seochan99/post/f69eadaf-46d2-4910-927d-e187ceaee4ab/image.png",
          created_at: "2023.01.01 8:20",
          updated_at: "202301.01 8:40"
        }
      };
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 디테일 렌더링
  const renderDetail = () => {
    return !detail ? (
      <>
        <S.DetailTitle>로딩중</S.DetailTitle>
      </>
    ) : (
      <>
        <CommunityDetailContent detail={detail} isWriter={isWriter} />
      </>
    );
  };

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType
        type={type}
        aiName={type === "tips" ? aiName : null}
      />
      <S.DetailDiviner />
      {/* detail 불러오기 */}
      {renderDetail(isWriter)}

      <S.DetailDiviner />
      {/* 댓글 입력 */}
      <S.DetailCommentHeader>답변 {detail.comments_cnt}</S.DetailCommentHeader>
      <CommentInput isUser={isUser} id={detail.id} />
      <S.DetailDiviner />

      {/* <CommonCommentList
        currentItems={detail.comments} // 사용할 댓글 데이터 배열
        comments={detail.comments} // 전체 댓글 데이터 배열
        itemsPerPage={10} // 한 페이지당 보여줄 댓글 수
        currentPage={1} // 현재 페이지
        handlePageChange={(pageNumber) => setCurrentPage(pageNumber)} // 페이지 변경 핸들러
        onUpdate={(commentId, updatedComment) => updateComment(commentId, updatedComment)} // 댓글 업데이트 핸들러
        onDelete={(commentId) => deleteComment(commentId)} // 댓글 삭제 핸들러
        userInfo={user} // 사용자 정보
      /> */}
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
