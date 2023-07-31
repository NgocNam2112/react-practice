import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { routers } from "./utils/routers";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
