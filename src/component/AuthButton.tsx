import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const AuthButton = () => {

    const successLogin = (credentialResponse :CredentialResponse)=>{
        console.log(credentialResponse);
        
    }

    const catchLogin =()=>{
        console.log("Login faild");
        
    }

    return (
        <GoogleLogin  onSuccess={successLogin} onError={catchLogin} />
    );
}

export default AuthButton;