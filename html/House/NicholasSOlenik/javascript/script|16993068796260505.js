window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme27"]=window.wsb["Theme27"]||window.radpack("@widget/LAYOUT/bs-layout27-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-183507\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"eb-garamond\",\"roboto\",\"\"],\"colors\":[\"#1a2e70\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"799b02ff-caf0-46e9-b91c-62a60a23e296\":{\"pageId\":\"8a54154a-18c0-4692-91d4-edd93127d6fd\",\"widgetId\":null,\"routePath\":\"/\"},\"b3345405-0015-46ec-bc64-8553442fbb00\":{\"pageId\":\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\",\"widgetId\":null,\"routePath\":\"/in-the-press-1\"},\"60bd973d-c5c7-4c1b-9a93-a10880a6f9fe\":{\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"widgetId\":null,\"routePath\":\"/get-involved-2\"},\"8d683a7d-3a9d-4ced-8749-a3ab366d7ad3\":{\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"widgetId\":\"677203a8-d93b-44eb-8126-71a5a89421b4\",\"routePath\":\"/get-involved-2\"}},\"isInternalPage\":true,\"navigationMap\":{\"8adfed32-20b7-4ca8-bad0-559aaf36f11f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8adfed32-20b7-4ca8-bad0-559aaf36f11f\",\"name\":\"TWITTER\",\"href\":\"https://twitter.com/Nso23464\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"f226e616-ddd8-4104-a1fd-f5a47cf68448\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"name\":\"GET INVOLVED\",\"href\":\"/get-involved-2\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"ab8dbcdb-64e1-4808-9c48-eefbcc6cdd50\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab8dbcdb-64e1-4808-9c48-eefbcc6cdd50\",\"name\":\"BILL OF RIGHTS\",\"href\":\"https://www.archives.gov/founding-docs/bill-of-rights-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"b3334e1b-dcd3-4ec3-8650-52a48123156b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b3334e1b-dcd3-4ec3-8650-52a48123156b\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f107c6a5-bdd5-473b-ad36-b7a674b23310\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f107c6a5-bdd5-473b-ad36-b7a674b23310\",\"name\":\"USA CONSTITUTION\",\"href\":\"https://www.archives.gov/founding-docs/constitution-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\",\"name\":\"IN THE PRESS\",\"href\":\"/in-the-press-1\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5e26d72a-9136-40ac-8d6f-3dfae3a94248\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5e26d72a-9136-40ac-8d6f-3dfae3a94248\",\"name\":\"PUBLIC APPEARANCES\",\"href\":\"/public-appearances\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"eeb3cdea-0fa1-42ec-af91-720c0f7dc69a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"eeb3cdea-0fa1-42ec-af91-720c0f7dc69a\",\"name\":\"CONSTITUTION OF VIRGINIA\",\"href\":\"https://law.lis.virginia.gov/constitution/\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"e775524e-b830-478c-9e93-3dba961e5655\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e775524e-b830-478c-9e93-3dba961e5655\",\"name\":\"SHOP & SUPPORT\",\"href\":\"https://www.empact.shop/collections/olenik-us\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"544c6421-fad5-48be-a0ee-4f53feb9fd33\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"544c6421-fad5-48be-a0ee-4f53feb9fd33\",\"name\":\"BALLOTPEDIA\",\"href\":\"https://ballotpedia.org/Nicholas_Olenik\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"ca73df7b-dbfd-4da0-b1ff-4201f07c7bbc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ca73df7b-dbfd-4da0-b1ff-4201f07c7bbc\",\"name\":\"DEC. OF INDEPENDENCE\",\"href\":\"https://www.archives.gov/founding-docs/declaration-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"566f4f5e-a0ae-403a-a74c-a4c9bedd900e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"566f4f5e-a0ae-403a-a74c-a4c9bedd900e\",\"name\":\"DONATE\",\"href\":\"https://pay.olenik.us/\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"8a54154a-18c0-4692-91d4-edd93127d6fd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8a54154a-18c0-4692-91d4-edd93127d6fd\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1a2e70\",\"meta\":{\"primary\":\"rgb(26, 46, 112)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"eb-garamond\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":11.5,\"primary\":{\"id\":\"eb-garamond\",\"name\":\"EB Garamond\",\"url\":\"//fonts.googleapis.com/css?family=EB+Garamond&display=swap\",\"family\":\"'EB Garamond', serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme27\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-183513\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-183508\",\"widgetId\":\"14f0aded-ef49-4274-a3d4-f69aea73448e\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"14f0aded-ef49-4274-a3d4-f69aea73448e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"fill\":\"SOLID\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-183512\",\"containerId\":\"navBar-183508\"}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-183506-navId-mobile\",\"uniqueId\":\"n-183506\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"14f0aded-ef49-4274-a3d4-f69aea73448e\",\"section\":\"alt\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"14f0aded-ef49-4274-a3d4-f69aea73448e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"fill\":\"SOLID\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"eb-garamond\",\"roboto\",\"\"],\"colors\":[\"#1a2e70\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"799b02ff-caf0-46e9-b91c-62a60a23e296\":{\"pageId\":\"8a54154a-18c0-4692-91d4-edd93127d6fd\",\"widgetId\":null,\"routePath\":\"/\"},\"b3345405-0015-46ec-bc64-8553442fbb00\":{\"pageId\":\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\",\"widgetId\":null,\"routePath\":\"/in-the-press-1\"},\"60bd973d-c5c7-4c1b-9a93-a10880a6f9fe\":{\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"widgetId\":null,\"routePath\":\"/get-involved-2\"},\"8d683a7d-3a9d-4ced-8749-a3ab366d7ad3\":{\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"widgetId\":\"677203a8-d93b-44eb-8126-71a5a89421b4\",\"routePath\":\"/get-involved-2\"}},\"isInternalPage\":true,\"navigationMap\":{\"8adfed32-20b7-4ca8-bad0-559aaf36f11f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8adfed32-20b7-4ca8-bad0-559aaf36f11f\",\"name\":\"TWITTER\",\"href\":\"https://twitter.com/Nso23464\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"f226e616-ddd8-4104-a1fd-f5a47cf68448\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f226e616-ddd8-4104-a1fd-f5a47cf68448\",\"name\":\"GET INVOLVED\",\"href\":\"/get-involved-2\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"ab8dbcdb-64e1-4808-9c48-eefbcc6cdd50\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab8dbcdb-64e1-4808-9c48-eefbcc6cdd50\",\"name\":\"BILL OF RIGHTS\",\"href\":\"https://www.archives.gov/founding-docs/bill-of-rights-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"b3334e1b-dcd3-4ec3-8650-52a48123156b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b3334e1b-dcd3-4ec3-8650-52a48123156b\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f107c6a5-bdd5-473b-ad36-b7a674b23310\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f107c6a5-bdd5-473b-ad36-b7a674b23310\",\"name\":\"USA CONSTITUTION\",\"href\":\"https://www.archives.gov/founding-docs/constitution-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"d2ef46ea-4439-441c-8479-dc1f4f32ad9e\",\"name\":\"IN THE PRESS\",\"href\":\"/in-the-press-1\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5e26d72a-9136-40ac-8d6f-3dfae3a94248\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5e26d72a-9136-40ac-8d6f-3dfae3a94248\",\"name\":\"PUBLIC APPEARANCES\",\"href\":\"/public-appearances\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"eeb3cdea-0fa1-42ec-af91-720c0f7dc69a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"eeb3cdea-0fa1-42ec-af91-720c0f7dc69a\",\"name\":\"CONSTITUTION OF VIRGINIA\",\"href\":\"https://law.lis.virginia.gov/constitution/\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"e775524e-b830-478c-9e93-3dba961e5655\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e775524e-b830-478c-9e93-3dba961e5655\",\"name\":\"SHOP & SUPPORT\",\"href\":\"https://www.empact.shop/collections/olenik-us\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"544c6421-fad5-48be-a0ee-4f53feb9fd33\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"544c6421-fad5-48be-a0ee-4f53feb9fd33\",\"name\":\"BALLOTPEDIA\",\"href\":\"https://ballotpedia.org/Nicholas_Olenik\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"ca73df7b-dbfd-4da0-b1ff-4201f07c7bbc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ca73df7b-dbfd-4da0-b1ff-4201f07c7bbc\",\"name\":\"DEC. OF INDEPENDENCE\",\"href\":\"https://www.archives.gov/founding-docs/declaration-transcript\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":true},\"566f4f5e-a0ae-403a-a74c-a4c9bedd900e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"566f4f5e-a0ae-403a-a74c-a4c9bedd900e\",\"name\":\"DONATE\",\"href\":\"https://pay.olenik.us/\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"8a54154a-18c0-4692-91d4-edd93127d6fd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8a54154a-18c0-4692-91d4-edd93127d6fd\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1a2e70\",\"meta\":{\"primary\":\"rgb(26, 46, 112)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"eb-garamond\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":11.5,\"primary\":{\"id\":\"eb-garamond\",\"name\":\"EB Garamond\",\"url\":\"//fonts.googleapis.com/css?family=EB+Garamond&display=swap\",\"family\":\"'EB Garamond', serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"roboto\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":18,\"alternate\":{\"id\":\"roboto\",\"name\":\"Roboto\",\"url\":\"//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,700,700i,900&display=swap\",\"family\":\"'Roboto', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme27\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/HTML/bs-Component',props:JSON.parse("{\"data-aid\":\"AUTOIFRAME_RENDERED\",\"centerContent\":true,\"htmlSrc\":\"<iframe width='1020' height='628' src='https://washingtonpost.com/video/c/embed/231aa4a3-db40-445a-bee9-b49cf401c71e' style='border: none' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\",\"widgetId\":\"c1c49c80-8424-43f7-9dea-75a029afc8e9\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"c1c49c80-8424-43f7-9dea-75a029afc8e9\",\"widgetType\":\"HTML\",\"widgetPreset\":\"html1\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"fill\":\"SOLID\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}}},\"widgetThemeOverrides\":{\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":null,\"style\":{\"fontSize\":null}}}}}}}"),contextKey:'context-bs-3',radpack:"@widget/HTML/bs-Component"},false);
window.wsb["MarqueeScript"]=function(e){var a,t;const{marqueeId:o,contentId:n,clonesId:r,bannerId:l,speed:c,iterations:i}=e,s=!("undefined"!=typeof window&&(null===(a=(t=window).matchMedia)||void 0===a?void 0:a.call(t,"(prefers-reduced-motion: reduce)").matches)),d=document.getElementById(o);if(!1===s)return void d.setAttribute("data-scrolling","false");let g=i;let p=i,u=0,b=0;const m=document.getElementById(n),y=document.getElementById(r),f=document.getElementById(l);function E(e){let a;if(e.borderBoxSize){a=(Array.isArray(e.borderBoxSize)?e.borderBoxSize[0]:e.borderBoxSize).inlineSize}else a=e.target.getBoundingClientRect().width;return a}const w=new ResizeObserver((e=>{for(const a of e){const e=E(a),t=e>u;u=e,t&&150!==p&&R()}})),h=new ResizeObserver((e=>{for(const a of e)b=E(a),R()}));function R(){if(u&&b){const e=Math.ceil(2*u/b),a=e+e%2;if(g=Math.min(150,Math.max(i,a)),f.style.animationDuration=b*g*c+"s",p===g)return;p=g;const t=y.firstElementChild.cloneNode(!0);y.innerHTML=t.outerHTML.repeat(g-1)}}return w.observe(d),h.observe(m),()=>{w.disconnect(),h.disconnect()}};
window.wsb["MarqueeScript"](JSON.parse("{\"marqueeId\":\"marquee_183549\",\"contentId\":\"marquee_183549_content\",\"clonesId\":\"marquee_183549_clones\",\"bannerId\":\"marquee_183549_banner\",\"speed\":0.011,\"iterations\":6}"));
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"b52fdd4a-daeb-4074-91cb-c39f1066632c\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-183505').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":false,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"COUNTDOWN","wam_site_homepageFirstWidgetPreset":"countdown1","wam_site_businessCategory":"personal_politics","wam_site_theme":"layout27","wam_site_locale":"en-US","wam_site_fontPack":"eb-garamond","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":false,"wam_site_htmlWidget":true};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);