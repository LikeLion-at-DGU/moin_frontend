import React, { useState, useEffect } from "react";
import * as S from "./style";

import AiServiceList from "../../components/common/aiServiceList/AiServiceList";
import MainBannerList from "../../components/main/mainBanner/MainBannerList";
import MainCategory from "../../components/main/mainCategory/MainCategory";
import Selector from "../../components/common/selector/Selector";

import { AiOutlineSearch } from "react-icons/ai";
import SearchForm from "../../components/common/searchForm/SearchForm";
import axios from "../../api/axios";

function Main() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);

  const [num, setNum] = useState(1);

  const categoriesJob = {
    title: "직업군",
    tags: [
      "1 sss",
      "2 ss s",
      "3 sss",
      "4 sss sss",
      "5 sssss",
      "6  sss",
      "7  s sa",
      "8",
      "9",
      "10",
      "11",
      "12"
    ]
  };
  const [currentCategoryTagJob, setCurrentCategoryTagJob] = useState(0);
  const getCurrentCategoryTagJob = tag => {
    setCurrentCategoryTagJob(tag);
  };

  const categoriesKeyword = {
    title: "키워드",
    tags: ["전체", "챗봇", "논문", "과제", "심서현"]
  };
  const [currentCategoryTagKeyword, setCurrentCategoryTagKeyword] = useState(0);
  const getCurrentCategoryTagKeyword = tag => {
    setCurrentCategoryTagKeyword(tag);
  };

  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "rating", title: "평점순" }
  ];
  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  const sortByRecent = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const sortByRating = (a, b) =>
    a.rating_point > b.rating_point
      ? -1
      : a.rating_point < b.rating_point
      ? 1
      : 0;

  //옵셥변경
  useEffect(() => {
    let sortedData = [];

    switch (currentOption) {
      case "recent":
        sortedData = data.sort(sortByRecent);
        break;
      case "rating":
        sortedData = data.sort(sortByRating);
        break;
    }

    setData(sortedData.slice(0, sortedData.length));
  }, [currentOption]);

  //카테고리변경
  useEffect(() => {
    if (currentCategoryTagKeyword != 0) {
      const results = data.filter(Ai =>
        Ai.keyword.includes(
          categoriesKeyword.tags[currentCategoryTagKeyword],
          0
        )
      );
      setShowData(results);
    } else {
      setShowData(data);
    }
  }, [data, currentCategoryTagJob, currentCategoryTagKeyword]);

  //데이터입력
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const aiData = [];
    try {
      const response = await axios.get(`/moin?page=${num}`);
      setData(response.data.results);
      // setData(response.data.results);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <MainBannerList />

      <S.MainWrapper>
        <SearchForm />
        {/* 직군 카테고리 */}
        <MainCategory
          category={categoriesJob}
          currentCategoryTag={currentCategoryTagJob}
          getCurrentCategoryTag={getCurrentCategoryTagJob}
        />
        {/* 키워드 카테고리 */}
        <MainCategory
          category={categoriesKeyword}
          currentCategoryTag={currentCategoryTagKeyword}
          getCurrentCategoryTag={getCurrentCategoryTagKeyword}
        />
        <S.MainTitleWrapper>
          <S.MainTitle>
            <AiOutlineSearch size={"25px"} style={{ marginRight: "5px" }} />{" "}
            모아보기
          </S.MainTitle>
          <Selector
            options={SelectorOption}
            getCurrentOption={getCurrentOption}
          />
        </S.MainTitleWrapper>

        <AiServiceList data={showData} />
      </S.MainWrapper>
    </>
  );
}

export default Main;
