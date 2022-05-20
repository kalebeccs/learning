$('.menu').on('show.bs.collapse', function () {
    $('.chamada').css('transform', 'translate(-50%, 10%)')
});

$('.menu').on('hide.bs.collapse', function () {
    $('.chamada').css('transform', 'translate(-50%, -50%)')
});