import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { ContextP } from "./ContextC";

const AuthButton = () => {
     const contextChange = useContext(ContextP);
    const successLogin =  (credentialResponse :CredentialResponse)=>{
        const cS = new Cookies(null,{ path:"/" });    
        cS.set("TokenUser", credentialResponse?.credential);
        contextChange?.setShow(false);
        redirect("/userpanel");
        
    }

    const catchLogin =()=>{
        console.log("Login faild");
        
    }

    return (
        <GoogleLogin  onSuccess={successLogin} onError={catchLogin} />
    );
}

export default AuthButton;