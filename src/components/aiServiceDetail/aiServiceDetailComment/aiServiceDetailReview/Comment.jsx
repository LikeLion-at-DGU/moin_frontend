import React, { useState } from "react";
import * as S from "./style";

// 컴포넌트
import Modal from "react-modal"; // 모달창
import EditDelete from "../../../common/editDelete/EditDelete";
import { userState } from "../../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../../api/axios";

const Comment = ({
  id,
  content,
  onUpdate,
  isRegist,
  userInfo,
  writer,
  created_at
}) => {
  const [user, setUser] = useRecoilState(userState); // 유저 정보
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(content);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창
  const [password, setPassword] = useState(""); // 비회원 댓글 삭제 비밀번호
  const [error, setError] = useState("");

  if (!writer) {
    return <></>;
  }

  const handlePasswordChange = event => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setPassword(inputValue);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedComment(content);
  };

  const handleSave = () => {
    onUpdate(editedComment);
    setIsEditing(false);
  };

  // 삭제 버튼 누르면 모달 창 열기
  const UserDeleteSubmit = () => {
    setIsModalOpen(true);
  };

  // 유저 삭제
  const userCommentOnclick = async () => {
    const accessToken = userInfo.accessToken; // 추출한 accessToken
    const headers = {
      Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    };

    try {
      const response = await axios.delete(`moin/detail/comments/${id}`, {
        headers
      });

      console.log("회원 댓글 삭제: ");
      console.log(response);
      if (response.status === 204) {
        alert("댓글이 삭제되었습니다.");
        setIsModalOpen(false);
        // 새로고침
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  // 비유저 삭제
  const nonUserDeleteSubmit = async e => {
    e.preventDefault();
    const nonUserPassword = {
      password: password
    };

    try {
      const response = await axios.post(
        `moin/detail/comments/${id}/delete_tmp`,
        nonUserPassword
      );

      if (response.status === 204 || response.status === 200) {
        alert("댓글이 삭제가 됐습니다.");
        // 새로고침
        window.location.reload();
      }
    } catch (error) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  if (userInfo && isRegist) {
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
                <EditDelete
                  isWriter={true}
                  id={id}
                  isUser={true}
                  handleEdit={handleEdit}
                  handleDelete={UserDeleteSubmit}
                  isBlue={true}
                />
                {/* <S.AiServiceDetailReviewMyButtonEdit onClick={handleEdit}>
                  수정
                </S.AiServiceDetailReviewMyButtonEdit>
                <S.AiServiceDetailReviewMyButtonDelete
                  onClick={UserDeleteSubmit}
                >
                  삭제
                </S.AiServiceDetailReviewMyButtonDelete> */}
              </S.AiServiceDetailReviewMyButton>

              {/* 삭제 모달 */}
              <S.NotUserDeleteModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="댓글 삭제 확인"
                ariaHideApp={false}
              >
                <S.NotUserDeleteModalContentWrap>
                  <S.DeleteModalContentTitle>
                    정말로 삭제하시겠습니까?
                  </S.DeleteModalContentTitle>
                  <S.DeleteModalContentButtonWrap>
                    <S.NotUserDeleteModalContentButtonConfirm
                      onClick={userCommentOnclick}
                    >
                      확인
                    </S.NotUserDeleteModalContentButtonConfirm>
                    <S.NotUserDeleteModalContentButtonCancle
                      onClick={() => setIsModalOpen(false)}
                    >
                      취소
                    </S.NotUserDeleteModalContentButtonCancle>
                  </S.DeleteModalContentButtonWrap>
                </S.NotUserDeleteModalContentWrap>
              </S.NotUserDeleteModal>
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
              value={content}
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
                <S.AiServiceDetailReviewListHeaderWrapper>
                  <S.AiServiceDetailReviewListWriter>
                    {writer}
                  </S.AiServiceDetailReviewListWriter>
                  <S.AiServiceDetailReviewListDate>
                    {created_at}
                  </S.AiServiceDetailReviewListDate>
                </S.AiServiceDetailReviewListHeaderWrapper>
                <EditDelete
                  isWriter={true}
                  isUser={false}
                  id={3}
                  handleDelete={UserDeleteSubmit}
                />
              </S.AiServiceDetailReviewListHeader>
              <S.AiServiceDetailReviewListContent>
                {content}
              </S.AiServiceDetailReviewListContent>
            </S.AiServiceDetailReviewMyWrap>
            {!userInfo && (
              <S.AiServiceDetailReviewMyButtonNotUser></S.AiServiceDetailReviewMyButtonNotUser>
            )}

            {/* 삭제 모달 */}
            <S.NotUserDeleteModal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              contentLabel="댓글 삭제 확인"
              ariaHideApp={false}
            >
              <S.NotUserDeleteModalContentWrap>
                <S.NotUserDeleteModalContentTitle>
                  비밀번호를 입력하세요
                </S.NotUserDeleteModalContentTitle>

                <S.AiServiceDetailReviewCommentFormWrite
                  onSubmit={nonUserDeleteSubmit}
                >
                  <S.AiServiceDetailReviewCommentFormWritePwd
                    type="password"
                    inputMode="numeric"
                    value={password}
                    onChange={handlePasswordChange}
                    pattern="\d{4}"
                    minLength={4}
                    maxLength={4}
                    title="4자리 숫자로 입력해주세요"
                    placeholder="비밀번호 (4자리 숫자)"
                    required
                  />

                  <S.NotUserDeleteModalContentButtonWrap>
                    <S.NotUserDeleteModalContentButtonConfirm type="submit">
                      확인
                    </S.NotUserDeleteModalContentButtonConfirm>
                    <S.NotUserDeleteModalContentButtonCancle
                      onClick={() => setIsModalOpen(false)}
                    >
                      취소
                    </S.NotUserDeleteModalContentButtonCancle>
                  </S.NotUserDeleteModalContentButtonWrap>
                </S.AiServiceDetailReviewCommentFormWrite>
              </S.NotUserDeleteModalContentWrap>
            </S.NotUserDeleteModal>
          </S.AiServiceDetailReviewListLi>
        </>
      )}
    </>
  );
};
export default Comment;
