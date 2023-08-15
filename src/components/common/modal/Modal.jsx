import React, { useState, useEffect } from "react";
import * as S from "./style";

function Modal({ isOpen, onClose, onConfirm }) {
  return (
    <S.NotUserDeleteModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="댓글 삭제 확인"
      ariaHideApp={false}
    >
      <S.NotUserDeleteModalContentWrap>
        <S.DeleteModalContentTitle>
          정말로 삭제하시겠습니까?
        </S.DeleteModalContentTitle>
        <S.DeleteModalContentButtonWrap>
          <S.NotUserDeleteModalContentButtonConfirm onClick={onConfirm}>
            확인
          </S.NotUserDeleteModalContentButtonConfirm>
          <S.NotUserDeleteModalContentButtonCancle onClick={onClose}>
            취소
          </S.NotUserDeleteModalContentButtonCancle>
        </S.DeleteModalContentButtonWrap>
      </S.NotUserDeleteModalContentWrap>
    </S.NotUserDeleteModal>
  );
}

export default Modal;
