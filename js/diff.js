$(function() {
    var flag = false;
    var page_up = $('.page_up');
    $(window).scroll(function() {
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
    page_up.click(function() {
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
$(".reform .overplay a").hover(
    function() {
        $(this).parents('.overplay').prev().addClass("active");
        console.log('test');
    },
    function() {
        $(this).parents('.overplay').prev().removeClass("active");
    }
);

(function($) {
    "use strict";
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });
})();

(function($) {
    $.fn.tile = function(columns) {
        var tiles, max, c, h, last = this.length - 1,
            s;
        if (!columns) columns = this.length;
        this.each(function() {
            s = this.style;
            if (s.removeProperty) s.removeProperty("height");
            if (s.removeAttribute) s.removeAttribute("height");
        });
        return this.each(function(i) {
            c = i % columns;
            if (c == 0) tiles = [];
            tiles[c] = $(this);
            h = tiles[c].height();
            if (c == 0 || h > max) max = h;
            if (i == last || c == columns - 1)
                $.each(tiles, function() { this.height(max); });
        });
    };
})(jQuery);
$(window).load(function() {

});
$(window).resize(function() {});
$(window).on("resize", function() {
    if ($(window).width() > 767) {
        $('.services .desc').tile(3);
        $('.services .desc h3').tile(3);
    }
    if ($(window).width() < 767) {
        return false;
    }
}).resize();