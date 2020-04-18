let menuKnop = document.querySelector(".burger");
let navMenu = document.querySelector("nav");
let body = document.querySelector("body");

menuKnop.addEventListener('click',function() {
    menuKnop.classList.toggle('open');
    navMenu.classList.toggle("onzichtbaar");
    body.classList.toggle("no-overflow");
});
