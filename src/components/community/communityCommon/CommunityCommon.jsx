import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import CommonList from "../../common/commonList/CommonList";
import axios from "../../../api/axios";

function CommunityCommon() {
  const [commonContent, setCommonContent] = useState([]);

  // get
  // /api/v1/communities/commons

  useEffect(() => {
    fetchCommonContent();
  }, []);

  const fetchCommonContent = async () => {
    try {
      const response = await axios.get("/communities/commons");

      const commentContentData = response.data.results;
      setCommonContent(commentContentData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <CommonList
        data={commonContent}
        url={"/community/commons/"}
        writeUrl={"/community/create"}
      />
    </>
  );
}

export default CommunityCommon;
