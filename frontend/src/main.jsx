import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import LoginPage from "./routes/LoginPage.jsx"
import ErrorPage from './routes/ErrorPage.jsx'
import ProfilePage from "./routes/ProfilePage.jsx"
import ExplorePage from "./routes/ExplorePage.jsx"
import HomePage from "./routes/HomePage.jsx"
import PostingPage from "./routes/PostingPage.jsx"
import MapPage from "./routes/MapPage.jsx"
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
     path:"/",
     element:<HomePage />,
     errorElement:<ErrorPage />,
  },
  {
    path:"/login",
    element:<LoginPage />,
    errorElement:<ErrorPage />,
  },
  {
    path:"/explorePage",
    element:<ExplorePage/>,
    errorElement:<ErrorPage />,
  },

  {
    path:"/postingPage",
    element:<PostingPage/>,
    errorElement:<ErrorPage />,
  },
  {
    path:"/profilePage",
    element:<ProfilePage/>,
    errorElement:<ErrorPage />,
  },
  {
    path:"/mapPage",
    element:<MapPage/>,
    errorElement:<ErrorPage />,

  }
]
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



