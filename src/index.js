function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "🌸",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e4ac958bd48e349ta3fb01ao2c0ac8cf";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
