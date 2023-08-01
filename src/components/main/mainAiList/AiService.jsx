import React from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";

function AiService({ item }) {
  const navigate = useNavigate();
  return (
    <S.AiServiceWrapper
      onClick={() =>
        navigate(`AiService/${item.id}`, {
          state: {
            item: item
          }
        })
      }
    >
      {item.name}
    </S.AiServiceWrapper>
  );
}

export default AiService;
