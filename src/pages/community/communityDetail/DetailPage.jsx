import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";
import RightArrowBlue from "../../../assets/images/icon/rightArrowBlue.png";
import CommuntiyDetailPageType from "../../../components/community/communtiyDetailPageType/CommuntiyDetailPageType";

function DetailPage() {
  const { type, id } = useParams();

  // type에는 common,tips, qnas 들어갈 수 있음

  console.log(type, id);
  return (
    <S.DetailPageWrapper>
      <CommuntiyDetailPageType type={type} />
      {type}디테일{id}
    </S.DetailPageWrapper>
  );
}

export default DetailPage;
