import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style.jsx";
import AboutSection1_Banner from "./AboutSection1/AboutSection1_Banner.png";
import AboutSection1_Smartphone from "./AboutSection1/AboutSection1_Smartphone.png";
import AboutSection1_Ellipse from "./AboutSection1/AboutSection1_Ellipse.png";
import AboutSection1_3d1 from "./AboutSection1/AboutSection1_3d1.png";
import AboutSection1_3d2 from "./AboutSection1/AboutSection1_3d2.png";
import AboutSection1_3d3 from "./AboutSection1/AboutSection1_3d3.png";
import AboutSection1_3d4 from "./AboutSection1/AboutSection1_3d4.png";

import AboutSection2_Person from "./AboutSection2/AboutSection2_Person.png";
import AboutSection2_Earth from "./AboutSection2/AboutSection2_Earth.png";
import AboutSection2_Hand from "./AboutSection2/AboutSection2_Hand.png";
import AboutSection2_Des1 from "./AboutSection2/AboutSection2_Des1.png";
import AboutSection2_Des2 from "./AboutSection2/AboutSection2_Des2.png";

import AboutSection3_TeamMoin from "./AboutSection3/AboutSection3_TeamMoin.png";
import AboutSection3_WhyMoin from "./AboutSection3/AboutSection3_WhyMoin.png";

import AboutSection4_ServiceDetail from "./AboutSection4/AboutSection4_ServiceDetail.png";

import AboutSection5_Title from "./AboutSection5/AboutSection5_Title.png";
import AboutSection5_GotoMain from "./AboutSection5/AboutSection5_GotoMain.png";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ left: 0, top: 60, behavior: "smooth" });
  }, []);
  return (
    <S.AboutWrapper>
      <S.AboutSpace style={{ backgroundColor: "black" }} />
      <S.AboutSection1>
        <S.AboutSpace />
        <S.AboutSection_Body>
          <S.AboutSection1_Title src={AboutSection1_Banner} />

          <S.AboutSection_Img
            src={AboutSection1_Smartphone}
            style={{ width: "30%", top: "60%", left: "50%", zIndex: "2" }}
          />
          {/* 텍스트 */}
          <S.AboutSection_Img
            src={AboutSection1_Ellipse}
            style={{
              width: "50%",
              top: "72%",
              left: "50%"
            }}
          />
          {/* 글씨 */}
          <S.AboutSection_Img
            src={AboutSection1_3d1}
            style={{
              width: "20%",
              top: "30%",
              left: "15%",

              transform: "rotate(-10.219deg)"
            }}
          />
          {/* 책 */}
          <S.AboutSection_Img
            src={AboutSection1_3d4}
            style={{ width: "15%", top: "65%", left: "15%" }}
          />

          {/* 그림 */}
          <S.AboutSection_Img
            src={AboutSection1_3d3}
            style={{
              width: "18%",
              top: "38%",
              left: "67%",

              transform: "rotate(13.687deg)"
            }}
          />
          {/* 전구 */}
          <S.AboutSection_Img
            src={AboutSection1_3d2}
            style={{ width: "15%", top: "70%", left: "82%" }}
          />
        </S.AboutSection_Body>
      </S.AboutSection1>
      <S.AboutSpace style={{ backgroundColor: "black" }} />
      <S.AboutSection2>
        <S.AboutSection2_Coloring />
        <S.AboutSection2_Coloring />

        <S.AboutSection_Body>
          <S.AboutSection_Img
            src={AboutSection2_Person}
            style={{ width: "60%", top: "50%", left: "50%" }}
          />

          <S.AboutSection_Img
            src={AboutSection2_Earth}
            style={{ width: "20%", top: "23%", left: "16%" }}
          />
          <S.AboutSection_Img
            src={AboutSection2_Des1}
            style={{ width: "35%", top: "28%", left: "33%" }}
          />

          <S.AboutSection_Img
            src={AboutSection2_Hand}
            style={{ width: "14%", top: "70%", left: "65%" }}
          />
          <S.AboutSection_Img
            src={AboutSection2_Des2}
            style={{ width: "28%", top: "74%", left: "82%" }}
          />
        </S.AboutSection_Body>
      </S.AboutSection2>
      <S.AboutSpace style={{ backgroundColor: "black" }} />
      <S.AboutSection3>
        <S.AboutSection_Img
          src={AboutSection3_TeamMoin}
          style={{ width: "100%", top: "50%", left: "50%" }}
        />
      </S.AboutSection3>

      <S.AboutSection3>
        <S.AboutSection_Img
          src={AboutSection3_WhyMoin}
          style={{ width: "40%", top: "50%", left: "50%" }}
        />
      </S.AboutSection3>

      <S.AboutSection4>
        <S.AboutSection_Img
          src={AboutSection4_ServiceDetail}
          style={{
            position: "relative",
            width: "90%",
            transform: "Translate(0,0)"
          }}
        />
      </S.AboutSection4>
      <S.AboutSection5>
        <S.AboutSection_Img
          src={AboutSection5_Title}
          style={{
            position: "relative",
            width: "30%",
            transform: "Translate(0,0)",
            paddingBottom: "5rem"
          }}
        />

        <S.AboutSection_Img
          src={AboutSection5_GotoMain}
          style={{
            position: "relative",
            width: "15%",
            transform: "Translate(0,0)"
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </S.AboutSection5>
      <S.AboutSection6></S.AboutSection6>
      <S.AboutSection7 />
    </S.AboutWrapper>
  );
}

export default About;
