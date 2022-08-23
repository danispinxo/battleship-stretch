$(document).ready(function() {
  $(function() {
    const $form = $("#placement-form");
    $form.submit(function(event) {
      // prevents default post activity)
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
        .then(() => {
          this.reset();
          $("#placement-input").toggle();
        });
    });
  });
});