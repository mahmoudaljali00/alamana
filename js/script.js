
const menu = document.getElementById("menu");
const action = document.getElementById("actions");
const goend1 = document.getElementById("go1");
const goend2 = document.getElementById("go2");
const goend3 = document.getElementById("go3");


menu.addEventListener("click", handLe1);

function handLe1() {
    menu.classList.toggle("active");
    action.classList.toggle("active");

}

goend1.addEventListener("click", handLe2);

function handLe2() {
    menu.classList.toggle("active");
    action.classList.toggle("active");

}

goend2.addEventListener("click", handLe3);

function handLe3() {
    menu.classList.toggle("active");
    action.classList.toggle("active");

}

goend3.addEventListener("click", handLe4);

function handLe4() {
    menu.classList.toggle("active");
    action.classList.toggle("active");

}