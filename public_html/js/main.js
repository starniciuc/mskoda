$(document).ready(function() {

	$('.skodaSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: true,
		navNextSelector: $('.slideRight'),
		navPrevSelector: $('.slideLeft'),
		navSlideSelector: $('.selectors .item'),
		onSlideChange: slideChange,
		infiniteSlider: true,
		responsiveSlides: true
	});

	$('.newsSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: true,
		navSlideSelector: $('.selectorsNews .item'),
		onSlideChange: slideChangeNews,
		infiniteSlider: true,
		responsiveSlides: true
	});

	$('.linkToSlide').iosSlider({
		snapToChildren: true,
		snapSlideCenter: true,
		infiniteSlider: true
	});
});


function slideChange(args) {

	$('.linkToSlide').iosSlider('goToSlide', args.currentSlideNumber);

	$('.selectors .item').removeClass('selected');
	$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}
function slideChangeNews(args) {

	$('.selectorsNews .item').removeClass('selected');
	$('.selectorsNews .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}
$(".changeCollapse").click(function() {
	var mybtn = $(this);
	var par = mybtn.parents("li").children(".collapse");
	mybtn.parents("li").toggleClass("open-collaps");
	par.collapse("show");
	par.on('shown.bs.collapse', function() {
		mybtn.click(function() {
			par.collapse('hide');
		});
	});
	par.on("hidden.bs.collapse", function() {

	});
});
$(".hide-collapse").click(function() {
	var mybtn = $(this);
	var par = mybtn.parents(".collapse");
	par.collapse("hide");
	mybtn.parents("li").toggleClass("open-collaps");
});
$(function () {


      // Slideshow 2
      $("#slider2").responsiveSlides({
        auto: false,
        manualControls: '#slider3-pager',
        speed: 1
      });

    });