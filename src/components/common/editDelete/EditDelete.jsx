import React from "react";
import * as S from "./style"; // 해당 컴포넌트에 사용되는 스타일 파일 경로를 임포트해주세요.
import BinIcon from "../../../assets/images/icon/bin.png";
import PencilIcon from "../../../assets/images/icon/pencil.png";

function EditDelete({ isWriter }) {
  return isWriter ? (
    <S.DetailTitleIconWrapper>
      <S.DetailTitleIcon src={PencilIcon} />
      <S.DetailTitleIcon src={BinIcon} />
    </S.DetailTitleIconWrapper>
  ) : (
    <></>
  );
}

export default EditDelete;
