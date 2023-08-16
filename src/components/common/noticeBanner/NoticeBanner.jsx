import React from "react";
import * as S from "./style";

function NoticeBanner({ content }) {
  return (
    <>
      <S.SuggestionHeaderWrapper>
        <S.SuggestionHeaderText>💡&nbsp;&nbsp;이용안내 </S.SuggestionHeaderText>
        {content}
      </S.SuggestionHeaderWrapper>
    </>
  );
}

export default NoticeBanner;
