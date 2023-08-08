import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, onUpdate, onDelete }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment.text}
          onUpdate={updatedComment => onUpdate(comment.id, updatedComment)}
          onDelete={() => onDelete(comment.id)}
        />
      ))}
    </div>
  );
};

export default CommentList;
