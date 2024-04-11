const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
const linkEl = headerEl.querySelectorAll("a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

linkEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    headerEl.classList.toggle("nav-open");
  });
});
