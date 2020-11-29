
let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"],
   btnSt = document.querySelector('.reset'),
   wrapper = document.querySelector('.wrapper'),
   div = document.querySelector('.word'),
   life = document.querySelector('.life'),
   board = document.querySelector('.gallows__keyboard'),
   key_buttons = document.querySelectorAll(".key"),
   modalWindow = document.querySelector(".window"),
   modalTxt = document.querySelector(".window__txt"),
   btnNx = document.querySelector('.next'),
   btnWindow = document.querySelector('.window__reset');

function generatorWord(arrWord, ind) {
   btnNx.classList.remove('window_str');
   key_buttons.forEach((e) => {
      e.classList.remove('vibration', "delete");
   });

   arrWord.forEach(function (item, i, arr) {
      div.insertAdjacentHTML("afterBegin", `<div class="
         letter-cont none"><div class="letter">`);
      let letter = document.querySelector('.letter');
      letter.insertAdjacentHTML("afterBegin", arr[arr.length - i - 1]);
      div.insertAdjacentHTML("afterBegin", `</div></div>`);
   });

   let letters = document.querySelectorAll('.letter');
   function gret(e) {
      if (arrWord.includes(e.target.textContent)) {
         e.target.classList.add('delete');
         for (let i in arrWord) {
            if (arrWord[i] === e.target.textContent) {
               letters[i].classList.add('letters_str');
            }
         }
      } else {
         e.target.classList.add('vibration');
         ind--;
         life.innerHTML = ind;
         if (ind == 0) {
            modalTxt.innerHTML = "Вы проиграли"
            modalWindow.classList.add('window_str');
         }
      }
      let press = document.querySelectorAll(".letters_str");
      console.log(press.length)
      console.log(arrWord.length)
      if (press.length == arrWord.length) {
         btnNx.classList.add('window_str');
      }
   }
   key_buttons.forEach((element) => {
      element.onclick = gret;
   });

}

function funBtn() {
   let index = 0,
      lifeInd = 4,
      arr2 = [],
      arr3 = [];

   life.innerHTML = lifeInd;
   btnSt.classList.toggle('startbtn');
   board.classList.toggle('start');
   wrapper.classList.toggle('start');
   modalWindow.classList.remove('window_str');
   btnNx.classList.remove('window_str');
   div.innerHTML = '';

   for (let i = 0; i < words.length; i++) {
      word2 = Math.floor(Math.random() * words.length);
      if (arr2.indexOf(word2) == -1) {
         arr2.push(word2);
         arr3[word2] = words[i];
      } else {
         i--;
      }
   }
   let arrWord = arr3[0].split('');

   generatorWord(arrWord, lifeInd);

   btnNx.onclick = () => {
      div.innerHTML = '';
      if (index < words.length - 1) {
         index++;
         arrWord = arr3[index].split('');
      }
      else {
         modalTxt.innerHTML = "Вы выграли"
         modalWindow.classList.add('window_str');
      }
      generatorWord(arrWord);
   };
}

btnSt.addEventListener("click", funBtn);
btnWindow.addEventListener("click", funBtn);