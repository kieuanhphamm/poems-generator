function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "this is a poem",
    autoStart: true,
    delay: 60,
    cursor: "🌸",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
