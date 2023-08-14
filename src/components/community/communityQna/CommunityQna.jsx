import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import axios from "../../../api/axios";

function CommunityQna() {
  const [qnaContent, setQnaContent] = useState([]);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

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
        `/communities/qnas?ordering=${currentOption}&page=${currentPage}`
      );

      const qnaContentData = response.data.results;
      setQnaContent(qnaContentData);
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
        data={qnaContent}
        url={"/community/qnas/"}
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

export default CommunityQna;
