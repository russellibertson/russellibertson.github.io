$(document).ready(function(){ 
   $('.intro').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive: [
         {
            breakpoint: 991,
            settings: {
              dots: false
            }
         }
      ]
   });
});