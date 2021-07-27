import { useState } from "react";

const useImageSlider = (images) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = images.length;

  const isEqualtoArray = currentSlide === length - 4;
  const isEqualtoZero = currentSlide === 0;

  function nextSlide() {
    setCurrentSlide(isEqualtoArray ? currentSlide : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(isEqualtoZero ? currentSlide : currentSlide - 1);
  }

  return {
    currentSlide,
    isEqualtoArray,
    isEqualtoZero,
    nextSlide,
    prevSlide,
  };
};

export default useImageSlider;
