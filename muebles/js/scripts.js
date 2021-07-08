$(document).ready(function(){ 
   /* burger menu */
   $('.header__menu').click(function(){
      $('.header__list').addClass('header__list-active');
      $('.header__list').css('display', 'flex');
   })

   $('.header__close').click(function(){
      $('.header__list').removeClass('header__list-active');
      $('.header__list').css('display', 'none');
   })
   
   /* filter-nav */
   $('.filter__panel').click(function(){
      $('.col-3').fadeToggle();
      $('.filter__toggle').toggleClass('filter__toggle-active');
      $('.item').toggleClass('item-active');
      $('.event-content__nav').toggleClass('event-content__nav--active');
   })

   $('.panel__btn').click(function(){
      if($(this).next('.panel__list').hasClass('panel-active')) {
         $(this).next('.panel__list').removeClass('panel-active');
         $(this).find('.panel__arrow').removeClass('panel__arrow--active');
      } else {
         $('.panel__list').removeClass('panel-active');
         $(this).next('.panel__list').addClass('panel-active');
         $('.panel__arrow').removeClass('panel__arrow--active');
         $(this).find('.panel__arrow').addClass('panel__arrow--active');
      }
   })

   $('.panel__list-btn').click(function(){
      $('.panel__links').fadeOut(0);
      $(this).next('.panel__links').fadeIn();
   })

   /* map toggle */
   $('#map-toggle').click(function(){
      $('.content').fadeOut();
      $('.map').fadeIn();

      $('.filter__btn').removeClass('filter__btn--active');
      $(this).addClass('filter__btn--active');

      $('.filter__nav-map').fadeIn(0);
      $('.filter__panel').fadeOut(0);

      $('.nav-panel').fadeIn(0);
      $('.intro-items').fadeOut(0);
      $('.intro-filter').find('.filter__inner').removeClass('filter__inner--end');
      $('.intro-map').fadeIn();
      $('.event-filter__sort').fadeOut(0);
      $('.event-filter__add').fadeOut(0);
      $('.event-content__wrap').fadeOut(0);
   })

   $('#list-toggle').click(function(){
      $('.content').fadeIn();
      $('.map').fadeOut();

      $('.filter__btn').removeClass('filter__btn--active');
      $(this).addClass('filter__btn--active');
      $('.filter__nav-map').fadeOut(0);
      $('.filter__panel').fadeIn();
      $('.nav-panel').fadeOut(0);
      $('.intro-items').fadeIn();
      $('.intro-filter').find('.filter__inner').addClass('filter__inner--end');
      $('.intro-map').fadeOut();
      $('.event-filter__sort').fadeIn();
      $('.event-filter__add').fadeIn();
      $('.event-content__wrap').fadeIn();
   })

   /* footer address */
   $('.footer__address').click(function(){
      $('.popup-address').fadeIn().css('display', 'flex');
   })

   $('.popup-address__close').click(function(){
      $('.popup-address').fadeOut();
   })
});

/* footer-map */
ymaps.ready(init);

function init() {
  var addressMap = new ymaps.Map('addressMap', {
      center: [59.927649,30.319237],
      zoom: 17,
      behaviors: ['drag'],
      controls: []
  });

  var addressMap1 = new ymaps.Placemark([59.927649, 30.319237], {
    hintContent: '<div class="popup-address__title">Санкт-Петербург, ул. Садовая, 37</div>',
  },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/filter/mark.svg',
      iconImageSize: [30, 33],
      iconImageOffset: [-30, -33]
  });
  
  addressMap.geoObjects.add(addressMap1);
}