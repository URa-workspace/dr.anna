(()=>{"use strict";class e{constructor(e,t){this.$el=document.querySelector(e),this.options=t,this.selectedId=t.selectedId,this.#e(),this.#t()}#e(){const{data:e,placeholder:t}=this.options;this.$el.classList.add("select"),this.$el.innerHTML=((e=[],t,s)=>{let n=t??"мова";const l=e.map((e=>{let t="";return e.id===s&&(n=e.value,t="selected"),`\n\t\t<li class='select__item ${t}' data-type="item" data-id="${e.id}">${e.value}</li>`}));return`\n\t\t<div class="select__backdrop" data-type="backdrop"></div>\n\t\t<div class="select__input" data-type="input">\n\t\t\t<span data-type="value">${n}</span>\n\t\t\t<span class="select__arrow" data-type="arrow"></span>\n\t\t</div>\n\t\t<div class="select__dropdown">\n\t\t\t<ul class="select__list">\n\t\t\t${l.join("")}\n\t\t\t</ul>\n\t\t</div>`})(e,t,this.selectedId)}#t(){this.clickHandler=this.clickHandler.bind(this),this.$el.addEventListener("click",this.clickHandler),this.$value=this.$el.querySelector('[data-type="value"]')}clickHandler(e){const{type:t}=e.target.dataset;if("input"===t||"arrow"===t||"value"===t)this.toggle();else if("item"===t){const t=e.target.dataset.id;this.select(t)}else"backdrop"===t&&this.close()}get isOpen(){return this.$el.classList.contains("open")}get current(){return this.options.data.find((e=>e.id===this.selectedId))}select(e){this.selectedId=e,this.$value.textContent=this.current.value,this.$el.querySelectorAll('[data-type="item"]').forEach((e=>{e.classList.remove("selected")})),this.$el.querySelector(`[data-id="${e}"]`).classList.add("selected"),this.options.onSelect&&this.options.onSelect(this.current),this.close()}toggle(){this.isOpen?this.close():this.open()}open(){this.$el.classList.add("open")}close(){this.$el.classList.remove("open")}destroy(){this.$el.removeEventListener("click",this.clickHandler),this.$el.innerHTML=""}}const t=document.querySelectorAll("*[data-active-page]"),s=document.querySelector("body[data-page]");t.forEach((e=>{e.dataset.activePage===s.dataset.page&&e.classList.add("active")}));const n=t,l=(document.querySelector(".sidebar__close-btn > span"),document.getElementById("sidebar")),c=document.querySelectorAll("._sidebar-show"),o=function(){l.classList.add("active")};!function(){const e=document.querySelectorAll(".nav-btn"),t=document.querySelector(".mobile-nav"),s=document.querySelector(".nav-icon"),n=document.querySelectorAll(".open-submenu");function l(){t.classList.toggle("mobile-nav--open"),s.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}n.length>0&&n.forEach((e=>e.addEventListener("click",(()=>{e.classList.toggle("active"),e.parentElement.classList.toggle("active"),e.parentElement.querySelector("ul.mob-submenu").classList.toggle("active")})))),e.forEach((e=>{e.onclick=function(){l()}})),t.addEventListener("click",(e=>{e.target.classList.contains("mobile-nav--open")&&l()}))}(),window.addEventListener("scroll",(function(){console.log(window.scrollY);const e=document.getElementById("stickyHeader");window.scrollY>350?e.classList.add("header-fixed"):e.classList.remove("header-fixed")})),document.querySelectorAll("a[data-anchor]").forEach((e=>{var t;(t=e).addEventListener("click",(e=>{e.preventDefault();const s=document.querySelector(".header__wrapper").offsetHeight,n=document.getElementById(t.dataset.anchor);let l;l=document.body.getBoundingClientRect().width>992?120:100,window.scrollTo({top:n.getBoundingClientRect().top-s+window.scrollY-l,behavior:"smooth"})}))}));const a=document.querySelectorAll(".no-click");a.length>0&&a.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),e.target.href="/"})))),c.length>0&&(c.forEach((e=>{e.addEventListener("click",o)})),l.addEventListener("click",(e=>{e.target.classList.contains("_close")&&l.classList.remove("active")}))),function(){const e=document.querySelector(".scroll-up"),t=document.querySelector(".scroll-up svg path"),s=t.getTotalLength();t.style.strokeDasharray=`${s} ${s}`,t.style.transition="stroke-dashoffset 20ms";const n=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",(()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,l=s-n()*s/e;t.style.strokeDashoffset=l})(),n()>100?e.classList.add("active"):e.classList.remove("active")})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}(),function(){let t=window.location.pathname.includes("/ru")?"ru":"ua";const s=new e("#selectLang",{placeholder:"мова",selectedId:t,data:[{id:"ua",value:"UA"},{id:"ru",value:"RU"}],onSelect(e){return"RU"===e.value?!window.location.pathname.includes("/ru")&&(window.location.pathname="ru"+window.location.pathname,this.selectedId="ru"):!!window.location.pathname.includes("/ru")&&(window.location.pathname=window.location.pathname.substring(3),this.selectedId="ua")}});window.s=s}(),n()})();