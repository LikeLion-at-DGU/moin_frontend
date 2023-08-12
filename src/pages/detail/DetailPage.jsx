import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

function DetailPage() {
  // params 가져와 listId에 넣기
  const { tip_id } = useParams();

  // useState를 통해 list 객체 생성
  const [list, setList] = useState({});

  // list 정보 가져오는 함수
  const fetchListData = async () => {
    const request = await axios.get(`/community/tips/${tip_id}`);
    setList(request.data);
  };

  console.log("디테일 페이지");

  // useEffect를 통해 listId가 바뀔때마다 fetchListData를 실행한다.
  useEffect(() => {
    fetchListData();
  }, [tip_id]);

  const renderListDetail = () => {
    console.log("디테일 페이지");
    return !list ? (
      <S.ListTitle>로딩중..</S.ListTitle>
    ) : (
      <>
        디테일 페이지
        {/* <S.ListTitle>{list.title}</S.ListTitle> */}
      </>
    );
  };

  return <>{renderListDetail()}</>;
}

export default DetailPage;
