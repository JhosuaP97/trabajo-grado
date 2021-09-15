import useAuth from "hooks/useAuth";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
export const IframeParent = () => {
  let history = useHistory();
  const iFrameRef = useRef(null);
  const [recievedMessage, setRecievedMessage] = useState("");
  const { user, userAuthenticate } = useAuth();

  useEffect(() => {
    userAuthenticate();
  }, []);

  let infoPractice = {
    nombre: "Siete herramientas estadísticas",
    descripcion:
      "Inspecciona cada uno de los productos y aplica las herramientas solicitadassiajidsajsjidsajodsaijdsajodsjois",
    producto: "Barra_chocolate",
    estudiante: user?.estudiante.nombreEstudiante,
  };

  const sendMessage = () => {
    if (!iFrameRef.current) {
      return;
    }
    iFrameRef.current.contentWindow.postMessage(
      JSON.stringify(infoPractice),
      "http://127.0.0.1:5501"
    );
  };

  //   Lo que recibo
  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://127.0.0.1:5501") return;
      // console.log(e);
      // history.push(e.data);
      setRecievedMessage(`Got this message from child:${e.data}`);
    });
  }, []);

  return (
    <>
      <iframe
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
        ref={iFrameRef}
        id="entorno"
        title="Entorno"
        frameBorder="0"
        allowFullScreen
        src="http://127.0.0.1:5501/index.html"
      />
      {recievedMessage}
      <button onClick={sendMessage}>Enviar</button>
    </>
  );
};
