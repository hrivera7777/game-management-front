import kratos from "/public/img/kratos_200.jpg";
import plusCircle from "/public/img/plus-circle.svg";
import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="flex max-w-xs flex-col rounded-lg bg-principal-background-color">
          <img className="rounded-t-lg" src={kratos} alt="principal-image" />
          <h2 className="mx-8 mt-8 text-2xl font-bold text-white">Name</h2>
          <h2 className="mx-8 font-poppins text-xl font-medium text-white">
            Genre
          </h2>
          <div className="mx-auto my-12 flex flex-row">
            <h2 className="mr-4 inline-block py-3 font-poppins text-3xl text-white ">
              $12.99
            </h2>
            <button className="flex flex-row rounded-full bg-principal-color py-2 px-5">
              <img className="mr-3" src={plusCircle} alt="card-image" />
              <h2 className="py-3 text-white">Favorite</h2>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
