$(function(){

  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();

    if (currentPos >= 0) {
      //headerの表示、非表示
      if(currentPos > startPos){
        console.log("下にスクロール");
        $("header").addClass("header--hidden");
      } else {
        $("header").removeClass("header--hidden");
        console.log("上にスクロール");
      }
      startPos = currentPos;
    }
  });
});
