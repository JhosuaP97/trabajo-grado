import React, { useState } from "react";
// Components
import StudentInfo from "Components/StudentInfo";
import ImageSlider from "Components/ImageSlider";
import {
  CORTE1,
  CORTE2,
  CORTE3,
  STEPS_BY_MODULE,
  TYPEOF_GRAPHICS_PRODUCT,
  EXTRA_INFO_SHOW,
} from "constants/index";

// Models
import Refresco from "models/Refresco.glb";
import RefrescoTapaFloja from "models/Refresco_tapa_floja.glb";
import RefrescoTapaFlojaEnvaseSucio from "models/Refresco_tapa_floja_envase_sucio.glb";
import RefrescoEtiquetaSueltaEnvaseSucioTapaFloja from "models/Refresco_etiqueta_suelta_envase_sucio_tapa_floja.glb";
import RefrescoEnvaseSucio from "models/Refresco_envase_sucio.glb";
import RefrescoDefectuoso from "models/Refresco_defectuoso.glb";
import StudentExtraInfo from "Components/StudentExtraInfo";
import ProgressBar from "Components/ProgressBar";

// Styles
import {
  BackgrounContainer,
  ConfigPractice,
  StudentData,
  Info,
  ProductsDisplay,
  MainStudent,
} from "./styles";

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
  // States
  const [reviewed, setReviewed] = useState([0]);
  const [rejected, setRejected] = useState([]);
  const [checked, setChecked] = useState([]);

  // Counts
  const countReviewed = reviewed.length;
  const countRejected = rejected.length;
  const countChecked = checked.length;

  const modulo = CORTE1;

  const selectedInfotoShow = EXTRA_INFO_SHOW[modulo];
  const selectedSteps = STEPS_BY_MODULE[modulo];
  const selectedProductType = TYPEOF_GRAPHICS_PRODUCT["variable"];

  const isModulo3 = (value) => (modulo === CORTE3 ? value : null);

  return (
    <BackgrounContainer>
      <MainStudent>
        <ConfigPractice>
          <ProgressBar steps={selectedSteps} />
          {modulo !== CORTE3 && (
            <StudentExtraInfo infotoShow={selectedInfotoShow} />
          )}
        </ConfigPractice>
        <StudentData>
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
              typeOfProductGraphics={selectedProductType}
            />
          </Info>
        </StudentData>
      </MainStudent>
    </BackgrounContainer>
  );
};

export default StudentDashboard;
