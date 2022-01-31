import Card from "../Components/Card";
import { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="m-4 flex flex-wrap items-start justify-center gap-4">
          <Card />
        </div>
      </div>
    );
  }
}

export default Grid;
