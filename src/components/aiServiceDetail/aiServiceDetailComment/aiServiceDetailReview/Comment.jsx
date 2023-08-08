import React, { useState } from "react";
import * as S from "./style";

const Comment = ({
  content,
  onUpdate,
  onDelete,
  isRegist,
  isMember,
  writer,
  created_at
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(content);

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
        {isEditing ? (
          <>
            <S.AiServiceDetailReviewCommentFormWriteMy>
              <S.AiServiceDetailReviewCommentFormWriteTextArea
                value={editedComment}
                onChange={e => setEditedComment(e.target.value)}
                minLength={10}
                maxLength={300}
              />

              <S.AiServiceDetailReviewCommentFormWriteButton
                onClick={handleSave}
              >
                등록
              </S.AiServiceDetailReviewCommentFormWriteButton>
            </S.AiServiceDetailReviewCommentFormWriteMy>
          </>
        ) : (
          <>
            <S.AiServiceDetailReviewMyLi>
              <S.AiServiceDetailReviewMyWrap>
                <S.AiServiceDetailReviewMyHeader>
                  <S.AiServiceDetailReviewMyWriter>
                    {writer}
                  </S.AiServiceDetailReviewMyWriter>
                  <S.AiServiceDetailReviewMyDate>
                    {created_at}
                  </S.AiServiceDetailReviewMyDate>
                </S.AiServiceDetailReviewMyHeader>
                <S.AiServiceDetailReviewMyContent>
                  {content}
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
        )}
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
                  {writer}
                </S.AiServiceDetailReviewListWriter>
                <S.AiServiceDetailReviewListDate>
                  {created_at}
                </S.AiServiceDetailReviewListDate>
              </S.AiServiceDetailReviewListHeader>
              <S.AiServiceDetailReviewListContent>
                {content}
              </S.AiServiceDetailReviewListContent>
            </S.AiServiceDetailReviewMyWrap>
          </S.AiServiceDetailReviewListLi>
        </>
      )}
    </>
  );
};
export default Comment;
