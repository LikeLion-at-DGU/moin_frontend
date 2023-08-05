import React from "react";
import * as S from "./style";

function MainSelector() {
  return (
    <>
      <S.MainSelectorSelect>
        <S.MainSelectorOption value="recent">최신 순</S.MainSelectorOption>
        <S.MainSelectorOption value="rate">평점 순</S.MainSelectorOption>
      </S.MainSelectorSelect>
    </>
  );
}
export default MainSelector;
