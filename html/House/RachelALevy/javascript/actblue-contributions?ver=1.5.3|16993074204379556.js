!function(){const e=e=>{const{currentTarget:t}=e,{token:o,refcode:n,amount:a}=t.dataset;o?(window.actblue.requestContribution({token:o,amount:a,refcodes:{refcode:n},onLanded:()=>{t.classList.remove("is-style-outline")}}),t.classList.add("is-style-outline"),e.preventDefault()):console.warn("Warning: the ActBlue token for this button is invalid. Please be sure to add the URL to a valid ActBlue embeddable form in the editor.")};var t;t=()=>{const{actblue:t}=window;"object"==typeof t&&"function"==typeof t.requestContribution?document.querySelectorAll(".js-actblue-donation-button").forEach((t=>{t.addEventListener("click",e)})):console.warn("The actblue.js script is not loaded, but is required.")},"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t,{once:!0})}();