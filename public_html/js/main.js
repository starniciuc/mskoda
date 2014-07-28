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

});

function slideChange(args) {

	$('.selectors .item').removeClass('selected');
	$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}