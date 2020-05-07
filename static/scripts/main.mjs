document.addEventListener("turbolinks:load", function () {
  let activeElement;

  const autofocus = document.querySelector("[data-autofocus]");
  autofocus.focus();
  activeElement = autofocus;

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "Tab"
    ) {
      activeElement.focus();
    }
  });

  const focusable = document.querySelectorAll("[data-focusable]");

  focusable.forEach(function (element, index) {
    element.addEventListener("keydown", function (event) {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowRight" ||
        event.key === "j" ||
        event.key === "l" ||
        (!event.shiftKey && event.key === "Tab")
      ) {
        event.preventDefault();
        if (index === focusable.length - 1) {
          activeElement = focusable[0];
        } else {
          activeElement = focusable[index + 1];
        }
      } else if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft" ||
        event.key === "k" ||
        event.key === "h" ||
        (event.shiftKey && event.key === "Tab")
      ) {
        event.preventDefault();
        if (index === 0) {
          activeElement = focusable[focusable.length - 1];
        } else {
          activeElement = focusable[index - 1];
        }
      }
      activeElement.focus();
    });
  });
});
