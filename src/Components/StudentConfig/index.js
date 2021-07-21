import React from "react";
import ProgressBar from "Components/ProgressBar";
const StudentConfig = () => {
  const steps = [
    "Revisa los productos",
    "Verifica los productos",
    "Productos para gráfico: atributos con n aleatorio.",
    // "Productos para gráfico: atributos con n constante.",
    // "Productos para gráfico: variables",
    "Finalizar práctica",
  ];

  return <ProgressBar steps={steps} />;
};

export default StudentConfig;
