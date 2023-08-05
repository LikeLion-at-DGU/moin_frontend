import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Notice from "./pages/notice/About";
import Suggestion from "./pages/suggestion/Suggestion";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/Profile";

import AiServiceDetail from "./pages/ai/AiServiceDetail";

import NotFoundError from "./pages/error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "notice",
        element: <Notice />
      },
      {
        path: "suggestion",
        element: <Suggestion />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "AiService/:AiId",
        element: <AiServiceDetail />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
