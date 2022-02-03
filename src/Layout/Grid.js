import GameCard from "../Components/GameCard";
import { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div className="mx-auto block">
        <div className="my-4 flex flex-col gap-4 px-4 tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-5 desktop:gap-3">
          <GameCard />
        </div>
      </div>
    );
  }
}

export default Grid;
