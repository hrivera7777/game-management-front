import { Component } from "react";
import { Link } from "react-router-dom";

class NavBarSectionItem extends Component {
  render() {
    const { itemLogo, itemName } = this.props;
    return (
      <Link
        to={`/${itemName.replace(/\s+/g, "-").toLowerCase()}`}
        className="group my-5 ml-10 flex flex-row"
      >
        <img
          className="max-w-10 mr-2 max-h-10 rounded-full bg-icon-background p-2 group-hover:bg-pages-background group-active:bg-principal-orange"
          src={itemLogo}
          alt={`logo-${itemName}`}
        />
        <h3 className="mr-16 p-2 text-lg text-gray-500 group-hover:text-white group-active:text-white">
          {itemName}
        </h3>
      </Link>
    );
  }
}

export default NavBarSectionItem;
