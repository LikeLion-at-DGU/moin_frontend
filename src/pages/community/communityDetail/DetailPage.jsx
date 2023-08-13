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

function DetailPage() {
  const [user] = useRecoilState(userState);

  // type에는 common,tips, qnas 들어갈 수 있음
  const { type, id } = useParams();

  // detail와서 ai name받기
  const [aiName, setAiName] = useState("ChatGPT-3");
  const [isWriter, setIsWriter] = useState(true);
  const [detail, setDetail] = useState({});

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

  // 댓글 인풋 렌더링
  const renderCommentInput = isWriter => {
    return !isWriter ? (
      <>
        <S.DetailCommentInputWrapper>
          <S.DetailCommentInput placeholder="로그인 후 댓글을 작성할 수 있습니다." />
          <S.DetailCommentButton>등록</S.DetailCommentButton>
        </S.DetailCommentInputWrapper>
      </>
    ) : (
      <>
        <S.DetailCommentInputWrapper>
          <S.DetailCommentInput placeholder="답변을 작성해보세요 !" />
          <S.DetailCommentButton>등록</S.DetailCommentButton>
        </S.DetailCommentInputWrapper>
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
      {renderCommentInput()}
      <S.DetailDiviner />
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
