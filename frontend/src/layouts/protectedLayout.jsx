import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function ProtectedLayout() {
    const { user, logout } = useAuth();
    // logout(user)

    if (!user) {
        console.log("Unauthorised");
        return <Navigate to="/" />;
    }
  
      return (
        <>
        {/* <h2>Welcome {user.username}</h2> */}
        {/* <h1>Protected</h1> */}
        <Outlet />
        </>
      )
}