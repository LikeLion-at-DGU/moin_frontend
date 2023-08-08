import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(comment, password);
    setComment("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        minLength={10}
        maxLength={300}
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        pattern="\d{4}"
        title="4 숫자를 입력해주세요."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
