import React, { useState } from "react";
import * as S from "./style";

const Comment = ({ comment, onUpdate, onDelete }) => {
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
