import React from "react";
import { StyleDownloadButton } from "./styles";

const DownloadButton = ({ file, children }) => {
  return (
    <StyleDownloadButton to={file} target="_blank" download>
      {children}
    </StyleDownloadButton>
  );
};

export default DownloadButton;
