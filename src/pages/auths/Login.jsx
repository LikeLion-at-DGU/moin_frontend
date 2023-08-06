import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
// aixos
import axios from "../../api/axios";
// 구글 이미지
import GoogleIcon from "../../assets/images/icon/google.png";
import KakaoIcon from "../../assets/images/icon/kakao.png";
import MoinIcon from "../../assets/images/moin_logo.png";

// 컴포넌트
import AuthLoginTitle from "../../components/auths/authLogin/AuthLoginTitle";
import AuthLoginForm from "../../components/auths/authLogin/AuthLoginForm";
import AuthSocialButton from "../../components/auths/authSocialButton/AuthSocialButton";

// recoil 적용
import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";

export default function Login() {
  const navigate = useNavigate();
  // const userInfo = useContext(AuthContext);

  // recoil 적용 (로그인 정보)
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const [loginData, setLoginData] = useState({
    email: "",
    pwd: ""
  });

  // (임시) 유저 정보 LocalStorage에 저장하기
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  // 로그인 입력정보 처리
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 로그인 후 이동 페이지 -> 메인 페이지
  const handleSubmit = async event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    // 이메일, 비밀번호 입력 확인
    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      // post 보내기 (로그인)
      console.log("zz");
      const response = await axios.post("auth/login/", {
        email: email,
        password: pwd
      });
      console.log(response);
      // accessToken 받아오기
      const accessToken = response.data.accessToken;

      // 로그인 성공 시
      setUserInfo({
        email: email,
        accessToken: accessToken
      });
      alert("로그인에 성공했습니다.");

      // 메인 페이지로 이동
      navigate("/");

      // 페이지 새로고침
      window.location.reload();
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error("Login failed:", error.message);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleLogout = () => {
    // 로그아웃 시
    setUserInfo(null);
    // token 비우기
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      <S.AuthWrapper>
        {userInfo ? (
          <>
            <S.AuthText> {userInfo.email}님 환영합니다. </S.AuthText>
            <S.AuthButton onClick={handleLogout}> 로그아웃 </S.AuthButton>
          </>
        ) : (
          <>
            <S.AuthForm onSubmit={handleSubmit}>
              <AuthLoginTitle />
              <AuthLoginForm
                handleInputChange={handleInputChange}
                loginData={loginData}
              />

              <S.AuthButtonWrapper>
                <S.AuthButton type="submit">MO:IN에 로그인</S.AuthButton>
                {/* 구글 로그인 */}
                <S.AuthSignUpButton
                  type="button"
                  onClick={() => {
                    console.log("계정생성");
                  }}
                >
                  MOIN에 가입하고 더 많은 서비스를 누려보세요!
                </S.AuthSignUpButton>
                <AuthSocialButton
                  onClick={() => {
                    console.log("자체회원가입");
                  }}
                  imgSrc={MoinIcon}
                  altText="모인 로고"
                  buttonText="Moin 회원가입"
                />
                <AuthSocialButton
                  onClick={() => {
                    console.log("자체회원가입");
                  }}
                  imgSrc={KakaoIcon}
                  altText="카카오 로고"
                  buttonText="Kakao 로그인"
                />

                <AuthSocialButton
                  onClick={() => {
                    console.log("구글계정생성");
                  }}
                  imgSrc={GoogleIcon}
                  altText="구글 로고"
                  buttonText="Google 로그인"
                />
              </S.AuthButtonWrapper>
            </S.AuthForm>
          </>
        )}
      </S.AuthWrapper>
    </>
  );
}
