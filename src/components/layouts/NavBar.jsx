import * as S from "./style";

export default function NavBar() {
  return (
    <S.NavBarWrapper>
      <S.NavLink to={`/`}>MO:IN</S.NavLink>
      <S.NavBarMenu>
        <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
        <S.NavLink to={`/notice`}>공지사항</S.NavLink>
        <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
        <S.NavLink to={`/about`}>About</S.NavLink>
        <S.NavLink to={`/login`}>Login</S.NavLink>
      </S.NavBarMenu>
    </S.NavBarWrapper>
  );
}
