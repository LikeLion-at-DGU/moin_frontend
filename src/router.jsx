import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";


const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Layout = () => {
    return (
      <>
      <Wrapper>
        <NavBar />
        <Outlet />
    </Wrapper>
      </>
    );
  };

export default function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index path="/" element={<Main/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
