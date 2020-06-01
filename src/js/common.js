var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  mousewheelControl: true,
  initialSlide: 12,
  loop: true,
  coverflowEffect: {
    //rotate: 5,
    rotate: 10,
    stretch: 6,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    sensitivity: 2,
  },
  slideToClickedSlide: true,
});
// swiper.on('slideChange', function () {
//   var elNotActive = $('.swiper-container .swiper-slide a')

//   elNotActive.on('click', function (e) {
//     e.preventDefault();
//   })

//   var elActive = $('.swiper-container .swiper-slide.swiper-slide-active a');

//   elActive.on('click', function () {
//     console.log('blah')
//   })
//   console.log('slide changed');
// });

$(document).ready(function () {
  // Script to hide/show menu
  var controls = document.querySelector(".main-header__controls");
  var toggle = document.querySelector(".main-nav__toggle");
  var topNav = document.querySelector(".main-nav");
  var body = document.querySelector("body");

  toggle.addEventListener(
    "click",
    function () {
      topNav.classList.toggle("main-nav--opened");
      toggle.classList.toggle("main-nav__toggle--opened");
      //body.classList.toggle("main-page--opened");
      controls.classList.toggle("main-header__controls--opened");
    },
    false
  );

  var sliderList = 0;

  $(".slider__list").each(function () {
    sliderList++;
    $(this)
      .addClass("slider__list-" + sliderList)
      .slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        //adaptiveHeight: true,
        // slidesToShow: 1,
        // centerMode: true,
        // variableWidth: true
      });
  });

  var numSlick = 0;
  $(".text__slider-for").each(function () {
    numSlick++;
    $(this)
      .addClass("slider-" + numSlick)
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        autoplay: false,
        centerMode: false,
        asNavFor: ".text__slider-nav.slider-" + numSlick,
        vertical: true,
        infinite: false,
        speed: 0,
        // variableWidth: (orientation_vertical ? false : true),
        // verticalSwiping: (orientation_vertical ? true : false),
        // vertical: orientation_vertical,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: false,
            },
          },
          //settings: "unslick"
        ],
      });
  });

  var numSlickNav = 0;

  $(".text__slider-nav").each(function () {
    numSlickNav++;

    $(this)
      .addClass("slider-" + numSlickNav)
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".text__slider-for.slider-" + numSlickNav,
        dots: false,
        infinite: false,
        speed: 700,
        centerMode: false,
        variableWidth: false,
        focusOnSelect: true,
        draggeble: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              // variableWidth: false,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
              // variableWidth: false,
            },
          },
          {
            breakpoint: 580,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  });

  // $('.text__slider-for').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   arrows: false,
  //   focusOnSelect: true,
  //   autoplay: false,
  //   centerMode: false,
  //   asNavFor: '.text__slider-nav',
  //   vertical: true,
  //   infinite: false,
  //   speed: 0,
  //   // variableWidth: (orientation_vertical ? false : true),
  //   // verticalSwiping: (orientation_vertical ? true : false),
  //   // vertical: orientation_vertical,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 580,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     //settings: "unslick"
  //   ]
  // });

  // $('.text__slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   asNavFor: '.text__slider-for',
  //   dots: false,
  //   infinite: false,
  //   speed: 700,
  //   centerMode: false,
  //   variableWidth: false,
  //   focusOnSelect: true,
  //   draggeble: true,
  //   responsive: [{
  //       breakpoint: 1400,
  //       settings: {
  //         arrows: false
  //         // variableWidth: false,

  //       }
  //     }, {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         // variableWidth: false,

  //       }
  //     },
  //     {
  //       breakpoint: 580,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  $(".publications__popup-pic").magnificPopup({
    type: "image",
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  jQuery(".popup-gallery").each(function () {
    // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      type: "image",
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      closeOnContentClick: true,
      midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("data-title");
        },
      },
    });
  });

  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  //   },
  //   type: 'image',
  //   removalDelay: 500, //delay removal by X to allow out-animation
  //   callbacks: {
  //     beforeOpen: function () {
  //       // just a hack that adds mfp-anim class to markup
  //       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
  //       this.st.mainClass = this.st.el.attr('data-effect');
  //     }
  //   },
  //   closeOnContentClick: true,
  //   midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //     titleSrc: function (item) {
  //       return item.el.attr('data-title');
  //     }
  //   }
  // });
});

$(".before-after").imagesLoaded(function () {
  $(".before-after").twentytwenty({
    before_label: "До реставрации",
    after_label: "После реставрации",
  });
});

$(".before-after-eng").imagesLoaded(function () {
  $(".before-after-eng").twentytwenty({
    before_label: "Before restoration",
    after_label: "After restoration",
  });
});

$(".popup-youtube").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false,
});

// On the container, apply a left offset of 50% (screen center) - minus half image width.

// $(window).on('resize', function () {
//   // Mesure your images and divide by 2.
//   var imgWidth = $(".before-after img").width() / 2;

//   // On the container, apply a left offset of 50% (screen center) - minus half image width.
//   $(".before-after").css({
//     "position": "relative",
//     "left": "calc(50% - " + imgWidth + "px)"
//   });
// })

// $(window).on('load', function () {
//   $(".before-after").twentytwenty();
// });

// $(window).on("resize", function () {
//   $(".twentytwenty").twentytwenty();
// });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
var shareBtn = document.querySelector(".share-block__btn");

shareBtn.addEventListener("click", function () {
  document
    .querySelector(".share-block")
    .classList.toggle("share-block--active");
});
