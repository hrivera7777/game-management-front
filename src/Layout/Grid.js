import GameCard from "../Components/GameCard";
import FavoriteCard from "../Components/Favorite/FavoriteCard";
import FavoriteDescriptionCard from "../Components/Favorite/FavoriteDescriptionCard";
import { Component } from "react";
import CreateCard from "../Components/CreateCard";

function CatalogGameCard(props) {
  const { games, complete, category } = props;
  return games.map((game, index) => {
    return (
      <GameCard {...game} complete={complete} category={category} key={index} />
    );
  });
}

function SelectCard(props) {
  const { category, complete, games } = props;
  const cardTypes = {
    game: (
      <CatalogGameCard games={games} complete={complete} category={category} />
    ),
    favorite: <FavoriteCard complete={complete} category={category} />,
  };
  return cardTypes[category];
}
class Grid extends Component {
  render() {
    const { category, games } = this.props;
    return (
      <div className="mx-auto block min-h-screen">
        <div className="my-4 flex flex-col gap-4 px-4 tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 desktop:gap-3">
          <CreateCard category={category} />
          <SelectCard category={category} complete={true} games={games} />
        </div>
      </div>
    );
  }
}

export default Grid;
