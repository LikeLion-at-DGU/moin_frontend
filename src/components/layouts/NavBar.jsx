import { Link } from "react-router-dom";
import { NavBarWrapper } from "./style";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Link to={`/`}>MO:IN</Link>
      <Link to={`/community`}>커뮤니티</Link>
      <Link to={`/notice`}>공지사항</Link>
      <Link to={`/suggestion`}>건의사항</Link>
      <Link to={`/about`}>About</Link>
      <Link to={`/login`}>Login</Link>
    </NavBarWrapper>
  );
}
