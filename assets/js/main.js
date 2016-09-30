$(document).ready(function() {

    var $nav_mobile_btn = $('.nav-mobile-btn'),
        $nav_mobile = $('.nav-mobile'),
        $nav_mobile_a = $('.nav-mobile ul li a'),
        $nav_menu_a = $('.nav ul li a'),
        $welcome = $('.header-background h1');

    $nav_mobile_btn.click(function() {
        $(this).toggleClass('open');
        $nav_mobile.toggleClass('nav-mobile-toggle');
    });

    toggleActive($nav_menu_a);
    toggleActive($nav_mobile_a);







    var $mountain02 = $('.mountain02');
    var $mountain03 = $('.mountain03');


    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        if (wScroll < 300) {
            var zoom = (1 + (wScroll / 800));

            $mountain02.css({
                'transform': 'translate( ' + (-250 + wScroll / 10) + 'px , 0px)'
            });

            $mountain03.css({
                'transform': 'translate( -250px , ' + -wScroll / 10 + 'px)'
            });

            $welcome.css({
                'transform': 'translateX(-70%) scale(' + zoom + ')'
            });

        }

    });


    var $close_btn = $('.article-selected-close');

    var $article = $('.article');

    $winSelectArt = $('.article-selected-background');


    $(window).resize(function() {
        $winSelectArt.css({
            'height': '0'
        });
    });

    $article.click(function() {
        var $heightwinSelectArt = $('.article-selected').height();

        $winSelectArt.css({
            'height': '' + $heightwinSelectArt + '',
        });

        var page = $('.article-selected-background'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)

        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        //return false;


    });

    $close_btn.click(function() {
        $winSelectArt.css({
            'height': '0'
        });
    });









});

function toggleActive($menu) {
    $menu.click(function() {
        $menu.removeClass('active');
        $(this).addClass('active');
    });
}
