$(function(){

  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();

    if (currentPos >= 0) {
      //headerの表示、非表示
      if(currentPos > startPos){
        $("header").addClass("header--hidden");
      } else {
        $("header").removeClass("header--hidden");
      }
      startPos = currentPos;
    }
  });
});
