import GameCard from "../Components/GameCard";
import FavoriteCard from "../Components/Favorite/FavoriteCard";
import FavoriteDescriptionCard from "../Components/Favorite/FavoriteDescriptionCard";
import { Component } from "react";

function CatalogGameCard(props) {
  const { games, complete } = props;
  return games.map((game, index) => {
    return <GameCard {...game} complete={complete} key={index} />;
  });
}

function SelectCard(props) {
  const { type, complete, games } = props;
  const cardTypes = {
    game: <CatalogGameCard games={games} complete={complete} />,
    favorite: <FavoriteCard complete={complete} />,
  };
  return cardTypes[type];
}
class Grid extends Component {
  render() {
    const { type, games } = this.props;
    return (
      <div className="mx-auto block min-h-screen">
        <div className="my-4 flex flex-col gap-4 px-4 tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 desktop:gap-3">
          <SelectCard type={type} complete={true} games={games} />
        </div>
      </div>
    );
  }
}

export default Grid;
