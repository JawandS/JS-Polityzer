!function(e){function t(e,n){if(e.hasClass("premium-mask-yes")){if("premium-addon-title.default"===e.data("widget_type")){var t=".premium-title-header";e.find(t).find(".premium-title-icon, .premium-title-img").addClass("premium-mask-span")}else t=".premium-dual-header-first-header";e.find(t).find("span:not(.premium-title-style7-stripe-wrap):not(.premium-title-img)").each(function(e,t){var i="";n(this).text().split(" ").forEach(function(e){""!==e&&(i+=' <span class="premium-mask-span">'+e+"</span>")}),n(this).text("").append(i)}),elementorFrontend.waypoint(e,function(){n(e).addClass("premium-mask-active")})}}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-dual-header.default",t)})}(jQuery);jQuery(window).on("elementor/frontend/init",function(){var e=elementorModules.frontend.handlers.Base.extend({getDefaultSettings:function(){return{selectors:{bannerImgWrap:".premium-banner-ib",bannerImg:"img"}}},getDefaultElements:function(){var e=this.getSettings("selectors");return{$bannerImgWrap:this.$element.find(e.bannerImgWrap),$bannerImg:this.$element.find(e.bannerImg)}},bindEvents:function(){var e=this;e.elements.$bannerImgWrap.hover(function(){e.elements.$bannerImg.addClass("active")},function(){e.elements.$bannerImg.removeClass("active")}),this.run()},run:function(){var e=this.$element;if(e.hasClass("premium-banner-tilt-yes")){var n=e.hasClass("premium-banner-tilt-rev-yes");UniversalTilt.init({elements:e.closest(".elementor-widget"),settings:{reverse:n},callbacks:{onMouseLeave:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0)"},onDeviceMove:function(e){e.style.boxShadow="0 45px 100px rgba(255, 255, 255, 0.3)"}}})}}});elementorFrontend.elementsHandler.attachHandler("premium-addon-banner",e)});