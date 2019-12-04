"use strict"; //строгий режим, показывает ошибки

// var i = 0;
// function move() {
  
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frameme, 10);

//     var text = document.getElementById("hello");
    
//     function frameme() {
      
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
      
//       } else {
        
//         width++;
//         elem.style.width = width + "%";
//         text.innerHTML = width  + "% ready";
//       }
//     }
//   }
// }




// Статус загрузки карточки в слайде
const learnMoreButtons = document.querySelectorAll(".framework-i__button");
const myBars = document.querySelectorAll(".myBar");


for (let i = 0; i < learnMoreButtons.length; i++) {
  learnMoreButtons[i].addEventListener("click", function(){
    let myBarWidth =  0;

    const intervalId = setInterval(function(){
      myBars[i].style.width = `${++myBarWidth}%`;
      
      if (myBarWidth === 100) {
        clearInterval(intervalId);
      }
    }, 50);

  
  })
}
















// Гамбургер

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("opened");
}






