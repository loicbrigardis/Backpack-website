$(document).ready(function() {

  var $nav_mobile_btn = $('.nav-mobile-btn'),
      $nav_mobile = $('.nav-mobile'),
      $nav_mobile_a = $('.nav-mobile ul li a'),
      $nav_menu_a = $('.nav ul li a'),
      $welcome = $('.header-background h1'),
      $mountain02 = $('.mountain02'),
      $mountain03 = $('.mountain03'),
      $close_btn = $('.article-selected-close'),
      $articles = $('.articles');
      $article = $('.article');

  $.ajax({
      url: 'data.json',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
          var $items = $('.articles');
          for (var i = 0; i < data.articles.length; i++) {
              var item = data.articles[i];
              $items.append(`
              <div class="article">
                <img src="${item.image}" width="140px" height="140px" alt="${item.altimage}">
                <p>${item.desc}</p>
                <div class="price">$${item.price}</div>
              </div>
              `);
          }

      },
      error: function(err) {
          console.log("erreur" + err);
      }
  });

    $nav_mobile_btn.click(function() {
        $(this).toggleClass('open');
        $nav_mobile.toggleClass('nav-mobile-toggle');
    });

    toggleActive($nav_menu_a);
    toggleActive($nav_mobile_a);

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

    var $winSelectArt = $('.article-selected-background');


    $(window).resize(function() {
        $winSelectArt.css({
            'height': '0'
        });
    });

    $articles.on('click', '.article' ,function(e) {
        var target = $(this).parent().index()
        console.log(target);
        var $heightwinSelectArt = $('.article-selected').height();

        $winSelectArt.css({
            'height': '' + $heightwinSelectArt + '',
        });

        var page = $('.article-selected-background'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)

        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed);

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
