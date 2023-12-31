import { styled } from "styled-components";

export const MainAiServiceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  flex-grow: 1;

  position: relative;

  padding-bottom: 6rem;
  margin-bottom: 1rem;
`;

export const MainAiServiceListTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
`;

export const MainAiServices = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;

  @media (max-width: 768px) {
    grid-template-rows: 2fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-rows: 4fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-gap: 4rem 2rem;
`;

export const AiServiceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: solid 2px;
  border-color: ${props => props.theme.colors.gray3};
  border-radius: 10px;
  width: 100%;
  flex-shrink: 0;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AiServiceThumbnail = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 90%;
  margin-bottom: 2rem;
  overflow: hidden;
`;

export const AiServiceThumbnailImg = styled.img`
  z-index: 0;
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  left: 0;

  width: 100%;
  height: auto;
`;

export const AiServiceBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  padding: 0 2rem;
`;

export const AiServiceTitle = styled.div`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 560px) {
    max-width: 18rem;
  }
  @media (min-width: 560px) {
    max-width: 34rem;
  }
  @media (min-width: 768px) {
    max-width: 20rem;
  }
  @media (min-width: 992px) {
    max-width: 18rem;
  }
`;

export const AiServiceDescription = styled.div`
  padding: 1rem 0;
  max-width: 18rem;
  overflow: hidden;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 560px) {
    max-width: 18rem;
  }
  @media (min-width: 560px) {
    max-width: 34rem;
  }
  @media (min-width: 768px) {
    max-width: 20rem;
  }
  @media (min-width: 992px) {
    max-width: 18rem;
  }
`;

export const AiServiceStar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const AiServiceStarDescription = styled.div`
  margin: 0 0.5rem;
  color: ${props => props.theme.colors.gray4};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AiServiceFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
`;

export const AiServiceLikeDescription = styled.div`
  margin: 0 0.5rem;
  color: ${props => props.theme.colors.gray4};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
