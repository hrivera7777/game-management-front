import kratos from "/public/img/kratos_200.jpg";
import plusCircle from "/public/img/button/plus-circle.svg";
import editIcon from "/public/img/button/edit.svg";
import deleteIcon from "/public/img/button/delete.svg";
import { Component } from "react";
import GeneralButton from "./GeneralButton";

function RegularUser(props) {
  const { complete, category } = props;
  return complete ? (
    <GeneralButton
      logo={plusCircle}
      text="Favorites"
      type="favorite"
      category={category}
    />
  ) : null;
}

function AdminUser(props) {
  const { complete, category, game } = props;
  return complete ? (
    <div className="mt-4 flex flex-row">
      <GeneralButton
        logo={editIcon}
        text="Edit"
        type="edit"
        category={category}
        game={game}
      />
      <GeneralButton
        logo={deleteIcon}
        text="Delete"
        type="delete"
        category={category}
        game={game}
      />
    </div>
  ) : null;
}
class GameCard extends Component {
  render() {
    const { id, name, genre, price, filename, complete, category } = this.props;
    const game = {
      id: id,
      name: name,
      genre: genre,
      price: price,
      filename: filename,
    };
    const admin = true;
    return (
      <div className="flex max-w-xs flex-col rounded-lg bg-principal-background pb-10">
        <img className="rounded-t-lg" src={kratos} alt={`${filename}`} />
        <h2 className="mx-8 mt-8 text-2xl font-bold text-white">{name}</h2>
        <h2 className="mx-8 font-poppins text-xl font-medium text-white">
          {genre}
        </h2>
        <div className="ml-8 flex flex-wrap">
          <h2 className="mr-2 inline-block py-3 font-poppins text-3xl text-white ">
            ${price}
          </h2>
          {admin ? (
            <AdminUser complete={complete} category={category} game={game} />
          ) : (
            <RegularUser complete={complete} category={category} />
          )}
        </div>
      </div>
    );
  }
}

export default GameCard;
