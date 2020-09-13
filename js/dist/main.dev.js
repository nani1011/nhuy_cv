"use strict";

;

(function () {
  'use strict';

  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  var fullHeight = function fullHeight() {
    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    }
  };

  var counter = function counter() {
    $('.js-counter').countTo({
      formatter: function formatter(value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function counterWayPoint() {
    if ($('#ny-counter').length > 0) {
      $('#ny-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400);
          $(this.element).addClass('animated');
        }
      }, {
        offset: '90%'
      });
    }
  }; // Animations


  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '85%'
    });
  };

  var burgerMenu = function burgerMenu() {
    $('.js-ny_nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  }; // Click outside of offcanvass


  var mobileMenuOutsideClick = function mobileMenuOutsideClick() {
    $(document).click(function (e) {
      var container = $("#ny-aside, .js-ny_nav-toggle");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-ny_nav-toggle').removeClass('active');
        }
      }
    });
    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-ny_nav-toggle').removeClass('active');
      }
    });
  };

  var clickMenu = function clickMenu() {
    $('#navbar a:not([class="external"])').click(function (event) {
      var section = $(this).data('nav-section'),
          navbar = $('#navbar');

      if ($('[data-section="' + section + '"]').length) {
        $('html, body').animate({
          scrollTop: $('[data-section="' + section + '"]').offset().top - 55
        }, 500);
      }

      if (navbar.is(':visible')) {
        navbar.removeClass('in');
        navbar.attr('aria-expanded', 'false');
        $('.js-ny_nav-toggle').removeClass('active');
      }

      event.preventDefault();
      return false;
    });
  }; // Reflect scrolling in navigation


  var navActive = function navActive(section) {
    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function () {
      $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
    });
  };

  var navigationSection = function navigationSection() {
    var $section = $('section[data-section]');
    $section.waypoint(function (direction) {
      if (direction === 'down') {
        navActive($(this.element).data('section'));
      }
    }, {
      offset: '150px'
    });
    $section.waypoint(function (direction) {
      if (direction === 'up') {
        navActive($(this.element).data('section'));
      }
    }, {
      offset: function offset() {
        return -$(this.element).height() + 155;
      }
    });
  };

  var sliderMain = function sliderMain() {
    $('#ny-hero .flexslider').flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function start() {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function before() {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }
    });
  };

  var stickyFunction = function stickyFunction() {
    var h = $('.image-content').outerHeight();

    if ($(window).width() <= 992) {
      $("#sticky_item").trigger("sticky_kit:detach");
    } else {
      $('.sticky-parent').removeClass('stick-detach');
      $("#sticky_item").trigger("sticky_kit:detach");
      $("#sticky_item").trigger("sticky_kit:unstick");
    }

    $(window).resize(function () {
      var h = $('.image-content').outerHeight();
      $('.sticky-parent').css('height', h);

      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $('.sticky-parent').removeClass('stick-detach');
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
        $("#sticky_item").stick_in_parent();
      }
    });
    $('.sticky-parent').css('height', h);
    $("#sticky_item").stick_in_parent();
  };

  var owlCrouselFeatureSlide = function owlCrouselFeatureSlide() {
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoHeight: true,
      items: 1,
      navText: ["<i class='icon-arrow-left3 owl-direction'></i>", "<i class='icon-arrow-right3 owl-direction'></i>"]
    });
  }; // Document on load.


  $(function () {
    fullHeight();
    counter();
    counterWayPoint();
    contentWayPoint();
    burgerMenu();
    clickMenu(); // navActive();

    navigationSection(); // windowScroll();

    mobileMenuOutsideClick();
    sliderMain();
    stickyFunction();
    owlCrouselFeatureSlide();
  });
  $(".prt_loadmore").slice(0, 3).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".prt_loadmore:hidden").slice(0, 5).slideDown();

    if ($(".prt_loadmore:hidden").length == 0) {
      $("#load").fadeOut('slow');
    }
  });
  $('.typed').each(function () {
    var _this = $(this);

    var typed = new Typed(this, {
      stringsElement: _this.parent().find('.typed-strings')[0],
      typeSpeed: 80,
      backSpeed: 80,
      fadeOut: true,
      loop: true
    });
  });
})();