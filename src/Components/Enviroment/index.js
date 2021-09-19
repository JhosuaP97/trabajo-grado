import Navbar from "Components/Navbar";
import useAuth from "hooks/useAuth";
import useProduct from "hooks/useProduct";
import useStudent from "hooks/useStudent";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { Iframe, ContainerIframe } from "./styles";
import { CORTE3 } from "constants/index";
import ModalEnviromentBack from "Components/Modals/ModalEnviromentBack";
import useModal from "hooks/useModal";
const Enviroment = ({ location }) => {
  let history = useHistory();
  const iFrameRef = useRef(null);
  const { userAuthenticate } = useAuth();
  const { modulo } = useStudent();
  const { changeStateMessage } = useProduct();
  const { isOpen, handleModalState } = useModal();

  useEffect(() => {
    userAuthenticate();
  }, []);

  // Lo que recibo
  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "https://mexp.netlify.app") return;

      if (e.data === "Abort") {
        console.log("abort");
        handleModalState();
      }

      if (e.data === "openedReady") {
        iFrameRef.current?.contentWindow.postMessage(
          JSON.stringify(location.state),
          "https://mexp.netlify.app"
        );
      }

      if (e.data !== "openedReady") {
        if (modulo === CORTE3) {
          changeStateMessage(true);
          history.push(e.data);
        } else {
          if (e.data !== "Abort") history.push(e.data);
        }
      }
    });
  }, [location.state, history, modulo]);

  return (
    <>
      <Navbar />
      <ContainerIframe>
        <Iframe
          ref={iFrameRef}
          id="entorno"
          title="Entorno"
          frameBorder={0}
          allowFullScreen
          src="https://mexp.netlify.app"
        />
      </ContainerIframe>

      <ModalEnviromentBack
        isOpen={isOpen}
        close={handleModalState}
        onClick={() => history.goBack()}
      />
    </>
  );
};

export default Enviroment;
