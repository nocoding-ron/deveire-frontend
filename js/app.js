$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true
    });

    $('.mobile-nav-btn').on('click', function(){
        $('#mainMenu').addClass('open');
    });

    $('.close-nav-btn').on('click', function(){
        $('#mainMenu').removeClass('open');
    })
});


const headerOffset = 100;

$(window).on('scroll', function(){
    let header = $('.main-header');
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop >= headerOffset){
        header.addClass('stick');
    } else {
        header.removeClass('stick')
    }
})