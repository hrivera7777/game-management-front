import { Component } from "react";
import FavoriteCard from "../Favorite/FavoriteCard";

class MostAddedGameCard extends Component {
  render() {
    return (
      <div>
        <div className="flex max-w-5xl flex-col rounded-lg bg-icon-background">
          <div className="w-full rounded-t-lg bg-principal-background px-12 pb-4">
            <h2 className="mx-auto mt-4 w-fit text-3xl font-bold text-white">
              Most Added Game Among Favorite Lists
            </h2>
            <h2 className="mt-8 text-xl font-bold text-principal-orange">
              Name:
            </h2>
            <h2 className="mt-1 text-xl font-bold text-principal-orange">
              Genre:{" "}
            </h2>
            <h2 className="mt-1 text-xl font-bold text-principal-orange">
              Price:{" "}
            </h2>
          </div>
          <div className="my-4 flex flex-wrap gap-4 px-4">
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
          </div>
        </div>
      </div>
    );
  }
}

export default MostAddedGameCard;
