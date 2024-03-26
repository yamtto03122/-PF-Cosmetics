
$(window).load(function(){
    if($('#header-menu > .sub-menu').length)
    $('#header-menu > .sub-menu').hide();

    $('.main-menu').mouseover(function(){
        $('.sub-menu').slideDown();

    });
    $('.main-menu').mouseleave(function(){
        $('.sub-menu').slideUp();
    });
});