import { Component } from "react";
import NavBarSectionItem from "./NavBarSectionItem";

class NavBarSection extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <h3 className="ml-10 inline-block text-lg text-principal-orange">
          {this.props.sectionName}
        </h3>
        {this.props.attributes.map((item) => {
          return (
            <NavBarSectionItem
              key={item.name}
              itemLogo={item.logo}
              itemName={item.name}
            />
          );
        })}
      </div>
    );
  }
}

export default NavBarSection;
