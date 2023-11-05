/**
 * File landing-page.js.
 *
 * Handles any js needed for the landing page template
 */

!function(w, d){
    nameEl = d.querySelector('input#landing-page-form-name');
	emailEl = d.querySelector('input#landing-page-form-email');
	nameEl.setAttribute('placeholder', 'Name (Required)');
	emailEl.setAttribute('placeholder', 'Email (Required)');
}(window, document);
