import { Component } from "react";
import GameCard from "../GameCard";

class FavoriteDescriptionCard extends Component {
  render() {
    return (
      <div>
        <div className="flex max-w-2xl flex-col rounded-lg bg-icon-background">
          <div className="w-fit rounded-t-lg bg-principal-background px-8 pb-4">
            <h2 className="mt-8 text-2xl font-bold text-white">
              Favorite name list
            </h2>
            <h2 className="mt-4 text-2xl font-bold text-white">Description:</h2>
            <p className="mt-2 text-justify font-poppins text-sm font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit morbi,
              quisque massa tellus vivamus nec natoque pharetra, diam faucibus
              ultricies tristique.
            </p>
          </div>
          <div className="my-4 flex flex-wrap justify-center gap-2">
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
