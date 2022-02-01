import { Component } from "react";

class Button extends Component {
  colorOptions = {
    favorite: "bg-principal-orange",
    edit: "bg-principal-green",
    delete: "bg-principal-red",
  };
  defineColor(type) {
    return this.colorOptions[type];
  }
  render() {
    const { logo, text, type } = this.props;
    return (
      <button
        className={`${this.defineColor(
          type
        )} flex flex-row rounded-full py-2 px-5`}
      >
        <img className="mr-3" src={logo} alt="card-image" />
        <h2 className="py-3 text-white">{text}</h2>
      </button>
    );
  }
}

export default Button;
