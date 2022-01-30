import { Component } from "react";

class NavBarSectionItem extends Component {
  render() {
    return (
      <div>
        <div className="my-5 ml-10 flex flex-row">
          <div className="mr-8 rounded-full bg-icon-background p-2">
            <img
              src={this.props.itemLogo}
              alt={`logo-${this.props.itemName}`}
            />
          </div>
          <h3 className="mr-16 p-2 text-lg text-white">
            {" "}
            {this.props.itemName}
          </h3>
        </div>
      </div>
    );
  }
}

export default NavBarSectionItem;
