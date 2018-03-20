$(document).ready(function() {
  $("nav a").mouseover(function() {
    $("nav a").css("background-color", "lightgrey");
  });

  $("nav a").mouseout(function() {
    $("nav a").css("background-color", "darkgrey");
  });
});
(jQuery);