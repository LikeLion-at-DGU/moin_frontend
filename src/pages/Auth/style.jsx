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

export const AuthWrapper = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-top: 100px;
  margin-bottom: 100px;
`;

export const AuthText = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AuthInputWrapper = styled.div`
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
  font-weight: 700;
  padding-left: 31px;
  font-size: 18px;
  color: #ff5d47;
  border-radius: 24px;
  background: #f8f8fa;
  border-radius: 24px;
  &:focus {
    border: 2px solid #ff5d47;
  }
`;

export const AuthButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const AuthButton = styled.button`
  display: flex;
  /* Orange */
  padding: 30px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */

  background: #ff5d47;
  /* orange */
  width: 562px;
  height: 75px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  box-shadow: 0px 1px 10px rgba(255, 93, 71, 0.7);
  border-radius: 44px;
  margin-bottom: 41px;
`;
export const AuthSignUpButton = styled.button`
  display: flex;
  /* Orange */
  padding: 30px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 562px;
  height: 75px;
  font-weight: 700;
  font-size: 24px;
  color: #606067;
`;

export const AuthSocialButton = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 0px 12px 0px 24px;
  width: 398px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-weight: 700;
  font-size: 24px;
`;

export const AuthSocialButtonText = styled.p`
  margin: 0 auto;
`;
