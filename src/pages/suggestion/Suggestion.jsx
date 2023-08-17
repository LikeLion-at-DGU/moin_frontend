import React, { useEffect, useState } from "react";
import * as S from "./style";

import Banner from "../../components/common/banner/Banner";

import axios from "../../api/axios";
import NoticeBanner from "../../components/common/noticeBanner/NoticeBanner";
import PostList from "../../components/common/postList/PostList";

function Suggestion() {
  const [sugestionContent, setSugestionContent] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchSuggestionContent();
  }, []);

  const fetchSuggestionContent = async () => {
    try {
      const response = await axios.get(`/suggestions?page=${currentPage}`);

      const ContentData = response.data.results;
      setCount(response.data.count);

      setSugestionContent(ContentData);
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchSuggestionContent();
  }, [currentPage]);

  return (
    <S.SuggestionWrapper>
      <Banner
        titleKorean="건의사항"
        titleEnglish="SUGGESTION"
        image={<S.SuggestionIconImg />}
      />
      <NoticeBanner
        title={"이용안내"}
        content={
          "건의사항은 관리자 열람 이후, 건의 내용에 따라 답변까지 3-5일 소요됩니다."
        }
      />
      <PostList
        use={"suggestion"}
        data={sugestionContent}
        url={"/suggestion/"}
        writeUrl={"/suggestion/create"}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
      />
    </S.SuggestionWrapper>
  );
}

export default Suggestion;
