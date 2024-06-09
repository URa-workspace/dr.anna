// -------scroll to top----------------
function scrollToTop() {
	const offset = 100,
    scrollUp = document.querySelector(".scroll-up"),
    scrollUpSvgPath = document.querySelector(".scroll-up svg path"),
    pathLength = scrollUpSvgPath.getTotalLength();

  scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

  const getTop = () => window.scrollY || document.documentElement.scrollTop;

  // updateDashoffset
  const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight,
      dashoffset = pathLength - (getTop() * pathLength) / height;
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
  };

  // onScroll
  window.addEventListener("scroll", () => {
    updateDashoffset();

    if (getTop() > offset) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });
  // click
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
export default scrollToTop;
