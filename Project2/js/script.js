
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function(){
  var $btnTop = $(".back_To_Top")
  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 1050){
      $btnTop.fadeIn(); 
    }else{
      $btnTop.fadeOut();
    }
  });

  $btnTop.on("click", function(){
    $("html, body").animate({scrollTop:0}, 900)
  });
});

var img = document.getElementsByTagName('img');
