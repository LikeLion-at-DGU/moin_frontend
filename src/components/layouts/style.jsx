import { styled } from "styled-components";

export const NavBarWrapper = styled.div`
  color: ${props => props.theme.colors.primary1};
  background-color: ${props => props.theme.colors.bg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1178px;
  height: 60px;
  padding: 0 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const NavBarMenu = styled.div`
  color: ${props => props.theme.colors.primary1};
  background-color: ${props => props.theme.colors.bg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 60px;
  padding: 0 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
