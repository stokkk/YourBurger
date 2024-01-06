var header = document.getElementById('header');
if (window.innerWidth <= 1150) {
    if (!header.classList.contains("burger__active")) {
        header.classList.add("burger__active")
        activateBurgerMenu(header);
    }
} 

window.addEventListener('resize', event => {
    var header = document.getElementById('header');
    if (window.innerWidth <= 1150) {
        if (!header.classList.contains("burger__active")) {
            header.classList.add("burger__active")
            console.log(window.innerWidth, window.innerHeight);
            activateBurgerMenu(header);
        }
    } else {
        if (header.classList.contains("burger__active")) {
            header.classList.remove("burger__active")
            deactivateBurgerMenu(header);
        }
    }
}, false);


function activateBurgerMenu(header) {
    // header (
    //     top__burger (burger_menu, logo, profile__bar)
    //                menu__bar (catalog
    //                 contacts__block
    //                )
    burgerMenu = header.getElementsByClassName('burger__menu')[0];
    menubar = header.getElementsByClassName('menu__bar')[0];
    menubar.classList.remove
    logo = menubar.getElementsByClassName('logo')[0];
    profileBar = header.getElementsByClassName('profile__bar')[0];
    

    var topBurger = document.createElement("div");
    topBurger.classList.add("top__burger");
    [burgerMenu, logo, profileBar].forEach( function(e) {
        topBurger.appendChild(e);
    }) 
    header.insertBefore(topBurger, menubar);
    console.log(topBurger);
}

function deactivateBurgerMenu(header) {

}