const closeBtn = document.querySelector(".sidebar__close-btn > span"),
  sidebar = document.getElementById("sidebar"),
  sidebarShowBtns = document.querySelectorAll("._sidebar-show");

	const sidebarFunc = function (e) {
		sidebarShowBtns.length > 0 ? sidebarToggle() : false;
}
function sidebarToggle() {
	sidebarShowBtns.forEach(i => {
		i.addEventListener('click', sidebarShow)
	})
	sidebar.addEventListener('click', (e) => {
		e.target.classList.contains("_close") ? sidebarClose() : false;
	})

	}
const sidebarShow = function () {
	sidebar.classList.add('active')
}
const sidebarClose = function () {
	sidebar.classList.remove("active");
}
export default sidebarFunc;