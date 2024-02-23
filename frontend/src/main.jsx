import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import LoginPage from "./routes/LoginPage.jsx"
import ErrorPage from './routes/ErrorPage.jsx'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path:"/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


