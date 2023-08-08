import React, { useState } from "react";
import * as S from "./style";

const Comment = ({ comment, onUpdate, onDelete, isRegist, isMember }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedComment);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(comment);
  };

  if (isMember && isRegist) {
    return (
      <>
        <S.AiServiceDetailReviewMyLi>
          <S.AiServiceDetailReviewMyWrap>
            <S.AiServiceDetailReviewMyHeader>
              <S.AiServiceDetailReviewMyWriter>
                작성자
              </S.AiServiceDetailReviewMyWriter>
              <S.AiServiceDetailReviewMyDate>
                날짜
              </S.AiServiceDetailReviewMyDate>
            </S.AiServiceDetailReviewMyHeader>
            <S.AiServiceDetailReviewMyContent>
              {comment}
            </S.AiServiceDetailReviewMyContent>
          </S.AiServiceDetailReviewMyWrap>
          <S.AiServiceDetailReviewMyButton>
            <S.AiServiceDetailReviewMyButtonEdit onClick={handleEdit}>
              수정
            </S.AiServiceDetailReviewMyButtonEdit>
            <S.AiServiceDetailReviewMyButtonDelete onClick={handleDelete}>
              삭제
            </S.AiServiceDetailReviewMyButtonDelete>
          </S.AiServiceDetailReviewMyButton>
        </S.AiServiceDetailReviewMyLi>
      </>
    );
  }

  return (
    <>
      {isEditing ? (
        <>
          <S.AiServiceDetailReviewCommentFormWrite>
            <S.AiServiceDetailReviewCommentFormWriteTextArea
              value={editedComment}
              onChange={e => setEditedComment(e.target.value)}
              minLength={10}
              maxLength={300}
            />
            <S.AiServiceDetailReviewCommentFormWriteButton onClick={handleSave}>
              등록
            </S.AiServiceDetailReviewCommentFormWriteButton>
          </S.AiServiceDetailReviewCommentFormWrite>
        </>
      ) : (
        <>
          <S.AiServiceDetailReviewListLi>
            <S.AiServiceDetailReviewMyWrap>
              <S.AiServiceDetailReviewListHeader>
                <S.AiServiceDetailReviewListWriter>
                  작성자
                </S.AiServiceDetailReviewListWriter>
                <S.AiServiceDetailReviewListDate>
                  날짜
                </S.AiServiceDetailReviewListDate>
              </S.AiServiceDetailReviewListHeader>
              <S.AiServiceDetailReviewListContent>
                {comment}
              </S.AiServiceDetailReviewListContent>
            </S.AiServiceDetailReviewMyWrap>
          </S.AiServiceDetailReviewListLi>
        </>
      )}
    </>
  );
};
export default Comment;
