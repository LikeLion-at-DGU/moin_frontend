import React from "react";
import * as S from "./style";

// 아이콘
import DescriptionHeartIcon from "../../../assets/images/icon/descriptionHeartIcon.png";

export function AiServiceDescription() {
  return (
    <>
      <S.AiServiceDescriptionWrap>
        <S.AiServiceDescriptionIntroTitle>
          <S.AiServiceDescriptionIntroIcon
            src={DescriptionHeartIcon}
            alt="공유 아이콘"
          />
          서비스 소개
        </S.AiServiceDescriptionIntroTitle>
        <S.AiServiceDescriptionIntroContent>
          Chat GPT는 인공지능 기반의 챗봇으로 사전에 학습한 데이터를 기반으로
          하여 실시간 대화가 가능합니다. 난립식의 실문무터 긴 선명을 요구하는
          정보, 전달식 답변, 창의적 아이디어에 대한 답변, 문장 완성, 등의 기능을
          수행합니다. 차텔 및 혐오 발언을 차단하기 위한 특수 기능(모더라
          (레이션AP)을 적용하여 기존 인공지능 챗봇보다 안전하게 사용 가능합니다.
        </S.AiServiceDescriptionIntroContent>
      </S.AiServiceDescriptionWrap>
    </>
  );
}
