const menu = document.getElementById("menu");
const navbar = document.querySelector(".header-navbar");
const titles = document.querySelectorAll(".titles");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

function activeTitle(n) {
  for (title of titles) title.classList.remove("active");
  titles[n].classList.add("active");
}

for (let j = 0; j < titles.length; j++) {
  titles[j].addEventListener("click", function () {
    activeTitle(j);
  });
}

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY);
  const scrollY = document.querySelector(".scroll-top");
  scrollY.classList.toggle("show-scroll", window.scrollY >= 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
