import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function PublicLayout() {
  const { user, setUser } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1>Public</h1>
      <Outlet />
    </>
  );
}
