/* OS Dental Design · site script · FIRST DRAFT
   1. The mobile menu.
   2. The forms: not connected yet (PLAN.md, Phase 5). Submitting shows a
      message instead of sending anything. Wire each form up here later. */

(function () {
  "use strict";

  /* 1. Mobile menu ------------------------------------------------------- */
  var root = document.documentElement;
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    root.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    // Close the menu after following a link to a section on the same page
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }

  /* 2. Forms (not connected) --------------------------------------------- */
  var forms = document.querySelectorAll("form[data-form]");
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener("submit", function (e) {
      // TODO(connect): send the form here once the data handling is agreed.
      e.preventDefault();
      var status = form.querySelector(".form__status");
      if (status) {
        status.hidden = false;
        status.focus();
      }
    });
  });
})();
