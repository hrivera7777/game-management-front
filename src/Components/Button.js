import { Component } from "react";

class Button extends Component {
  render() {
    const { logo, text, color } = this.props;
    return (
      <button className={`flex flex-row rounded-full bg-${color} py-2 px-5`}>
        <img className="mr-3" src={logo} alt="card-image" />
        <h2 className="py-3 text-white">{text}</h2>
      </button>
    );
  }
}

export default Button;
