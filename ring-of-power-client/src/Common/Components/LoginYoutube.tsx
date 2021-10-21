import React from "react";
import { GoogleLogin } from "react-google-login";
import { environment } from "../../environment";
const LoginYoutube = () => {
  const onSuccess = (res: any) => {
    console.log("currentUser:", res.profileObj);
  };
  const onFailure = (res: any) => {
    console.log("failed:", res.profileObj);
  };
  return (
    <div>
      <GoogleLogin
        clientId={environment.youtubeClientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginYoutube;
