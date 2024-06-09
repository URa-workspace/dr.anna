const pageLinks = document.querySelectorAll("*[data-active-page]");
const page = document.querySelector("body[data-page]");

pageLinks.forEach((i) => {
  i.dataset.activePage === page.dataset.page ? i.classList.add("active") : false;
});
export default pageLinks;

