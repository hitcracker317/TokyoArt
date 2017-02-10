$(function(){

  var scrollPos;

  $(".js--search").click(function(){
    //モーダルを表示
    scrollPos = $(window).scrollTop();
    $("body").addClass("body__fixed").css({top: -scrollPos});
    $(".search--js").fadeIn(100).css({top: scrollPos});
  });

  $(".search__close--js").click(function(){
    //モーダルを非表示


    $("body").removeClass("body__fixed").css({top: 0});
    $(window).scrollTop(scrollPos);
    $(".search--js").fadeOut(100);
    $(".search--js").css("display", "none");
  });
});
