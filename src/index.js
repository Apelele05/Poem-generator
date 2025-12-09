function generatePoem(event) {
  event.preventDefault();

  new Typewriter(document.querySelector("#poem"), {
    strings:
      " In lines of code we often find, A quiet peace within the mind. A world created bit by bit, Where dreams and logic cleanly fit",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
