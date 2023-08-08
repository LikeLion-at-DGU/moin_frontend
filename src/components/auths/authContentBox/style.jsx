import { styled } from "styled-components";
import colors from "../../../style/theme";

export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 23rem;
  border-radius: 1rem;
  border-radius: 11.873px;
  background: var(--grey-2, #f8f8fa);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const ProfileInfoContentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  color: ${colors.black};
`;

export const ProfileInfoContentIcon = styled.img`
  height: 3.7rem;
  margin-bottom: 1.5rem;
`;
