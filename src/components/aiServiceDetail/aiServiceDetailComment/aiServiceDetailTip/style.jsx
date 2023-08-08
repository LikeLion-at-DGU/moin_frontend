import { styled } from "styled-components";
import { BiSolidPencil } from "react-icons/bi";

export const AiServiceDetailTipWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 헤더 (글쓰기, 정렬순)
export const AiServiceDetailTipHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5.1rem;
`;

export const AiServiceDetailTipHeaderWrite = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: #4285f4;

  border-radius: 10px;
  border: 1px solid #4285f4;
  padding: 0.7rem 1rem;
  margin-right: 88rem;
`;

export const StyledPencilIcon = styled(BiSolidPencil)`
  color: #4285f4;
  font-size: 2rem;
  margin-right: 0.5rem;
`;

export const AiServiceDetailTipHeaderSort = styled.div`
  display: flex;
`;

export const AiServiceDetailTipLine = styled.div`
  display: flex;
  margin-top: 2.7rem;
  background: #4285f4;
  width: 110rem;
  height: 2px;
`;
