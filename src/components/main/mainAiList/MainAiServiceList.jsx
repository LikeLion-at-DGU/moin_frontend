import React from "react";
import * as S from "./style";

import AiService from "./AiService";

//임시입니다.
const AiData = [
  {
    id: 1,
    name: "1번에이아이"
  },
  {
    id: 2,
    name: "2번에이아이"
  },
  {
    id: 3,
    name: "3번에이아이"
  }
];

function MainAiServiceList() {
  return (
    <>
      <S.AiServiceListWrapper>
        {AiData.map((item, idx) => (
          <AiService key={idx} item={item} />
        ))}
      </S.AiServiceListWrapper>
    </>
  );
}

export default MainAiServiceList;
