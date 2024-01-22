import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, onClose, children }) {
  const dialog = useRef();

  // this will work after component fully rendered
  // that's why we need to use useEffect. If we don't the ones not initiliased will be tried to use
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
