$(function(){
  var url = "http://www.tokyoartbeat.com/list/event_mostpopular.ja.xml";
  getEvent(url);

});

function getEvent(url) {
  //API叩く
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'xml',
    success: function(data){
      var event = $(data.responseText).find("event");
      event.each(function(){
        makeEventDom($(this));
      });

    }, error: function(e) {
      console.log("エラー：" + JSON.stringify(e));
    }
  });
}

function makeEventDom(event) {
  var eventLink = $(event).attr("href");
  var titleContent = event.find('name').text();
  var placeContent = event.find('venue name').text();
  var addressContent = event.find('address').text();
  var startTimeContent = event.find('DateStart').text();
  var endTimeContent = event.find('DateEnd').text();
  var imageURL = $(event.find('img')[2]).attr("src");

  var eventWrapper = $("<div class='event__wrapper'><a href=" + eventLink + " target=_'blank'></a></div>");
  var eventImage = $("<div class='event__image'><div class='image__innner'></div></div>");
  var eventInfo = $("<div class='event__info'></div>");
  var eventTitleText = "<div class='event__title event__text'><p>" + titleContent + "</p></div>";
  var eventPlaceText = "<div class='event__place event__text'><p>" + addressContent + placeContent + "</p></div>";
  var eventDateText = "<div class='event__date event__text'><p>" + startTimeContent + "~" + endTimeContent + "</p></div>";

  //イベント要素
  $(".main__inner").append(eventWrapper);

  //画像
  $(eventWrapper.find("a")).append(eventImage);
  if(imageURL == "http://www.tokyoartbeat.com/resources/images/nopic_170") {
    //xmlに画像が登録されていない場合、「no image」の画像を入れる
  } else {
    eventImage.find(".image__innner").css("background-image","url(" + imageURL + ")");
  }

  //テキスト情報
  $(eventWrapper.find("a")).append(eventInfo);
  eventInfo.append(eventTitleText);
  eventInfo.append(eventPlaceText);
  eventInfo.append(eventDateText);
}
