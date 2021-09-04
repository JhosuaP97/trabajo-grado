import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring } from "react-spring";
import { Background, Content } from "./styles";

const portalRoot = document.getElementById("portal");

const Modal = ({ children, close, isOpen }) => {
  const animation = useSpring({
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
  });
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
    <Background style={animation}>
      <Content ref={modalRef}>{children}</Content>
    </Background>,
    portalRoot
  );
};

export default Modal;
