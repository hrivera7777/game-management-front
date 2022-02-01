import kratos from "/public/img/kratos_200.jpg";
import plusCircle from "/public/img/button/plus-circle.svg";
import { Component } from "react";
import Button from "./Button";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="flex max-w-xs flex-col rounded-lg bg-principal-background">
          <img className="rounded-t-lg" src={kratos} alt="principal-image" />
          <h2 className="mx-8 mt-8 text-2xl font-bold text-white">Name</h2>
          <h2 className="mx-8 font-poppins text-xl font-medium text-white">
            Genre
          </h2>
          <div className="mx-auto my-12 flex flex-row">
            <h2 className="mr-4 inline-block py-3 font-poppins text-3xl text-white ">
              $12.99
            </h2>
            <Button
              logo={plusCircle}
              text="favorites"
              color="principal-orange"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
