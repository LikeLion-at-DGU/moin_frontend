import { styled } from "styled-components";

export const SuggestionHeaderWrapper = styled.div`
  display: flex;
  justify-content: row;
  width: 95%;
  padding: 1.5rem 3rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  margin-top: 2.5rem;
  color: #606067;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const SuggestionHeaderText = styled.strong`
  color: #4285f4;
  text-align: center;
  margin-right: 3.5rem;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;
