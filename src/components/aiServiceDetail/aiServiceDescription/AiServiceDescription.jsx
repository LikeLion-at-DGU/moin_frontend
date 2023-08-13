import React, { useState, useEffect } from "react";
import * as S from "./style";

// 아이콘
import DescriptionHeartIcon from "../../../assets/images/icon/descriptionHeartIcon.png";
import DescriptionBulbIcon from "../../../assets/images/icon/descriptionBulbIcon.png";
import DescriptionFunctionIcon from "../../../assets/images/icon/descriptionFunctionIcon.png";

export function AiServiceDescription() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const descriptionData = {
      id: 1,
      content:
        "Chat GPT는 인공지능 기반의 챗봇으로 사전에 학습한 데이터를 기반으로 하여 실시간 대화가 가능합니다. 난립식의 실문무터 긴 선명을 요구하는 정보, 전달식 답변, 창의적 아이디어에 대한 답변, 문장 완성,등의 기능을 수행합니다. 차텔 및 혐오 발언을 차단하기 위한 특수 기능(모더라 (레이션AP)을 적용하여 기존 인공지능 챗봇보다 안전하게 사용 가능합니다.",
      header1: "정보제공",
      header2: "콘텐츠 제작",
      header3: "코드 작성",
      content1:
        "필요한 정보를 Chat GPT에 검색하여 정보를 수집합니다. 필요한 정보를 Chat GPT에 검색하여 정보를 수집합니다. 단답식 답변, 장문의 답변 등 다양한 형식의 답변을 제공합니다. \nChatGPT는 방대한 양의 텍스트 데이터로 학습되어 다양한 주제에 응답할 수 있습니다.",
      content2:
        "필요한 정보를 Chat GPT에 검색하여 정보를 수집합니다. 단답식 답변, 장문의 답변 등 다양한 형식의 답변을 제공합니다. \nChatGPT는 방대한 양의 텍스트 데이터로 학습되어 다양한 주제에 응답할 수 있습니다.",
      content3:
        "필요한 정보를 Chat GPT에 검색하여 정보를 수집합니다. 단답식 답변, 장문의 답변 등 다양한 형식의 답변을 제공합니다. \nChatGPT는 방대한 양의 텍스트 데이터로 학습되어 다양한 주제에 응답할 수 있습니다."
    };
    setData(descriptionData);
  }, []);

  console.log(data.content1);

  return (
    <>
      <S.AiServiceDescriptionWrap>
        <S.AiServiceDescriptionIntroTitle>
          <S.AiServiceDescriptionIntroIcon
            src={DescriptionHeartIcon}
            alt="서비스 소개 아이콘"
          />
          서비스 소개
        </S.AiServiceDescriptionIntroTitle>
        <S.AiServiceDescriptionIntroContent>
          {data.content}
        </S.AiServiceDescriptionIntroContent>
        <S.AiServiceDescriptionFunctionTitle>
          <S.AiServiceDescriptionIntroIcon
            src={DescriptionBulbIcon}
            alt="상세 기능 아이콘"
          />
          상세 기능
        </S.AiServiceDescriptionFunctionTitle>

        {data.header1 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header1}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content1.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}

        {data.header2 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header2}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content2.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}

        {data.header3 ? (
          <>
            <S.AiServiceDescriptionFunctionSubContentWrap>
              <S.AiServiceDescriptionFunctionSubTitle>
                {data.header3}
              </S.AiServiceDescriptionFunctionSubTitle>

              {data.content3.split("\n").map((line, index) => (
                <S.AiServiceDescriptionFunctionContent key={index}>
                  <S.AiServiceDescriptionFunctionIcon
                    src={DescriptionFunctionIcon}
                    alt="상세 기능 아이콘"
                  />
                  <S.AiServiceDescriptionFunctionContentWrap>
                    {line}
                  </S.AiServiceDescriptionFunctionContentWrap>
                </S.AiServiceDescriptionFunctionContent>
              ))}
            </S.AiServiceDescriptionFunctionSubContentWrap>
          </>
        ) : (
          <></>
        )}
      </S.AiServiceDescriptionWrap>
    </>
  );
}
