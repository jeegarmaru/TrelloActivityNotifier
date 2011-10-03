$(function monitorActivity() {
  var textToAdd = "(*) ";
  var previousText = "";
  setInterval(function(){
    var latestText = $(".list-actions .phenom-desc:first").text();
    if (previousText != "") {
      if (previousText != latestText) {
        if (document.title.indexOf(textToAdd) != 0) {
	  document.title = textToAdd + document.title;
        }
	$(".list-actions .phenom-desc").each(function() {
	  var element = $(this);
	  if (element.text() != previousText) {
  	    var cardName = element.find("a").text().replace(/\(.*\)/, "");
	    element.parent().css('background-color', '#eedd82');
  	    if (cardName != null && jQuery.trim(cardName) != '') {
	      var elements = $(".list-area-wrapper a:contains('" + cardName + "')");
  	      elements.parent().parent().parent().css('background-color', '#eedd82');
	    }
	  }
	  else {
	    return false;
	  }
	});
        $("*").click(function() {
	  document.title = document.title.replace(textToAdd, "");
  	  $(".list-actions .phenom-desc").each(function() {
	    var element = $(this);
	    element.parent().css('background-color', '');
	  });
        });
	$(".list-area-wrapper a").click(function() {
	  $(this).parent().parent().parent().css('background-color', '');
	});
      }
    }
    previousText = latestText;
  }, 5000);
});
