
let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"],
   btnSt = document.querySelector('.reset'),
   btnNx = document.querySelector('.next');



btnSt.addEventListener("click", function () {
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
      function gret(e) {
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
      }
      key_buttons.forEach((element) => {
         element.onclick = gret;
      });
   }
   
   fred(arrWord);

   btnNx.onclick = () =>{
     div.innerHTML = '';
      if (y < words.length - 1) {
         y++;
         arrWord = arr3[y].split('');
      }
      else {
         alert('Вы выграли')
         y = 0;
         arrWord = arr3[y].split('');
      }
      fred(arrWord);
   };
});
