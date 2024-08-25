let tooltips = [].slice.call(document.querySelectorAll(".has-tooltip"));
tooltips.forEach(function (a) {
  let tooltipSpan = a.querySelector(".tooltiptext");
  a.addEventListener("click", function () {
    tooltipSpan.classList.toggle("active");
  });
});
