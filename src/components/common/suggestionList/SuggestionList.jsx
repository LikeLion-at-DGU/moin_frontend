import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

// 컴포넌트
import Selector from "../selector/Selector";
import Paging from "../paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";

const SuggestionList = ({ data, url, writeUrl }) => {
  // 회원 정보
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const navigate = useNavigate();
  // 댓글 데이터를 최신순으로 정렬
  const sortedComments = data.slice().reverse();

  //Paging
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 댓글 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedComments.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  console.log(data);

  //selector
  const SelectorOption = [
    { value: "recent", title: "최신순" },
    { value: "rating", title: "평점순" }
  ];
  const [currentOption, setCurrentOption] = useState("recent");
  const getCurrentOption = option => {
    setCurrentOption(option);
  };

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipHeader>
          <S.AiServiceDetailTipHeaderWrite>
            <S.AiServiceDetailTipHeaderWriteContent
              onClick={() => {
                // 로그인하지 않은 경우 로그인 페이지로 이동
                !userInfo ? navigate("/login") : navigate(writeUrl);
              }}
            >
              <S.StyledPencilIcon />
              글쓰기
            </S.AiServiceDetailTipHeaderWriteContent>
          </S.AiServiceDetailTipHeaderWrite>
        </S.AiServiceDetailTipHeader>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        <S.AiServiceDetailTipTable>
          <S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTr>
              <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh></S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                등록일시
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh>
                반영여부
              </S.AiServiceDetailTipTableTh>
              <S.AiServiceDetailTipTableTh> </S.AiServiceDetailTipTableTh>
            </S.AiServiceDetailTipTableTr>
          </S.AiServiceDetailTipTableThead>
          <S.AiServiceDetailTipTableTbody>
            {currentItems.map((data, idx) => (
              <S.AiServiceDetailTipTableTr
                key={data.id}
                onClick={() => navigate(`${url}${data.id}`)}
              >
                <S.AiServiceDetailTipTableTd>
                  {currentItems.length - idx}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.title}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd></S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.created_at}
                </S.AiServiceDetailTipTableTd>
                <S.AiServiceDetailTipTableTd>
                  {data.reflected_status === 0 ? (
                    <S.StatusText color="#282828">대기중</S.StatusText>
                  ) : data.reflected_status === 1 ? (
                    <S.StatusText color="#4285F4">반영</S.StatusText>
                  ) : (
                    <S.StatusText color="#FF5D47">미반영</S.StatusText>
                  )}
                </S.AiServiceDetailTipTableTd>
              </S.AiServiceDetailTipTableTr>
            ))}
          </S.AiServiceDetailTipTableTbody>
        </S.AiServiceDetailTipTable>
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={sortedComments.length}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
};

export default SuggestionList;
