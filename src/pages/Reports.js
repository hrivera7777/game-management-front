import { Component } from "react";
import MostAddedGameCard from "../Components/Report/MostAddedGameCard";
import RegisteredUsersCard from "../Components/Report/RegisteredUsersCard";
import NavBar from "../Layout/Navbar";

class Reports extends Component {
  state = { mostAddedGame: { favorites: [] }, registeredUsers: [] };
  getData = this.getData.bind(this);

  async getData(state, route) {
    const authType = "Bearer";
    const root = "http://localhost:3000/report/";
    const res = await fetch(root.concat(route), {
      method: "GET",
      headers: {
        Authorization: authType.concat(" ", localStorage.getItem("token")),
      },
      mode: "cors",
    });

    const json = await res.json();
    this.setState({ [state]: json });
  }

  async componentDidMount() {
    await this.getData("mostAddedGame", "most-added-game");
    await this.getData("registeredUsers", "registered-users");
  }

  render() {
    const { mostAddedGame, registeredUsers } = this.state;
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <div className="my-6 mx-auto flex flex-col">
          <MostAddedGameCard {...mostAddedGame} />
          <RegisteredUsersCard registeredUsers={registeredUsers} />
        </div>
      </div>
    );
  }
}

export default Reports;
