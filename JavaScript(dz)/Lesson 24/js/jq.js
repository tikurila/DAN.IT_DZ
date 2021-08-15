
$(document).ready(function () {
  
  $(".center").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  let btn = $("#button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 340) {
      $("#button").fadeIn();
      $("#button").addClass("visible");
    } else {
      $("#button").fadeOut();
      $("#button").removeClass("visible");
    }
  });

  $("#button").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
});


$("#none").click(function () {
  $(".parent2").slideToggle("slow");
});