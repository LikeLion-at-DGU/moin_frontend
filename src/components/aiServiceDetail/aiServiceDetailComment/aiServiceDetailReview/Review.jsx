import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Review() {
  const [comments, setComments] = useState([
    { id: 1, text: "첫 번째 댓글입니다.", isMember: false },
    { id: 2, text: "두 번째 댓글입니다.", isMember: false, password: "1234" }
  ]);

  const [showForm, setShowForm] = useState(true); // 댓글 작성 폼 보이기 여부 (댓글 삭제 시 다시 댓글 보이게)

  const handleUpdateComment = (id, updatedComment) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id ? { ...comment, text: updatedComment } : comment
      )
    );
  };

  const handleDeleteComment = id => {
    setComments(prevComments =>
      prevComments.filter(comment => comment.id !== id)
    );
  };

  const handleSubmitComment = (commentText, password) => {
    const newComment = {
      id: Date.now(),
      text: commentText,
      isMember: true,
      password: password
    };
    setComments(prevComments => [...prevComments, newComment]);
    setShowForm(false); // 댓글 등록 후 댓글 작성 폼 감추기
  };

  return (
    <>
      {showForm && <CommentForm onSubmit={handleSubmitComment} />}
      <CommentList
        comments={comments}
        onUpdate={handleUpdateComment}
        onDelete={commentId => {
          handleDeleteComment(commentId);
          setShowForm(true); // 댓글 삭제 후 댓글 작성 폼 보이도록 설정
        }}
      />
    </>
  );
}

export default Review;
