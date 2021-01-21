(function ($) {
  Drupal.behaviors.socialSlideShow = {
    attach: function (context, settings) {

      $(".carousel-inner .item:first-child").addClass("active");     

    }
  };
})(jQuery);
