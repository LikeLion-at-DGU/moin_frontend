import React from "react";
import * as S from "./style";
import Banner from "../../components/common/banner/Banner";
import List from "../../components/common/list/List";

function Community() {
  return (
    <S.CommunityWrapper>
      <Banner
        titleKorean="커뮤니티"
        titleEnglish="COMMUNITY"
        image={<S.CommunityIconImg />}
      />
      {/* <List data={null} url={"/community/"} /> */}
    </S.CommunityWrapper>
  );
}

export default Community;
