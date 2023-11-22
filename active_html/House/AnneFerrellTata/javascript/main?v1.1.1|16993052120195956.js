$(document).ready(function() {
	
    $('a.dropdown-toggle').click(function() {
        location.href = this.href;
    });

	// variables
	var editing = $('html').hasClass('editing');
	var parallaxbg = $('html').attr('data-parallax-backgrounds');
	var	isMobile = (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	(isMobile) ? $('html').addClass('mobile') : $('html').addClass('no-mobile');
	var hasBackgroundSize = Modernizr.testAllProps('backgroundSize');

	// add in-line svg arrow
	if (!editing) {
		$('body').append('<div class="svg-wrap">'+
			'<svg width="100" height="100" viewBox="0 0 100 100">'+
				'<path id="arrow-left-5" d="M50,71.276c-1.338,0-2.676-0.511-3.696-1.53l-32.099-32.1c-2.042-2.042-2.042-5.352,0-7.393 c2.041-2.041,5.351-2.041,7.393,0L50,58.656l28.402-28.402c2.042-2.041,5.352-2.041,7.393,0c2.042,2.041,2.042,5.351,0,7.393 l-32.099,32.1C52.676,70.766,51.338,71.276,50,71.276z"/>'+
			'</svg>'+
		'</div>');
	}

	// populate slides with data attributes
	var domPosition = 0;
    if(typeof slidesData != 'undefined'){
        $.each(slidesData, function(slideIndex,slideData) {
            slide = $('.lss-slide').eq( domPosition );
            slide.attr('data-index', slideIndex);
            slide.attr('id','slide'+slideIndex);
            $.each(slideData, function(index,value) {
                slide.attr('data-'+index, value);
            });
            ++domPosition;
        });
    }


	var totalSlides = $('.lss-slide').length;
	$('.lss-slide').each(function(i,ele){
		var slide = $(this);
		var current = $(this).attr('data-index');
		var hasHideArrowClass = $(this).hasClass('hide-arrow');

		// add arrow
		var arrowStyle = $('html').attr('data-bottom-arrow');
		if (!editing && ( totalSlides > i+1 ) && arrowStyle != 'hide' && !hasHideArrowClass ) {
			if ( typeof Modernizr.inlinesvg == "undefined" ) {
				Modernizr.addTest('inlinesvg', function() {
					var ns = {'svg': 'http://www.w3.org/2000/svg'};
					var div = document.createElement('div');
					div.innerHTML = '<svg/>';
					return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
				});
			}
			var next = $(this).next('.lss-slide').attr('id');
			var nextHasHideArrowClass = $(this).next('.lss-slide').hasClass('hide-arrow');
			if ( nextHasHideArrowClass ) {
				nextAvailable = $(this).nextAll('.lss-slide').not(".hide-arrow").first().attr('id');
				if (nextAvailable) {
					next = nextAvailable;
				}
			}
			if (Modernizr.inlinesvg) {
				slide.append('<a class="bottom-arrow '+arrowStyle+'" href="#'+next+'">'+
				'<span class="icon-wrap">'+
				'<svg class="icon" width="100" height="100" viewBox="0 0 100 100"><use xlink:href="#arrow-left-5"></svg>'+
				'<svg class="icon" width="100" height="100" viewBox="0 0 100 100"><use xlink:href="#arrow-left-5"></svg>'+
				'</span>'+
				'</a>');
			}
			else {
				slide.append('<a class="bottom-arrow png" href="#'+next+'"></a>');
			}
		}

		// add shadow
		if (!editing && i > 0 && !slide.hasClass('no-shadow')) {
			slide.append('<span class="drop-shadow"></span>');
		}

	});

	//navigation
	var scrollSpeed = parseInt( $('html').attr('data-scroll-speed') );
	if (!scrollSpeed) { scrollSpeed = 800; }
	$('.lss-slides-nav li a, a.bottom-arrow, .goto-slide').on('click', function(e) {
		e.preventDefault();
		var slide = $(this).attr('href');
		var slideOffset = $(slide).offset().top;
		var slideHeight = $(slide).outerHeight();
		var windowHeight = $(window).height();
		var toolbarVisible = $('html').hasClass('ccm-toolbar-visible');
		var toolbarOffset = (toolbarVisible) ? 49 : 0;

		// navigation offset
		if ( slideHeight < windowHeight ) {
			var navOffset = Math.ceil( (windowHeight - slideHeight + toolbarOffset) / 2 );
			// first slide 
			if ( (slideOffset - navOffset) < 0 ) {
				var navOffset = toolbarOffset;
			}
			// last slide
			else if ( (slideOffset + slideHeight + navOffset) > $(document).height() ) {
				var navOffset = windowHeight - slideHeight;
			}
		}
		else {
			var navOffset = toolbarOffset;
		}
		/*
		$(slide).velocity("scroll", {
			duration: scrollSpeed,
			easing:  "easeInOutQuad",
		    offset: -navOffset
		});
		*/
		scrollTo(slideOffset-navOffset,null,scrollSpeed);

	});

	//hide responsive menu after clicking
	$('.lss-slides-nav li a').on('click', function(e) {
		if($('.site-header .navbar-collapse').hasClass('in')) {
			$('.site-header .navbar-collapse').collapse('hide');
		}
	});

	// scrollspy
	if ( $('.onpage-nav .lss-slides-nav').length > 0 ) {
		$('body').scrollspy({ 
			target: '.onpage-nav',
			offset: Math.floor($(window).height() / 2)
		});
	}

	// parallax
	if ( parallaxbg == "css" && !editing && !isMobile && hasBackgroundSize) {
		$('.lss-slides-container').css('background-color', $('body').css('background-color') );
		$('.lss-slide').each(function(i,ele){
			var factor = ($(this).hasClass('no-parallax')) ? 1 : 0.2;
			$(this).parallax({scroll_factor: factor});
		});
	}
	else if ( parallaxbg == "js" && !editing && !isMobile && hasBackgroundSize) {
		$('.lss-slide').each(function(i,ele){
			if (!$(this).hasClass('no-parallax')) {
				$(this).css('background-attachment','fixed');
				$(this).parallax("50%", 0.2);
			}
		});
	}

	// backstretch if necessary
	if ( !hasBackgroundSize ) {
		$('.lss-slide').each(function(i,ele){
			var slide = $(this);
			var bg = slide.css('background-image');
			if(bg!="none"){
			    bg = bg.replace('url("','').replace('")','');
			    bg = bg.replace("url('","").replace("')","");
			    bg = bg.replace('url(','').replace(')','');
				slide.backstretch(bg, {centeredX: true, centeredY: true});
			}
		});
	}

	// prepare scroll reveal
	$('.enter-top-1').attr('data-sr', 'enter top over 0.5s');
	$('.enter-top-2').attr('data-sr', 'enter top over 1.0s');
	$('.enter-top-3').attr('data-sr', 'enter top over 1.5s');
	$('.enter-right-1').attr('data-sr', 'enter right over 0.5s');
	$('.enter-right-2').attr('data-sr', 'enter right over 1.0s');
	$('.enter-right-3').attr('data-sr', 'enter right over 1.5s');
	$('.enter-bottom-1').attr('data-sr', 'enter bottom over 0.5s');
	$('.enter-bottom-2').attr('data-sr', 'enter bottom over 1.0s');
	$('.enter-bottom-3').attr('data-sr', 'enter bottom over 1.5s');
	$('.enter-left-1').attr('data-sr', 'enter left over 0.5s');
	$('.enter-left-2').attr('data-sr', 'enter left over 1.0s');
	$('.enter-left-3').attr('data-sr', 'enter left over 1.5s');
	$('.scale-up-1').attr('data-sr', 'move 0px over 0.5s scale up 15%');
	$('.scale-up-2').attr('data-sr', 'move 0px over 1.0s scale up 15%');
	$('.scale-up-3').attr('data-sr', 'move 0px over 1.5s scale up 15%');
	$('.scale-down-1').attr('data-sr', 'move 0px over 0.5s scale down 15%');
	$('.scale-down-2').attr('data-sr', 'move 0px over 1.0s scale down 15%');
	$('.scale-down-3').attr('data-sr', 'move 0px over 1.5s scale down 15%');

	// init scroll reveal
	if ( $('[data-sr]').length ) {
		if ( Modernizr.testAllProps('transition') && !editing ) {
			window.scrollReveal = new scrollReveal( {
				wait: '0s',
		        enter: 'bottom',
		        move: '50px',
		        reset: true,
		        scale: { direction: 'up', power: '0%' },
		        mobile: true,
		        delay: 'once'
			} );
		}
		else if ( !Modernizr.testAllProps('transition') ) {
			$('[data-sr]').css('visibility', 'visible');
		}
	}

	// init show tips
	$('.tip a').tooltip({placement:'right'});

});

$(window).load(function() {

	// variables
	var editing = $('html').hasClass('editing');
	var parallaxbg = $('html').attr('data-parallax-backgrounds');
	var	isMobile = (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);

	// parallax: add bgcolor to transparent gif and drop-shadow
	$('div.parallax-block').each(function(i,ele){
	  	var domPosition = $('div.parallax-block').length - i - 1;
	  	var current = $('.lss-slide').eq( domPosition ).attr('data-index');
	  	if ( !slidesData[current]['bg-repeat'] ) {
		  	if ( slidesData[current]['color'] ) {
		  		$(this).children('div.parallax-image').css("background", slidesData[current]['color']);
		  	}
		  	else {
		  		$(this).children('div.parallax-image').css("background", $('body').css('background-color') );
		  	}
		}
	  	if (domPosition > 0 && !$('.lss-slide').eq( domPosition ).hasClass('no-shadow') ) {
			$(this).append('<span class="drop-shadow"></span>');
	  	}
	});

	// parallax: remove slide bg and drop-shadow
	if ( parallaxbg == "css" && !editing && !isMobile) {
		$('.lss-slides-container').css('background-color', 'transparent');
		$('.lss-slide').css('background','none');
		$('.lss-slide > .drop-shadow').remove();
	}

});
