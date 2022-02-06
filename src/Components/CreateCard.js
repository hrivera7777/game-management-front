import { Component } from "react";
import GeneralButton from "./GeneralButton";
import createIcon from "/public/img/create.svg";

class CreateCard extends Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <div
          className={`flex ${
            category === "game" ? "max-h-full" : "max-h-80"
          } max-w-xs flex-col rounded-lg bg-principal-background px-8 pb-12`}
        >
          <img className="h-80" src={createIcon} alt="card-image" />
          <div className="mx-auto">
            <GeneralButton
              logo={createIcon}
              text="Create"
              type="edit"
              category={category}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
