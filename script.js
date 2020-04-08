$(function(){
  $('.sentence').fadeIn(5000);

  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 'slow');
  });
  
});
