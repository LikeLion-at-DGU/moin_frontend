import Main from "./pages/main/Main";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Auth/login";


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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path:"",
        element:<Main/>,
      },
      { path:"login",
        element:<Login/>
      },
    ],
    errorElement: <Error/>,
  },
]);

export default router;