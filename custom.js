$(document).ready(function(){
  $('.nav_ico').click(function(event){
    /* Act on the event */

    $('.main_nav').toggleClass('active');
  });
  $('.main_nav').click(function(event) {
    $(this).removeClass('active');
  });
  $('.main_nav ul').click(function(event) {
    event.stopImmediatePropagation();
  });  
})