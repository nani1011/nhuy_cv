"use strict";

$(function () {
  var flag = false;
  var page_up = $('.page_up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      if (flag == false) {
        flag = true;
        page_up.stop().animate({
          'right': '20px'
        }, 500);
      }
    } else {
      if (flag) {
        flag = false;
        page_up.stop().animate({
          'right': '-500px'
        }, 500);
      }
    }
  });
  page_up.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  var rtime;
  var timeout = false;
  var delta = 200;
  var $window = $(window);

  if ($window.width() > 1023) {
    var ps = new PerfectScrollbar('.perfect_scroll');
    ps.update();
  }
}());
$(".reform .overplay a").hover(function () {
  $(this).parents('.overplay').prev().addClass("active");
  console.log('test');
}, function () {
  $(this).parents('.overplay').prev().removeClass("active");
});

(function ($) {
  "use strict";

  jQuery(window).on('load', function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow");
  });
})();