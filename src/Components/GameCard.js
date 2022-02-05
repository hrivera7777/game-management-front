import kratos from "/public/img/kratos_200.jpg";
import plusCircle from "/public/img/button/plus-circle.svg";
import editIcon from "/public/img/button/edit.svg";
import deleteIcon from "/public/img/button/delete.svg";
import { Component } from "react";
import GeneralButton from "./GeneralButton";

function RegularUser(props) {
  return props.complete ? (
    <GeneralButton
      logo={plusCircle}
      text="Favorites"
      type="favorite"
      category="game"
    />
  ) : null;
}

function AdminUser(props) {
  return props.complete ? (
    <div className="mt-4 flex flex-row">
      <GeneralButton
        logo={editIcon}
        text="Edit"
        type="edit"
        category={"game"}
      />
      <GeneralButton
        logo={deleteIcon}
        text="Delete"
        type="delete"
        category={"game"}
      />
    </div>
  ) : null;
}
class GameCard extends Component {
  render() {
    const { complete } = this.props;
    const admin = true;
    return (
      <div className="flex max-w-xs flex-col rounded-lg bg-principal-background pb-10">
        <img className="rounded-t-lg" src={kratos} alt="principal-image" />
        <h2 className="mx-8 mt-8 text-2xl font-bold text-white">Name</h2>
        <h2 className="mx-8 font-poppins text-xl font-medium text-white">
          Genre
        </h2>
        <div className="ml-8 flex flex-wrap">
          <h2 className="mr-2 inline-block py-3 font-poppins text-3xl text-white ">
            $12.99
          </h2>
          {admin ? (
            <AdminUser complete={complete} />
          ) : (
            <RegularUser complete={complete} />
          )}
        </div>
      </div>
    );
  }
}

export default GameCard;
