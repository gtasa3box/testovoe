import './index.scss';

$('.carusel').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow:"<img class='a-left control-c prev slick-prev' src='static/arrow-prev.png'>",
	nextArrow:"<img class='a-right control-c next slick-next' src='static/arrow-next.png'>",
	responsive: [
		{
		breakpoint: 1051,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
			arrows: false,
			infinite: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			arrows: false,
			slidesToScroll: 2
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			arrows: false,
			slidesToScroll: 1
		}
		},
		{
		breakpoint: 375,
		settings: {
			slidesToShow: 1,
			arrows: false,
			slidesToScroll: 1
		}
		}
	]
	});

$('.js-nav-icon').click(function(){
	$('.js-nav-icon, .js-dropdown-nav').toggleClass('active2');
})
console.log('Boilerplate is working!');