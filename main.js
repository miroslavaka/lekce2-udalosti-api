// tady je místo pro náš program

let para = document.querySelector('p');
para.classList.add('para');
para.style.fontSize = "16px";

//Funkce ktera stucni a odtucni text
function tucne() {
    //console.log('funguje');
    para.style.fontWeight = "bold";
}

function normalne() {
    para.style.fontWeight = "normal";
}

//Funkce ktera zmeni text na cerveny
function cerveny() {
    para.classList.toggle('cerveny');
}

/**
 * Funkce ktera zvacsi text
 * 
 * @param {int} x 
 */

let y = 16;

function zvacsi(x) {
    y = y + 1;
    para.style.fontSize = y + "px";
}

let audioElement = document.querySelector("#js-audio");

// Funkce ktera prehraje predany prvek
function prehraj() {
    audioElement.play();
}

//Funkce ktera zastavi predany prvek
function zastav() {
    audioElement.pause();
}

//Funkce ktera nastavi zvuk na 0
function nastavzvuk1() {
    audioElement.volume = 0;
}

//Funkce ktera nastavi zvuk na 0.5
function nastavzvuk2() {
    audioElement.volume = 0.5;
}

//Funkce ktera nastavi zvuk na 1
function nastavzvuk3() {
    audioElement.volume = 1;
}

//Funkce ktera nastavi zvuk na zaciatok
function nastavnazaciatok() {
    audioElement.currentTime = 0;
}