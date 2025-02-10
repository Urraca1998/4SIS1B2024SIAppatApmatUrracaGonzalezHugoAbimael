jQuery(document).ready(function ($) {
    $('.container').on('mouseenter', function () {
        $(this).find('.card').stop(true, true).animate({
            transform: 'translateY(-90px)'
        }, 'slow');
    }).on('mouseleave', function () {
        $(this).find('.card').stop(true, true).animate({
            transform: 'translateY(0px)'
        }, 'slow');
    });
});
