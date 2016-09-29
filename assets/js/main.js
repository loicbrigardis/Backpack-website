$(document).ready(function() {

    var $nav_mobile_btn = $('.nav-mobile-btn'),
        $nav_mobile = $('.nav-mobile'),
        $nav_mobile_a = $('.nav-mobile ul li a'),
        $nav_menu_a = $('.nav ul li a');

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

      $mountain02.css({
        'transform': 'translate( '+ (-250 + wScroll / 10) +'px , 0px)'
      });

      $mountain03.css({
        'transform': 'translate( -250px , '+ - wScroll / 10 +'px)'
      });

    });









});

function toggleActive($menu) {
    $menu.click(function() {
        $menu.removeClass('active');
        $(this).addClass('active');
    });
}
