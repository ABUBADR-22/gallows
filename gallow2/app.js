
let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"],
   btnSt = document.querySelector('.reset'),
   btnNx = document.querySelector('.next');

btnSt.addEventListener("click", function fred() {
   let div = document.querySelector('.fer'),
      key_buttons = document.querySelectorAll(".key"),
      y = 0,
      board = document.querySelector('.gallows__keyboard'),
      arr2 = [],
      arr3 = [];

   btnSt.classList.toggle('startbtn');
   board.classList.toggle('start');
   div.classList.toggle('start');
   btnNx.classList.toggle('start');
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

   function fred(el) {
      key_buttons.forEach((e) => {
         e.classList.remove('vibration', "delete");
      });

      el.forEach(function (item, i, arr) {
         div.insertAdjacentHTML("afterBegin", `<div class="
         letter-cont none"><div class="letter">`);
         let letter = document.querySelector('.letter');
         letter.insertAdjacentHTML("afterBegin", arr[arr.length - i - 1]);
         div.insertAdjacentHTML("afterBegin", `</div></div>`);
      });

      let letters = document.querySelectorAll('.letter');

      key_buttons.forEach((element) => {
         element.addEventListener("click", function (e) {
            
            console.log(e.target.textContent);

            if (el.includes(e.target.textContent)) {
               e.target.classList.add('delete');
               for (let i in el) {
                  if (el[i] === e.target.textContent) {
                     letters[i].style.opacity = "1";
                  }
               }
            } else {
               e.target.classList.add('vibration');
            }
         });
      });
   }
   fred(arrWord);

   btnNx.addEventListener("click", function fredded() {
      if (y < words.length - 1) {
         y++;
         div.innerHTML = '';
         arrWord = arr3[y].split('');
         console.log(arrWord);
         fred(arrWord);
      }
      else {
         y = -1;
      }
   });


})