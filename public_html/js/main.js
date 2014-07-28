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