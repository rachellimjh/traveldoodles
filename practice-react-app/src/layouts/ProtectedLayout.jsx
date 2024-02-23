import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function ProtectedLayout() {
    const { user, logout } = useAuth();

    if (!user) {
        console.log("Unauthorised");
        return <Navigate to="/" />;
      }

      return (
        <>
        <h1>Protected</h1>
        <Outlet />
        </>
      )
}