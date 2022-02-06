import { Component } from "react";
import AuthCard from "../Components/AuthCard";
import userNameIcon from "/public/img/auth/user.svg";
import passwordIcon from "/public/img/auth/password.svg";

class SignIn extends Component {
  render() {
    const inputs = [
      { logo: userNameIcon, labelName: "Username", type: "text" },
      { logo: passwordIcon, labelName: "Password", type: "password" },
    ];
    return (
      <div>
        <div className="flex h-screen flex-row overflow-y-auto bg-pages-background">
          <AuthCard inputs={inputs} type={"signIn"} />
        </div>
      </div>
    );
  }
}

export default SignIn;
