import { Component } from "react";
import FavoriteCard from "../Favorite/FavoriteCard";

class MostAddedGameCard extends Component {
  render() {
    return (
      <div className="mb-4 h-fit w-full max-w-5xl rounded-lg bg-principal-background pt-8 desktop:max-w-8xl largeDesktop:max-w-full">
        <div className="w-full px-12 pb-4">
          <h2 className="mx-auto w-fit rounded-full border-4 border-dotted border-principal-orange py-3 px-6 text-3xl font-bold text-white">
            Most Added Game Among Favorite Lists
          </h2>
          <h2 className="mt-8 text-xl font-bold text-principal-orange">
            Name: <span className="ml-2 font-medium text-white">Alguito</span>
          </h2>
          <h2 className="mt-1 text-xl font-bold text-principal-orange">
            Genre: <span className="ml-2 font-medium text-white">Alguito</span>
          </h2>
          <h2 className="mt-1 text-xl font-bold text-principal-orange">
            Price:{" "}
            <span className="ml-2 font-medium text-white">$Mucho :(</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 rounded-b-lg bg-icon-background p-4">
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </div>
      </div>
    );
  }
}

export default MostAddedGameCard;
