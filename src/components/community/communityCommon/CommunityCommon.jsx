import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import CommonList from "../../common/commonList/CommonList";
import axios from "../../../api/axios";

function CommunityCommon() {
  const [commonContent, setCommonContent] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // get
  // /api/v1/communities/commons

  //selector
  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "popular", title: "조회순" },
    { value: "like", title: "좋아요순" }
  ];

  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const fetchCommonContent = async () => {
    try {
      const response = await axios.get(
        `/communities/commons?ordering=${currentOption}&page=${currentPage}`
      );

      const commentContentData = response.data.results;
      setCommonContent(commentContentData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchCommonContent();
  }, [currentOption]);

  return (
    <>
      <CommonList
        data={commonContent}
        url={"/community/commons/"}
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

export default CommunityCommon;
