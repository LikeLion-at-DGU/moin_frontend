import React from "react";
import * as S from "./style";

function MainCategory(props) {
  const category = props.category;
  return (
    <>
      <S.MainCategoryWrapper>
        <S.MainCategoryTitle>{category.title}</S.MainCategoryTitle>
        <S.MainCategoryTagListWrapper>
          {category.tags.map((tag, idx) => (
            <S.MainCategoryTagWrapper key={idx}>{tag}</S.MainCategoryTagWrapper>
          ))}
        </S.MainCategoryTagListWrapper>
      </S.MainCategoryWrapper>
    </>
  );
}

export default MainCategory;
