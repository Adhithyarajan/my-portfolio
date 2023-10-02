document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const closeButton = document.getElementById("closeButton");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
    menuToggle.classList.toggle("hidden");
  }

  menuToggle.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  const sections = document.querySelectorAll("main");

  const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__zoomIn");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
