import React from "react";
import * as S from "./style";

import { Link } from "react-router-dom";

function AiServiceList() {
  return (
    <>
      <div style={{padding:'10px'}}>AiServiceList</div>
      <S.AiServiceListWrapper>
        <Link to={`AiService/1`}>AI 1</Link>
        <Link to={`AiService/2`}>AI 2</Link>
      </S.AiServiceListWrapper>
    </>
  )
}

export default AiServiceList;
