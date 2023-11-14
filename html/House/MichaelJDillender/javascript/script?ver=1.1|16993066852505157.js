/**
* SVG Animation
*/

// jQuery(document).ready(function($) {
//   jQuery(window).scroll(function () {
//     var y = jQuery(window).scrollTop(),
//         x = jQuery('.stroke').offset().top - 200;
//     if (y > x) {
//       jQuery('.stroke').addClass('animated');
//     } else {
//       jQuery('.stroke').removeClass('animated');
//     }
//   });
// });


/**
* Making Nav Mobile Dropdown full height
*/
jQuery(document).ready(function($) {
  jQuery('.hamburger').click(function(){
      jQuery('body').toggleClass("position-fixed w-100");
  });
});

jQuery(document).ready(function() {
  jQuery('a.navbar-toggler').click(function(){
    // jQuery(this).next('ul').slideToggle('500');
    jQuery(this).find('i').toggleClass('fa-bars fa-times')
  });
});

jQuery(document).ready(function() {
  jQuery('.navbar-collapse').on('show.bs.collapse', function() {
    jQuery(this).addClass('open');
  });

  jQuery('.navbar-collapse').on('hidden.bs.collapse', function() {
    jQuery(this).removeClass('open');
  });
});

jQuery(document).ready(function() {
  jQuery('.navbar-toggler').click(function(){
    jQuery('nav.navbar.nav-absolute').toggleClass('start-transparent');
  });
});

// jQuery(window).scroll(function(){
//   jQuery('nav').toggleClass('bg-white', jQuery(this).scrollTop() > 0);
// });


/**
 * Modal Video
 */

jQuery(document).ready(function($) {
  /**
   * FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
   */
   autoPlayYouTubeModal();

   //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
   function autoPlayYouTubeModal() {
       var trigger = jQuery("body").find('[data-toggle="modal"]');
       trigger.click(function () {
           var theModal = jQuery(this).data("target"),
               videoSRC = jQuery(this).attr("data-theVideo"),
               videoSRCauto = videoSRC + "?autoplay=1";
           jQuery(theModal + ' iframe').attr('src', videoSRCauto);
           jQuery(theModal + ' a.close-modal').click(function () {
               jQuery(theModal + ' iframe').attr('src', videoSRC);
           });
       });
   }
});



/**
* WYSIWYG Blockquote Carousel
*/
jQuery(document).ready(function() {
  jQuery('.entry-content blockquote ul').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});


//Quote Carousel
jQuery(document).ready(function($) {
  jQuery('.quote-wrapper').slick({
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    // prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    // nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    // autoplaySpeed: 5000,
    // speed: 1000,
    // cssEase: 'linear'
  });
});


//Hero Carousel
jQuery(document).ready(function($) {
  jQuery('.hero-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: 'ease-in-out'
  });
});


jQuery(document).ready(function($) {
  jQuery('.hero-carousel').slick({
    dots: false,
    infinite: true,
    // speed: 800,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: 'ease-in-out'
  });
});

//Post Feed Slider
jQuery(document).ready(function($) {
  jQuery('.post-feed-slider.column-1').slick({
    //arrows: false,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    cssEase: 'ease-in-out',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

jQuery(document).ready(function($) {
  jQuery('.post-feed-slider.column-2').slick({
    //arrows: false,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    cssEase: 'ease-in-out',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

jQuery(document).ready(function($) {
  jQuery('.post-feed-slider.column-3').slick({
    //arrows: false,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


//Quote Carousel
jQuery(document).ready(function($) {
  jQuery('.posts-slider.column-2').slick({
    infinite: true,
    dots: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    speed: 1000,
    cssEase: 'ease-in-out',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  jQuery('.posts-slider.column-3').slick({
    //arrows: false,
    infinite: true,
    dots: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


//Adding classes for bootstrap card columns layout
// jQuery( ".entry-content .gallery" ).addClass( "card-columns" );
//jQuery( ".entry-content .gallery .gallery-item" ).addClass( "card" );

//Adding Social Icon Class to icon
jQuery( ".social-wrapper .fab" ).addClass( "social-font-icon" );

//Give Form Widgets Same classes as the others
jQuery( ".gform_description" ).wrapInner( "<p class='widget-text'>");
jQuery( ".gform_title" ).addClass( "widget-title");

jQuery(document).ready(function() {
  jQuery('.gallery').lightGallery({
    selector: 'a',
    nextHtml: '<i class="fas fa-long-arrow-alt-right fa-2x"></i>',
    prevHtml: '<i class="fas fa-long-arrow-alt-left fa-2x"></i>'
  });
});

jQuery(document).ready(function() {
  jQuery('.light-gallery').lightGallery({
    selector: 'a'
  });
});

//YouTube Embed Wrap in bootstrap class
jQuery(document).ready(function() {
  jQuery('.entry-content iframe[src*="youtube.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

jQuery(document).ready(function() {
  jQuery('#general-content iframe[src*="youtube.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

jQuery(document).ready(function() {
  jQuery('.key-messages iframe[src*="youtube.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

jQuery(document).ready(function() {
  jQuery('.pum-container iframe[src*="youtube.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

jQuery(document).ready(function() {
  jQuery('.archive-text iframe[src*="youtube.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

//Facebook responsive embed
jQuery(document).ready(function() {
  jQuery('.entry-content iframe[src*="facebook.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});

jQuery(document).ready(function() {
  jQuery('.flex-section iframe[src*="facebook.com"]').each(function() {
      var url = jQuery(this).attr("src")
      jQuery(this).attr("src",url+"&amp;wmode=transparent").addClass( "embed-responsive-item" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
  });
});


/*
jQuery(document).ready(function() {
  // Select all links with hashes
  jQuery('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

*/


/**
* Image Gallery Carousels
*/
jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-1').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});


jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-2').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-3').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-4').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-5').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-6').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      }
    ]
  });
});

jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-7').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        }
      }
    ]
  });
});

jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-8').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        }
      }
    ]
  });
});

jQuery(document).ready(function() {
  jQuery('.gallery.gallery-size-carousel.gallery-columns-9').slick({
    mobileFirst: true,
    //autoplay: true,
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9,
        }
      }
    ]
  });
});


/**
 * Flex Carousel
 */
 jQuery(document).ready(function() {
  jQuery('.carousel-wrap.centered-mode').slick({
    centerMode: true,
    centerPadding: '150px',
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-2x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-2x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
  });
});


jQuery(document).ready(function() {
  jQuery('.carousel-wrap.items-1').slick({
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

jQuery(document).ready(function() {
  jQuery('.carousel-wrap.items-2').slick({
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.carousel-wrap.items-3').slick({
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.carousel-wrap.items-4').slick({
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});


jQuery(document).ready(function() {
  jQuery('.carousel-wrap.items-5').slick({
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-3x fa-chevron-left"></i></a>',
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-3x fa-chevron-right"></i></a>',
    mobileFirst: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  });
});
