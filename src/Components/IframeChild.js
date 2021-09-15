import React, { useState, useEffect } from "react";
export const IframeChild = () => {
  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessageToParent = () => {
    window.parent.postMessage("Hi dad!", "http://localhost:3000");
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3000") return;
      let parseJSON = JSON.parse(e.data);
      setRecievedMessage(
        `Got this message from parent:${parseJSON.nombreEstudiante}`
      );
    });
  }, []);

  return (
    <>
      <h2>Child Iframe</h2>
      <p>{recievedMessage}</p>
      <button onClick={sendMessageToParent}>Send data to parent</button>
    </>
  );
};
