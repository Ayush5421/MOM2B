const icon = document.querySelector(".loading i");
const closeBtn = document.querySelector(".close-btn");
const container = document.querySelector(".container");

icon.addEventListener("click", () => {
  container.classList.add("change");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("change");
});
