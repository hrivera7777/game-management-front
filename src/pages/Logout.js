import { Component } from "react";
import { withRouter } from "../Components/withRoutes";
import NavBar from "../Layout/Navbar";

class Logout extends Component {
  navigateTo = this.navigateTo.bind(this);
  async componentDidMount() {
    localStorage.setItem("token", null);
  }
  navigateTo(route) {
    setTimeout(() => {
      return this.props.navigate(route), 1000;
    });
  }
  render() {
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        {this.navigateTo("/sign-in")}
      </div>
    );
  }
}

export default withRouter(Logout);
