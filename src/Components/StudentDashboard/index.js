import React, { useState } from "react";
// Components
import StudentInfo from "Components/StudentInfo";
import ImageSlider from "Components/ImageSlider";

// Models
import Refresco from "models/Refresco.glb";
import RefrescoTapaFloja from "models/Refresco_tapa_floja.glb";
import RefrescoTapaFlojaEnvaseSucio from "models/Refresco_tapa_floja_envase_sucio.glb";
import RefrescoEtiquetaSueltaEnvaseSucioTapaFloja from "models/Refresco_etiqueta_suelta_envase_sucio_tapa_floja.glb";
import RefrescoEnvaseSucio from "models/Refresco_envase_sucio.glb";
import RefrescoDefectuoso from "models/Refresco_defectuoso.glb";
import StudentConfig from "Components/StudentConfig";
import StudentExtraInfo from "Components/StudentExtraInfo";
// Styles
import {
  BackgrounContainer,
  ConfigPractice,
  StudentData,
  Info,
  ProductsDisplay,
  MainStudent,
} from "./styles";
import PageMessage from "Components/PageMessage";

const info = [
  { name: "contenido", value: "355 ml+-5" },
  { name: "cantidad gas", value: "255 ml+-5" },
  { name: "tapa", value: "fija" },
  { name: "etiqueta", value: "fija" },
  { name: "Envase", value: "limpio" },
  { name: "Textos", value: "Ilegibles" },
];

const arrProductos = [
  {
    id: 0,
    src: Refresco,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 1,
    src: RefrescoTapaFloja,
    contenido: "350 ml",
    cantidad_gas: "10%",
  },
  {
    id: 2,
    src: RefrescoTapaFlojaEnvaseSucio,
    contenido: "360 ml",
    cantidad_gas: "20%",
  },
  {
    id: 3,
    src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 4,
    src: RefrescoEnvaseSucio,
    contenido: "356 ml",
    cantidad_gas: "15%",
  },
  {
    id: 5,
    src: RefrescoDefectuoso,
    contenido: "355 ml",
    cantidad_gas: "18%",
  },
];

const StudentDashboard = () => {
  const [reviewed, setReviewed] = useState([0]);
  const [rejected, setRejected] = useState([]);
  const [checked, setChecked] = useState([]);

  const countReviewed = reviewed.length;
  const countRejected = rejected.length;
  const countChecked = checked.length;

  const modulo = "Corte 3";

  const isModulo3 = (value) => (modulo === "Corte 3" ? value : null);

  return (
    <BackgrounContainer>
      <MainStudent>
        <ConfigPractice>
          <StudentConfig />
          <StudentExtraInfo info="practice" />
        </ConfigPractice>
        <StudentData>
          {/* <PageMessage /> */}
          <ProductsDisplay>
            <ImageSlider
              currentModule={modulo}
              images={arrProductos}
              reviewed={reviewed}
              setReviewed={setReviewed}
              rejected={isModulo3(rejected)}
              checked={isModulo3(checked)}
              setRejected={isModulo3(setRejected)}
              setChecked={isModulo3(setChecked)}
            />
          </ProductsDisplay>
          <Info>
            <StudentInfo
              currentModule={modulo}
              countReviewed={countReviewed}
              totalReviewed={arrProductos.length}
              rejected={countRejected}
              checked={countChecked}
              features={info}
            />
          </Info>
        </StudentData>
      </MainStudent>
    </BackgrounContainer>
  );
};

export default StudentDashboard;
