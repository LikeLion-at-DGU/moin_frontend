import { styled } from "styled-components";

export const SearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 5rem;
  margin: 1rem 0;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  border-radius: 20px;
  border: 0.4rem solid;
  border-color: ${props => props.theme.colors.primary2};

  color: ${props => props.theme.colors.primary2};
  @media (max-width: 780px) {
    width: 100%;
  }
  @media (min-width: 780px) {
    width: 780px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0 1rem;
`;
