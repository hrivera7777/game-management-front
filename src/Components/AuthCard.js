import { Component } from "react";
import InputText from "./InputText";
import AuthButton from "./AuthButton";
import { withRouter } from "./withRoutes";
import { Link } from "react-router-dom";

class AuthCard extends Component {
  handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  handleSignInSubmit = this.handleSignInSubmit.bind(this);
  storeJwt = this.storeJwt.bind(this);
  getJwt = this.getJwt.bind(this);
  storeUser = this.storeUser.bind(this);
  navigateTo = this.navigateTo.bind(this);

  state = {
    name: "",
    password: "",
    jwt: localStorage.getItem("token") || null,
  };

  navigateTo(route) {
    return this.props.navigate(route);
  }

  async getJwt(username, password) {
    const body = JSON.stringify({
      username: username,
      password: password,
    });
    const res = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
      mode: "cors",
    });

    return res.json();
  }

  async storeJwt(username, password) {
    const data = await this.getJwt(username, password);
    const { accessToken } = data;
    localStorage.setItem("token", accessToken);
    this.setState({ jwt: accessToken });
    return this.state.jwt != null;
  }

  async handleSignInSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.Username.value;
    const password = event.target.elements.Password.value;
    this.setState({ username: username, password: password });
    const valid = await this.storeJwt(username, password);
    valid ? this.navigateTo("/games") : null;
  }

  async storeUser(user) {
    const body = JSON.stringify(user);
    const res = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    return res.ok;
  }

  async handleSignUpSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.Name.value;
    const email = event.target.elements.Email.value;
    const username = event.target.elements.Username.value;
    const password = event.target.elements.Password.value;

    const user = {
      name: name,
      email: email,
      username: username,
      password: password,
    };

    const created = this.storeUser(user);
    created ? this.navigateTo("/sign-in") : null;
  }

  render() {
    const { inputs, type } = this.props;
    return (
      <form
        onSubmit={
          type === "Sign In" ? this.handleSignInSubmit : this.handleSignUpSubmit
        }
        className="mx-auto my-auto flex h-fit w-fit flex-col rounded-3xl bg-principal-background p-12"
      >
        <h3 className="mb-4 mt-8 text-xl font-medium text-white">Welcome!</h3>
        <h2 className="mb-12 text-3xl font-bold text-white">
          Join the comunnity
        </h2>
        {inputs.map((inputProperties, index) => {
          return <InputText {...inputProperties} key={index} />;
        })}
        <AuthButton type={type} />
        {type === "Sign In" ? (
          <Link to={"/sign-up"} className="mx-auto mt-4 text-white">
            {" "}
            Don't miss anything <span className="font-bold">Sign Up </span>for
            free
          </Link>
        ) : null}
      </form>
    );
  }
}
export default withRouter(AuthCard);
