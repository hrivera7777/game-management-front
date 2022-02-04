import { Component } from "react";

class RegisteredUsers extends Component {
  render() {
    return (
      <div className="h-fit w-full max-w-5xl rounded-lg bg-principal-background desktop:max-w-8xl largeDesktop:max-w-full">
        <h2 className="my-6 mx-auto w-fit rounded-full border-4  border-dotted border-principal-orange py-3 px-6 text-3xl font-bold text-white">
          Registered Users
        </h2>
        <div className=" flex flex-wrap gap-4 rounded-b-lg bg-icon-background p-4">
          {userAttributes()}
          {userAttributes()}
          {userAttributes()}
          {userAttributes()}
        </div>
      </div>
    );

    function userAttributes() {
      return (
        <div className="flex min-w-full flex-col rounded-lg bg-principal-background p-4">
          <div>
            <h2 className="mt-2 inline-block text-xl font-bold text-principal-orange">
              UserName:
            </h2>
            <span className="ml-2 inline-block text-white">Peter Anguila</span>
          </div>
          <div>
            <h2 className="my-2 inline-block text-xl font-bold text-principal-orange">
              Email:
            </h2>
            <span className="ml-2 inline-block text-white">
              alguito@alguito.com
            </span>
          </div>
        </div>
      );
    }
  }
}

export default RegisteredUsers;
