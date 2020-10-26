import cartwheel from "https://unpkg.com/cartwheel@1.1.0/dist/cartwheel.esm.min.js";

const styles = cartwheel(["default-style", "hacker-style"]);

let currentStyle = styles.nextValue();

document.querySelector(".buttons").classList.remove("is-hidden");

document.querySelector("#lucky").addEventListener("click", () => {
  const newStyle = styles.nextValue();
  document.body.classList.replace(currentStyle, newStyle);
  currentStyle = newStyle;
});

document.addEventListener("turbolinks:before-render", (event) => {
  event.data.newBody.classList.add(currentStyle);
});
