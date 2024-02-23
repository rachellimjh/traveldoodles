import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function AuthLayout(){
    return(
        <GoogleOAuthProvider clientId="914722960837-0mdde2bao4dt5hsonf2fvht4ffkigaea.apps.googleusercontent.com">
            <AuthProvider>
            <h1>AuthLayout</h1>
            <Outlet />
        </AuthProvider>
        </GoogleOAuthProvider>
        
    )
}