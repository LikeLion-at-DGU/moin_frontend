import { styled } from "styled-components";

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
