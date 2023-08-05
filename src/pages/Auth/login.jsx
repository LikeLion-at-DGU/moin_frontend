import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Login() {
  const navigate = useNavigate();
  // const userInfo = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");
  const [isPhoneFormatValid, setPhoneFormatValid] = useState(true);

  // (임시) 유저 정보 패치하기
  // useEffect(() => {
  //   setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  // }, []);

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
                  handleEmail={handleEmail}
                  handlePwd={handlePwd}
                  email={email}
                  pwd={pwd}
                />
              </>
            }
            <S.AuthButtonWrapper>
              <S.AuthButton type="submit">
                {isCreate ? "회원가입" : "로그인"}
              </S.AuthButton>
              {/* 구글 로그인 */}
              <S.AuthSignUpButton type="submit" onClick={handleClickCreate}>
                {isCreate ? "이미 계정이 있으신가요?" : "MOIN이 처음이신가요?"}
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
