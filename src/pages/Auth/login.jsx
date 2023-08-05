import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Login() {
  const navigate = useNavigate();
  // const userInfo = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
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
  const handleSubmit = event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    // 이메일, 비밀번호 입력 확인
    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 성공 시
    setUserInfo({
      email: email,
      pwd: pwd
    });

    // 로그인 정보 LocalStorage에 저장하기
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        email: email,
        pwd: pwd
      })
    );

    // 메인 페이지로 이동
    navigate("/");
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
          <S.AuthForm onSubmit={handleSubmit}>
            {
              <>
                <LoginTitle />
                <LoginForm
                  handleInputChange={handleInputChange}
                  loginData={loginData}
                />
              </>
            }
            <S.AuthButtonWrapper>
              <S.AuthButton type="submit">로그인</S.AuthButton>
              {/* 구글 로그인 */}
              <S.AuthSignUpButton type="submit" onClick={handleClickCreate}>
                MOIN이 처음이신가요
              </S.AuthSignUpButton>
              <S.AuthSocialButton onClick={handleGoogleLogin}>
                <GoogleIcon />
                <S.AuthSocialButtonText style={{ margin: "0 auto" }}>
                  Google 로그인
                </S.AuthSocialButtonText>
              </S.AuthSocialButton>
            </S.AuthButtonWrapper>
          </S.AuthForm>
        )}
      </S.AuthWrapper>
    </>
  );
}

export default Login;
