import { Link } from "react-router-dom";
import * as S from "./style";

export default function NavBar() {
  return (
    <S.NavBarWrapper>
      <Link to={`/`}>MO:IN</Link>
      <S.NavBarMenu>
        <Link to={`/community`}>커뮤니티</Link>
        <Link to={`/notice`}>공지사항</Link>
        <Link to={`/suggestion`}>건의사항</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/login`}>Login</Link>
      </S.NavBarMenu>
    </S.NavBarWrapper>
  );
}
