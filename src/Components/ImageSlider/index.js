import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  BigImage,
  Message,
  Wrapper,
  Slide,
  Thumbnail,
  ButtonRight,
  ButtonLeft,
  Hotspot,
  HotspotAnnotation,
  ButtonScreenReject,
  ButtonScreenCheck,
} from "./styles";
import { Arrow } from "Icons/Arrow";
import { Check } from "Icons/Check";
import { Reject } from "Icons/Reject";
import useSlider from "hooks/useSlider";
import useStudent from "hooks/useStudent";
import useProduct from "hooks/useProduct";
import useAuth from "hooks/useAuth";
import useProgressBar from "hooks/useProgressBar";
import { CORTE1, CORTE2, CORTE3, selectedArray } from "constants/index";

const ImageSlider = () => {
  const { user } = useAuth();
  const {
    modulo,
    products,
    selectedSubgroup,
    checkSubgroup,
    subgroups,
    typeOfGraphic,
    CURRENT_ARRAY,
    getProductsPracticeOne,
    getProductsPracticeTwo,
    idPractica,
    changeGraphic,
  } = useStudent();
  const {
    reviewed,
    rejected,
    accepted,
    handleReview,
    handleReviewSubgroup,
    handleProductRejected,
    handleProductAccepted,
  } = useProduct();

  const { step } = useProgressBar();

  useEffect(() => {
    if (modulo === CORTE1) {
      getProductsPracticeOne(idPractica, user?.estudiante?.idEstudiante);
    }
    if (modulo === CORTE2) {
      getProductsPracticeTwo(idPractica, user?.estudiante?.idEstudiante);
    }

    // eslint-disable-next-line
  }, [idPractica, user?.estudiante.idEstudiante, modulo]);

  useEffect(() => {
    if (modulo === CORTE2) {
      const getArrays = Object.entries(subgroups).filter(
        ([key, value]) => key.startsWith("Atributo") && value.length > 0
      );
      const getFirst = getArrays?.[step]?.[0];
      changeGraphic(getFirst && selectedArray[getFirst][0]);
    }
  }, [step, subgroups, modulo, changeGraphic]);

  const { currentSlide, isEqualtoArray, isEqualtoZero, prevSlide, nextSlide } =
    useSlider(CURRENT_ARRAY);

  const [slideIndex, setSlideIndex] = useState({});

  const selectedPoster = {
    [CORTE1]: products.poster,
    [CORTE2]: subgroups.poster,
  };
  const poster = selectedPoster[modulo];

  const [AtributoNAleatorio, AtributoNConstante, AtributoNVariable] =
    Object.keys(subgroups);

  const selectedIndexArray = {
    random: AtributoNAleatorio,
    constant: AtributoNConstante,
    variable: AtributoNVariable,
  };

  const selectedNameArray = selectedIndexArray[typeOfGraphic];

  const getFirstElementIDInArray =
    modulo === CORTE2
      ? selectedSubgroup !== null && selectedSubgroup.grupos[0].id
      : products?.products?.[0]?.id;

  let selectedGroups = selectedSubgroup?.grupos;

  function handleSliderSelected(slide) {
    setSlideIndex(slide);

    if (modulo === CORTE2) {
      handleReviewBySubgroup(slide);
    } else {
      handleReview(slide.id);
    }
  }

  function handleReviewBySubgroup(slide) {
    slide.isChecked = true;
    checkSubgroup(slide, selectedSubgroup.id, selectedNameArray);

    let counter = 0;

    for (const group of selectedGroups) {
      if (group.isChecked === true) counter++;
    }
    handleReviewSubgroup(selectedSubgroup.id, counter);
    handleReview(slide.id);
  }

  return (
    <SliderContainer>
      <BigImage>
        {Object.keys(slideIndex).length === 0 ? (
          <Message>Selecciona un producto para empezar inspeccionarlo</Message>
        ) : (
          <model-viewer
            src={slideIndex.src}
            camera-controls
            loading="eager"
            id="modelViewer"
            exposure="1.2"
            shadow-intensity="1.6"
            camera-orbit="7deg 80deg 11.19m"
            min-camera-orbit="auto auto auto"
            // max-camera-orbit="auto auto 11.19m"
            auto-rotate
            poster={poster}
            autoplay
            alt={`modelo 3D de ${slideIndex.nombre}`}
          >
            <Hotspot
              className="Hotspot"
              slot="hotspot-1"
              data-position="0.56108519938404255m 0.671036563262774m 0.35157672031606246m"
              data-normal="0.8231864034269749m 0.17318591944975337m 0.5407132165180591m"
              data-visibility-attribute="visible"
            >
              <HotspotAnnotation
                slot="hotspot-dim-1"
                className="HotspotAnnotation"
              >
                Contenido:
                {slideIndex.variablePrincipal}
              </HotspotAnnotation>
            </Hotspot>
            {slideIndex.variableSecundaria && (
              <Hotspot
                className="Hotspot"
                slot="hotspot-2"
                data-position="-0.756405048407264m 4.028738623174923m 0.7709743807017055m"
                data-normal="-0.54280911020801m 0.14986811160632174m 0.8263763180287439m"
                data-visibility-attribute="visible"
              >
                <HotspotAnnotation
                  slot="hotspot-dim-2"
                  className="HotspotAnnotation"
                >
                  Cantidad de gas:
                  {slideIndex.variableSecundaria}
                </HotspotAnnotation>
              </Hotspot>
            )}
            {modulo === CORTE3 && (
              <>
                <ButtonScreenReject
                  onClick={() => handleProductRejected(slideIndex.id)}
                >
                  <Reject />
                </ButtonScreenReject>
                <ButtonScreenCheck
                  onClick={() => handleProductAccepted(slideIndex.id)}
                >
                  <Check />
                </ButtonScreenCheck>
              </>
            )}
          </model-viewer>
        )}
      </BigImage>

      <Thumbnail>
        {selectedSubgroup === null && modulo === CORTE2 ? (
          <Message>Debes seleccionar un Subgrupo</Message>
        ) : (
          <>
            <ButtonLeft onClick={prevSlide} disabled={isEqualtoZero}>
              <Arrow />
            </ButtonLeft>
            <Wrapper>
              {CURRENT_ARRAY &&
                CURRENT_ARRAY.map((slide) => {
                  return (
                    <Slide
                      id={slide.id}
                      key={slide.id}
                      isSelected={slide.id === slideIndex.id}
                      currentSlide={currentSlide}
                      rejected={rejected?.includes(slide.id)}
                      accepted={accepted?.includes(slide.id)}
                      reviewed={reviewed?.includes(slide.id)}
                      currentModule={modulo}
                      firstItem={getFirstElementIDInArray}
                      onClick={() => handleSliderSelected(slide)}
                      urlImage={poster}
                    />
                  );
                })}
            </Wrapper>
            <ButtonRight onClick={nextSlide} disabled={isEqualtoArray}>
              <Arrow />
            </ButtonRight>
          </>
        )}
      </Thumbnail>
    </SliderContainer>
  );
};

export default ImageSlider;
