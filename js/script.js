// JavaScript Document
$(document).ready(function () {
    "use strict";
    var trigger = $('.menu-trigger');
    var menu = $('#gnd_left');

    $(trigger).each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 1));
        });
    });

    $(trigger).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w_width = $(window).width();
        if (w_width > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });


    if ($('#top_nav').length) { // make sure element exists

        $(window).scroll(function () { // scroll event
            var el = $('#top_nav'),
                el_logo = $('#logo');
            var windowTop = $(window).scrollTop(); // returns number
            if (windowTop > 0) {
                el.css({
                    position: 'fixed',
                    top: 0,
                    background: "rgba(240,240,240,0.92)",
                    borderBottom: "1px solid #ddd"
                });
                el_logo.addClass('logo');
            } else {
                el.css({
                    position: "relative",
                    background: "none",
                    borderBottom: "none"
                });
                el_logo.removeClass('logo');
            }
        });
    }


    var $menu = $('#gnd_left li'),
        $contents = $('.contents'),
        $doc = $('html, body');

    $menu.on('click', 'a', function (e) {
        e.preventDefault();
        var $target = $(this).parent(),
            idx = $target.index(),
            section = $contents.eq(idx),
            offsetTop = section.offset().top - 60;
        $doc.stop().animate({
            scrollTop: offsetTop
        }, 800);
        return false;
    });

    $(window).scroll(function (e) {
        e.preventDefault();
        var scltop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top - 62;
            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });


    //skill 효과
    if ($('.skill').length) { // make sure ".skill" element exists
        $(window).scroll(function () { // scroll event
            var el = $('.skill ul>li>.list>span');
            var contnetTop = $('.skill').offset().top - 500; // returns number
            var contentHeight = $('.skill').height();
            var limit = contnetTop + contentHeight + 500;

            var windowTop = $(window).scrollTop(); // returns number

            if (contnetTop < windowTop) {
                el.addClass("skill_move");
            } else {
                el.removeClass("skill_move");
            }
            if (limit < windowTop) {
                el.removeClass("skill_move");
            }

        });
    }
});