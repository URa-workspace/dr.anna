import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
// import Swiper and modules styles
import 'swiper/css';
import "swiper/css/autoplay";

const sliderBrands = new Swiper("#sliderBrands", {
  modules: [Autoplay],
  slidesPerView: 1,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 3000,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

export default sliderBrands;