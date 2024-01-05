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
