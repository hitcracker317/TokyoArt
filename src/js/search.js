$(function(){

  var scrollPos;

  $(".js--search").click(function(){
    searchOpen(); //モーダルを表示
  });

  $(".search__close--js").click(function(){
    searchClose(); //モーダルを非表示
  });
});


function searchOpen() {
  scrollPos = $(window).scrollTop();
  $("body").addClass("body__fixed").css({top: -scrollPos});
  $(".search--js").fadeIn(300).css({top: scrollPos});

  $(".search__container--js").velocity(
    {
      top: "50%"
    }, {
      duration: 300,
      easing: 'ease-in-out'
    }
  );
}

function searchClose() {
  $("body").removeClass("body__fixed").css({top: 0});
  $(window).scrollTop(scrollPos);

  $(".search__container--js").velocity(
    {
      top: "-25%"
    }, {
      duration: 300,
      easing: 'ease-in-out',
      complete: function(){
        $(".search--js").fadeOut(100);
        $(".search--js").css("display", "none");
      }
    }
  );
}
