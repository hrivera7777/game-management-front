import { Component } from "react";

class GeneralButton extends Component {
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
        )} mx-2 flex transform flex-row rounded-full py-2 px-5 transition duration-300 ease-in-out hover:scale-95`}
      >
        <img className="mr-3" src={logo} alt="card-image" />
        <h2 className="py-3 text-white">{text}</h2>
      </button>
    );
  }
}

export default GeneralButton;
