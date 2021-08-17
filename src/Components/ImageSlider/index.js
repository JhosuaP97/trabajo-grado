import React, { useState } from "react";
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
import { CORTE1, CORTE2, CORTE3 } from "constants/index";
import useStudent from "hooks/useStudent";
import poster from "models/poster.png";
import useProduct from "hooks/useProduct";

const ImageSlider = () => {
  const {
    modulo,
    products,
    selectedSubgroup,
    checkSubgroup,
    subgroups,
    typeOfGraphic,
    CURRENT_ARRAY,
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
  const { currentSlide, isEqualtoArray, isEqualtoZero, prevSlide, nextSlide } =
    useSlider(CURRENT_ARRAY);
  const [slideIndex, setSlideIndex] = useState({});

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
      : products[0].id;

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
          <Message>Seleccionar un producto para empezar</Message>
        ) : (
          <model-viewer
            src={slideIndex.src}
            camera-controls
            loading="eager"
            class="modelViewer"
            exposure="1.2"
            shadow-intensity="1.6"
            camera-orbit="7deg 80deg 11.19m"
            min-camera-orbit="auto auto auto"
            max-camera-orbit="auto auto 11.19m"
          >
            <Hotspot
              class="Hotspot"
              slot="hotspot-1"
              data-position="0.56108519938404255m 6.671036563262774m 0.35157672031606246m"
              data-normal="0.8231864034269749m 0.17318591944975337m 0.5407132165180591m"
              data-visibility-attribute="visible"
            >
              <HotspotAnnotation slot="hotspot-dim-1" class="HotspotAnnotation">
                Contenido:
                {slideIndex.contenido}
              </HotspotAnnotation>
            </Hotspot>
            <Hotspot
              class="Hotspot"
              slot="hotspot-2"
              data-position="-0.756405048407264m 4.028738623174923m 0.7709743807017055m"
              data-normal="-0.54280911020801m 0.14986811160632174m 0.8263763180287439m"
              data-visibility-attribute="visible"
            >
              <HotspotAnnotation slot="hotspot-dim-2" class="HotspotAnnotation">
                Cantidad de gas:
                {slideIndex.cantidad_gas}
              </HotspotAnnotation>
            </Hotspot>
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
        {selectedSubgroup === null ? (
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
                      isSelected={slide.id === slideIndex.id}
                      currentSlide={currentSlide}
                      rejected={rejected?.includes(slide.id)}
                      accepted={accepted?.includes(slide.id)}
                      reviewed={reviewed?.includes(slide.id)}
                      currentModule={modulo}
                      firstItem={getFirstElementIDInArray}
                      id={slide.id}
                      key={slide.id}
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
