//Needed so carousel can activate when resizing window or rotating device
$(window).on('resize orientationchange', function () {
    $('.images').slick('resize');
});
//Carousel settings
$('.images').slick({
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
            },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                accessibility: true,
                swipe: true,
                swipeToSlide: true,
                touchMove: true,
                dots: true,
                focusOnSelect: true,
                centerMode: true,
                slidesToShow: 1,
            }
            }
        ]
});
