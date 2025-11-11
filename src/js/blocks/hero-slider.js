import Splide from "@splidejs/splide";
import "@splidejs/splide/css/core";

const SELECTORS = {
  block: ".section.hero-slider",
  splide: ".splide",
  thumbs: ".hero-slider__image-slider .splide",
  main: ".hero-slider__content-slider .splide",
};

export const HeroSlider = () => {
  const blocks = document.querySelectorAll(SELECTORS.block);

  blocks.forEach((block) => {
    const splideEl = block.querySelector(SELECTORS.splide);

    if (splideEl) {
      initHeroSlider();

      return;
    }
  });
};

export const initHeroSlider = () => {
  const main = new Splide(SELECTORS.main, {
    type: "fade",
    arrows: false,
    pagination: true,
    drag: false,
    autoplay: true,
    interval: 5000,
    rewind: true,
  });

  const thumbs = new Splide(SELECTORS.thumbs, {
    type: "fade",
    arrows: false,
    pagination: false,
    drag: false,
  });

  main.sync(thumbs);
  thumbs.mount();
  main.mount();
};
