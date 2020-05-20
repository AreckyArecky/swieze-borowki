// mobile menu dropdown

var menuTrigger = document.querySelector(".trigger i");
var menuTriggerX = document.querySelector(".triggerX i");
var menuElements = document.querySelectorAll(".main ul li");

function menuShow() {
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.toggle('menuShow');



    }
    menuTrigger.classList.add('triggerHide');
    menuTriggerX.classList.add('triggerShow');
}

function menuHide() {
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.toggle('menuShow');
    }
    menuTrigger.classList.remove('triggerHide');
    menuTriggerX.classList.remove('triggerShow');
    menuTrigger.classList.add('triggerShow');
    menuTriggerX.classList.add('triggerHide');
}
menuTrigger.addEventListener('click', menuShow);
menuTriggerX.addEventListener('click', menuHide);