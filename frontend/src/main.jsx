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
import AboutPage from "./routes/AboutPage.jsx"
import AuthLayout from './layouts/AuthLayout.jsx'
import PublicLayout from './layouts/PublicLayout.jsx'
import ProtectedLayout from './layouts/protectedLayout.jsx'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([ {
  path: "/",
  element: <AuthLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <PublicLayout />,
      children: [
        {index: true, element: <LoginPage/>}
      ]
    },
    {
      element: <ProtectedLayout />,
      children: [
        {path: "Home", element: <HomePage />},
        {path: "mapPage", element: <MapPage/>},
        {path: "postingPage", element: <PostingPage/>},
        {path: "explorePage", element: <ExplorePage/>},
        {path: "profilePage", element: <ProfilePage/>},
        {path: "aboutPage", element: <AboutPage/>},
      ],
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



