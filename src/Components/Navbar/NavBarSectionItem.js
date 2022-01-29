import { Component } from "react";

class NavBarSectionItem extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-row">
          <img src={this.props.itemLogo} alt={`logo-${this.props.itemName}`} />
          <h3> {this.props.itemName}</h3>
        </div>
      </div>
    );
  }
}

export default NavBarSectionItem;
