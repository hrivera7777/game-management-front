import { Component } from "react/cjs/react.development";
import { Dialog, Transition, Fragment } from "@headlessui/react";
import InputIcons from "./InputIcons";
import InputText from "./InputText";

function EditFields(props) {
  const { inputs, category } = props;
  return inputs[category].map((inputProperties, index) => {
    return <InputText {...inputProperties} key={index} />;
  });
}

function DeleteDescription() {
  return (
    <div>
      <p className="text-center text-lg font-bold text-white">Are you sure?</p>
      <p className="text-center text-sm text-white">
        Do you really want to delete --something--?
      </p>
    </div>
  );
}

function FavoriteDescription() {
  return (
    <p className="text-sm text-white">Do you want to add --somethig-- :)</p>
  );
}

function SelectDescription(props) {
  const { type, inputs, category } = props;

  const selection = {
    edit: <EditFields inputs={inputs} category={category} />,
    delete: <DeleteDescription />,
    favorite: <FavoriteDescription />,
  };
  return <div className="mt-2">{selection[type]}</div>;
}

function ModalContent(props) {
  const { type, toggleModal, category, name } = props;
  const inputs = {
    game: [
      { logo: InputIcons.inputLogo, labelName: "Name", type: "text" },
      { logo: InputIcons.genreLogo, labelName: "Genre", type: "text" },
      { logo: InputIcons.priceLogo, labelName: "Price", type: "number" },
      { logo: InputIcons.fileLogo, labelName: "File", type: "file" },
    ],
    favorite: [
      { logo: InputIcons.inputLogo, labelName: "Name", type: "text" },
      {
        logo: InputIcons.descriptionLogo,
        labelName: "Description",
        type: "text",
      },
    ],
  };
  const buttonOptions = {
    accept: "Yep!",
    cancel: "Cancel",
  };

  return (
    <div className="inline-block h-full w-full max-w-md transform overflow-hidden rounded-2xl bg-principal-background px-8 py-4 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h2"
        className="text-center text-lg font-bold leading-6 text-white"
      >
        {name}
      </Dialog.Title>

      <SelectDescription type={type} inputs={inputs} category={category} />

      <div className="mt-4 flex flex-row justify-center">
        <button
          type="button"
          className="mr-4 rounded-md border border-transparent bg-principal-purple px-4 py-2 text-sm font-medium text-white hover:bg-secondary-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={toggleModal}
        >
          {buttonOptions["accept"]}
        </button>
        <button
          type="button"
          className="rounded-md border border-transparent bg-principal-red px-4 py-2 text-sm font-medium text-white hover:bg-secondary-red focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={toggleModal}
        >
          {buttonOptions["cancel"]}
        </button>
      </div>
    </div>
  );
}

class Modal extends Component {
  render() {
    const { showModal, toggleModal, type, category, name } = this.props;
    return (
      <Dialog
        as="div"
        className="fixed inset-0 z-10"
        open={showModal}
        onClose={toggleModal}
      >
        <div className="flex min-h-screen items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

          <ModalContent
            toggleModal={toggleModal}
            type={type}
            category={category}
            name={name}
          ></ModalContent>
        </div>
      </Dialog>
    );
  }
}

export default Modal;
