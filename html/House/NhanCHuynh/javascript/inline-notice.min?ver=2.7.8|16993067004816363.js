UAGBInlineNotice={init(e,i){i=document.querySelectorAll(i);if(0!==i.length){const t=e.c_id,s=e.cookies,c=e.close_cookie_days,n=Cookies.get("uagb-notice-"+t);for(const l of i){void 0===n&&!0===s&&(l.style.display="block");var o=l.querySelector(".uagb-notice-dismiss");const a=o||l.querySelector("svg");""!==e.noticeDismiss&&""!==e.icon&&a.addEventListener("click",function(){!0===s&&void 0===n&&Cookies.set("uagb-notice-"+t,!0,{expires:c}),this.parentElement.classList.add("uagb-notice__active"),this.parentElement.style.display="none"})}}}};