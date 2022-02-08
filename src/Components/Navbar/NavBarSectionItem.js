import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBarSectionItem extends Component {
  render() {
    const activeTextStyle = "text-white";
    const activeIconStyle = "bg-principal-orange";
    const { itemLogo, itemName } = this.props;
    return (
      <NavLink
        to={`/${itemName.replace(/\s+/g, "-").toLowerCase()}`}
        className="group my-5 ml-10 flex flex-row"
      >
        {({ isActive }) => (
          <div className="flex flex-row">
            <img
              className={`${
                isActive
                  ? activeIconStyle
                  : "bg-icon-background group-hover:bg-pages-background"
              } max-w-10 mr-2 max-h-10 rounded-full p-2`}
              src={itemLogo}
              alt={`logo-${itemName}`}
            />
            <h3
              className={`${
                isActive
                  ? activeTextStyle
                  : "text-gray-500 group-hover:text-white"
              } mr-16 p-2 text-lg`}
            >
              {itemName}
            </h3>
          </div>
        )}
      </NavLink>
    );
  }
}

export default NavBarSectionItem;
