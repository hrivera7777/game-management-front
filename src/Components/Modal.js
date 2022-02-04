import { Component } from "react/cjs/react.development";
import { Dialog, Transition, Fragment } from "@headlessui/react";

function ModalContent(props) {
  return (
    <div className="inline-block h-full w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Payment successful
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We've sent you an email
          with all of the details of your order.
        </p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={props.toggleModal}
        >
          Got it, thanks!
        </button>
      </div>
    </div>
  );
}

class Modal extends Component {
  render() {
    const { showModal, toggleModal } = this.props;
    return (
      <Dialog
        as="div"
        className="fixed inset-0 z-10"
        open={showModal}
        onClose={toggleModal}
      >
        <div className="flex min-h-screen items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

          <ModalContent toggleModal={toggleModal}></ModalContent>
        </div>
      </Dialog>
    );
  }
}

export default Modal;
