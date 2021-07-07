import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "Components/Button";

import { Background, Content, Actions } from "./styles";

const portalRoot = document.getElementById("portal");

const Modal = ({ children, title, close, isOpen, redirect }) => {
  const modalRef = useRef();
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflowY = "hidden";

    function listenerOutside(e) {
      if (modalRef.current?.contains(e.target)) return;
      close();
    }

    window.addEventListener("click", listenerOutside);
    return () => {
      window.removeEventListener("click", listenerOutside);
      document.body.removeAttribute("style");
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Background>
      <Content ref={modalRef}>
        <h1>{title}</h1>
        <p>{children}</p>
        <Actions>
          <Button
            type="button"
            textButton="No, haré unos cambios"
            fill="false"
            onClick={close}
          />
          <Button
            type="button"
            textButton="Si, estoy seguro"
            fill="true"
            onClick={redirect}
          />
        </Actions>
      </Content>
    </Background>,
    portalRoot
  );
};

export default Modal;
