import { styled } from "styled-components";

export const MainAiServiceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
`;

export const MainAiServiceListTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`;

export const MainAiServices = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: grid;
  @media (max-width: 576px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
  @media (min-width: 576px) {
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
  grid-gap: 10px;
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
`;

export const AiServiceThumbnail = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 90%;
  margin-bottom: 20px;
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
  padding: 0px 20px;
`;

export const AiServiceTitle = styled.div``;

export const AiServiceDescription = styled.div`
  padding: 5px 0px;
`;

export const AiServiceStar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const AiServiceStarDescription = styled.div`
  margin: 0px 5px;
  color: ${props => props.theme.colors.gray4};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AiServiceKeywords = styled.div`
  display: flex;
  justify-content: start;
  margin: 5px 0px;
`;

export const AiServiceKeyword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: black;
  color: white;
`;

export const AiServiceFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

export const AiServiceLikeDescription = styled.div`
  margin: 0px 5px;
  color: ${props => props.theme.colors.gray4};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
