var ajax = new XMLHttpRequest();
ajax.open("GET", "svg/sprite.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
}

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

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}