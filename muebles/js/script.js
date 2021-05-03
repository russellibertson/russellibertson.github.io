$("body").children().each(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
});

$('.gallery__list').slick({
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    /*variableWidth: true,*/
    responsive: [{
        breakpoint: 992,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
    }, {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        }
    }]
});

$(document).ready(function(){
    $(".header__align").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$('.offer__btn, .steps__item-btn').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    fixedContentPos: true,
    fixedBgPos: true,
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    closeMarkup: '<button class="mfp-close roundlink">\
    <img class="mfp-close reel-btn-off" src="img/close.png"/>\
    </button>',
    closeBtnInside: true,
    callbacks: {
    beforeOpen: function() {
      startWindowScroll = $(window).scrollTop();
      $('html').addClass('mfp-helper');
    },
    close: function() {
      $('html').removeClass('mfp-helper');
      $(window).scrollTop(startWindowScroll);
    }
    }
});

$(".form__wrapper, .callback__main").submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
        $.magnificPopup.open({
          items: {
            src: '#success'
          },
          type: 'inline',
          removalDelay: 500,
          fixedContentPos: true,
          fixedBgPos: true,
          mainClass: 'my-mfp-zoom-in',
          closeMarkup: '<button class="mfp-close roundlink">\
          <span class="mfp-close"><img class="mfp-close reel-btn-off" src="img/close.png"/>\
          </button>',
          callbacks: {
            beforeOpen: function() {
              startWindowScroll = $(window).scrollTop();
              $('html').addClass('mfp-helper');
            },
            close: function() {
              $('html').removeClass('mfp-helper');
              $(window).scrollTop(startWindowScroll);
            }
            }
        });
        $(".main-form__wrapper").trigger("reset");
      });
    return false;
});
