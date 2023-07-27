import { createBrowserRouter, u } from "react-router-dom";
import TodoAppHook from "../components/TodoAppHook/TodoAppHook";
import ErrorPage from "../components/ErrorPage";
import App from "../App";

export const routers = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <TodoAppHook />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
]);
