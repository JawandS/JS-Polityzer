window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme27"]=window.wsb["Theme27"]||window.radpack("@widget/LAYOUT/bs-layout27-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-112071\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"default\",\"\"],\"colors\":[\"#314c70\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"5ad436fe-f879-4c03-9f73-ce878b4aa72e\":{\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"widgetId\":null,\"routePath\":\"/\"},\"e4cb01f5-db9c-4dc5-98e7-a1154494a262\":{\"pageId\":\"04801018-423c-4d13-82b5-66deb5f460e8\",\"widgetId\":null,\"routePath\":\"/about\"},\"71289a5b-7437-40dd-9390-de22c7369410\":{\"pageId\":\"ae27c1d5-3045-4238-9770-5b87ad05da13\",\"widgetId\":null,\"routePath\":\"/events\"},\"de4acc4d-efa1-4863-9b57-fcaa7fda1ffb\":{\"pageId\":\"879ee14b-1adb-4627-a0f8-de092e290b6c\",\"widgetId\":null,\"routePath\":\"/endorsements\"}},\"isInternalPage\":true,\"navigationMap\":{\"04801018-423c-4d13-82b5-66deb5f460e8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"04801018-423c-4d13-82b5-66deb5f460e8\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"3805e890-d18c-4097-a127-0fe616309ce5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"879ee14b-1adb-4627-a0f8-de092e290b6c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"879ee14b-1adb-4627-a0f8-de092e290b6c\",\"name\":\"Endorsements\",\"href\":\"/endorsements\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"a6e5655b-3150-480f-99da-6e70925edfe2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a6e5655b-3150-480f-99da-6e70925edfe2\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ae27c1d5-3045-4238-9770-5b87ad05da13\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"ae27c1d5-3045-4238-9770-5b87ad05da13\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#314c70\",\"meta\":{\"primary\":\"rgb(49, 76, 112)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]}}},\"theme\":\"Theme27\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-112075\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-112072\",\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"OPEN\",\"decoration\":\"UNDERLINE_WITH_ARROW\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-112074\",\"containerId\":\"navBar-112072\"}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-112070-navId-mobile\",\"uniqueId\":\"n-112070\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"OPEN\",\"decoration\":\"UNDERLINE_WITH_ARROW\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"default\",\"\"],\"colors\":[\"#314c70\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"5ad436fe-f879-4c03-9f73-ce878b4aa72e\":{\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"widgetId\":null,\"routePath\":\"/\"},\"e4cb01f5-db9c-4dc5-98e7-a1154494a262\":{\"pageId\":\"04801018-423c-4d13-82b5-66deb5f460e8\",\"widgetId\":null,\"routePath\":\"/about\"},\"71289a5b-7437-40dd-9390-de22c7369410\":{\"pageId\":\"ae27c1d5-3045-4238-9770-5b87ad05da13\",\"widgetId\":null,\"routePath\":\"/events\"},\"de4acc4d-efa1-4863-9b57-fcaa7fda1ffb\":{\"pageId\":\"879ee14b-1adb-4627-a0f8-de092e290b6c\",\"widgetId\":null,\"routePath\":\"/endorsements\"}},\"isInternalPage\":true,\"navigationMap\":{\"04801018-423c-4d13-82b5-66deb5f460e8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"04801018-423c-4d13-82b5-66deb5f460e8\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"3805e890-d18c-4097-a127-0fe616309ce5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"879ee14b-1adb-4627-a0f8-de092e290b6c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"879ee14b-1adb-4627-a0f8-de092e290b6c\",\"name\":\"Endorsements\",\"href\":\"/endorsements\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"a6e5655b-3150-480f-99da-6e70925edfe2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a6e5655b-3150-480f-99da-6e70925edfe2\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ae27c1d5-3045-4238-9770-5b87ad05da13\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"ae27c1d5-3045-4238-9770-5b87ad05da13\",\"name\":\"Events\",\"href\":\"/events\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#314c70\",\"meta\":{\"primary\":\"rgb(49, 76, 112)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]}}},\"theme\":\"Theme27\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/GALLERY/bs-gallery3-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery3\",\"id\":\"b1211be7-d743-41b8-8dfd-79d80767975d\",\"galleryImages\":[{\"image\":{\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.2839506172839506,\"editedAspectRatio\":\"1.7777777777777777\",\"imageDimension\":null,\"overlayAlpha\":0,\"top\":\"0%\",\"oHeight\":405,\"oWidth\":720,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/93e02824-46f3-41d4-a5d5-36fe938233b5/blob-fe58eca.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\"}}],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"\",\"autoplay\":true,\"autoplayDelay\":\"3.5\",\"transitionType\":\"slide\",\"showSlideNum\":true,\"showArrows\":true,\"fullBleed\":false,\"images\":[{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/93e02824-46f3-41d4-a5d5-36fe938233b5/blob-fe58eca.png/:/\",\"index\":0,\"position\":\"50% 50%\",\"imageData\":{\"width\":\"100%\",\"left\":\"0%\",\"height\":\"100%\",\"position\":\"50% 50%\",\"scale\":0.2839506172839506,\"editedAspectRatio\":\"1.7777777777777777\",\"imageDimension\":null,\"overlayAlpha\":0,\"top\":\"0%\",\"oHeight\":405,\"oWidth\":720,\"filter\":\"NONE\",\"image\":\"//img1.wsimg.com/isteam/ip/93e02824-46f3-41d4-a5d5-36fe938233b5/blob-fe58eca.png\",\"coordinates\":{\"x\":0,\"y\":0},\"rotation\":\"0\",\"src\":\"//img1.wsimg.com/isteam/ip/93e02824-46f3-41d4-a5d5-36fe938233b5/blob-fe58eca.png\"}}],\"renderAsThumbnail\":false,\"widgetId\":\"b1211be7-d743-41b8-8dfd-79d80767975d\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"b1211be7-d743-41b8-8dfd-79d80767975d\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery3\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"OPEN\",\"decoration\":\"UNDERLINE_WITH_ARROW\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"SQUARE\",\"decoration\":\"LINES\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"SQUARE\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/GALLERY/bs-gallery3-Gallery"},false);
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"c15e21db-708f-4452-8ee6-e24286877667\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-112069').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":false,"wam_site_headerTreatment":"Inset","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"INTRODUCTION","wam_site_homepageFirstWidgetPreset":"introduction1","wam_site_businessCategory":"personal_politics","wam_site_theme":"layout27","wam_site_locale":"en-US","wam_site_fontPack":"playfair-display","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);