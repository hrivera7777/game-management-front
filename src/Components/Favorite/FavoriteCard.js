import { Component } from "react";
import editIcon from "/public/img/button/edit.svg";
import deleteIcon from "/public/img/button/delete.svg";
import GeneralButton from "../GeneralButton";

class FavoriteCard extends Component {
  render() {
    const { name, description, complete, category } = this.props;
    return (
      <div>
        <div className="flex h-80 w-80 max-w-xs flex-col rounded-lg bg-principal-background px-8 pb-8">
          <h2 className="mt-8 text-2xl font-bold text-white">{name}</h2>
          <h2 className="mt-4 text-2xl font-bold text-white">Description:</h2>
          <p className="mt-2 text-justify font-poppins text-sm font-medium text-white">
            {description}
          </p>
          {complete ? (
            <div className="mx-auto my-auto flex flex-row">
              <GeneralButton
                logo={editIcon}
                text="Edit"
                type="edit"
                category={category}
              />
              <GeneralButton
                logo={deleteIcon}
                text="Delete"
                type="delete"
                category={category}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FavoriteCard;
