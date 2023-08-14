import React, { useEffect, useState } from "react";
import * as S from "./style";
import List from "../../common/list/List";
import TipsList from "../../common/tipsList/TipsList";
import axios from "../../../api/axios";
function CommunityTips() {
  const [tipContent, setTipContent] = useState([]);

  useEffect(() => {
    fetchTipContent();
  }, []);

  const fetchTipContent = async () => {
    try {
      const response = await axios.get("/communities/tips");
      const tipContentData = response.data.results;
      setTipContent(tipContentData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TipsList data={tipContent} url={"/community/tips/"} />
    </>
  );
}

export default CommunityTips;
