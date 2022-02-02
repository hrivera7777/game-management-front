import { Component } from "react";
class AuthButton extends Component {
  render() {
    return (
      <button
        type="submit"
        className="mt-3 w-full transform rounded-full bg-principal-purple p-4 transition duration-300 ease-in-out hover:scale-95 hover:bg-secondary-green active:translate-y-3"
      >
        <h2 className="mx-auto w-fit text-xl text-white hover:font-bold">
          Sign in
        </h2>
      </button>
    );
  }
}

export default AuthButton;
