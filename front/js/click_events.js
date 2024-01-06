// модуль обработки событий пользователя

function catalog_onclick(e) {
    if (e.parentNode.classList.contains('_active')) {
    } else {
        e.parentNode.classList.add('_active');
        e.parentNode.setAttribute('tabindex', 0);
        e.parentNode.focus();
        e.lastElementChild.setAttribute('src', 'img/krestik.svg');
        
    }
}

function catalog_onblur(e) {
    if(e.classList.contains('_active')) {
        e.removeAttribute('tabindex');
        e.classList.remove('_active');
        e.firstElementChild.lastElementChild.setAttribute('src', 'img/arrow.svg');
    }
}


function burgerOnOff(e) {
    var menubar = document.getElementsByClassName("menu__bar")[0];
    if (menubar.classList.contains("burger__on")) {
        menubar.classList.remove("burger__on");
        menubar.classList.add("burger__off");
    } else {
        menubar.classList.remove("burger__off");
        menubar.classList.add("burger__on");
    }
}
