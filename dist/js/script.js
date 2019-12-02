// Маска для вывода телефона в input
$(document).ready(function(){
	$('.phone').mask("+7 (999) 999-99-99");
})

// Якорь на вверх
let yak = document.querySelector('#yak')

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// // Открытие бругер меню на мобильных экранах
let bgMenu = document.querySelector('.mob-menu__burger');
let mobileMenu = document.querySelector('.header__mobile-menu');
let content = document.querySelector('.content');

const openMenu = () => {
	mobileMenu.style.display = 'block';
}

const closeMenu = () => {
	mobileMenu.style.display = 'none';
}

bgMenu.addEventListener('mouseenter', openMenu);
mobileMenu.addEventListener('mouseenter', openMenu);
mobileMenu.addEventListener('mouseleave', closeMenu);
content.addEventListener('mouseleave', closeMenu);
