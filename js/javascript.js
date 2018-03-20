//This is an short code that brings out the #id and
// connecting to the variable that's in the
// wp_rest.js file.

(function($) {
  $(document).ready(function() {
    $('#nav a').on('click', function(event) {
      event.preventDefault(); //prevents the click opening a new window.

      if (this.hash) { //the hash is connecting to the variable in rest.js file.
        $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        });
      }
    });
  });
})(jQuery);