window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme15"]=window.wsb["Theme15"]||window.radpack("@widget/LAYOUT/bs-layout15-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-298839\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"poppins\",\"\"],\"colors\":[\"#aB2424\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"e3ee7bc8-9c23-4f66-b7c1-5ae4a39bf405\":{\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"widgetId\":null,\"routePath\":\"/\"},\"77600915-4638-45e4-beef-a0e6c6536375\":{\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"widgetId\":null,\"routePath\":\"/contact-us\"},\"741fbe8d-b2f7-4f07-8839-7d4a154aae53\":{\"pageId\":\"36c30692-e517-462d-b786-494e2683754a\",\"widgetId\":null,\"routePath\":\"/issues\"},\"23e1d3cb-6e33-48b9-943b-af0eced5f192\":{\"pageId\":\"de53cc57-e5de-4d14-8b31-5016c03faaf5\",\"widgetId\":null,\"routePath\":\"/about-christie\"},\"44201dd6-9858-4753-bcd4-720096522d0d\":{\"pageId\":\"ad128013-033d-478b-a2cc-f1ab8a834d86\",\"widgetId\":null,\"routePath\":\"/tickets-and-sponsorships\"},\"afb4e633-4440-4f79-ad80-e1f1f7ff559d\":{\"pageId\":\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\",\"widgetId\":null,\"routePath\":\"/celebrate-women\"}},\"isHomepage\":true,\"navigationMap\":{\"ad128013-033d-478b-a2cc-f1ab8a834d86\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ad128013-033d-478b-a2cc-f1ab8a834d86\",\"name\":\"Tickets and Sponsorships\",\"href\":\"/tickets-and-sponsorships\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3805e890-d18c-4097-a127-0fe616309ce5\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\",\"name\":\"Celebrate Women\",\"href\":\"/celebrate-women\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"de53cc57-e5de-4d14-8b31-5016c03faaf5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"de53cc57-e5de-4d14-8b31-5016c03faaf5\",\"name\":\"About Christie\",\"href\":\"/about-christie\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"32382e89-e243-4afa-93a4-6a337f331f73\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"32382e89-e243-4afa-93a4-6a337f331f73\",\"name\":\"Endorsements\",\"href\":\"/endorsements\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f0a8ae6f-304c-44f2-86c1-d3bf492c8738\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f0a8ae6f-304c-44f2-86c1-d3bf492c8738\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"279f07c0-86e0-47ef-845c-ace2cf822dce\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"279f07c0-86e0-47ef-845c-ace2cf822dce\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"36c30692-e517-462d-b786-494e2683754a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"36c30692-e517-462d-b786-494e2683754a\",\"name\":\"Issues\",\"href\":\"/issues\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#aB2424\",\"meta\":{\"primary\":\"rgb(171, 36, 36)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"poppins\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":15,\"alternate\":{\"id\":\"poppins\",\"name\":\"Poppins\",\"url\":\"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap\",\"family\":\"'Poppins', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme15\",\"paintJob\":\"LIGHT_COLORFUL\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-298843\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-298840\",\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-298842\",\"containerId\":\"navBar-298840\"}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-298838-navId-mobile\",\"uniqueId\":\"n-298838\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function(e){let t,{containerId:o,targetId:n,fontSizes:r,maxLines:a,prioritizeDefault:s}=e;if("undefined"==typeof document)return;const i=document.getElementById(o),c=document.getElementById(n);function l(e){return function(e){const t=parseInt(d(e,"padding-left")||0,10),o=parseInt(d(e,"padding-right")||0,10);return e.scrollWidth+t+o}(e)<=i.clientWidth&&function(e){const t=e.offsetHeight,o=parseInt(d(e,"line-height"),10)||1;return Math.floor(t/o)}(e)<=a}function p(){if(!i||!c||t===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void function(){c.removeAttribute("data-last-size");const e=document.querySelector(`#${n}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`)).sort(((e,t)=>r.indexOf(e.getAttribute("data-size"))-r.indexOf(t.getAttribute("data-size"))));if(i.clientWidth&&e.length){const t=i.style.width||"";i.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${i.clientWidth}px`}));const o=function(e){return e.find(l)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),i.style.width=t;const r=d(o,"font-size"),a=c.getAttribute("data-last-size");if(r&&r!==a){if(s){const e=d(c,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}c.setAttribute("data-last-size",r);let e=document.querySelector(`#${n}-style`);e||(e=document.createElement("style"),e.id=`${n}-style`,document.head.appendChild(e)),e.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function d(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}p(),window.addEventListener("resize",p)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-298870\",\"targetId\":\"dynamic-tagline-298871\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":4}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-298872\",\"targetId\":\"dynamic-tagline-298873\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":4}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"poppins\",\"\"],\"colors\":[\"#aB2424\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"e3ee7bc8-9c23-4f66-b7c1-5ae4a39bf405\":{\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"widgetId\":null,\"routePath\":\"/\"},\"77600915-4638-45e4-beef-a0e6c6536375\":{\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"widgetId\":null,\"routePath\":\"/contact-us\"},\"741fbe8d-b2f7-4f07-8839-7d4a154aae53\":{\"pageId\":\"36c30692-e517-462d-b786-494e2683754a\",\"widgetId\":null,\"routePath\":\"/issues\"},\"23e1d3cb-6e33-48b9-943b-af0eced5f192\":{\"pageId\":\"de53cc57-e5de-4d14-8b31-5016c03faaf5\",\"widgetId\":null,\"routePath\":\"/about-christie\"},\"44201dd6-9858-4753-bcd4-720096522d0d\":{\"pageId\":\"ad128013-033d-478b-a2cc-f1ab8a834d86\",\"widgetId\":null,\"routePath\":\"/tickets-and-sponsorships\"},\"afb4e633-4440-4f79-ad80-e1f1f7ff559d\":{\"pageId\":\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\",\"widgetId\":null,\"routePath\":\"/celebrate-women\"}},\"isHomepage\":true,\"navigationMap\":{\"ad128013-033d-478b-a2cc-f1ab8a834d86\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ad128013-033d-478b-a2cc-f1ab8a834d86\",\"name\":\"Tickets and Sponsorships\",\"href\":\"/tickets-and-sponsorships\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3805e890-d18c-4097-a127-0fe616309ce5\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"770e20fe-5430-4e1a-bfef-7b38bfacd35f\",\"name\":\"Celebrate Women\",\"href\":\"/celebrate-women\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"de53cc57-e5de-4d14-8b31-5016c03faaf5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"de53cc57-e5de-4d14-8b31-5016c03faaf5\",\"name\":\"About Christie\",\"href\":\"/about-christie\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"32382e89-e243-4afa-93a4-6a337f331f73\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"32382e89-e243-4afa-93a4-6a337f331f73\",\"name\":\"Endorsements\",\"href\":\"/endorsements\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f0a8ae6f-304c-44f2-86c1-d3bf492c8738\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f0a8ae6f-304c-44f2-86c1-d3bf492c8738\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"279f07c0-86e0-47ef-845c-ace2cf822dce\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"279f07c0-86e0-47ef-845c-ace2cf822dce\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"36c30692-e517-462d-b786-494e2683754a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"36c30692-e517-462d-b786-494e2683754a\",\"name\":\"Issues\",\"href\":\"/issues\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#aB2424\",\"meta\":{\"primary\":\"rgb(171, 36, 36)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"poppins\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":15,\"alternate\":{\"id\":\"poppins\",\"name\":\"Poppins\",\"url\":\"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap\",\"family\":\"'Poppins', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme15\",\"paintJob\":\"LIGHT_COLORFUL\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/SUBSCRIBE/bs-subscribe2-subscribe-form',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"subscribe2\",\"id\":\"3dc923af-07c0-4c0d-abdd-a67a2805ba43\",\"isInternalPage\":false,\"websiteId\":\"2d0664f8-88d6-46a3-9a00-35c4c18dc2ad\",\"accountId\":\"1fde26dd-e132-11ed-82ce-3417ebe73f0e\",\"hasNonCommercePlan\":true,\"couponToggleHidden\":false,\"sectionTitle\":\"Get involved!\",\"staticContent\":{\"defaultButtonLabel\":\"Sign Up\",\"emailPlaceholderText\":\"Email Address\",\"verificationText\":\"To let us know it's really you and that you'd like to receive emails from us, please click the link in the confirmation email we just sent you. You can unsubscribe from these emails at any time.\",\"emailErrorMessage\":\"Please enter a valid email address.\"},\"confirmationMessage\":\"Excellent! We're excited to send you our next update.\",\"couponConfirmationMessage\":\"Thanks so much for signing up!\",\"description\":\"\",\"inputPlaceholder\":\"Email*\",\"subscribeButtonLabel\":\"Sign up\",\"couponToggle\":false,\"couponDiscount\":0,\"couponDiscountMessage\":\"Use this coupon code {coupon_code} for {discount}% off your first purchase.\",\"couponDescription\":\"Get 10% off your first purchase when you sign up for our newsletter!\",\"widgetId\":\"3dc923af-07c0-4c0d-abdd-a67a2805ba43\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":3,\"widgetId\":\"3dc923af-07c0-4c0d-abdd-a67a2805ba43\",\"widgetType\":\"SUBSCRIBE\",\"widgetPreset\":\"subscribe2\",\"group\":\"Group\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/SUBSCRIBE/bs-subscribe2-subscribe-form"},false);
Core.utils.renderBootstrap({elId:'bs-4',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"Christie New Craig for Senate \",\"reamazeBrandId\":\"2d0664f8-88d6-46a3-9a00-35c4c18dc2ad\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"christienewcraig.com\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"1fde26dd-e132-11ed-82ce-3417ebe73f0e\",\"websiteId\":\"2d0664f8-88d6-46a3-9a00-35c4c18dc2ad\",\"id\":\"5424558b-8fd4-488b-877a-088e96b03543\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"REAMAZE\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#aB2424\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"5424558b-8fd4-488b-877a-088e96b03543\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"5424558b-8fd4-488b-877a-088e96b03543\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"994dc576-da03-4f27-953d-de05ab12812a\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
window.wsb["PopupWidgetScript"]=function(e){let{id:t,cookieName:o,popupDelay:a}=e;if(document.cookie.split(";").find((e=>e.indexOf(o)>=0)))return;const l=document.getElementById(t);setTimeout((()=>{l.style.display="flex"}),1e3*a);const r=document.getElementById(`${t}-close-icon`),i=document.getElementById(`${t}-cta`),p=()=>{const e=new Date;e.setTime(e.getTime()+864e5),document.cookie=[`${o}=true`,`expires=${e.toUTCString()}`,"path=/"].join(";"),l.style.display="none",i&&i.removeEventListener("click",p),r&&r.removeEventListener("click",p)};i&&i.addEventListener("click",p),r&&r.addEventListener("click",p)};
window.wsb["PopupWidgetScript"](JSON.parse("{\"id\":\"popup-widget298877\",\"cookieName\":\"wam_widgets_popup_closed_2d0664f8-88d6-46a3-9a00-35c4c18dc2ad_1697055052633\",\"popupDelay\":\"0\"}"));
document.getElementById('page-298837').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":true,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about1","wam_site_businessCategory":"personal_politics","wam_site_theme":"layout15","wam_site_locale":"en-US","wam_site_fontPack":"playfair-display","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);