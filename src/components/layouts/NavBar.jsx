import { Link } from "react-router-dom";
import { NavBarWrapper } from "./style";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Link to={`/`}>Moin</Link>
      <Link to={`/login`}>Login</Link>
    </NavBarWrapper>
  );
}
