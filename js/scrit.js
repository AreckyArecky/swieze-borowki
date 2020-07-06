// mobile menu dropdown

// var menuTrigger = document.querySelector(".trigger i");
// var menuTriggerX = document.querySelector(".triggerX i");
var triggerWrap = document.querySelector(".main .triggerWrap");
var menuElements = document.querySelectorAll(".main ul li");

function menuShow() {
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.toggle('menuShow');



    }
    // menuTrigger.classList.add('triggerHide');
    // menuTriggerX.classList.add('triggerShow');
    // menuTrigger.classList.remove('triggerShow');
    // menuTriggerX.classList.remove('triggerHide');
    triggerWrap.classList.toggle('triggerSwap');
}

function menuHide() {
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.toggle('menuShow');
    }
    // menuTriggerX.classList.add('triggerHide');
    // menuTrigger.classList.add('triggerShow');
    // menuTrigger.classList.remove('triggerHide');
    // menuTriggerX.classList.remove('triggerShow');
    triggerWrap.classList.toggle('triggerSwap');
}
// menuTrigger.addEventListener('click', menuShow);
// menuTriggerX.addEventListener('click', menuHide);
triggerWrap.addEventListener('click', menuShow);