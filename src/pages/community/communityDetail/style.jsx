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

export const DetailPageType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.primary1};
`;

export const RightArrowBlueIcon = styled.img`
  display: flex;
  width: 1rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const DetailPageTypeText = styled.h1`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
`;
