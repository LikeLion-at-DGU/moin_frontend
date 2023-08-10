import { styled } from "styled-components";
import { ReactComponent as CommunityIcon } from "../../../assets/images/icon/authBannerIcon.svg";
// 전체 width 차지
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// MypageBook
export const AuthIconImg = styled(CommunityIcon)`
  display: flex;
  width: 17rem;
  height: 12rem;
  margin-top: 16.5rem;
`;
