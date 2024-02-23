import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
//import AnotherPage from "./routes/anotherPage/AnotherPage.jsx";
import ProtectedLayout from "./layouts/ProtectLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PostingPage from "./routes/PostingPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <PostingPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
