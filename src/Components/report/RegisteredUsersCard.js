import { Component } from "react";

class RegisteredUsers extends Component {
  render() {
    return (
      <div>
        <div className="flex w-full max-w-5xl flex-col rounded-lg bg-icon-background">
          <div className="w-full rounded-t-lg bg-principal-background px-12 pb-4">
            <h2 className="mx-auto mt-4 w-fit text-3xl font-bold text-white">
              Registered Users
            </h2>
          </div>
          <div className="my-4 flex flex-wrap gap-4 p-4">
            {userAttributes()}
            {userAttributes()}
            {userAttributes()}
            {userAttributes()}
          </div>
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
