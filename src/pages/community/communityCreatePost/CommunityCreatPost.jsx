import React, { useState } from "react";
import { FileDrop } from "react-file-drop";
import MDEditor from "@uiw/react-md-editor";

import axios from "axios";
import * as S from "./style";
import "./mdEditorStyle.css";

import * as AIS from "../../ai/style";

function CommunityCreatPost() {
  // 탭 기능 구현
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  const [value, setValue] = useState("**내용을 입력해주세요.**");

  const [boardColor, setBoardColor] = useState(false);

  return (
    <>
      <AIS.AiServiceDetailCommentWrap>
        <AIS.AiServiceDetailCommentCategory>
          <AIS.AiServiceDetailCommentCategoryTabMenu>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 0}
              onClick={() => selectMenuHandler(0)}
            >
              자유 게시판
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 1}
              onClick={() => selectMenuHandler(1)}
            >
              이용꿀팁
            </AIS.AiServiceDetailCommentCategoryMenuItem>
            <AIS.AiServiceDetailCommentCategoryMenuItem
              isActive={currentTab === 2}
              onClick={() => selectMenuHandler(2)}
            >
              Q&A
            </AIS.AiServiceDetailCommentCategoryMenuItem>
          </AIS.AiServiceDetailCommentCategoryTabMenu>
        </AIS.AiServiceDetailCommentCategory>
        {/* {tabContents[currentTab]} */}

        <FileDrop
          onDragOver={event => {
            setBoardColor(true);
          }}
          onDragLeave={event => {
            setBoardColor(false);
          }}
          onDrop={(files, event) => {
            const formdata = new FormData();
            formdata.append("file", files[0]);
            const headers = { "Content-Type": files[0].type };
            if (files[0].size >= 3000000) {
              alert("3MB 이상 파일은 업로드가 불가능합니다.");
            } else if (
              files[0].type == "image/png" ||
              files[0].type == "image/jpeg" ||
              files[0].type == "image/jpg"
            ) {
              let imageName = files[0].type;
              let id = "55"; // 새로운 게시글 id
              let newValue =
                value +
                "\n\n ![" +
                files[0].name +
                "](https://moin.dcs-hyungjoon.com/media/community/" +
                id +
                "/" +
                imageName +
                ")";
              setValue(newValue);

              // axios
              //   .post("/upload-image", formdata, headers)
              //   .then(function (response) {
              //     let imageName = response.data;

              //     let newValue =
              //       value +
              //       "\n\n ![" +
              //       files[0].name +
              //       "](https://image.fleaman.shop/" +
              //       imageName +
              //       ")";
              //     setValue(newValue);
              // });
            } else {
              alert("png, jpg, jpeg 파일이 아닙니다.");
            }

            setBoardColor(false);
          }}
        >
          <MDEditor
            height={"400px"}
            value={value}
            onChange={setValue}
            preview="edit"
            data-color-mode="light"
          />
        </FileDrop>
      </AIS.AiServiceDetailCommentWrap>
    </>
  );
}

export default CommunityCreatPost;
