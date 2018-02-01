//A REST API FROM WORDPRESS
(function($) {
  $(document).ready(function() {
    var url = "http://localhost/kingkong/wp-json/wp/v2/posts/?_embed=true";

    $.ajax({
      type: "GET",
      url: url,
      timeout: 2000,
      beforeSend: function() {
        console.log('before');
      },
      complete: function() {
        console.log('COMPLETE');
      },
      success: function(myData) {
        console.log(myData);
      },
      error: function() {
        console.log('ERROR');
      }
    })




  });
})(jQuery)