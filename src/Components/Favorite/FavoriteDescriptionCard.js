import { Component } from "react";
import GameCard from "../GameCard";

class FavoriteDescriptionCard extends Component {
  render() {
    return (
      <div className="col-span-3 mx-auto flex max-w-2xl flex-col rounded-lg bg-principal-background">
        <div className="px-10 pb-4">
          <h2 className="mt-4 text-2xl font-bold text-white">
            Favorite name list
          </h2>
          <h2 className="mt-4 text-2xl font-bold text-white">Description:</h2>
          <p className="mt-2 text-justify font-poppins text-sm font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit morbi,
            quisque massa tellus vivamus nec natoque pharetra, diam faucibus
            ultricies tristique.
          </p>
        </div>
        <div className="mx-auto w-full bg-icon-background px-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteDescriptionCard;
