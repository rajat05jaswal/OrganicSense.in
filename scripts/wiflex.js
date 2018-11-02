$(document).ready(function(){
    // var windowWidth,windowHeight;
    // var lastScrollTop = 0;
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
          $('header').addClass("sticky");
        }
        else{
          $('header').removeClass("sticky");
        }
      });
});
