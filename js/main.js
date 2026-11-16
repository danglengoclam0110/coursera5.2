// Extra 2: lọc dự án theo danh mục
document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var projects = document.querySelectorAll(".project");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");

      buttons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");

      projects.forEach(function (p) {
        var show = filter === "all" || p.getAttribute("data-category") === filter;
        p.hidden = !show;
      });
    });
  });
});
