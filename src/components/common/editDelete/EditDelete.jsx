import React from "react";
import * as S from "./style"; // 해당 컴포넌트에 사용되는 스타일 파일 경로를 임포트해주세요.
import BinIcon from "../../../assets/images/icon/bin.png";
import PencilIcon from "../../../assets/images/icon/pencil.png";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";
function EditDelete({ isWriter, id }) {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const deleteComment = async () => {
    const real = confirm("정말 삭제하시겠습니까?");
    if (!real) return;
    const accessToken = userInfo.accessToken; // 추출한 accessToken
    console.log(userInfo);
    const headers = {
      Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    };
    try {
      const reponse = await axios.delete(`communities/posts/${id}/`, {
        headers
      });
      if (reponse.status === 200) {
        alert("게시글이 삭제되었습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const editComment = async () => {
    // 수정 창 뛰우기
    alert("수정 창 뛰우기");
    // const accessToken = userInfo.accessToken; // 추출한 accessToken
    // const headers = {
    //   Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    // };
    // try {
    //   const reponse = await axios.put(`communities/posts/${id}/`, {
    //     headers
    //   });
    //   if (reponse.status === 200) {
    //     alert("댓글이 수정되었습니다.");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  // /api/v1/communities/posts/comments/{comment_id}/
  // DELETE
  // 댓글 삭제

  return isWriter ? (
    <S.DetailTitleIconWrapper>
      <S.DetailTitleIcon src={PencilIcon} onClick={deleteComment} />
      <S.DetailTitleIcon src={BinIcon} onClick={editComment} />
    </S.DetailTitleIconWrapper>
  ) : (
    <></>
  );
}

export default EditDelete;
