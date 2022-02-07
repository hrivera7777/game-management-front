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

function DeleteDescription(props) {
  const { category } = props;
  const selection = {
    game: () => {
      const { game } = props;
      return game;
    },
    favorite: () => {
      const { favorite } = props;
      return favorite;
    },
  };
  const selected = selection[category]();

  const { name } = selected;
  return (
    <div>
      <p className="text-center text-lg font-bold text-white">Are you sure?</p>
      <p className="text-center text-sm text-white">
        Do you really want to delete <span className="font-bold">{name}</span>?
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
  const { type, inputs, category, game, favorite } = props;

  const selection = {
    edit: <EditFields inputs={inputs} category={category} />,
    delete: (
      <DeleteDescription game={game} favorite={favorite} category={category} />
    ),
    favorite: <FavoriteDescription />,
  };
  return <div className="mt-2">{selection[type]}</div>;
}

function ModalContent(props) {
  async function editCard(editableCard) {
    const { properties, id } = editableCard;
    const authType = "Bearer";
    const body = JSON.stringify(properties);
    const res = await fetch(`http://localhost:3000/${category}/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: authType.concat(" ", localStorage.getItem("token")),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    const json = await res.json();
    return json;
  }

  async function createCard(newCard) {
    const { properties } = newCard;
    const authType = "Bearer";
    const body = JSON.stringify(properties);
    const res = await fetch(`http://localhost:3000/${category}`, {
      method: "POST",
      headers: {
        Authorization: authType.concat(" ", localStorage.getItem("token")),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    const json = await res.json();
    return json;
  }

  async function handleEditRequest(event) {
    event.preventDefault();
    const selection = {
      game: () => {
        const name = event.target.elements.Name.value;
        const genre = event.target.elements.Genre.value;
        const price = event.target.elements.Price.value;
        const filename = event.target.elements.File.value;
        game != null ? ({ id } = game) : (id = null);

        const properties = {
          name: name,
          genre: genre,
          price: parseInt(price),
          filename: filename,
        };
        return { properties, id };
      },

      favorite: () => {
        const name = event.target.elements.Name.value;
        const description = event.target.elements.Description.value;
        favorite != null ? ({ id } = favorite) : (id = null);
        const properties = {
          name: name,
          description: description,
        };
        return { properties, id };
      },
    };

    name === "Edit"
      ? editCard(selection[category]())
      : createCard(selection[category]());
    toggleModal();
  }

  async function deleteCard() {
    const selection = {
      game: () => {
        const { id } = game;
        return id;
      },
      favorite: () => {
        const { id } = favorite;
        return id;
      },
    };
    const id = selection[category]();

    const authType = "Bearer";
    const res = await fetch(`http://localhost:3000/${category}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authType.concat(" ", localStorage.getItem("token")),
      },
      mode: "cors",
    });
  }

  async function handleDeleteRequest(event) {
    event.preventDefault();
    deleteCard();
    toggleModal();
  }
  const { type, toggleModal, category, name, game, favorite } = props;
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
    <form
      onSubmit={type === "edit" ? handleEditRequest : handleDeleteRequest}
      className="inline-block h-full w-full max-w-md transform overflow-hidden rounded-2xl bg-principal-background px-8 py-4 text-left align-middle shadow-xl transition-all"
    >
      <Dialog.Title
        as="h2"
        className="text-center text-lg font-bold leading-6 text-white"
      >
        {name}
      </Dialog.Title>

      <SelectDescription
        type={type}
        inputs={inputs}
        category={category}
        game={game}
        favorite={favorite}
      />

      <div className="mt-4 flex flex-row justify-center">
        <button
          type="submit"
          className="mr-4 rounded-md border border-transparent bg-principal-purple px-4 py-2 text-sm font-medium text-white hover:bg-secondary-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
    </form>
  );
}

class Modal extends Component {
  render() {
    const { showModal, toggleModal, type, category, name, game, favorite } =
      this.props;
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
            game={game}
            favorite={favorite}
          />
        </div>
      </Dialog>
    );
  }
}

export default Modal;
