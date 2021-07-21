import React, { useState } from "react";
import ImageSlider from "Components/ImageSlider";
import StudentInfo from "Components/StudentInfo";
import {
  BackgrounContainer,
  ConfigPractice,
  Data,
  Info,
  ProductsDisplay,
  MainStudent,
} from "./styles";

import Refresco from "models/Refresco.glb";
import RefrescoTapaFloja from "models/Refresco_tapa_floja.glb";
import RefrescoTapaFlojaEnvaseSucio from "models/Refresco_tapa_floja_envase_sucio.glb";
import RefrescoEtiquetaSueltaEnvaseSucioTapaFloja from "models/Refresco_etiqueta_suelta_envase_sucio_tapa_floja.glb";
import RefrescoEnvaseSucio from "models/Refresco_envase_sucio.glb";
import RefrescoDefectuoso from "models/Refresco_defectuoso.glb";
import StudentConfig from "Components/StudentConfig";
import StudentDisplayGraphics from "Components/StudentDisplayGraphics";

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
    id: 1,
    src: Refresco,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 2,
    src: RefrescoTapaFloja,
    contenido: "350 ml",
    cantidad_gas: "10%",
  },
  {
    id: 3,
    src: RefrescoTapaFlojaEnvaseSucio,
    contenido: "360 ml",
    cantidad_gas: "20%",
  },
  {
    id: 4,
    src: RefrescoEtiquetaSueltaEnvaseSucioTapaFloja,
    contenido: "355 ml",
    cantidad_gas: "15%",
  },
  {
    id: 5,
    src: RefrescoEnvaseSucio,
    contenido: "356 ml",
    cantidad_gas: "15%",
  },
  {
    id: 6,
    src: RefrescoDefectuoso,
    contenido: "355 ml",
    cantidad_gas: "18%",
  },
];

const StudentDashboard = () => {
  const [reviewed, setReviewed] = useState([0]);

  const countReviewed = reviewed.length;

  return (
    <BackgrounContainer>
      <MainStudent>
        <ConfigPractice>
          <StudentConfig />
          <StudentDisplayGraphics />
        </ConfigPractice>
        <Data>
          <ProductsDisplay>
            <ImageSlider
              images={arrProductos}
              reviewed={reviewed}
              setReviewed={(callback) => setReviewed(callback)}
            />
          </ProductsDisplay>

          <Info>
            <StudentInfo
              countReviewed={countReviewed}
              totalReviewed={arrProductos.length}
              features={info}
            />
          </Info>
        </Data>
      </MainStudent>
    </BackgrounContainer>
  );
};

export default StudentDashboard;
