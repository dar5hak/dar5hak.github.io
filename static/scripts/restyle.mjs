import cartwheel from "https://unpkg.com/cartwheel@1.1.0/dist/cartwheel.esm.min.js";

const styles = cartwheel(["default-style", "hacker-style"]);

let currentStyle = styles.nextValue();

function changeStyle() {
  const newStyle = styles.nextValue();
  document.body.classList.replace(currentStyle, newStyle);
  currentStyle = newStyle;
}

document.querySelector(".buttons").classList.remove("is-hidden");

document.querySelector("#lucky").addEventListener("click", changeStyle);

document.addEventListener("turbolinks:before-render", (event) => {
  const { newBody } = event.data;
  newBody.classList.add(currentStyle);

  const buttons = newBody.querySelector(".buttons");
  if (buttons) buttons.classList.remove("is-hidden");

  const lucky = newBody.querySelector("#lucky");
  if (lucky) lucky.addEventListener("click", changeStyle);
});
