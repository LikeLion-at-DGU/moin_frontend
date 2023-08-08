import React, { useState } from "react";

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
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={editedComment}
            onChange={e => setEditedComment(e.target.value)}
            minLength={10}
            maxLength={300}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{comment}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
