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
        <div className="flex h-screen flex-row bg-pages-background">
          <AuthCard inputs={inputs} />;
        </div>
      </div>
    );
  }
}

export default SignIn;
