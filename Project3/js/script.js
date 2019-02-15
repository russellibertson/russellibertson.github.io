$(document).ready(function () {
  $('.panel-heading').click(function (){
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
  });

  $('.panel').click(function (){
    $(this).toggleClass('in');
    $('.panel').not(this).removeClass('in');
  });

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper = new Swiper('.swiper-container2', {
      direction: 'vertical',
      sslidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
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

$('.btn-3').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,                                               
});