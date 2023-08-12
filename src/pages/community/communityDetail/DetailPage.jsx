import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as S from "./style";

function DetailPage() {
  // useLocaotion
  // const location = useLocation();
  // const pathSegments = location.pathname.split("/");

  // const type = pathSegments[2]; // commons, qnas, tips
  // const id = pathSegments[3]; // ID value
  const { type, id } = useParams();
  console.log(type, id);
  return (
    <>
      {type}디테일{id}
    </>
  );
}

export default DetailPage;
