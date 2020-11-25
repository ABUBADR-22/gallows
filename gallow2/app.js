
let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"],
   btnSt = document.querySelector('.reset'),
   btnNx = document.querySelector('.next');

btnSt.addEventListener("click", function fred() {
   let word = words[Math.floor(Math.random() * words.length)],
      div = document.querySelector('.fer'),
      key_buttons = document.querySelectorAll(".key"),
      y = 0;
      board = document.querySelector('.gallows__keyboard'),
      arr2 = [],
      arr3 = [];

   for (let i = 0; i < words.length; i++) {
      word2 = Math.floor(Math.random() * words.length);
      if (arr2.indexOf(word2) == -1) {
         arr2.push(word2);
         arr3[word2] = words[i];
      } else {
         i--;
      }
   }
 key_buttons.forEach((e) => {
      e.classList.remove('vibration', "delete");
   });

   let arrWord = arr3[0].split('');
   function fred(e) {
      arrWord.forEach(function (item, i, arr) {
         div.insertAdjacentHTML("afterBegin", `<div class="
         letter-cont none"><div class="letter">`);
         let letter = document.querySelector('.letter');
         letter.insertAdjacentHTML("afterBegin", arr[arr.length - i - 1]);
         div.insertAdjacentHTML("afterBegin", `</div></div>`);
      });
      console.log(arrWord)
   }
   
   fred(arrWord);

   // btnNx.addEventListener("click", function fred() {
   //    if (y < words.length){
   //       y++;
   //       arrWord = arr3[y].split('');
   //       console.log(arrWord);
   //       fred(arrWord);
         
   //    }
   //    else{
   //       y = -1;
   //    }
   // });

   btnSt.classList.toggle('startbtn');
   board.classList.toggle('start');
   div.classList.toggle('start');
   div.innerHTML = '';

   let letters = document.querySelectorAll('.letter');
   console.log(letters)

   key_buttons.forEach((element) => {
      element.addEventListener("click", function (e) {
         if (arrWord.includes(e.target.textContent)) {
            e.target.classList.add('delete');
            for (let i in arrWord) {
               if (arrWord[i] === e.target.textContent) {
                  letters[i].style.opacity = "1";
               }
            }
         } else {
            e.target.classList.add('vibration');
         }
      });
   });
})