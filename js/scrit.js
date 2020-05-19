// mobile menu dropdown

const menuTrigger = document.querySelector(".trigger i");
var menuElements = document.querySelectorAll(".main ul li");

function menuActive() {
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.toggle('menuActive');

    }

}

menuTrigger.addEventListener('click', menuActive);