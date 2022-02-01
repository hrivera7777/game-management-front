import { Component } from "react";

class Button extends Component {
  render() {
    const { logo, text, color } = this.props;
    const tailwindColor = "bg-" + color;
    return (
      <button
        className={`${tailwindColor} flex flex-row rounded-full py-2 px-5`}
      >
        <img className="mr-3" src={logo} alt="card-image" />
        <h2 className="py-3 text-white">{text}</h2>
      </button>
    );
  }
}

export default Button;
