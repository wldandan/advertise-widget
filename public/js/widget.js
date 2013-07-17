$(function() {

    $(".navItem").on('click', function(e){
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');

    })
});