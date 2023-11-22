jQuery(document).ready(function($) {
  
  
  // On scroll add class "shrink"
  
  $(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("nav").addClass("shrink");
  }
  else
  {
    $("nav").removeClass("shrink");
  }
});
  
  
  
  // YOUTUBE LAZY LOAD

    //var youtube = document.querySelectorAll( ".youtubeVideo" );
    var youtube = $(".youtubeVideo");

    for (var i = 0; i < youtube.length; i++) {

      var source = "https://i.ytimg.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";

      var image = new Image();
      image.src = source;
      image.style.width = "100%";
      image.style.position = "absolute";
      image.style.top = "-17%";
      image.style.cursor = "pointer";
      image.addEventListener( "load", function() {
        youtube[ i ].appendChild( image );
      }( i ) );

      var playButtonExt = document.createElement("div");
        playButtonExt.style.position = "absolute";
        playButtonExt.style.top = "50%";
        playButtonExt.style.left = "50%";
        playButtonExt.style.transform = "translate3d(-50%, -50%, 0)";
        playButtonExt.style.width = "90px";
        playButtonExt.style.height = "60px";
        playButtonExt.style.backgroundColor = "#333";
        playButtonExt.style.boxShadow = "0 0 30px rgba( 0,0,0,0.6 )";
        playButtonExt.style.zIndex = "3";
        playButtonExt.style.opacity = "0.8";
        playButtonExt.style.borderRadius = "6px";
        playButtonExt.style.cursor = "pointer";
        playButtonExt.addEventListener( "load", function() {
          youtube[ i ].appendChild( playButtonExt );
        }( i ) );

      var playButtonInt = document.createElement("div");
        playButtonInt.style.position = "absolute";
        playButtonInt.style.top = "50%";
        playButtonInt.style.left = "50%";
        playButtonInt.style.transform = "translate3d(-50%, -50%, 0)";
        playButtonInt.style.borderStyle = "solid";
        playButtonInt.style.borderWidth = "15px 0 15px 26px";
        playButtonInt.style.borderColor = "transparent transparent transparent #fff";
        playButtonInt.style.cursor = "pointer";
        playButtonInt.style.zIndex = "4";
        playButtonInt.addEventListener( "load", function() {
          youtube[ i ].appendChild( playButtonInt );
        }( i ) );


      //'<div class="play-button"></div>'

      youtube[i].addEventListener( "click", function() {

        var iframe = document.createElement( "iframe" );

        iframe.setAttribute( "frameborder", "0" );
        if (this.getAttribute("data-fs") == "true") {
          iframe.setAttribute( "allowfullscreen", "" );
          console.log("its true");
        } else {
          iframe.setAttribute( "fs", "0" );
        }
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" + (this.getAttribute("data-fs") == "true" ? "" : "&fs=0") );

        this.innerHTML = "";
        this.appendChild( iframe );
      } );
    };
    
    
    
    
    
// Click to scroll starts
  
    // Select all links with hashes
  $('a[href*="#"]')
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
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
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
  
//Click to scroll ends

  function masonry_init() {
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });
  }
  
  masonry_init();
  function scroll_animations() {
            var parent = $('.anim_parent');
            var children = $(parent).children();
            children.addClass('hider');

            $(parent).viewportChecker({
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem) {
                var elements = elem.find(children),
                    i = 0;
                interval = setInterval(function(){
                    var time = i/4;
                    elements.eq(i++).addClass('visible animated fadeIn')
                    .css( '-webkit-animation-delay', time+'s' )
                    .css('-moz-animation-delay', time+'s')
                    .css('-ms-animation-delay', time+'s')
                    .css('-o-animation-delay', time+'s')
                    .css('animation-delay', time+'s');

                    if(i==elements.length) {
                        clearInterval(interval);
                    }
                },0);
            }
            });

            $('.anim').viewportChecker({
                classToAdd: 'visible animated fadeIn',
                offset: 100
               });
            $('.anim_left').viewportChecker({
                classToAdd: 'visible animated fadeInLeft',
                offset: 100
               });
            $('.anim_right').viewportChecker({
                classToAdd: 'visible animated fadeInRight',
                offset: 100
               });
            $('.anim_up').viewportChecker({
                classToAdd: 'visible animated fadeInUp',
                offset: 100
               });
    }

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    if (isMobile.matches) {
            $('.anim_parent').children().addClass("visible");
            $('.anim,.anim_left,.anim_right,.anim_up').addClass("visible");
    }
    else{
          //  scroll_animations();
        }
        
        
        ////vp chceker
        
        // Define Animation Objects
        var animations = [
          {className: '.vpa-bounce', animationClass: 'bounce', hideFirst: false },
          {className: '.vpa-flash', animationClass: 'flash', hideFirst: false },
          {className: '.vpa-pulse', animationClass: 'pulse', hideFirst: false },
          {className: '.vpa-rubber-band', animationClass: 'rubberBand', hideFirst: false },
          {className: '.vpa-shake', animationClass: 'shake', hideFirst: false },
          {className: '.vpa-swing', animationClass: 'swing', hideFirst: false },
          {className: '.vpa-tada', animationClass: 'tada', hideFirst: false },
          {className: '.vpa-wobble', animationClass: 'wobble', hideFirst: false },
          {className: '.vpa-jello', animationClass: 'jello', hideFirst: false },
          {className: '.bounce-in', animationClass: 'bounceIn', hideFirst: true },
          {className: '.bounce-in-left', animationClass: 'bounceInLeft', hideFirst: true },
          {className: '.bounce-in-right', animationClass: 'bounceInRight', hideFirst: true },
          {className: '.bounce-in-down', animationClass: 'bounceInDown', hideFirst: true },
          {className: '.bounce-in-up', animationClass: 'bounceInUp', hideFirst: true },
          {className: '.bounce-out', animationClass: 'bounceOut', hideFirst: false },
          {className: '.bounce-out-left', animationClass: 'bounceOutLeft', hideFirst: false },
          {className: '.bounce-out-right', animationClass: 'bounceOutRight', hideFirst: false },
          {className: '.bounce-out-down', animationClass: 'bounceOutDown', hideFirst: false },
          {className: '.bounce-out-up', animationClass: 'bounceOutUp', hideFirst: false },
          {className: '.fade-in', animationClass: 'fadeIn', hideFirst: true },
          {className: '.fade-in-left', animationClass: 'fadeInLeft', hideFirst: true },
          {className: '.fade-in-right', animationClass: 'fadeInRight', hideFirst: true },
          {className: '.fade-in-up', animationClass: 'fadeInUp', hideFirst: true },
          {className: '.fade-in-down', animationClass: 'fadeInDown', hideFirst: true },
          {className: '.fade-in-left-big', animationClass: 'fadeInLeftBig', hideFirst: true },
          {className: '.fade-in-right-big', animationClass: 'fadeInRightBig', hideFirst: true },
          {className: '.fade-in-down-big', animationClass: 'fadeInDownBig', hideFirst: true },
          {className: '.fade-in-up-big', animationClass: 'fadeInUpBig', hideFirst: true },
          {className: '.fade-out', animationClass: 'fadeOut', hideFirst: false },
          {className: '.fade-out-left', animationClass: 'fadeOutLeft', hideFirst: false },
          {className: '.fade-out-right', animationClass: 'fadeOutRight', hideFirst: false },
          {className: '.fade-out-up', animationClass: 'fadeOutUp', hideFirst: false },
          {className: '.fade-out-down', animationClass: 'fadeOutDown', hideFirst: false },
          {className: '.fade-out-left-big', animationClass: 'fadeOutLeftBig', hideFirst: false },
          {className: '.fade-out-right-big', animationClass: 'fadeOutRightBig', hideFirst: false },
          {className: '.fade-out-down-big', animationClass: 'fadeOutDownBig', hideFirst: false },
          {className: '.fade-out-up-big', animationClass: 'fadeOutUpBig', hideFirst: false },
          {className: '.vpa-flip', animationClass: 'flip', hideFirst: false },
          {className: '.flip-in-x', animationClass: 'flipInX', hideFirst: true },
          {className: '.flip-in-y', animationClass: 'flipInY', hideFirst: true },
          {className: '.flip-out-x', animationClass: 'flipOutX', hideFirst: false },
          {className: '.flip-out-y', animationClass: 'flipOutY', hideFirst: false },
          {className: '.light-speed-in', animationClass: 'lightSpeedIn', hideFirst: true},
          {className: '.light-speed-out', animationClass: 'lightSpeedOut', hideFirst: false },
          {className: '.rotate-in', animationClass: 'rotateIn', hideFirst: true },
          {className: '.rotate-in-down-left', animationClass: 'rotateInDownLeft', hideFirst: true },
          {className: '.rotate-in-down-right', animationClass: 'rotateInDownRight', hideFirst: true },
          {className: '.rotate-in-up-left', animationClass: 'rotateInUpLeft', hideFirst: true },
          {className: '.rotate-in-up-right', animationClass: 'rotateInUpRight', hideFirst: true },
          {className: '.rotate-out', animationClass: 'rotateOut', hideFirst: false },
          {className: '.rotate-out-down-left', animationClass: 'rotateOutDownLeft', hideFirst: false },
          {className: '.rotate-out-down-right', animationClass: 'rotateOutDownRight', hideFirst: false },
          {className: '.rotate-out-up-left', animationClass: 'rotateOutUpLeft', hideFirst: false },
          {className: '.rotate-out-up-right', animationClass: 'rotateOutUpRight', hideFirst: false },
          {className: '.slide-in-left', animationClass: 'slideInLeft', hideFirst: true },
          {className: '.slide-in-right', animationClass: 'slideInRight', hideFirst: true },
          {className: '.slide-in-down', animationClass: 'slideInDown', hideFirst: true },
          {className: '.slide-in-up', animationClass: 'slideInUp', hideFirst: true },
          {className: '.slide-out-left', animationClass: 'slideOutLeft', hideFirst: false },
          {className: '.slide-out-right', animationClass: 'slideOutRight', hideFirst: false },
          {className: '.slide-out-down', animationClass: 'slideOutDown', hideFirst: false },
          {className: '.slide-out-up', animationClass: 'slideOutUp', hideFirst: false },
          {className: '.zoom-in', animationClass: 'zoomIn', hideFirst: true },
          {className: '.zoom-in-left', animationClass: 'zoomInLeft', hideFirst: true },
          {className: '.zoom-in-right', animationClass: 'zoomInRight', hideFirst: true },
          {className: '.zoom-in-down', animationClass: 'zoomInDown', hideFirst: true },
          {className: '.zoom-in-up', animationClass: 'zoomInUp', hideFirst: true },
          {className: '.zoom-out', animationClass: 'zoomOut', hideFirst: false },
          {className: '.zoom-out-left', animationClass: 'zoomOutLeft', hideFirst: false },
          {className: '.zoom-out-right', animationClass: 'zoomOutRight', hideFirst: false },
          {className: '.zoom-out-down', animationClass: 'zoomOutDown', hideFirst: false },
          {className: '.zoom-out-up', animationClass: 'zoomOutUp', hideFirst: false },
          {className: '.vpa-hinge', animationClass: 'hinge', hideFirst: false },
          {className: '.roll-in', animationClass: 'rollIn', hideFirst: true },
          {className: '.roll-out', animationClass: 'rollOut', hideFirst: false },
          {className: '.jack-in-the-box', animationClass: 'jackInTheBox', hideFirst: true }
        ];

        // BEGIN jQUERY VIEWPORT CHECKER + ANIMATE JS Tasks

        // Define the Viewport Checker Animate Function
        function viewportAnimate(animations) {
          console.log(animations.length);
          $.each(animations, function(i, v) {
            console.log(v.className+": "+i);
            // Define Hider Class
            var hideChecker = v.hideFirst;
            var hidden;
            // If Hider = True then Set Hidden Class
            if(hideChecker == true) {hidden = "hidden";} else {hidden = "";}
            // Set jQuery Viewport Checker Based on Animation Child Object Config Settings
            $(v.className).addClass(hidden).viewportChecker({
              classToAdd: 'animated visible '+v.animationClass,
              offset: 200
            });
          }); // end for loop
        } // end Viewport Checker Animate Function

        // Execute the Viewport Checker Animate Function
        viewportAnimate(animations);
        
        
        
        
        
        
});






////////////////////////////////////////////////////////////////////////////////

// BOOTSTRAP WP
jQuery( document ).ready( function( $ ) {

    $( 'input.search-field' ).addClass( 'form-control' );

    // the search widget
    $( 'input.search-field' ).addClass( 'form-control' );
    $( 'input.search-submit' ).addClass( 'btn btn-default' );

    $( '.widget_rss ul' ).addClass( 'media-list' );

    $( '.widget_meta ul, .widget_recent_entries ul, .widget_archive ul, .widget_categories ul, .widget_nav_menu ul, .widget_pages ul' ).addClass( 'nav' );

    $( '.widget_recent_comments ul#recentcomments' ).css( 'list-style', 'none').css( 'padding-left', '0' );
    $( '.widget_recent_comments ul#recentcomments li' ).css( 'padding', '5px 15px');

    $( 'table#wp-calendar' ).addClass( 'table table-striped');
} );



//Smooth Scroll
jQuery( document ).ready( function( $ ) {
  var hash = window.location.hash;

  $(function() {
    //window.scrollTo(0, 0);
    if (hash) {
      setTimeout(function() {
        smooth_scroll_anchor()
      }, 500);
    }

  });

  function smooth_scroll_anchor() {
    var target = $(hash);

    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      $('html, body').animate({
        scrollTop: target.offset().top - 120
      }, 300, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
} );
