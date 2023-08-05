import { styled } from "styled-components";

export const AiServiceListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: solid 2px #282828;

  width: 100%;
  padding: 30px;
`;

export const AiServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 2px #282828;

  height: 100px;
  width: calc(90% / 2);
  flex-shrink: 0;
  margin: 10px;
`;
