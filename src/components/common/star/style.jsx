import { styled } from "styled-components";

export const StarGray = styled.div`
  position: relative;
  display: flex;
  margin: 0.5rem 0;

  * {
  }
`;

export const StarYellow = styled.div`
  position: absolute;
  display: flex;
  top: 0;

  overflow: hidden;

  width: ${props => props.width}rem;
  * {
    flex-shrink: 0;
  }
`;
