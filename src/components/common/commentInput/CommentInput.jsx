import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function CommentInput({ isUser }) {
  const navigate = useNavigate();
  return !isUser ? (
    <>
      <S.DetailCommentInputWrapper
        onClick={() => {
          navigate("/login");
        }}
      >
        <S.DetailCommentInput
          placeholder="로그인 후 댓글을 작성할 수 있습니다."
          disabled
        />
        <S.DetailCommentButton>로그인</S.DetailCommentButton>
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
}

export default CommentInput;
