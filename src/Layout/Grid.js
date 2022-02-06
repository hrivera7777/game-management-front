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

function CatalogFavoriteCard(props) {
  const { complete, category, favorites } = props;
  return favorites.map((favorite, index) => {
    return (
      <FavoriteCard
        {...favorite}
        complete={complete}
        category={category}
        key={index}
      />
    );
  });
}

function SelectCard(props) {
  const { category, complete, games, favorites } = props;
  const cardTypes = {
    game: (
      <CatalogGameCard games={games} complete={complete} category={category} />
    ),
    favorite: (
      <CatalogFavoriteCard
        complete={complete}
        category={category}
        favorites={favorites}
      />
    ),
  };
  return cardTypes[category];
}
class Grid extends Component {
  render() {
    const { category, games, favorites } = this.props;
    return (
      <div className="mx-auto block min-h-screen">
        <div className="my-4 flex flex-col gap-4 px-4 tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 desktop:gap-3">
          <CreateCard category={category} />
          <SelectCard
            category={category}
            complete={true}
            games={games}
            favorites={favorites}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
