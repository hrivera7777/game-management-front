import { Component } from "react";
import NavBar from "../Layout/Navbar";
import Grid from "../Layout/Grid";

class Home extends Component {
  render() {
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <Grid type="game" />
      </div>
    );
  }
}

export default Home;
