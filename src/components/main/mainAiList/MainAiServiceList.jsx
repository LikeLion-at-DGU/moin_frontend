import React, { useEffect, useState } from "react";
import * as S from "./style";

import AiService from "./AiService";

function MainAiServiceList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const aiData = [
      {
        id: 1,
        title: "chat GPT",
        content: "chan AI가 개발했지요?",
        keyword: ["챗봇", "과제"],
        thumbnail:
          "https://www.headmind.com/wp-content/uploads/2023/01/CHAT-GPT.png",
        like_cnt: 599,
        rating_point: 4,
        rating_cnt: 202
      },
      {
        id: 2,
        title: "Bing",
        content: "빙빙",
        keyword: ["챗봇", "과제", "논문"],
        thumbnail:
          "http://image.koreatimes.com/article/2023/02/13/20230213105650631.jpg",
        like_cnt: 403,
        rating_point: 3,
        rating_cnt: 332
      }
    ];
    setData(aiData);
  }, []);

  return (
    <>
      <S.MainAiServiceListWrapper>
        <S.MainAiServices>
          {data.map((item, idx) => (
            <AiService key={idx} item={item} />
          ))}
        </S.MainAiServices>
      </S.MainAiServiceListWrapper>
    </>
  );
}

export default MainAiServiceList;