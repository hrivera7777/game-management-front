import { Component } from "react";
import editIcon from "/public/img/button/edit.svg";
import deleteIcon from "/public/img/button/delete.svg";
import GeneralButton from "../GeneralButton";

class FavoriteCard extends Component {
  render() {
    const { complete, category } = this.props;
    return (
      <div>
        <div className="flex max-w-xs flex-col rounded-lg bg-principal-background px-8 pb-8">
          <h2 className="mt-8 text-2xl font-bold text-white">
            Favorite name list
          </h2>
          <h2 className="mt-4 text-2xl font-bold text-white">Description:</h2>
          <p className="mt-2 text-justify font-poppins text-sm font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit morbi,
            quisque massa tellus vivamus nec natoque pharetra, diam faucibus
            ultricies tristique.
          </p>
          {complete ? (
            <div className="mx-auto mt-4 flex flex-row">
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
