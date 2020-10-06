/*========================================================================= */
/*  Preloader
/* ========================================================================= */

(function ($) {

    // end preview pannel
    //========================================================================


    //initiating wow js
    var wow = new WOW({
            mobile: false
        }
    );
    wow.init();


    // getting window width
    //var windowWidth  = $(window).width();
    var windowWidth = {
        value: $(window).width()
    }

    $(window).resize(function (event) {
        windowWidth.value = $(window).width();
        canvasResponsive();
    });

    //window height
    var bannerHeight = $(window).height();

    //store navigation height
    var navigationHeight = $(".navbar-default").height();

    //calculate window height without nav height
    var fitScreen = bannerHeight - navigationHeight;

    //stucky header

    /*$(".sticky-header").sticky({
        topSpacing: 0
    });*/

    if (!$(".sticky-header").parent().is(".sticky-head-wrapper")) {
        $(".sticky-header").wrap('<div class="sticky-head-wrapper"></div>').parent().css("height", navigationHeight);
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 0) {
            $(".sticky-header").addClass("on");
        } else {
            $(".sticky-header").removeClass("on");
        }
    });

    /*=================================================================
        Animated Header
    =================================================================*/

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".navbar-default").addClass("animated");
            $(".slidedown-nav").slideDown();
            $(".page-menu").addClass("page-navbg");
            $(".top-head").slideUp();
            $(".header-mid").slideUp();
            $(".header2 .header-top").slideUp();
            $(".show-top-bar .header-top").slideUp();
            $(".header-top.opened").slideUp();
        } else {
            $(".navbar-default").removeClass('animated');
            $(".slidedown-nav").slideUp();
            $(".page-menu").removeClass("page-navbg");
            $(".top-head").slideDown();
            $(".header-mid").slideDown();
            $(".header2 .header-top").slideDown();
            $(".show-top-bar .header-top").slideDown();
            $(".header-top.opened").slideDown();
        }
    });

    $(".header-widget-toogle").on("click", function () {
        $(".header-widget-inner").slideToggle(600);
    });

    $('.navbar-nav>li>a').each(function () {
        if ($(this).next().is('ul')) {
            $(this).append('<i class="drpdownSign"></i>');
        }
    });

    $(".navbar-nav > li:not(.mega-menu) > ul li a").each(function () {
        if ($(this).next().is("ul")) {
            $(this).append('<i class="fa fa-angle-right"></i>');
        }
    });

    // drop down for mobile from 320
    if (windowWidth.value <= 767) {
        $(".navbar-nav li a").each(function () {
            if ($(this).next().is("ul")) {
                //change the dropdown icon, right arrow to down arrow
                $(this).children(".fa-angle-right").addClass("fa-angle-down");
            }
        });
    }

    $(window).resize(function () {
        if (windowWidth.value <= 767) {
            $(".navbar-nav li a").each(function () {
                if ($(this).next().is("ul")) {
                    //change the dropdown icon, right arrow to down arrow
                    $(this).children(".fa-angle-right").addClass("fa-angle-down");
                }
            });
        }
    });
    if($('body').hasClass('home')) {

        $(".navbar-nav li a").on("click", function (event) {
            if (windowWidth.value < 768) {
                if ($(this).next().is("ul")) {
                    event.preventDefault();
                    // slide down menu in mobile on click
                    $(this).next("ul").slideToggle(800)
                }
            }
        });
    }

    $(".vertical-nav li>a").each(function () {
        if ($(this).next().is("ul")) {
            $(this).append("<i class=\"drpdownSign\"></i>");
        }
    });

    // nav toggle in tablet
    $(".navbar-toggle2").on('click', function () {
        $(".ac-nav .navbar-nav").slideToggle();
    });

    $(".slide-top .hide-top").on("click", function () {
        $(".header-top").slideToggle();
    });

    //apply the height
    $(".fitscreen").css("height", fitScreen);
    $(".fullscreen").css("height", bannerHeight);

    $(window).resize(function () {
        $(".fitscreen").css("height", fitScreen);
        $(".fullscreen").css("height", bannerHeight);
    });

    if ($("body").children().hasClass("bordered")) {
        $("header > div").removeClass("container");
        $("section > div").removeClass("container");
        $("section > .overlay > div").removeClass("container");
        $("footer > div").removeClass("container");
        $("header > div").addClass("container-fluid");
        $("section > div").addClass("container-fluid");
        $("section > .overlay > div").addClass("container-fluid");
        $("footer > div").addClass("container-fluid");
        $("section > .overlay").removeClass("container-fluid");
        $("#parallax > .overlay > div").removeClass("container-fluid");
        $("#parallax > .overlay > div").addClass("container");
        $("#teatimonial > .overlay > div").removeClass("container-fluid");
        $("#teatimonial > .overlay > div").addClass("container");
        $(".home-banner13 > div").removeClass("container-fluid");
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > fitScreen) {
            $(".bottom-head").addClass('navbar-fixed-top');
        } else {
            $(".bottom-head").removeClass('navbar-fixed-top');
        }
    });

    $(".navbar-nav").singlePageNav({
        offset: $(".navbar-default").outerHeight(),
        currentClass: "current",
        easing: "easeInOutExpo",
        filter: ":not(.external)"
    });

    $(".footer-nav").onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'easeInOutExpo'
    });

    // vertical dropdown
    $(".vertical-nav>ul>li").hover(
        function () {
            $(this).children(".dropdown").stop(true, true).slideDown("medium");
            $(this).children("a").find(".drpdownSign").addClass("opened");
        },
        function () {
            $(this).children(".dropdown").stop(true, true).slideUp("medium");
            $(this).children("a").find(".drpdownSign").removeClass("opened");
        }
    );
    $(".vertical-nav .dropdown>li").hover(
        function () {
            $(this).children("ul").stop(true, true).slideDown("medium");
            $(this).children("a").find(".drpdownSign").addClass("opened");
        },
        function () {
            $(this).children("ul").stop(true, true).slideUp('medium');
            $(this).children("a").find(".drpdownSign").removeClass("opened");
        }
    );

    if ($(window).width() <= 768) {
        $(".vertical-selector").removeClass("vertical-inner-content");
    }
    ;

    $(".mobile-nav-toggle").on("click", function () {
        $(".vertical-nav").slideToggle("slow");
    });

    // uncomment the code for landing page,
    // comment the code for multi page.
    // slide up expanded menu in mobile when click
    // on a menu item
    if($('body').hasClass('home')) {
        $(".navbar-nav li a").on("click", function (e) {
            e.preventDefault;
            if ($(window).width() <= 767) {
                if ($(this).next().is("ul")) {
                    return false;
                } else {
                    $(".navbar-toggle").trigger("click");
                }
            }
            ;
        });
    }

    $(".nav-toggle").on('click', function (event) {
        event.preventDefault();
        $(".navbar-collapse .navbar-nav").slideToggle(400);
    });

    $(".side-nav").on("click", function (event) {
        event.preventDefault();
        $(".slide-menu-sec").toggleClass("opened");
    });

    $(".close-slide-nav").on("click", function (event) {
        event.preventDefault();
        $(".slide-menu-sec").removeClass("opened");
    });

    $(".sidebar-nav ul li").hover(
        function () {
            $(this).children("ul").stop(true, true).slideDown('medium');
        },
        function () {
            $(this).children("ul").stop(true, true).slideUp('medium');
        }
    );


    // Slider for business.php
    /*
    $(".init-slider1").owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        autoplay: false,
        smartSpeed: 800,
        mouseDrag: false,
        autoplayHoverPause: true
    });

*/

    // home slider

    $("#home-carousel").carousel({
        interval: 4000
    });

    $('a.link[href^="#"]').on('click', function (e) {
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + $(".navbar-default").height()
        }, 900);
        return 0
    });


    /*-------------------------------------------------*/
    /* =  Photography
    /*-------------------------------------------------*/

    //init kenburn slider
    canvasResponsive();

    /*-------------------------------------------------*/
    /* =  video
    /*-------------------------------------------------*/

    if (self.location.href == top.location.href) {
    }


    /*=================================================================
        widget-img-slideshow
    =================================================================*/

    $(".widget-img-slideshow").bxSlider({
        pager: false,
        autoHover: true,
        touchEnabled: true,
        adaptiveHeight: true,
        auto: true
    });


    /*=================================================================
        Accordion
    =================================================================*/

    $('.eydia-ac .panel-heading .panel-title a').on('click', function () {
        $('.panel-heading').removeClass('active');
        $(this).parents('.panel-heading').addClass('active');
    });

    $('#faq .panel-heading a').on('click', function (e) {
        if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    /*=================================================================
        Remove Placeholder On click
    =================================================================*/


    $('input').focusin(function () {
        $('input').data('holder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });
    $('input').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });
    $('textarea').focusin(function () {
        $('textarea').data('holder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });
    $('textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });

    /*=================================================================
        Back to top
    =================================================================*/


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#go-top").fadeIn(500)
        } else {
            $("#go-top").fadeOut(500)
        }
    });
    $("#go-top").on('click', function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });


    /*======================================
        Personal 2
    ========================================*/

    $(".service-block").on("click", function () {
        $(this).children().children(".sb-hover").fadeToggle("slow");
        $(this).siblings().children().children(".sb-hover").fadeOut("slow");
    });

    $(window).scroll(function () {

        var navColor = $(".cd-section").attr("data-nav-color");

        if ($(window).scrollTop() <= $(".slider-wrapper").height()) {
            $("#cd-vertical-nav").fadeOut("slow");
        } else {
            $("#cd-vertical-nav").fadeIn("slow");
        }
        $("#cd-vertical-nav li").each(function () {
            var dataTemp = {
                top: $(this).offset().top,
                thisItem: $(this)
            }
            $(".cd-section").each(function () {
                if ($(this).offset().top <= dataTemp.top && ($(this).offset().top + $(this).outerHeight()) >= dataTemp.top) {
                    dataTemp.thisItem.find("span").css("border-color", $(this).attr("data-nav-color"));
                }
            });

        });
    })

    function smoothScroll(target) {
        $("body,html").animate({
            "scrollTop": target.offset().top - 100
        }, 600);
    };


})(jQuery);

$(window).on("load", function () {
    $("#preloader").fadeOut("slow");

    /*=================================================================
        Parallax
    =================================================================*/
    if ($(window).width() > 1024) {
        $(".test-parallax").parallax("50%", 0.1);
        $(".text-parallax").parallax("50%", 0.6);
        $(".parallax-subs").parallax("50%", 0.3);
        $("#teatimonial").parallax("50%", 0.1);
        $("#parallax").parallax("50%", 0.1);
        $(".cta-parallax").parallax("50%", 0.5);
        $(".parallax1").parallax("50%", 0.1);
        $(".parallax2").parallax("50%", 0.1); // rsvp, wedding
        $(".parallax3").parallax("50%", 0.5);
        $(".parallax4").parallax("50%", 0.5);
        $(".parallax5").parallax("50%", 0.5);
        $(".parallax6").parallax("50%", 0.5);
        $(".parallax7").parallax("50%", 0.5);
        $(".parallax8").parallax("50%", 0.5);
        $(".parallax9").parallax("50%", 0.5);
        $(".parallax10").parallax("50%", 0.5);
        $(".parallax11").parallax("50%", 0.5);
        $(".parallax12").parallax("50%", 0.5);
        $(".parallax13").parallax("50%", 0.5);
        $(".parallax14").parallax("50%", 0.5);
        $(".parallax15").parallax("50%", 0.5);
        $(".parallax16").parallax("50%", 0.5);
        $(".parallax17").parallax("50%", 0.5);
        $(".parallax18").parallax("50%", 0.5);
        $(".parallax19").parallax("50%", 0.5);
        $(".parallax20").parallax("50%", 0.5);
        $(".parallax21").parallax("50%", 0.5);
        $(".parallax22").parallax("50%", 0.5);
        $(".parallax23").parallax("50%", 0.5);
        $(".parallax24").parallax("50%", 0.5);
        $(".parallax25").parallax("50%", 0.5);
        $(".parallax26").parallax("50%", 0.5);
        $(".parallax27").parallax("50%", 0.5);
        $(".parallax28").parallax("50%", 0.5);
        $(".parallax29").parallax("50%", 0.5);
        $(".parallax30").parallax("50%", 0.5);
        $(".app-home").parallax("50%", 0.5);
        $(".parallax-home").parallax("50%", 0.5);
        $(".parallax-cta").parallax("50%", 0.5);
    }
    ;

});



// ========== END GOOGLE MAP ========== //

$(function () {
    // post thumb slider
    $("ul.post-thumb").bxSlider({
        pager: false,
        adaptiveHeight: true,
        mode: "fade"
        //onSliderLoad: function(){}
    });

    // blog 2 column
    $(".blog-masonry").masonry({
        columnWidth: 0,
        itemSelector: '.col-xs-12'
    });





});

$(".social_animation a i").on("mouseover", function () {
    $(".social_animation a span").removeClass("current");
    $(".social_animation a").each(function () {
        if ($(this).hasClass("prev_color")) {
            $(this).children("span").css("z-index", 3);
        } else {
            $(this).children("span").css("z-index", "1")
        }
    });
    $(this).prev().css({
        "z-index": 4
    }).addClass("current");

    $(this).prev("span").css({
        "width": 0,
        "height": 0,
        "margin": "auto",
        "background-color": $(this).prev("span").attr("data-color")
    })
    $(this).prev("span").animate({
        "margin-left": -2500,
        "margin-top": -2500,
        "width": 5000,
        "height": 5000
    }, 2500)
})

$(".social_animation a i").on("mouseleave", function () {
    $(".social_animation a").removeClass("prev_color");
    $(this).parent().addClass("prev_color");
})

$(".social_animation").on("mouseleave", function () {
    $(".social_animation a span").each(function () {
        if ($(this).hasClass("current")) {
            $(this).animate({
                "width": 0,
                "height": 0,
                "margin": 0
            }, 700)
        } else {
            $(this).animate({
                "width": 0,
                "height": 0,
                "margin": 0
            }, 0)
        }
    })
})

function checkCompareId(id, data) {
    var cOptions = {
        id: id,
        added: false
    }
    if (typeof data !== "object")
        data = null;

    $(".compareProductList li").each(function (index, el) {
        if ($(this).attr("data-product-id") == cOptions.id) {
            cOptions.added = true;
        }
    });

    if (cOptions.added == true) {
        if ($.type(data) == "object") {
            data.addClass("added");
        } else {
            $(".enable_-_compare").addClass("added");
        }

    } else {
        if ($.type(data) == "object") {
            data.removeClass("added");
        } else {
            $(".enable_-_compare").removeClass("added");
        }
    }
    return false;
}

function removeCompare(id) {
    var cOptions = {
        id: id,
        added: false
    }
    $(".compareProductList li").each(function (index, el) {
        if ($(this).attr("data-product-id") == cOptions.id) {
            $(this).remove();
        }
    });

    $(".compareProductList li").each(function (index, el) {
        if ($(this).attr("data-product-id") == cOptions.id) {
            $(this).remove();
        }
    });

    $(".chkProductID").each(function (index, el) {
        if ($(this).attr("data-product-id") == cOptions.id) {
            $(this).find(".enable_-_compare").removeClass("added");
        }
    });
    return false;
}

/* Canvas responsive */

function canvasResponsive() {
    $(".canvas-responsive").attr({
        "width": $(window).width(),
        "height": $(window).innerHeight()
    })
}
