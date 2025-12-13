const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");

function toggleMenu() {
  sidebar.classList.toggle("open");
  hamburger.classList.toggle("is-active");
  hamburger.classList.remove("is-faded");
}

window.addEventListener("scroll", () => {
  if (!sidebar.classList.contains("open")) {
    if (window.scrollY > 60) {
      hamburger.classList.add("is-faded");
    } else {
      hamburger.classList.remove("is-faded");
    }
  }
});
