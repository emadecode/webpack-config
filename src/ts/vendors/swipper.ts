// import Swiper JS
import Swiper, { Navigation, Pagination, Autoplay } from "swiper"

const introSlider: Swiper = new Swiper("[intro-slider]", {
  modules: [Navigation, Pagination, Autoplay],
  wrapperClass: "gi-slider-wrapper",
  slideClass: "gi-slider-slide",
  slideActiveClass: "gi-slider-slide--active",
  slidePrevClass: "gi-slider-slide-prev",
  slideNextClass: "gi-slider-slide-next",
  pagination: {
    el: ".gi-slider-pagination",
    bulletClass: "gi-slider-pagination__bullete",
    bulletActiveClass: "gi-slider-pagination__bullete--active",
    clickable: true,
  },
  navigation: {
    nextEl: ".gi-slider-button--next",
    prevEl: ".gi-slider-button--prev",
    disabledClass: "gi-slider-button--disabled",
  },
  speed: 1000,
  spaceBetween: 15,
  slidesPerView: 2,
  initialSlide: 1,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
  },
})
const specialSlider: Swiper = new Swiper("[special-slider]", {
  modules: [Navigation, Pagination, Autoplay],
  wrapperClass: "gi-slider-wrapper",
  slideClass: "gi-slider-slide",
  slideActiveClass: "gi-slider-slide--active",
  slidePrevClass: "gi-slider-slide-prev",
  slideNextClass: "gi-slider-slide-next",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".gi-slider-pagination",
    bulletClass: "gi-slider-pagination__bullete",
    bulletActiveClass: "gi-slider-pagination__bullete--active",
    clickable: true,
  },
  navigation: {
    nextEl: ".gi-slider-button-2--next",
    prevEl: ".gi-slider-button-2--prev",
    disabledClass: "gi-slider-button-2--disabled",
  },
  speed: 1000,
  spaceBetween: 15,
  slidesPerView: 2,
  initialSlide: 1,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
      centeredSlides: false,
      initialSlide: 0,
    },
  },
})
