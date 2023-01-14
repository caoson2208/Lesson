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

  $(".blog-item:nth-child(odd)").addClass(
    "wow animate__slideInLeft animate__delay-0.6s"
  );
  $(".blog-item:nth-child(even)").addClass(
    "wow animate__slideInRight animate__delay-0.6s"
  );
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
    responsive: [
      {
        breakpoint: 1025, // Độ rộng thiết bị
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Ẩn nút kéo
          infinite: false, // Kéo tới cuối không kéo dc nữa
        },
      },
    ],
  });

  $(".blog-list").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025, // Độ rộng thiết bị
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Ẩn nút kéo
          infinite: false, // Kéo tới cuối không kéo dc nữa
        },
      },
    ],
  });
});

/*-----------------------------------
              RUN DATA
-----------------------------------*/
var studentTimer = null;
var coursesTimer = null;
$(document).ready(function () {
  var students = $("#students");
  var courses = $("#courses");

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 281) {
      if (studentTimer === null)
        studentTimer = startData(students, 1, 50, "students");
      if (coursesTimer === null)
        coursesTimer = startData(courses, 1, 70, "courses");
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

/*-----------------------------------
      Change padding on scroll
-----------------------------------*/
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) $(".header").addClass("header-padding");
    else $(".header").removeClass("header-padding");
  });
});
