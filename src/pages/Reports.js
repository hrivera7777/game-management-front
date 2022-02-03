import { Component } from "react";
import MostAddedGameCard from "../Components/report/MostAddedGameCard";
import RegisteredUsersCard from "../Components/report/RegisteredUsersCard";
import NavBar from "../Layout/Navbar";

class Reports extends Component {
  render() {
    return (
      <div className="flex flex-row bg-pages-background">
        <NavBar />
        <div className="my-6 mx-auto flex flex-col">
          <MostAddedGameCard />
          <RegisteredUsersCard />
        </div>
      </div>
    );
  }
}

export default Reports;
