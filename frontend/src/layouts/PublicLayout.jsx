import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function PublicLayout() {
  const { user } = useAuth();

  if (user) {
    console.log(user);
    return <Navigate to="/Home" />;
  }

  return (
    <>
      {/* <h1>Public</h1> */}
      <Outlet />
    </>
  );
}
