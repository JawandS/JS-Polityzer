/**
 * File cookies.js.
 *
 * Handles toggling the hello/announcement bar on the front end
 */
;(function($) {

  'use strict';

  $(document).ready(function () {
    if (getCookie('tfchellobar') !== 'hide') {
      $("#hello-bar").slideDown();
    }
  });

})(window.jQuery);

const closeHello = () => {
  setCookie('tfchellobar', 'hide', 0);
  jQuery('#hello-bar').slideUp();
}

const setCookie = (cookieKey, cookieValue, expirationDays) => {
  let expiryDate = '';

  if (expirationDays) {
    const date = new Date();

    date.setTime(`${date.getTime()}${(expirationDays || 30 * 24 * 60 * 60 * 1000)}`);
    let expiresAt = '0';
    if (expirationDays !== 0) {
      expiresAt = date.toUTCString();
    }

    expiryDate = `; expiryDate=" ${expiresAt}`;
  }

  document.cookie = `${cookieKey}=${cookieValue || ''}${expiryDate}; path=/`;
}

const getCookie = (cookieKey) => {
  let cookieName = `${cookieKey}=`;

  let cookieArray = document.cookie.split(';');

  for (let cookie of cookieArray) {

    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
}