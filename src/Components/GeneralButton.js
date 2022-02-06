import { Component } from "react";
import Modal from "./Modal";

class GeneralButton extends Component {
  colorOptions = {
    Create: "bg-principal-purple",
    Favorite: "bg-principal-orange",
    Edit: "bg-principal-green",
    Delete: "bg-principal-red",
  };
  defineColor(type) {
    return this.colorOptions[type];
  }
  state = { showModal: false };
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    const { logo, text, type, category } = this.props;
    return (
      <div>
        <button
          onClick={this.toggleModal}
          className={`${this.defineColor(
            text
          )} mx-2 flex w-max transform flex-row rounded-full py-1 px-4 transition duration-300 ease-in-out hover:scale-95`}
        >
          <img className="mr-3" src={logo} alt="card-image" />
          <h2 className="py-3 text-white">{text}</h2>
        </button>
        {this.state.showModal ? (
          <Modal
            showModal={this.state.showModal}
            toggleModal={this.toggleModal}
            type={type}
            category={category}
            name={text}
          />
        ) : null}
      </div>
    );
  }
}

export default GeneralButton;
