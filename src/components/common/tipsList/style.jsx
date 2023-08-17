import { styled, keyframes } from "styled-components";
import { BiSolidPencil } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AiServiceDetailTipTableTrContent = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const EyeIcon = styled(FaEye)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const AiServiceDetailTipWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

// 헤더 (글쓰기, 정렬순)
export const AiServiceDetailTipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5.1rem;
`;

export const AiServiceDetailTipHeaderWrite = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AiServiceDetailTipHeaderWriteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  color: #4285f4;
  border-radius: 10px;
  border: 2px solid #4285f4;
  padding: 0.7rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #4285f4;
    color: white;
  }
`;

export const AiServiceDetailTipHeaderSelectAi = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  color: #4285f4;

  border-radius: 10px;
  border: 2px solid #4285f4;
  padding: 0.7rem 1rem;
  cursor: pointer;
`;

export const StyledPencilIcon = styled(BiSolidPencil)`
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

// 이용꿀팁 목록
export const AiServiceDetailTipTable = styled.table`
  margin: 0 auto;
  width: 100%;
`;

export const AiServiceDetailTipTableThead = styled.thead``;
export const AiServiceDetailTipTableTbody = styled.tbody`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const AiServiceDetailTipTableTr = styled.tr``;
export const AiServiceDetailTipTableTh = styled.th`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
`;
export const AiServiceDetailTipTableTdTitle = styled.td`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: flex-start;
`;

export const AiServiceDetailTipTableTd = styled.td`
  padding: 2rem;
  font-size: 1.6rem;
  border-bottom: 2px solid #f0f0f0;
  text-align: center;
`;

export const LikeIcon = styled(FaRegThumbsUp)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

export const CommentIcon = styled(FaRegCommentAlt)`
  color: black;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const AiServiceDetailTipPaging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  position: relative;
  bottom: 0;
  transform: translate(-50%, 0);
`;

export const Select = styled.select`
  /* 스타일링을 원하는대로 설정하세요 */
  background-color: #4285f4;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 2rem;
  appearance: none;
  text-align: center;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: white;
  color: #333333;
  /* 스타일링을 원하는대로 설정하세요 */
`;

export const ArrowIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
`;
