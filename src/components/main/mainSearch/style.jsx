import { styled } from "styled-components";

export const MainSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 50px;
  margin: 10px 0px;
  padding: 0px 20px;
  border-radius: 20px;
  border: 5px solid;
  border-color: ${props => props.theme.colors.primary2};

  color: ${props => props.theme.colors.primary2};
  @media (max-width: 780px) {
    width: 100%;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
`;

export const MainSearchInput = styled.input`
  flex-grow: 1;
  padding: 0px 10px;
`;
