import 'https://cdn.skypack.dev/@hotwired/turbo';

document.addEventListener("turbo:load", function () {
  let activeElement;

  function focusActiveElement() {
    if (activeElement) {
      activeElement.focus();
    }
  }

  const autofocus = document.querySelector("[data-autofocus]");
  if (autofocus) {
    activeElement = autofocus;
    focusActiveElement();
  }

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      focusActiveElement();
    }
  });

  const focusable = document.querySelectorAll("[data-focusable]");

  focusable.forEach(function (element, index) {
    element.addEventListener("keydown", function (event) {
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowRight" ||
        event.key === "j" ||
        event.key === "l"
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
        event.key === "h"
      ) {
        event.preventDefault();
        if (index === 0) {
          activeElement = focusable[focusable.length - 1];
        } else {
          activeElement = focusable[index - 1];
        }
      }
      focusActiveElement();
    });
  });
});
