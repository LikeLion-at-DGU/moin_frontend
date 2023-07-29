import React from 'react'
import * as S from "./style";
import MainSearch from '../../components/main/mainSearch/MainSearch';
import MainCard from '../../components/main/mainCard/MainCard';

function Main() {
  return (
    <S.MainWrapper>
      <S.MainTitle>대충 몸통임</S.MainTitle>
      <S.MainDescription>여긴 설명 스타일 컴포넌트 이런식으로 씀</S.MainDescription>

      <MainSearch/>
      <MainCard/>
      
    </S.MainWrapper>
  )
}

export default Main