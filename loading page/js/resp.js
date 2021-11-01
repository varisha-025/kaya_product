AOS.init();
var loader = document.querySelector("#loader")
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu")
const nav = document.querySelector(".navbar")

menu.addEventListener("click", function() {
    nav.classList.toggle("visible");
})
var vis = document.querySelector(".hide");
window.onload = stop();

function stop() {
    console.log("hello")
    loader.style.display = "none";
    vis.style.display = "block";
}
window.addEventListener("load", function() {
    showPopup();

})

function showPopup() {
    const timeLimit = 5
    let i = 0;
    const timer = setInterval(function() {
        i++;
        if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        console.log(i)
    }, 1000);
}


close.addEventListener("click", function() {
    loginPopup.classList.remove("show");
});

const beige = document.querySelector('.beige');
const black = document.querySelector('.black');
const green = document.querySelector('.green');
const fampic = document.querySelector('.family-pic');


beige.addEventListener("click", function() {
    beige.classList.add("active-be");
    fampic.src = "./loading page/img/all-kaya-beige.jpg";
    if (black.classList.contains("active-bl")) {
        black.classList.remove("active-bl")
    } else {
        green.classList.remove("active-gr")
    }

})
green.addEventListener("click", function() {
    green.classList.add("active-gr");
    fampic.src = "./loading page/img/all-kaya-green.jpg";
    if (black.classList.contains("active-bl")) {
        black.classList.remove("active-bl")
    } else {
        beige.classList.remove("active-be")
    }

})
black.addEventListener("click", function() {
    black.classList.add("active-bl");
    fampic.src = "./loading page/img/all-kaya-black.jpg";
    if (green.classList.contains("active-gr")) {
        green.classList.remove("active-gr")
    } else {
        beige.classList.remove("active-be")
    }

})