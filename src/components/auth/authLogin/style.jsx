import { styled, keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
/* ------- 회원 관리 통합 스타일 ------- */
export const AuthInputWrapper = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const AuthInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 557px;
  height: 80px;
  font-weight: 500;
  padding-left: 31px;
  font-size: 18px;
  color: #ff5d47;
  border-radius: 24px;
  background: #f8f8fa;
  border: none;
  outline: none;
  transition: border 0.3s;

  &:focus,
  &:not(:placeholder-shown) {
    border: 2px solid #ff5d47;
  }
`;

/* ------- 회원 가입 컴포넌트 스타일 ------- */
export const SignUpInputTitleText = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 35px;
`;

export const SignUpInput = styled.input`
  border: none;
  border-bottom: 2px solid #aeafb9;
  outline: none;
  padding: 5px;
  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border-bottom: ${props =>
    props.isValid ? "1px solid #000000" : "1px solid red"};
  /* Additional styling based on validity */
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;
export const MessageText = styled.span`
  margin-top: 10px;
  color: ${props => (props.isValid ? "#00C24E" : "#FF5D47")};
  font-size: 13px;
`;

/* ------- 로그인 타이틀 컴포넌트 스타일 ------- */
export const LoginTitleText = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;
`;
export const LoginSybTitleText = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin: 25px 0px 20px 0px;
`;
export const LoginTitleWrapper = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
