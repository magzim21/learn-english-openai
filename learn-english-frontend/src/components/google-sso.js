import {React, useContext} from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserContext } from "../contexts/user.context";


const GoogleSSO = () => {
  const { setCurrentUser } = useContext(UserContext);
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          const decoded = jwt_decode(credentialResponse.credential);
          const email = decoded.email;
          console.log(decoded);
          setCurrentUser(decoded)
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        size = "large"
        useOneTap
        auto_select
      />
    </>
  );
}
export default GoogleSSO;
