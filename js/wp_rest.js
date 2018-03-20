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
        displayWP(myData);
        // console.log(myData);
      },
      error: function() {
        console.log('ERROR');
      }
    });

    //The 1st loop to get the post title + content
    function displayWP(myData) {
      for (var i = 0; i < myData.length; i++) {
        var wpId = myData[i].id;
        var wpTitle = myData[i].title.rendered;
        var wpContent = myData[i].content.rendered;

        if (myData[i]._embedded['wp:featuredmedia']) {
          var wpPicture = myData[i]._embedded['wp:featuredmedia'];

          //The 2nd loop, to get url to the picture with high resolution
          for (var i2 = 0; i2 < wpPicture.length; i2++) {

            var wpPic = wpPicture[i2].media_details.sizes.medium_large.source_url;

            //The content in this order
            //Title
            //Picture
            //content
            var wpHTML = ' ';
            wpHTML += '<section>';
            wpHTML += '<h1 id="' + wpId + '">' + wpTitle + '</h1>';
            wpHTML += '<figure>';
            wpHTML += '<img src="' + wpPic + '">';
            wpHTML += '</figure>';
            wpHTML += wpContent;
            wpHTML += '</section>';

            $('.content').append(wpHTML);
          }
        }
      }
    }
  });
})(jQuery)