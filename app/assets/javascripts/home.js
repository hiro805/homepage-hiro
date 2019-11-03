window.addEventListener('DOMContentLoaded', function(){
  $(".chat-space__label, .mercari__label").on("mouseover", function(){
    $(this).children().css({"color": "#0099e8"});
  }).on("mouseout", function(){
    $(this).children().css({"color": ""});
  })

});