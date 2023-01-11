// Reload page
$(window).on("load", function (event) {
  $("#loader-wrapper").delay(700).fadeOut(300);
});

$(document).ready(function () {
  $(".feedback-list").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  });
});
