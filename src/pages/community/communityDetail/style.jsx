import { styled, keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  max-width: 1178px;
  width: 100%;
  margin-top: 6rem;
  padding: 0 2rem;
  margin-bottom: 13rem;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const DetailDiviner = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: #eeeff3;
  border: none;
  margin-bottom: 2rem;
`;

export const DetailCommentHeader = styled.div`
  color: #4285f4;
  font-size: 2rem;
  font-weight: 600;
`;
export const DetailCommentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DetailCommentInput = styled.input`
  width: 90%;
  height: 5rem;
  border: 1px solid #eeeff3;
  border-radius: 20px;
  padding: 0rem 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #282828;
  outline: none;
  &::placeholder {
    color: #acacac;
  }
`;

export const DetailCommentButton = styled.button`
  width: 10%;
  height: 5rem;
  margin-left: 2rem;
  border: 1px solid #aeafb9;
  border-radius: 20px;

  color: #acacac;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  // hover
  &:hover {
    background-color: #eeeff3;
  }
`;
