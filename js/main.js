const menuElement = document.querySelector(".right-side");
const closeIcon = document.querySelector(".close-icon");
const hiddenNavBar = document.getElementsByClassName("hidden-navbar").item(0);

console.log(window.innerWidth);
if (window.innerWidth === 767 || window.innerWidth < 767) {
}

menuElement.addEventListener("click", function (e) {
  if (window.innerWidth === 767 || window.innerWidth < 767) {
    hiddenNavBar.style.display = "flex";
  }
});

closeIcon.addEventListener("click", () => {
  if (window.innerWidth === 767 || window.innerWidth < 767) {
    hiddenNavBar.style.display = "none";
  }
});
