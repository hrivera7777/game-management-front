import { Component } from "react";
import NavBarSectionItem from "./NavBarSectionItem";

class NavBarSection extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col">
          <h3 className="ml-10 inline-block text-lg text-principal-color">
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
      </div>
    );
  }
}

export default NavBarSection;
