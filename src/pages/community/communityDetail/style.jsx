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
