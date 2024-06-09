import { Select } from "./select-lang.js";

const selectCode = function () {
	let currentId = window.location.pathname.includes("/ru") ? "ru" : "ua";

  const select = new Select("#selectLang", {
    placeholder: "мова",
    selectedId: currentId,
    data: [
      { id: "ua", value: "UA" },
      { id: "ru", value: "RU" },
    ],
    onSelect(item) {
      if (item.value === "RU") {
        if (!window.location.pathname.includes("/ru")) {
          window.location.pathname = "ru" + window.location.pathname;
          return (this.selectedId = "ru");
        } else return false;
      } else {
        if (window.location.pathname.includes("/ru")) {
          window.location.pathname = window.location.pathname.substring(3);
          return (this.selectedId = "ua");
        } else return false;
      }
    },
  });

  window.s = select;
}
export default selectCode;