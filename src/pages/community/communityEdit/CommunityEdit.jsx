import React, { useState } from "react";
import * as S from "./style";
import * as AIS from "../../ai/style";
import * as CS from "../communityCreatePost/style";
import { useLocation } from "react-router-dom";

function CommunityEdit() {
  const { state } = useLocation();
  const [title, setTitle] = useState(state.detail.title);
  const [content, setContent] = useState(state.detail.content);

  console.log(state);
  return (
    <>
      <S.EditWraaper>
        <S.CommuntiyCreateHeader> 글 수정</S.CommuntiyCreateHeader>
        <S.EditHeader>제목</S.EditHeader>
        <CS.CommunityCreateTitle
          placeholder="제목을 입력해주세요."
          maxLength="100"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </S.EditWraaper>
    </>
  );
}

export default CommunityEdit;
