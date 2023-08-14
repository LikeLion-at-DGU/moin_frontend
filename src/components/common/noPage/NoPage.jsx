import React from "react";
import { styled } from "styled-components";
import MoinIcon from "../../../assets/images/moin_logo.png";

export const PagingNoPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  color: ${props => props.theme.colors.gray4};
`;

export const PagingNoPageIcon = styled.img`
  width: 10rem;
  height: 7rem;
  margin: 7rem 0rem 4rem 0rem;
`;

function NoPage() {
  return (
    <PagingNoPage>
      <PagingNoPageIcon src={MoinIcon} />
      게시된 글이 아직 없습니다!
    </PagingNoPage>
  );
}

export default NoPage;
