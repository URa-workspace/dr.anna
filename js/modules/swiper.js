import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper("#sliderReviews", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 60,
  // autoHeight: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});

export default swiper;