$(function(){

  var scrollPos = 0;
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
}

function searchClose() {
  var headerHeight = $("header").height();
  $("body").removeClass("body__fixed").css({top: headerHeight});
  $(window).scrollTop(scrollPos);
  $(".search--js").fadeOut(300);
}

function selectEvent(selectObj){
  searchClose();
  $(".main__inner .event").remove(); //domをリフレッシュ

  var index = selectObj.selectedIndex;
  var url = selectObj.options[index].value;
  getEvent(url);
}
