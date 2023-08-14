import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import * as S from "./style";

import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../../api/axios";

function Review() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 댓글 목록
  const [comments, setComments] = useState({});

  // 내 댓글
  const [myComments, setMyComments] = useState({
    my_comment_cnt: 7,
    my_comment: [
      {
        id: 1,
        ai: "ho",
        is_tmp: false,
        writer: "admin",
        content: "1새 댓글~~",
        created_at: "2023/08/11 02:52",
        updated_at: "2023/08/11 02:52"
      },
      {
        id: 2,
        ai: "ho",
        is_tmp: false,
        writer: "admin",
        content: "2새 댓글~~",
        created_at: "2023/08/11 02:52",
        updated_at: "2023/08/11 02:52"
      },
      {
        id: 2,
        ai: "ho",
        is_tmp: false,
        writer: "admin",
        content: "3새 댓글~~",
        created_at: "2023/08/11 02:52",
        updated_at: "2023/08/11 02:52"
      }
    ]
  });

  const location = useLocation();
  const aiName = decodeURI(location.pathname.split("/")[2]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/moin/detail/${aiName}/comments`);
      const detailData = response.data;

      setComments(detailData);
    } catch (e) {
      console.log(e);
    }
  };

  const [showForm, setShowForm] = useState(true); // 댓글 작성 폼 보이기 여부 (댓글 삭제 시 다시 댓글 보이게)

  const handleUpdateComment = (id, updatedComment) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id ? { ...comment, content: updatedComment } : comment
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
      content: commentText,
      created_at: Date(),
      isMember: true,
      password: password
    };

    const currentDate = new Date(); // 현재 날짜와 시간 가져오기
    console.log("댓글 등록 날짜 및 시간:", currentDate);

    setComments(prevComments => [...prevComments, newComment]);
    setShowForm(false); // 댓글 등록 후 댓글 작성 폼 감추기
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmitComment} userInfo={userInfo} />
      <CommentList
        comments={comments}
        onUpdate={handleUpdateComment}
        onDelete={commentId => {
          handleDeleteComment(commentId);
          setShowForm(true); // 댓글 삭제 후 댓글 작성 폼 보이도록 설정
        }}
        userInfo={userInfo}
        myComments={myComments.my_comment}
        myCommentsCnt={myComments.my_comment_cnt}
        // count={comments[0].count}
      />
    </>
  );
}

export default Review;
