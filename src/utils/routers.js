import { createBrowserRouter, u } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import App from "../App";
import Home from "../pages";
import Root from "../Layout/Root/Root";
import ContactDetail from "../pages/contacts/[id]";

export const routers = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/contacts",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
      },
      {
        element: <ContactDetail />,
        path: ":id",
      },
    ],
  },
]);
