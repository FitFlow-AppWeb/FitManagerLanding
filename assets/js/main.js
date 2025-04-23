 /*--------------------------------------------------------------
    Scripts initialization
--------------------------------------------------------------*/

$.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function () {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: false,
    mirror: false,
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    dynamicBackground();
    swiperInit();
    modalVideo();
    scrollUp();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });

/*--------------------------------------------------------------
     Sticky Header
--------------------------------------------------------------*/
function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".ak-sticky_header");
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("ak-gescout_sticky");
      } else {
        $header.removeClass("ak-gescout_sticky");
        $header.removeClass("ak-gescout_show");
      }

      if ($header.hasClass("ak-gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("ak-gescout_show");
        } else {
          $header.removeClass("ak-gescout_show");
        }
      }

      lastScrollTop = windowTop;
    });
  }

    /*--------------------------------------------------------------
     6. Scroll Up
--------------------------------------------------------------*/
function scrollUp() {
    $(".ak-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }
  // For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".ak-scrollup").addClass("ak-scrollup-show");
    } else {
      $(".ak-scrollup").removeClass("ak-scrollup-show");
    }
  }

  /*--------------------------------------------------------------
    7. Accordion
 --------------------------------------------------------------*/
  if ($.exists(".ak-accordion-title")) {
    $(".ak-accordion-title").click(function () {
      $(this).toggleClass("active");
      var $accordionTab = $(this).next(".ak-accordion-tab");
      $accordionTab.slideToggle();
      $accordionTab
        .parent()
        .siblings()
        .find(".ak-accordion-tab")
        .slideUp()
        .prev()
        .removeClass("active");
    });
  }

  /*--------------------------------------------------------------
    8. Sticky Content
 --------------------------------------------------------------*/

  if ($.exists(".classespages-details-content.style1")) {
    var top =
      $("#sidebar").offset().top -
      parseFloat($("#sidebar").css("marginTop").replace(/auto/, 0));
    var footTop =
      $("#footer").offset().top -
      parseFloat($("#footer").css("marginTop").replace(/auto/, 0));

    var maxY = footTop - $("#sidebar").outerHeight();

    $(window).scroll(function (evt) {
      var y = $(this).scrollTop();
      if (y > top && $(this).innerWidth() > 991) {
        if (y < maxY) {
          $("#sidebar").addClass("fixed").removeAttr("style");
        } else {
          $("#sidebar")
            .removeClass("fixed")
            .css({
              position: "absolute",
              top: maxY - top + "px",
            });
        }
      } else {
        $("#sidebar").removeClass("fixed");
      }
    });
  }
