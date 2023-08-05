import * as S from "./style";

export default function NavBar() {
  const [userInfo, setUserInfo] = useState(null);

  // (임시) 유저 정보 LocalStorage에 저장하기
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <S.NavBarWrapper>
      <S.NavLink to={`/`}>MO:IN</S.NavLink>
      <S.NavBarMenu>
        <S.NavLink to={`/community`}>커뮤니티</S.NavLink>
        <S.NavLink to={`/notice`}>공지사항</S.NavLink>
        <S.NavLink to={`/suggestion`}>건의사항</S.NavLink>
        <S.NavLink to={`/about`}>About</S.NavLink>
        {userInfo ? (
          <S.NavLink to={`/mypage`}>Mypage</S.NavLink>
        ) : (
          <S.NavLink to={`/login`}>Login</S.NavLink>
        )}
      </S.NavBarMenu>
    </S.NavBarWrapper>
  );
}
