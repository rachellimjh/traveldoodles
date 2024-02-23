import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './routes/appPage/App.jsx'
import ErrorPage from './routes/errorPage/ErrorPage.jsx';
import PublicLayout from './layouts/PublicLayout.jsx';
import AnotherPage from './routes/anotherPage/AnotherPage.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        element: <PublicLayout />,
        children: [
          {index: true, element: <App />}
        ]
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "dashboard",
            element: <App />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
