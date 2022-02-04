import { Component } from "react";
import { Link } from "react-router-dom";

class NavBarSectionItem extends Component {
  render() {
    const { itemLogo, itemName } = this.props;
    return (
      <Link
        to={`/${itemName.replace(/\s+/g, "-").toLowerCase()}`}
        className="my-5 ml-10 flex flex-row"
      >
        <img
          className="max-w-10 mr-8 max-h-10 rounded-full bg-icon-background p-2"
          src={itemLogo}
          alt={`logo-${itemName}`}
        />
        <h3 className="mr-16 p-2 text-lg text-white">{itemName}</h3>
      </Link>
    );
  }
}

export default NavBarSectionItem;
