import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Review() {
  const [comments, setComments] = useState([
    { id: 1, text: "첫 번째 댓글입니다.", isMember: true },
    { id: 2, text: "두 번째 댓글입니다.", isMember: false, password: "1234" }
  ]);

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
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmitComment} />
      <CommentList
        comments={comments}
        onUpdate={handleUpdateComment}
        onDelete={handleDeleteComment}
      />
    </>
  );
}

export default Review;
