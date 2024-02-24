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
import HomePage from "./routes/HomePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // New home page path
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post-page",
    element: <PostingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
