let currentStyle = "default";

document.querySelector(".buttons").classList.remove("is-hidden");

document.querySelector("#lucky").addEventListener("click", () => {
  currentStyle = "hacker-style";
  document.body.classList.add(`${currentStyle}`);
});

document.addEventListener("turbolinks:before-render", (event) => {
  event.data.newBody.classList.add(currentStyle);
});
