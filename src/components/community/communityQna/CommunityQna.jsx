import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import axios from "../../../api/axios";

function CommunityQna() {
  const [qnaContent, setQnaContent] = useState([]);

  useEffect(() => {
    fetchQnaContent();
  }, []);

  // /api/v1/communities/tips?page={num}
  const fetchQnaContent = async () => {
    try {
      const response = await axios.get("/communities/qnas");
      console.log(response);
      const qnaContentData = response.data.results;
      setQnaContent(qnaContentData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <List data={qnaContent} url={"/community/qnas/"} />
    </>
  );
}

export default CommunityQna;
