import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

// 컴포넌트

import Paging from "../../common/paging/Paging";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState";
import NoPage from "../../common/noPage/NoPage";

const CommonList = ({ data, currentPage, setCurrentPage, count }) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const navigate = useNavigate();

  //Paging
  // 한 페이지당 보여줄 댓글 수
  const itemsPerPage = 10;

  // 페이지 변경 핸들러
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <S.AiServiceDetailTipWrap>
        <S.AiServiceDetailTipLine></S.AiServiceDetailTipLine>
        {/* 데이터 목록 */}
        {data && data.length > 0 ? (
          <S.AiServiceDetailTipTable>
            <S.AiServiceDetailTipTableThead>
              <S.AiServiceDetailTipTableTr>
                <S.AiServiceDetailTipTableTh>번호</S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  카테고리
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>제목</S.AiServiceDetailTipTableTh>

                <S.AiServiceDetailTipTableTh>
                  등록일시
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  좋아요
                </S.AiServiceDetailTipTableTh>
                <S.AiServiceDetailTipTableTh>
                  조회수
                </S.AiServiceDetailTipTableTh>
              </S.AiServiceDetailTipTableTr>
            </S.AiServiceDetailTipTableThead>
            <S.AiServiceDetailTipTableTbody>
              {data.map((data, idx) => (
                <S.AiServiceDetailTipTableTrContent
                  key={data.id}
                  onClick={() => {
                    let url;

                    if (data.category === "common") {
                      url = "/community/commons/";
                    } else if (data.category === "tip") {
                      url = "/community/tips/";
                    } else if (data.category === "qna") {
                      url = "/community/qnas/";
                    } else {
                      return;
                    }

                    navigate(`${url}${data.id}`);
                  }}
                >
                  <S.AiServiceDetailTipTableTd>
                    {idx + 1 + (currentPage - 1) * itemsPerPage}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.category === "common" && "자유 게시판"}
                    {data.category === "tip" && "이용 꿀팁"}
                    {data.category === "qna" && "Q&A"}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTdTitle>
                    {data.title}
                    <strong style={{ fontSize: "1.6rem", color: "#4285F4" }}>
                      [{data.comments_cnt}]
                    </strong>
                  </S.AiServiceDetailTipTableTdTitle>

                  <S.AiServiceDetailTipTableTd>
                    {data.created_at.split(" ")[0]}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.likes_cnt}
                  </S.AiServiceDetailTipTableTd>
                  <S.AiServiceDetailTipTableTd>
                    {data.view_cnt}
                  </S.AiServiceDetailTipTableTd>
                </S.AiServiceDetailTipTableTrContent>
              ))}
            </S.AiServiceDetailTipTableTbody>
          </S.AiServiceDetailTipTable>
        ) : (
          <>
            <NoPage />
          </>
        )}
        {/* 페이지네이션 컴포넌트 사용 */}
        <S.AiServiceDetailTipPaging>
          <Paging
            page={currentPage}
            count={count}
            postPerPage={itemsPerPage}
            setPage={handlePageChange}
          />
        </S.AiServiceDetailTipPaging>
      </S.AiServiceDetailTipWrap>
    </>
  );
};

export default CommonList;
