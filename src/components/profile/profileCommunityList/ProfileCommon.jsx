import React, { useState, useEffect } from "react";
import * as S from "./style";

import ProfileList from "../profileList/ProfileList";

import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfileCommon() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`mypage/community/likes`, {
        headers
      });

      const detailData = response.data;
      setData(response.data.results);
      setCount(response.data.count);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("좋아요한 게시글", data); // 데이터 확인용
  console.log("count", count);
  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, []);

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <>
      <ProfileList
        data={data}
        // url={"/community/commons/"}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
      />
    </>
  );
}

export default ProfileCommon;
