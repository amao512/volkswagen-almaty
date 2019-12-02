// Самый первый слайдер
$('.first-slider .header-slider').slick({
	slidesToShow: 1,
	dots: false,
	prevArrow: '.slider__prev',
	nextArrow: '.slider__next',
	autoplay: true,
	autoplaySpeed: 5000
})

// Слайдер под заголовкой "Модели Volkswagen"
$(".products").slick({
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '.products__prev',
	nextArrow: '.products__next',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// Слайдер под "Акции и спецпредложения"
 $(".stock").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	centerMode: true,
	infinite: true,
	prevArrow: '.stock__prev',
	nextArrow: '.stock__next',
	responsive: [
		{
			breakpoint: 770,
			settings: {
				centerPadding: '10px',
			}
		}
	]
});

// Слайдер новостей
$('.news__block').slick({
	dots: true,
	slidesToShow: 3,
	arrows: false,
})

// Слайдер "Официальный дилер Volkswagen"
$('.dealer').slick({
	dots: true,
	infinite: true,
	speed: 500,
	cssEase: 'linear',
	arrows: false,
});
