import kratos from "/public/img/kratos_200.jpg";
import plusCircle from "/public/img/plus-circle.svg";
import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto my-40 flex max-w-xs flex-col rounded-lg bg-principal-background-color">
          <img className="rounded-t-lg" src={kratos} alt="principal-image" />
          <h2 className="mx-8 mt-8 text-2xl font-bold text-white">Name</h2>
          <h2 className="mx-8 font-poppins text-xl font-medium text-white">
            Genre
          </h2>
          <div className="mx-auto my-12 flex flex-row">
            <h2 className="mr-4 inline-block font-poppins text-3xl text-white ">
              $12.99
            </h2>
            <div className="flex flex-row rounded-full bg-principal-button py-2 px-4">
              <img src={plusCircle} alt="card-image" />
              <button className="text-white">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
