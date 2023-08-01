import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Suggestion from "./pages/suggestion/Suggestion";
import Login from "./pages/auth/login";

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
        path: "suggestion",
        element: <Suggestion />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path:"AiService/:AiId",
        element: <AiServiceDetail/>
      },
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
