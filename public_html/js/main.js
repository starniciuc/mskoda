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

if($(".newsSlider")){
  $(".newsSlider").bxSlider({
    controls: false,
    adaptiveHeight: true,
    auto: true
  });
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
var mSlide = " ";
if ($('#sliderModal').length > 0) {
    mSlide = $('.bxslider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        pager: false,
        adaptiveHeight: true,
        oneToOneTouch: true
    });
}
$('#sliderModal').on('shown.bs.modal', function() {
    mSlide.reloadSlider();
});
var slide = " ";
if ($('#sliderModal').length > 0) {
    slide = $('#slider3-pager').bxSlider({
        nextSelector: '#slider-next-top',
        prevSelector: '#slider-prev-top',
        pager: false,
        minSlides: 6,
        maxSlides: 6,
        slideMargin: 10,
        slideWidth: 75,
        adaptiveHeight: true,
        infiniteLoop: false
    });
}

if ($("#slider3-pager li").length <= 6) {

    $("#slider-next-top").hide();
    $("#slider-prev-top").hide();
}
$("#sliderColor").on('shown.bs.collapse', function() {
    slide.reloadSlider();
});

$("#slider3-pager li a").click(function() {
    var img = $(this).data("img");
    $("#imageSlide").attr("src", img);
});

function slideModal(a) {
    $("#sliderModal").modal("show");
    mSlide.goToSlide(a);
}