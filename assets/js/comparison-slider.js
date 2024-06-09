const comparisonSlider = document.querySelector(".comparison-slider"),
	sliders = document.querySelectorAll(".comparison-slider__slider");

sliders.length > 0 ? sliderListener() : false;

function sliderListener() {
  sliders.forEach((i) => {
		i.addEventListener("input", (e) => {
			comparisonSlider.style.setProperty('--position', `${e.target.value}%`);
		});
  });
}
