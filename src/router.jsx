import Main from "./pages/main/Main";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";

import { createBrowserRouter, Outlet } from "react-router-dom";
import NotFoundError from "./pages/Error/NotFound";
import Login from "./pages/Auth/login";
import App from "./App";


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
    <App/>
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
    { 
    path:"",
    element:<Main/>,
    },

    { 
    path:"login",
    element:<Login/>
    },
  ],
  errorElement: <NotFoundError/>,
  },
]);

export default router;