import { Link } from "react-router-dom";
import { NavBarWrapper } from "./style";

export default function NavBar(){
    return(
        <NavBarWrapper>
            Moin
            <Link to ={`/login`}>Login</Link>
        </NavBarWrapper>
    )
}