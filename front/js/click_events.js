// модуль обработки событий пользователя

// обработка открытия каталога меню
var catalogTitle = document.getElementsByClassName("catalog__title")[0];
catalogTitle.onclick = function () { catalogOnOff(this);}


// обработка открытия/закрытия бургер меню
var burgerMenu = document.getElementsByClassName("burger__menu")[0];
burgerMenu.onclick = function () {burgerOnOff(this);}


function catalogOnOff(e) {
    // обработка открытия каталога меню
    var catalog = e.parentNode;
    var arrow = e.getElementsByClassName('arrow')[0];
    if (catalog.parentNode.classList.contains('_active')) {
        catalog.parentNode.classList.remove('_active');
        if (arrow.classList.contains("up")) {
                arrow.classList.remove("up");
                arrow.classList.add("down");
        }
    } else {
        catalog.parentNode.classList.add('_active');
        if (arrow.classList.contains("down")) {
                arrow.classList.remove("down");
                arrow.classList.add("up");
        }
    }
}


function burgerOnOff(e) {
    // обработка открытия/закрытия бургер меню
    
    var menubar = document.getElementsByClassName("menu__bar")[0];
    if (menubar.classList.contains("burger__on")) {
        menubar.classList.remove("burger__on");
        menubar.classList.add("burger__off");
        e.classList.add("off");
        e.classList.remove("on");
        var catalog = menubar.getElementsByClassName("catalog__wrapp")[0]; // закрывается каталог при закрытии меню бургера
        var _catalogTitle = catalog.getElementsByClassName("catalog__title")[0];
        if (catalog.classList.contains("_active")) { catalogOnOff(_catalogTitle); }
    } else {
        menubar.classList.remove("burger__off");
        menubar.classList.add("burger__on");
        e.classList.add("on");
        e.classList.remove("off");
    }
}
