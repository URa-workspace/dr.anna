import selectCode from "./modules/select.js";
import pageLinks from "./modules/active-link.js";
import sidebar from "./modules/sidebar.js";
import scrollToTop from "./modules/scroll-to-top.js";


// ------ mobile nav ------------
function mobileNav() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
  const openSubmenus = document.querySelectorAll(".open-submenu");

  openSubmenus.length > 0 ? openSMFunc() : false;
  function openSMFunc() {
    openSubmenus.forEach((i) =>
      i.addEventListener("click", () => {
        i.classList.toggle("active");
        i.parentElement.classList.toggle("active");
        i.parentElement
          .querySelector("ul.mob-submenu")
          .classList.toggle("active");
      })
    );
  }

  navBtns.forEach((navBtn) => {
    navBtn.onclick = function () {
      toggleShowSubMenu();
    };
  });
  nav.addEventListener("click", (e) => {
    e.target.classList.contains("mobile-nav--open")
      ? toggleShowSubMenu()
      : false;
  });
  function toggleShowSubMenu() {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  }
}
mobileNav();
// ----- mobile nav end ------------
//  ----- sticky header ----------
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  const stickyHeader = document.getElementById("stickyHeader");
  window.scrollY > 350
    ? stickyHeader.classList.add("header-fixed")
    : stickyHeader.classList.remove("header-fixed");
})
//  ----- sticky header end --------
// ----- scroll to anchor ------
const anchorlinks = document.querySelectorAll('a[data-anchor]')

anchorlinks.forEach((i) => scrollToAnchor(i));

function scrollToAnchor(link) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const subtractionHeight =
      document.querySelector(".header__wrapper").offsetHeight;
    const target = document.getElementById(link.dataset.anchor);
    let idx;
    document.body.getBoundingClientRect().width > 992
      ? (idx = 120)
      : (idx = 100);
    
    window.scrollTo({
      top: target.getBoundingClientRect().top - subtractionHeight + window.scrollY - idx,
      behavior: "smooth",
    });
  })
};
// ----- scroll to anchor end ------
// ------ no-click --------
const noClickBtns = document.querySelectorAll(".no-click");
  ( noClickBtns.length > 0 )
  ? noClickFunc()
  : false;

  function noClickFunc() {
    noClickBtns.forEach((b) => b.addEventListener('click', (e) => {
      e.preventDefault()
      e.target.href = "/";
    }) )
  }
// ------ no-click end --------

sidebar();
scrollToTop();
selectCode();
pageLinks();




