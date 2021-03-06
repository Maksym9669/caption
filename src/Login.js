import React from "react";
import { GoogleLogin } from "react-google-login-component";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="317932177325-vggdb6aa5tqf5l4obu3rq6bsbuckkhgu.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}

export default Login;
