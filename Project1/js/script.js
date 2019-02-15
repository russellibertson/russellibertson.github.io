$(document).ready(function () {
  /*табы на js*/
  $(".form").on("click", ".tab", function () {
    /*удалаем классы active*/
    $(".form").find(".active").removeClass("active");
    /*добавляем класс active */
    $(this).addClass("active")
    $(".tab-form").eq($(this).index()).addClass("active")
  })

  $('.panel-heading').click(function (){
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });

  $('.panel').click(function (){
    $(this).toggleClass('in');
    $('.panel').not(this).removeClass('in');
  });

  $('.panel_collapse').click(function (){
    $(this).toggleClass('in');
    $('.panel_collapse').not(this).removeClass('in');
  });

  $('.panel_collapse1').click(function (){
    $(this).toggleClass('in');
    $('.panel_collapse1').not(this).removeClass('in');
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      direction: 'vertical'
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });

  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      direction: 'vertical'
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });
});

$(function(){
  $(".p2_card").slice(0, 2).show();
  $(".bnt_more2").on('click', function(e){
    e.preventDefault();
    $(".p2_card:hidden").slice(0, 3).slideDown();
  });
});

$(document).ready(function(){
  var $btnTop = $(".menu2")
  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 150){
      $btnTop.fadeIn(); 
    }else{
      $btnTop.fadeOut();
    }
  });

});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

