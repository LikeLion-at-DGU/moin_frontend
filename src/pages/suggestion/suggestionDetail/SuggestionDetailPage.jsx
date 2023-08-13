import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";

function SuggestionDetailPage() {
  // type에는 common,tips, qnas 들어갈 수 있음
  const { id } = useParams();

  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={"suggestion"} aiName={null} />
      <S.DetailDiviner />
      디테일{id}
    </S.DetailPageWrapper>
  );
}

export default SuggestionDetailPage;
