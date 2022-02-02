import GameCard from "../Components/GameCard";
import { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="mt-4 ml-4 flex flex-shrink flex-wrap items-start justify-center gap-4 overflow-auto">
          <GameCard />
        </div>
      </div>
    );
  }
}

export default Grid;
