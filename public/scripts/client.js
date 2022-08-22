$(document).ready(function() {
  $(function() {
    const $form = $("#placement-form");
    $form.submit(function(event) {
      // prevents default post activity (navigating to /tweets/)
      event.preventDefault();
      // serializing the input for post request
      const placement = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/place/",
        data: placement,
        success: function(res) {
          console.log(res);
          renderTweets(res);
        },
        error: function(error) {
          console.error(error);
        },
      })
        // once post request completes, reset counter, close tweet box, and reload the tweets container to incldue the newly-added tweet without reloading the page
        .then(() => {
          this.reset();
          $("#placement-input").toggle();
        });
    });
  });
});