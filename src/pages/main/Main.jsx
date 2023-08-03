import React from "react";
import * as S from "./style";
import MainSearch from "../../components/main/mainSearch/MainSearch";
import MainCard from "../../components/main/mainCard/MainCard";
import AiServiceList from "../../components/main/mainAiList/MainAiServiceList";
import MainBannerList from "../../components/main/mainBanner/MainBannerList";

function Main() {
  return (
    <S.MainWrapper>
      {/* <S.MainTitle>타이틀</S.MainTitle> */}
      {/* <S.MainDescription>설명</S.MainDescription> */}
      <MainBannerList />

      {/* <MainCard /> 없애도될듯 */}
      <MainSearch />

      <AiServiceList />
    </S.MainWrapper>
  );
}

export default Main;
