function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  sidebar.classList.toggle("open");
  hamburger.classList.toggle("active");
}

/* Fade hamburger on scroll */
window.addEventListener("scroll", () => {
  const hamburger = document.querySelector(".hamburger");

  if (window.scrollY > 50) {
    hamburger.classList.add("fade");
  } else {
    hamburger.classList.remove("fade");
  }
});
