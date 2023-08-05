import { styled } from "styled-components";

export const MainSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 20px 0px;
  border-radius: 20px;
  border: 5px solid;
  border-color: ${props => props.theme.colors.primary2};

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
`;
