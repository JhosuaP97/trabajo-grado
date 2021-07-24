import React, { useState, useRef } from "react";
import {
  SliderContainer,
  BigImage,
  Wrapper,
  Slide,
  Thumbnail,
  ButtonRight,
  ButtonLeft,
  Hotspot,
  HotspotAnnotation,
  ButtonScreenReject,
  ButtonScreenCheck,
} from "./styles2";
import { Arrow } from "Icons/Arrow";
import { Check } from "Icons/Check";
import { Reject } from "Icons/Reject";

const ImageSlider2 = ({
  images = [],
  rejected,
  setRejected,
  checked,
  setChecked,
  reviewed,
  setReviewed,
}) => {
  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const length = images.length;

  const isEqualtoArray = currentSlide === length - 4;
  const isEqualtoZero = currentSlide === 0;

  const wrapperRef = useRef();

  function nextSlide() {
    setCurrentSlide(isEqualtoArray ? currentSlide : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(isEqualtoZero ? currentSlide : currentSlide - 1);
  }

  function handleSliderSelected(index) {
    setSlideIndex(index);

    if (!reviewed?.includes(index)) {
      setReviewed([...reviewed, index]);
    }
  }

  let filterIsIndexExist = (index, array) =>
    array.filter((item) => item !== index);

  function handleClickChecked(index) {
    if (!checked?.includes(index)) {
      setChecked([...checked, index]);
    }

    if (rejected?.includes(index)) {
      setRejected(filterIsIndexExist(index, rejected));
    }
  }

  function handleClickRejected(index) {
    if (!rejected?.includes(index)) {
      setRejected([...rejected, index]);
    }

    if (checked?.includes(index)) {
      setChecked(filterIsIndexExist(index, checked));
    }
  }

  return (
    <SliderContainer>
      <BigImage>
        <model-viewer
          src={images[slideIndex]?.src}
          camera-controls
          loading="eager"
          class="modelViewer"
          // ios-src="models/Refresco_Bueno.usdz"
          // environment-image="images/adams_place_bridge_2k.hdr"
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
              Contenido: 355 ml
              {/* Contenido: {arProductos[slideIndex].contenido} */}
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
              Cantidad de gas: 15%
              {/* Cantidad de gas:{arProductos[slideIndex].cantidad_gas} */}
            </HotspotAnnotation>
          </Hotspot>

          <ButtonScreenReject onClick={() => handleClickRejected(slideIndex)}>
            <Reject />
          </ButtonScreenReject>
          <ButtonScreenCheck onClick={() => handleClickChecked(slideIndex)}>
            <Check />
          </ButtonScreenCheck>

          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
        </model-viewer>
      </BigImage>

      <Thumbnail>
        <ButtonLeft onClick={prevSlide} disabled={isEqualtoZero}>
          <Arrow />
        </ButtonLeft>
        <Wrapper ref={wrapperRef}>
          {images.map((slide) => {
            return (
              <Slide
                isSelected={slide.id === slideIndex}
                currentSlide={currentSlide}
                rejected={rejected?.includes(slide.id)}
                checked={checked?.includes(slide.id)}
                id={slide.id}
                key={slide.id}
                onClick={() => handleSliderSelected(slide.id)}
              />
            );
          })}
        </Wrapper>
        <ButtonRight onClick={nextSlide} disabled={isEqualtoArray}>
          <Arrow />
        </ButtonRight>
      </Thumbnail>
    </SliderContainer>
  );
};

export default ImageSlider2;
