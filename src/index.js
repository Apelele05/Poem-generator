function displayPoem(response) {
  console.log("generated poem");

  new Typewriter(document.querySelector("#poem"), {
    strings: [response.data.answer],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "fo68et34d0e7d6af2ae13cd3f76c33b0";

  let prompt = `Generate a poem about ${instructionsInput.value}.`;
  let context =
    "You are a coding Poem expert and love to write short poems. Your mission is to generate a 4-line poem  and separate each line with <br />. Do not include a title. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}<div/>`;

  console.log("generating poem…");
  console.log("Prompt:", prompt);
  console.log("Context:", context);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
