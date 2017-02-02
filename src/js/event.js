$(function(){
  var url = "http://www.tokyoartbeat.com/list/event_searchNear?Latitude=35.671208&Longitude=139.76517&Schedule=upcoming&SortOrder=mostpopular";
  $.ajax({
      type: "GET",
      url: url,
      dataType: 'xml',
      success: function(data){

        $(data.responseText).find("event").each(function(){

           var eventText = $(this).children('name').text();
           var placeText = $(this).find('venue name').text();
           var accessText = $(this).find('datestart').text();
           var startTime = $(this).find('dateend').text();
           var eventImage = $(this).find('img')[2];
           console.log(eventImage);

           var event = "<div class='event'>" + eventText + placeText + accessText + accessText + " ~ " + startTime + "</div>";
           var img = eventImage;

           $(".main__inner").append(eventImage);
           $(".main__inner").append(event);

        });

      }, error: function(e) {
        console.log("エラー：" + JSON.stringify(e));
      }
  });
});
