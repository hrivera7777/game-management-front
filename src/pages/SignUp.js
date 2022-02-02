import { Component } from "react";
import AuthCard from "../Components/AuthCard";
import userNameIcon from "/public/img/auth/user.svg";
import inputIcon from "/public/img/auth/input.svg";
import emailIcon from "/public/img/auth/email.svg";
import passwordIcon from "/public/img/auth/password.svg";

class SignIn extends Component {
  render() {
    const inputs = [
      { logo: inputIcon, labelName: "Name", type: "text" },
      { logo: emailIcon, labelName: "Email", type: "email" },
      { logo: userNameIcon, labelName: "Username", type: "text" },
      { logo: passwordIcon, labelName: "Password", type: "password" },
      {
        logo: passwordIcon,
        labelName: "Confirm Password",
        type: "password",
      },
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
