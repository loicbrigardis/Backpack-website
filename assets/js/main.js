$(document).ready(function() {

    var $nav_mobile_btn = $('.nav-mobile-btn'),
        $nav_mobile = $('.nav-mobile'),
        $nav_mobile_a = $('.nav-mobile ul li a'),
        $nav_menu_a = $('.nav ul li a'),
        $welcome = $('.header-background h1'),
        $mountain02 = $('.mountain02'),
        $mountain03 = $('.mountain03'),
        $close_btn = $('.article-selected-close'),
        $articles = $('.articles'),
        $winSelectArt = $('.article-selected-background'),
        $article = $('.article');

    $winSelectArt.css('height', '0');

    setTimeout(function () {
      $('.loader-wrap').fadeOut('slow', function() {
        $(this).remove();
      });
    }, 2500);

    $.ajax({
        url: 'data.json',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            var $items = $('.articles');
            for (var i = 0; i < data.articles.length; i++) {
                var item = data.articles[i];
                $items.append(`
              <div class="article" artnum="${item.id}">
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


    $(window).resize(function() {
        $winSelectArt.css({
            'height': '0'
        });
    });

    setTimeout(function() {

    }, 50);

    $articles.on('click', '.article', function(e) {
        var target = $(this).parent().index();
        var $heightwinSelectArt = $('.article-selected').height();
        var id = $(this).attr('artnum');
        var page = $('.article-selected-background'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        e.preventDefault();

        $winSelectArt.css({
            'height': '' + $heightwinSelectArt + '',
        });

        $('.article-loader').css('display', 'block').addClass('opened').delay(1400).queue(function(next) {
            $(this).removeClass("opened").css('display', 'none');

            next();
        });

        $.ajax({
                url: 'data.json',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
            })
            .done(function(data) {
                var artclicked = data.articles[id];

                $('.article-opened').html(`
                  <div class="article-select-focus">
                    <div class="article-photos">
                      <img src="${artclicked.image}" width="240px" height="240px" alt="${artclicked.altimage}">
                    </div>
                  </div>
                  <div class="article-select-desc">
                    <h3>${artclicked.title}</h3>
                    <hr>
                    <p>${artclicked.desc}</p>
                    <span class="price">$${artclicked.price}</span>
                    <hr>
                    <button type="button" name="button" class="orange-button">Add to card</button>
                  </div>
            `);

            })
            .fail(function() {
                console.log("error");
            });


        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed);


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
