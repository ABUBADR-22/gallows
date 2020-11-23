
let words = ["ГОНДЖУБАС", "СИГАРА", "ШПАК"],
   btnSt = document.querySelector('.reset');

btnSt.addEventListener("click", () => {
   let word = words[Math.floor(Math.random() * 3)], 
      div = document.querySelector('.fer'),
      key_buttons = document.querySelectorAll(".key"),
      board = document.querySelector('.gallows__keyboard'),
      arrWord = word.split('');
      
   btnSt.classList.toggle('startbtn');
   board.classList.toggle('start');
   div.classList.toggle('start');
   div.innerHTML = '';
   
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