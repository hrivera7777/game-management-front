import { Component } from "react";
import NavBar from "../Layout/Navbar";
import Grid from "../Layout/Grid";

class Home extends Component {
  state = { games: [] };
  async componentDidMount() {
    const res = await fetch(`http://localhost:3000/game`);
    const json = await res.json();
    this.setState({ games: json });
  }
  render() {
    const { category } = this.props;
    const { games } = this.state;
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <Grid category={category} games={games} />
      </div>
    );
  }
}

export default Home;
