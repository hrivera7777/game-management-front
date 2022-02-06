import { Component } from "react";
import NavBar from "../Layout/Navbar";
import Grid from "../Layout/Grid";

class Home extends Component {
  state = { games: [], favorites: [] };

  async getGamesCatalog() {
    const res = await fetch(`http://localhost:3000/game`);
    const json = await res.json();
    this.setState({ games: json });
  }

  async getFavoriteList() {
    const authType = "Bearer";
    const res = await fetch("http://localhost:3000/favorite", {
      method: "GET",
      headers: {
        Authorization: authType.concat(" ", localStorage.getItem("token")),
      },
      mode: "cors",
    });

    const json = await res.json();
    this.setState({ favorites: json });
  }

  async componentDidMount() {
    await this.getGamesCatalog();
    await this.getFavoriteList();
  }

  render() {
    const { category } = this.props;
    const { games, favorites } = this.state;
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <Grid category={category} games={games} favorites={favorites} />
      </div>
    );
  }
}

export default Home;
