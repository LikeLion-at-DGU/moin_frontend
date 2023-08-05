import { styled } from "styled-components";

export const MainSelectorSelect = styled.select`
  border: 1px solid;
  border-color: ${props => props.theme.colors.gray4};
  color: ${props => props.theme.colors.gray4};
  border-radius: 5px;
  padding: 10px;
`;

export const MainSelectorOption = styled.option``;
