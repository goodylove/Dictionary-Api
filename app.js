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
const syn = document.querySelector(".synonmys");
const list = document.querySelector(".list");
const wordExample = document.querySelector(".meaning");

// data function
function data(result, word) {
  if (result.title) {
    infoText.innerHTML = `can't find the meaning of  "${word}" please try to search for anotehr word.`;
  } else {
    console.log(result);
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
