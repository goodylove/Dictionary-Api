// decleration of variables
const wrapper = document.querySelector(".wrapper");
const search = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");
const infoText = document.querySelector(".info-text");
const unList = document.querySelector(".unlist");
const word = document.querySelector(".word");
const details = document.querySelector(".detials");
const content = document.querySelector(".content");
const wordMeaning = document.querySelector(".meaning");
const synonmys = document.querySelector(".synonmys");
const volumePlay = document.querySelector(".play-audio");
let pronounciation = new Audio();
const wordExample = document.querySelector(".example");

// data function
function data(result, word) {
  if (result.title) {
    infoText.innerHTML = `can't find the meaning of "${word}" please try to search for anotehr word.`;
  } else {
    console.log(result);

    wrapper.classList.add("active");

    let definitions = result[0].meanings[0].definitions[2];

    document.querySelector(".word-p").innerHTML = result[0].word;

    document.querySelector(".phonetic").innerHTML = result[0].phonetic;
    if (definitions) {
      wordMeaning.innerHTML = "";
    } else {
      wordMeaning.innerHTML = definitions.definition;
    }
    if (definitions.example) {
      wordExample.innerHTML = "";
    } else {
      wordExample.innerHTML = definitions.example;
    }

    document.querySelector(".partOf").innerHTML =
      result[0].meanings[0].partOfSpeech;
    pronounciation.src = result[0].phonetics[2].audio;

    // audioTrans = new SpeechSynthesisUtterance(result[0].word);
  }
}

// fetch api function
function fetchApi(word) {
  infoText.innerHTML = `searching the meaning of "${word}"`;
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      data(result, word);
    });
}

searchInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value) {
    fetchApi(e.target.value);
  }
});
volumePlay.addEventListener("click", () => {
  pronounciation.play();
});
