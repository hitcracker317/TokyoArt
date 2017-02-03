$(function(){
  var url = "http://www.tokyoartbeat.com/list/event_searchNear?Latitude=35.671208&Longitude=139.76517&Schedule=upcoming&SortOrder=mostpopular";
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
  var titleContent = event.children('name').text();
  var placeContent = event.find('venue name').text();
  var addressContent = event.find('address').text();
  var startTimeContent = event.find('DateStart').text();
  var endTimeContent = event.find('DateEnd').text();
  var imageContent = event.find('img')[2];

  var eventWrapper = $("<div class='event__wrapper'></div>");
  var eventImage = $("<div class='event__image'><div class='event__image__inner'></div></div>");
  var eventInfo = $("<div class='event__info'></div>");
  var eventTitleText = "<div class='event__title event__text'><p>" + titleContent + "</p></div>";
  var eventPlaceText = "<div class='event__place event__text'><p>" + placeContent + "</p></div>";
  var eventAddressText = "<div class='event__address event__text'><p>" + addressContent + "</p></div>";
  var eventDateText = "<div class='event__date event__text'><p>" + startTimeContent + "~" + endTimeContent + "</p></div>";

  //イベント要素
  $(".main__inner").append(eventWrapper);
  //画像
  eventWrapper.append(eventImage);
  eventImage.find(".event__image__inner").append(imageContent);
  //テキスト情報
  eventWrapper.append(eventInfo);
  eventInfo.append(eventTitleText);
  eventInfo.append(eventPlaceText);
  eventInfo.append(eventAddressText);
  eventInfo.append(eventDateText);
}
