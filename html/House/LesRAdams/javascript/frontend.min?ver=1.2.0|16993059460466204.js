({"./js/src/frontend.js":function(){var r,i,o,e,n=this;function c(t){var n=r("#gform_".concat(t,":not(.recaptcha-v3-initialized)")),t=n.find("#gform_submit_button_".concat(t));n.on("submit",{form:n},e),t.on("click",{form:n},e),n.addClass("recaptcha-v3-initialized")}r=jQuery,gform,i=grecaptcha,o=gforms_recaptcha_recaptcha_strings,e=function(t){var n=r(t.data.form),e=n.find(".ginput_recaptchav3").find(".gfield_recaptcha_response");e.length&&!e.val().length&&(t.preventDefault(),i.ready(function(){i.execute(o.site_key,{action:"submit"}).then(function(t){t.length&&"string"==typeof t&&e.val(t),n.submit()})}))},r(document).ready(function(){var t;(t=n).init=function(){t.elements={formIds:t.getFormIds()},t.addEventListeners()},t.getFormIds=function(){var n=[];return r("form").each(function(t){n.push(r("form").get(t).id.split("gform_")[1])}),n},t.addEventListeners=function(){t.elements.formIds.forEach(function(t){c(t)}),r(document).on("gform_post_render",function(t,n){c(n)})},t.init()})}})["./js/src/frontend.js"]();