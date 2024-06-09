// acordion
const acordionTitles = document.querySelectorAll('[data-acordion="title"]');
const acordionContents = document.querySelectorAll('[data-acordion="content"]');
const showBtn = document.querySelector(".contents__show");
const closeBtn = document.querySelector(".contents__close");

const acordion = function () {
  if (acordionTitles.length > 0) {
      acordionTitles.forEach((title) =>
        title.addEventListener("click", () => {
          const activeContent = document.querySelector("#" + title.dataset.tab);

          if (activeContent.classList.contains("active")) {
            activeContent.classList.remove("active");
            title.classList.remove("active");
            activeContent.style.maxHeight = 0;
            showBtn ? (showBtn.style.display = "inline-block") : false;
            closeBtn ? (closeBtn.style.display = "none") : false;
          } else {
            acordionContents.forEach((c) => {
              c.classList.remove("active");
              c.style.maxHeight = 0;
            });
            acordionTitles.forEach((t) => t.classList.remove("active"));

            activeContent.classList.add("active");
            showBtn ? showBtn.style.display = "none" : false
            closeBtn ? (closeBtn.style.display = "inline-block") : false;
            activeContent.style.maxHeight = activeContent.scrollHeight + "px";
            title.classList.add("active");
          }
        })
      );

      const tabContentActive = document.querySelector("#tab-1");

      if (document.querySelector('[data-tab="tab-1"]')) {
        document.querySelector('[data-tab="tab-1"]').classList.add("active");
      } else false;
      if (tabContentActive) {
        tabContentActive.classList.add("active");
        tabContentActive.style.maxHeight = tabContentActive.scrollHeight + "px";
      } else false;
  }
}

export default acordion();