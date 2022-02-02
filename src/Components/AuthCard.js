import { Component } from "react";
import InputText from "./InputText";
import AuthButton from "./AuthButton";

class AuthCard extends Component {
  render() {
    const { inputs } = this.props;
    return (
      <div className="mx-auto my-auto flex h-fit w-fit flex-col rounded-3xl bg-principal-background p-12">
        <h3 className="mb-4 mt-8 text-xl font-medium text-white">Welcome!</h3>
        <h2 className="mb-12 text-3xl font-bold text-white">
          Join the comunnity
        </h2>
        {inputs.map((inputProperties, index) => {
          return <InputText {...inputProperties} key={index} />;
        })}
        <AuthButton />
      </div>
    );
  }
}
export default AuthCard;
