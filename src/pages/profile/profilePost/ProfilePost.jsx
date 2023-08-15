import React, { useState, useEffect } from "react";
import * as S from "./style";
import MypageVector from "../../../assets/images/icon/mypageVector.png";
import ProfileHeader from "../../../components/profile/profileHeader/ProfileHeader";
import { userState } from "../../../context/authState";
import { useRecoilState } from "recoil";
import axios from "../../../api/axios";

function ProfilePost() {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // 데이터
  const [data, setData] = useState();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (userInfo) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = userInfo.accessToken; // 추출한 accessToken
      const headers = {
        Authorization: `Bearer ${accessToken}` // Bearer Token 설정
      };

      const response = await axios.get(`/mypage/posts?page=${currentPage}`, {
        headers
      });

      const detailData = response.data;
      setData(detailData);
      console.log("작성한 게시물");
      console.log(detailData); // 데이터 확인용
    } catch (e) {
      console.log(e);
    }
  };

  //페이지변경
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <>
      <ProfileHeader title="작성한 게시물" img={MypageVector} />
    </>
  );
}

export default ProfilePost;
