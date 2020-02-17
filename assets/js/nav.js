/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.navbar').addClass("navbar-dark");
        $('.navbar').addClass("bg-dark");

    }else{
        $('.navbar').removeClass("scrolled");
        $('.navbar').removeClass("navbar-dark");
        $('.navbar').removeClass("bg-dark");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}