let words = ["НАСВАЙ", "ВЕЛОСИПЕД", "ГОНДЖУБАС"];
let letters = document.querySelectorAll(".letter");
let wordHTML = document.querySelectorAll(".letter-cont");
let countMistakes
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let word;
window.onload = () => {
  word = words[getRandomInt(0, words.length)];
  for (let i = 0; i < word.length; i++) {
    wordHTML[i].classList.remove("none");
    letters[i].textContent = word[i]
  }
};
let countMistakes = 0
document.querySelectorAll(".key").forEach((element) => {
  element.addEventListener("click", function (e) {
    if (b.includes(e.target.textContent)) {
      console.log(b.includes(e.target.textContent));
      e.target.classList.add("delete");
      for (let i in b) {
        if (b[i] === e.target.textContent) {
          letters[i].style.opacity = "1";
        }
      }
    } else {
      e.target.classList.add("vibration");
      countMistakes++
    }
  });
});
