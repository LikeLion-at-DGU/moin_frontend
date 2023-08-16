import { styled } from "styled-components";
import Modal from "react-modal"; // 모달창

export const NotUserDeleteModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 30rem;

  overlay {
    background-color: rgba(255, 2, 2, 0.5);
    z-index: 1000;
  }
`;

export const NotUserModalContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100rem;
  height: 30rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const ModalContentTitle = styled.div`
  display: flex;
  color: #4285f4;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const ModalContentButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const NotUserModalContentButtonConfirm = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #fff;
  padding: 1rem 4rem;
  margin-right: 2rem;
  background: #4285f4;
  border: 2px solid #4285f4;
  &:hover {
    background: #fff;
    color: #4285f4;
  }
`;

export const NotUserModalContentButtonCancle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  padding: 1rem 4.6rem;

  &:hover {
    background-color: #ededed;
  }
`;

export const NotUserDeleteModalContentIcon = styled.img`
  width: 10rem;
  margin-bottom: 4rem;
`;