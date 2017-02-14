$(function(){
  getEvent("http://www.tokyoartbeat.com/list/event_mostpopular.ja.xml");
});

function getEvent(url) {
  $(".main__loading").css("display","block");
  $(".main__error").css("display","none");

  //API叩く
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'xml',
    success: function(data){
      var event = $(data.responseText).find("event");
      if(event.length == 0 ) {
        notFoundDom("Not Found");
      } else {
        event.each(function(){
          makeEventDom($(this));
        });
      }

    }, error: function(e) {
      notFoundDom("Error");

    }, complete : function(data) {
      $(".main__loading").css("display","none");

    }
  });
}

function makeEventDom(event) {
  var eventLink = $(event).attr("href");
  var titleContent = event.find('name').text();
  var placeContent = event.find('venue name').text();
  var addressContent = event.find('address').text();

  var startText = event.find('DateStart').text();
  var startTimeContent = rewriteDateFormat(startText);
  var endText = event.find('DateEnd').text();
  var endTimeContent = rewriteDateFormat(endText);
  var imageURL = $(event.find('img')[2]).attr("src");

  var eventWrapper = $("<div class='event__wrapper'><a href=" + eventLink + " target=_'blank'></a></div>");
  var eventImage = $("<div class='event__image'><div class='image__innner'></div></div>");
  var eventInfo = $("<div class='event__info'></div>");
  var eventTitleText = "<div class='event__title event__text'><p>" + titleContent + "</p></div>";
  var eventPlaceText = "<div class='event__place event__text'><p>" + addressContent + placeContent + "</p></div>";
  if(startText == "0000-00-00" || endText == "0000-00-00") {
     $(".event__date").css("display","none");
  } else {
    var eventDateText = "<div class='event__date event__text'><p>" + startTimeContent + "〜" + endTimeContent + "</p></div>";
  }

  //イベント要素
  $(".main__inner").append(eventWrapper);

  //画像
  $(eventWrapper.find("a")).append(eventImage);
  if(imageURL == "http://www.tokyoartbeat.com/resources/images/nopic_170") {
    eventImage.find(".image__innner").css("background-image","url('./asset/img/no_image.jpg')");

  } else {
    eventImage.find(".image__innner").css("background-image","url(" + imageURL + ")");
  }

  //テキスト情報
  $(eventWrapper.find("a")).append(eventInfo);
  eventInfo.append(eventTitleText);
  eventInfo.append(eventPlaceText);
  eventInfo.append(eventDateText);
}

function rewriteDateFormat(timeText) {
  //取得した日付の文字列の形式を変更
  var dateArray = timeText.match(/(\d{4})-(\d{2})-(\d{2})/);
  var rewriteDate = dateArray[1] + "<span class='date__unit'>年</span>"　+ Number(dateArray[2]) + "<span class='date__unit'>月</span>"　+ Number(dateArray[3]) + "<span class='date__unit'>日</span>";
  return rewriteDate;
}

function notFoundDom(text) {
  $(".main__error").css("display","block");
  $(".main__error .error__text").text(text);
}
