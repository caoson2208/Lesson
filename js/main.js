// Reload page
$(window).on("load", function (event) {
  $("#loader-wrapper").delay(700).fadeOut(300);
});

$(document).ready(function () {
  $(".media-block").addClass("wow animate__fadeInRight animate__delay-0.1s");
  $(".content-block").addClass("wow animate__fadeInLeft animate__delay-0.1s");
  $(".course-item:nth-child(1)").addClass(
    "wow animate__slideInRight animate__delay-0.1s"
  );
  $(".course-item:nth-child(2)").addClass(
    "wow animate__slideInUp  animate__delay-0.1s"
  );
  $(".course-item:nth-child(3)").addClass(
    "wow animate__slideInLeft  animate__delay-0.1s"
  );
  $(".images").addClass("wow  animate__fadeInUp animate__delay-0.6s");
  $(".content").addClass("wow animate__fadeInUp animate__delay-0.5s");

  $(".blog-item:nth-child(odd)").addClass("wow animate__slideInLeft animate__delay-0.6s");
  $(".blog-item:nth-child(even)").addClass("wow animate__slideInRight animate__delay-0.6s");
  $(".column").addClass("wow animate__fadeInUp animate__delay-0.4s");
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
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

  $(".blog-list").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
});

/*-----------------------------------
              RUN DATA
-----------------------------------*/
var homeSaleTimer = null;
var homeSoldTimer = null;
var priceReducedTimer = null;
$(document).ready(function () {
  var homeSale = $("#sale");
  var homeSold = $("#sold");
  var priceReduced = $("#reduced");

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 2600) {
      if (homeSaleTimer === null)
        homeSaleTimer = startData(homeSale, 20, 2500, "sale");
      if (homeSoldTimer === null)
        homeSoldTimer = startData(homeSold, 40, 5000, "sold");
      if (priceReducedTimer === null)
        priceReducedTimer = startData(priceReduced, 2, 170, "reduced");
    }
  });
});

function startData(element, steps, max, type) {
  var value = parseInt(element.text());
  if (value < max)
    return setInterval(function () {
      if (value < max) {
        value += steps;
        element.text(value);
      } else {
        if (type === "sale") clearInterval(homeSaleTimer);
        else if (type === "sold") clearInterval(homeSoldTimer);
        else if (type === "reduced") clearInterval(priceReducedTimer);
        // console.log(Math.random());
      }
    }, 10);
}

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) $(".header").addClass("header-padding");
    else $(".header").removeClass("header-padding");
  });
});
