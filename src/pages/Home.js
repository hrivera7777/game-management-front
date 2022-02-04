import { Component } from "react";
import NavBar from "../Layout/Navbar";
import Grid from "../Layout/Grid";

class Home extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <Grid type={type} />
      </div>
    );
  }
}

export default Home;
