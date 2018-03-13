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
        console.log(myData);
      },
      error: function() {
        console.log('ERROR');
      }
    });

    function displayWP(myData) {
      for (var i = 0; i < myData.length; i++) {
        var wpTitle = myData[i].title.rendered;
        var wpContent = myData[i].content.rendered;
        // console.log(myData[i].content.rendered);
        if (myData[i]._embedded['wp:featuredmedia']) {
          var wpPicture = myData[i]._embedded['wp:featuredmedia'];

          //2a loopen för att få url till bild i hög upplösning
          for (var i2 = 0; i < wpPicture.length; i2++) {

            var wpPic = wpPicture[i2].media_details.sizes.medium_large.source_url;
            var wpFMT = wpPicture[i2].title.rendered;
            console.log(wpPicture);

            //Title
            //Picture
            //content
            var wpHTML = ' ';
            wpHTML += '<section>';
            wpHTML += '<h1>' + wpTitle + '</h1>';
            wpHTML += '<figure>';
            wpHTML += '<img src="' + wpPic + '">';
            wpHTML += '</figure>';
            wpHTML += wpContent;
            wpHTML += '</section>';
            $('body').append(wpHTML);
          }
        }
      }
    }




  });
})(jQuery)