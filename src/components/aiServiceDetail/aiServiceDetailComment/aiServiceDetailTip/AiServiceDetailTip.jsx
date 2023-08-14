import React, { useState, useEffect } from "react";
import * as S from "./style";

// 컴포넌트
import List from "../../../common/list/List";

export function AiServiceDetailTip() {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [tipContent, setTipContent] = useState([]);

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" }
  ];

  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const fetchQnaContent = async () => {
    try {
      const response = await axios.get(
        `/communities/tips?ordering=${currentOption}&page=${currentPage}`
      );

      const tipContentData = response.data.results;
      setTipContent(tipContentData);
      qnaContentData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchQnaContent();
  }, [currentOption]);

  return (
    <>
      <List
        data={tipContent}
        url={"/community/tips/"}
        writeUrl={"/community/create"}
        currentOption={currentOption}
        SelectorOption={SelectorOption}
        getCurrentOption={getCurrentOption}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
