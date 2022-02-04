import GameCard from "../Components/GameCard";
import FavoriteCard from "../Components/Favorite/FavoriteCard";
import FavoriteDescriptionCard from "../Components/Favorite/FavoriteDescriptionCard";
import MostAddedGameCard from "../Components/report/MostAddedGameCard";
import RegisteredUsersCard from "../Components/report/RegisteredUsersCard";
import { Component } from "react";

class Grid extends Component {
  render() {
    const cardTypes = {
      game: <GameCard />,
      favorite: <FavoriteCard />,
    };
    const { type } = this.props;
    return (
      <div className="mx-auto block min-h-screen">
        <div className="my-4 flex flex-col gap-4 px-4 tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 desktop:gap-3">
          {cardTypes[type]}
        </div>
      </div>
    );
  }
}

export default Grid;
