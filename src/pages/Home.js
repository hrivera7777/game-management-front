import { Component } from "react";
import NavBar from "../Layout/Navbar";
import Grid from "../Layout/Grid";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-row bg-pages-background">
          <NavBar />
          <Grid />
        </div>
      </div>
    );
  }
}

export default Home;
