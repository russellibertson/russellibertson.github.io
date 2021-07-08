$(document).ready(function(){ 
   /* about-text */
   $('.about-text__more, .about-text__circle').click(function(){
      $('.about-text__content').toggleClass('about-text__content--active');
      $('.about-text__circle').toggleClass('about-text__circle--active');
      $('.about-text__more').toggleClass('about-text__more--active');
   })
});