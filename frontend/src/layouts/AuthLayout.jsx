import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function AuthLayout(){
    return(
        <GoogleOAuthProvider clientId="883987662768-snb84hpq93grk69bmg1rggpls7nel1mu.apps.googleusercontent.com">
            <AuthProvider>
            {/* <h1>AuthLayout</h1> */}
            <Outlet />
        </AuthProvider> 
        </GoogleOAuthProvider>
        
    )
}