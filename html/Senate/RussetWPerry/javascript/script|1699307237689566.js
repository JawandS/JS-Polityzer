window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme19"]=window.wsb["Theme19"]||window.radpack("@widget/LAYOUT/bs-layout19-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-97410\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"merriweather\",\"helvetica\",\"\"],\"colors\":[\"#003258\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"3c459e59-10d2-4848-8600-b1fad194442b\":{\"pageId\":\"a57fe266-48e6-4d1f-8ad6-b3a4086dacb5\",\"widgetId\":null,\"routePath\":\"/womens-rights\"},\"2fd491a1-dd62-4f20-a1a4-0820f8c90dab\":{\"pageId\":\"beafabf0-92ca-438a-8f0e-48896495ca9b\",\"widgetId\":null,\"routePath\":\"/bwldc-press-release\"},\"4e2171d6-d109-470d-82ce-fcde6760d270\":{\"pageId\":\"4905c496-8784-4340-ac38-50930dfd033d\",\"widgetId\":null,\"routePath\":\"/votevets-endorse\"},\"f462177e-5374-4db9-90f5-370857ddaee0\":{\"pageId\":\"124c697e-3715-4650-947b-56e5527ce58d\",\"widgetId\":null,\"routePath\":\"/kincaid-endorse\"},\"60a0c9c9-62aa-408c-a1ba-e85e63534f66\":{\"pageId\":\"17248493-4cd8-4fe5-a73f-16476f759474\",\"widgetId\":null,\"routePath\":\"/helmer-endorse\"},\"a98bf869-ce18-444e-8001-dd794908800e\":{\"pageId\":\"0141c911-dd33-4c34-9cc0-a9e831610146\",\"widgetId\":null,\"routePath\":\"/protecting-environment-2\"},\"096fce93-f3f4-4194-98f2-14169305bdf8\":{\"pageId\":\"8de44ec7-ab36-4774-b4c0-797b40a9795d\",\"widgetId\":null,\"routePath\":\"/january-finance-release-1\"},\"dc98285f-a6ca-4197-9e18-8ccbabf14bb6\":{\"pageId\":\"242ea716-7c99-4bea-bc28-44298f6b836c\",\"widgetId\":null,\"routePath\":\"/moms-demand\"},\"c92ca449-75d6-46cc-9bdc-8daf8983777c\":{\"pageId\":\"8de44ec7-ab36-4774-b4c0-797b40a9795d\",\"widgetId\":null,\"routePath\":\"/january-finance-release-1\"},\"b5414c08-accc-4a35-90b9-7d7adc1b690c\":{\"pageId\":\"62baaec6-1430-48ab-a8d4-e72483c2ec23\",\"widgetId\":null,\"routePath\":\"/april-fundraising\"},\"7c272c50-9dcf-4633-928c-a48a4387a509\":{\"pageId\":\"87d98f75-e5f8-4a7b-9ef8-ee666a4edd48\",\"widgetId\":null,\"routePath\":\"/climate-cab-press-release\"},\"ea056111-74f9-4476-a9e0-b8f07c976f13\":{\"pageId\":\"aeb59732-81f8-4a19-998e-fb1607ddb91c\",\"widgetId\":null,\"routePath\":\"/menstrual-press-release\"},\"f78172f9-c922-40ff-be44-69eaf517dbb9\":{\"pageId\":\"2ccd8d75-f0d1-4319-805b-233c97b3d983\",\"widgetId\":null,\"routePath\":\"/primary-win\"},\"931e4d90-cfee-4787-94c7-3b4bf850253f\":{\"pageId\":\"ca051961-1b76-4c8d-93f6-bd84ff3508b0\",\"widgetId\":null,\"routePath\":\"/civilized-debate-1\"},\"9775695c-e3d9-4116-a56c-dcbd13b45f1f\":{\"pageId\":\"f2a953cc-3228-4f3c-826b-442264ce2cb3\",\"widgetId\":null,\"routePath\":\"/first-on-ballot-release\"},\"d4a95c72-142e-4fab-8698-30edf6f08c0e\":{\"pageId\":\"ded8de72-ee09-49fa-9b72-35fde2a02499\",\"widgetId\":null,\"routePath\":\"/ensure-criminal-justice\"},\"bf596018-3e4c-499d-86c8-26d1a3cb8d1e\":{\"pageId\":\"d7e5e9dd-6adf-4622-8529-2c4f33dc374b\",\"widgetId\":null,\"routePath\":\"/12%2F2%2F22-press-release\"},\"1cad1c73-af9a-4626-b4ab-97551d13c0db\":{\"pageId\":\"8f9be2e1-40b6-40ed-8be5-594080b225bb\",\"widgetId\":null,\"routePath\":\"/affordable-virginia\"},\"74090328-9deb-4f93-8934-d8ba8496944c\":{\"pageId\":\"ec72860a-4959-45fc-b174-e8c3e0689ba9\",\"widgetId\":null,\"routePath\":\"/virginias-list-endorse\"},\"f991cbc9-6169-4e59-bc68-482d74196dd0\":{\"pageId\":\"5454fa96-df1f-4acc-bcce-1bde12ef43a8\",\"widgetId\":null,\"routePath\":\"/pipe-trades-endorse\"},\"07070c7b-de2f-4d56-977d-b186a5c5cfa8\":{\"pageId\":\"1e5b3d40-eec7-4763-a5f9-0a2d321f5afb\",\"widgetId\":null,\"routePath\":\"/kaine-endorse\"},\"cdc3727c-c180-42b1-ad39-353dd596177f\":{\"pageId\":\"53abb775-aaf3-4eb4-8c83-0f1b9d76a16d\",\"widgetId\":null,\"routePath\":\"/northam-press-release\"},\"96f3aaca-72fb-4dfa-ad38-e46d53804955\":{\"pageId\":\"4905c496-8784-4340-ac38-50930dfd033d\",\"widgetId\":null,\"routePath\":\"/votevets-endorse\"},\"f1fc5293-d8a7-4569-a4b5-db0d1b06d446\":{\"pageId\":\"20d32f19-06c8-496a-a430-819d83b60312\",\"widgetId\":null,\"routePath\":\"/on-the-issues\"},\"8c257e06-c7ca-4e36-9551-bdd509585437\":{\"pageId\":\"6c284c47-9303-4899-89c7-30982d524437\",\"widgetId\":null,\"routePath\":\"/now-press-release\"},\"aad2bab6-e12e-4fe4-af09-8cfc9f321019\":{\"pageId\":\"07b4f1c9-04af-466b-9c32-f2cb7e442acc\",\"widgetId\":null,\"routePath\":\"/media\"},\"04d2611b-9ce6-444c-9e29-d770eaf20570\":{\"pageId\":\"4f84b1d9-e997-4a25-8365-3fb65f7a7f27\",\"widgetId\":null,\"routePath\":\"/spanbereger-endorse\"},\"5c20d1e4-33b0-4398-a1af-16be7c8ab8da\":{},\"238664a2-1245-4a40-9792-30bb221fc8f4\":{\"pageId\":\"eda244da-e8b9-4e19-ac09-f113eec1ce9a\",\"widgetId\":null,\"routePath\":\"/vsdc-press-release\"},\"aeff1679-61d4-4cd6-a092-5187bb7f324e\":{\"pageId\":\"37d99975-58e7-4b33-949e-2c4dc10bdf39\",\"widgetId\":null,\"routePath\":\"/vet-issues\"},\"13a5f95d-3583-4eaa-b893-019f30282712\":{\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"widgetId\":null,\"routePath\":\"/contact-us\"},\"f0adc598-9d39-43d7-a1a8-bb7087a993b4\":{\"pageId\":\"40d29559-7645-4508-985d-9e88ee6d15b2\",\"widgetId\":null,\"routePath\":\"/health-care-2\"},\"c19bc92c-4386-43ff-be22-2895bc67fca8\":{\"pageId\":\"0a08d3df-9042-4351-8062-a27533aa1781\",\"widgetId\":null,\"routePath\":\"/prevent-firearm-violence-1\"},\"e7f8074b-e23d-4985-87e4-c57b38ea0536\":{\"pageId\":\"7fd0866d-4fda-40c9-8a80-307d4103a065\",\"widgetId\":null,\"routePath\":\"/drug-issues\"},\"0a11e913-529a-432f-9d46-6b6c982a4758\":{\"pageId\":\"ab0c388e-bcb0-4469-a188-32c71af4f5e1\",\"widgetId\":null,\"routePath\":\"/vote-now\"},\"b729f045-eb4e-45e5-bac4-c579daeec184\":{\"pageId\":\"f3749900-dfc3-4961-95eb-4b6114b4b507\",\"widgetId\":null,\"routePath\":\"/meet-russet\"},\"0e4042bc-7d40-4695-b963-0490f2ca2211\":{\"pageId\":\"351add7d-a585-40f7-8f32-82b80c6530e5\",\"widgetId\":null,\"routePath\":\"/deeds-press-release\"},\"3b1b0d26-8851-4a09-bbfc-2321cd338547\":{\"pageId\":\"53abb775-aaf3-4eb4-8c83-0f1b9d76a16d\",\"widgetId\":null,\"routePath\":\"/northam-press-release\"},\"f3b7010d-54e8-4d26-ae87-626e15d79348\":{\"pageId\":\"ed58ebbd-0634-46f4-b954-a622912a2960\",\"widgetId\":null,\"routePath\":\"/support-strong-schools-1\"},\"4ba1e0d7-0c6e-49a8-92b2-f6d21497c790\":{\"pageId\":\"351add7d-a585-40f7-8f32-82b80c6530e5\",\"widgetId\":null,\"routePath\":\"/deeds-press-release\"},\"e588e938-8bed-4a93-b12f-64ba559c62d4\":{\"pageId\":\"2c442968-4e72-4aee-a3d4-ecd195fad714\",\"widgetId\":null,\"routePath\":\"/pp-endorse\"},\"bd295076-c862-45c8-93ce-a57aef7b99de\":{\"pageId\":\"5454fa96-df1f-4acc-bcce-1bde12ef43a8\",\"widgetId\":null,\"routePath\":\"/pipe-trades-endorse\"},\"d2dc052e-6aae-46a7-a009-c26f8ff4a080\":{\"pageId\":\"124c697e-3715-4650-947b-56e5527ce58d\",\"widgetId\":null,\"routePath\":\"/kincaid-endorse\"},\"43dd5a55-5c8f-4b56-adad-0eb06b20c7dc\":{\"pageId\":\"b59b7428-bc42-4ac7-abbd-d12bd8843099\",\"widgetId\":null,\"routePath\":\"/wapo-endorse\"},\"a4dc426a-d1c7-4801-9144-09a371c07b04\":{\"pageId\":\"242ea716-7c99-4bea-bc28-44298f6b836c\",\"widgetId\":null,\"routePath\":\"/moms-demand\"},\"46c2a635-d369-4e2d-b4fd-55f387d542c8\":{\"pageId\":\"ec72860a-4959-45fc-b174-e8c3e0689ba9\",\"widgetId\":null,\"routePath\":\"/virginias-list-endorse\"},\"3f886137-eb58-4465-9e32-abb2f8c64177\":{\"pageId\":\"dbe18906-7eea-42ff-a997-23bcda2fd579\",\"widgetId\":null,\"routePath\":\"/freedomva-endorse\"},\"1907a53a-676b-4ee4-83fc-02b40e0136ff\":{\"pageId\":\"e84704c4-73ca-43a2-ba21-9de099e81ccd\",\"widgetId\":null,\"routePath\":\"/gooditis-endorse\"},\"c829b3bd-e163-4a84-9c10-5d28b5faa287\":{\"pageId\":\"d49beef2-288b-4c7d-a205-04ac07882e96\",\"widgetId\":null,\"routePath\":\"/stoney-endorse\"},\"d9cababc-80d2-4a5e-914a-36bb038625d2\":{\"pageId\":\"b59b7428-bc42-4ac7-abbd-d12bd8843099\",\"widgetId\":null,\"routePath\":\"/wapo-endorse\"},\"8d151a7c-b30a-47fd-88c8-8d7263dca1a2\":{\"pageId\":\"91ebb9cf-263a-45b3-93a5-32728083b36e\",\"widgetId\":null,\"routePath\":\"/protecting-vulnerable-cit-1\"},\"2019e612-73ca-4864-99ca-055267483f76\":{\"pageId\":\"4f84b1d9-e997-4a25-8365-3fb65f7a7f27\",\"widgetId\":null,\"routePath\":\"/spanbereger-endorse\"},\"554145c6-7d74-4e91-bf1f-bcea4df0e5ca\":{\"pageId\":\"beafabf0-92ca-438a-8f0e-48896495ca9b\",\"widgetId\":null,\"routePath\":\"/bwldc-press-release\"},\"eecff3bb-2367-4760-9e36-73a0959c74b5\":{\"pageId\":\"2c442968-4e72-4aee-a3d4-ecd195fad714\",\"widgetId\":null,\"routePath\":\"/pp-endorse\"},\"efe3ea79-5dda-47d4-947a-55a01c503bbe\":{\"pageId\":\"aeb59732-81f8-4a19-998e-fb1607ddb91c\",\"widgetId\":null,\"routePath\":\"/menstrual-press-release\"},\"e544a689-d5e1-4a7a-a2c3-fe60e5c88b0f\":{\"pageId\":\"dbe18906-7eea-42ff-a997-23bcda2fd579\",\"widgetId\":null,\"routePath\":\"/freedomva-endorse\"},\"1a620004-050e-4f67-bb6b-b95f482266b7\":{\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"widgetId\":null,\"routePath\":\"/contact-us\"},\"30d04aa9-c93b-4658-aeaa-fd7ccc6a6677\":{\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"widgetId\":null,\"routePath\":\"/\"},\"57be93fd-9469-426c-818c-b018b729b170\":{\"pageId\":\"b8b9e61e-2997-47e3-b859-b924eea795d7\",\"widgetId\":null,\"routePath\":\"/wexton-press-release-1\"}},\"isInternalPage\":true,\"navigationMap\":{\"7fd0866d-4fda-40c9-8a80-307d4103a065\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"7fd0866d-4fda-40c9-8a80-307d4103a065\",\"name\":\"drug issues\",\"href\":\"/drug-issues\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"aeb59732-81f8-4a19-998e-fb1607ddb91c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"aeb59732-81f8-4a19-998e-fb1607ddb91c\",\"name\":\"Menstrual press release\",\"href\":\"/menstrual-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ded8de72-ee09-49fa-9b72-35fde2a02499\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ded8de72-ee09-49fa-9b72-35fde2a02499\",\"name\":\"Ensure criminal justice\",\"href\":\"/ensure-criminal-justice\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b8b9e61e-2997-47e3-b859-b924eea795d7\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b8b9e61e-2997-47e3-b859-b924eea795d7\",\"name\":\"Wexton press release\",\"href\":\"/wexton-press-release-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ec72860a-4959-45fc-b174-e8c3e0689ba9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ec72860a-4959-45fc-b174-e8c3e0689ba9\",\"name\":\"Virginias list endorse\",\"href\":\"/virginias-list-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"17248493-4cd8-4fe5-a73f-16476f759474\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"17248493-4cd8-4fe5-a73f-16476f759474\",\"name\":\"Helmer endorse\",\"href\":\"/helmer-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3805e890-d18c-4097-a127-0fe616309ce5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3805e890-d18c-4097-a127-0fe616309ce5\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a31b278f-b0ae-4e2b-8a59-f33c6a6aea85\",\"name\":\"Contact Us\",\"href\":\"/contact-us\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"20d32f19-06c8-496a-a430-819d83b60312\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"20d32f19-06c8-496a-a430-819d83b60312\",\"name\":\"On the issues\",\"href\":\"/on-the-issues\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6c284c47-9303-4899-89c7-30982d524437\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6c284c47-9303-4899-89c7-30982d524437\",\"name\":\"NOW press release\",\"href\":\"/now-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"befbaf69-5d7e-45bf-949c-4c3c99bbd4f3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"befbaf69-5d7e-45bf-949c-4c3c99bbd4f3\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"124c697e-3715-4650-947b-56e5527ce58d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"124c697e-3715-4650-947b-56e5527ce58d\",\"name\":\"Kincaid endorse\",\"href\":\"/kincaid-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"beafabf0-92ca-438a-8f0e-48896495ca9b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"beafabf0-92ca-438a-8f0e-48896495ca9b\",\"name\":\"BWLDC press release\",\"href\":\"/bwldc-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"b59b7428-bc42-4ac7-abbd-d12bd8843099\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b59b7428-bc42-4ac7-abbd-d12bd8843099\",\"name\":\"WAPo endorse\",\"href\":\"/wapo-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0a08d3df-9042-4351-8062-a27533aa1781\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0a08d3df-9042-4351-8062-a27533aa1781\",\"name\":\"Prevent Firearm Violence\",\"href\":\"/prevent-firearm-violence-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"4905c496-8784-4340-ac38-50930dfd033d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4905c496-8784-4340-ac38-50930dfd033d\",\"name\":\"votevets endorse\",\"href\":\"/votevets-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"4f84b1d9-e997-4a25-8365-3fb65f7a7f27\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4f84b1d9-e997-4a25-8365-3fb65f7a7f27\",\"name\":\"spanbereger endorse\",\"href\":\"/spanbereger-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8f9be2e1-40b6-40ed-8be5-594080b225bb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8f9be2e1-40b6-40ed-8be5-594080b225bb\",\"name\":\"Affordable Virginia\",\"href\":\"/affordable-virginia\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"62baaec6-1430-48ab-a8d4-e72483c2ec23\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"62baaec6-1430-48ab-a8d4-e72483c2ec23\",\"name\":\"april fundraising \",\"href\":\"/april-fundraising\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"91ebb9cf-263a-45b3-93a5-32728083b36e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"91ebb9cf-263a-45b3-93a5-32728083b36e\",\"name\":\"Protecting vulnerable cit\",\"href\":\"/protecting-vulnerable-cit-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8de44ec7-ab36-4774-b4c0-797b40a9795d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8de44ec7-ab36-4774-b4c0-797b40a9795d\",\"name\":\"January finance release\",\"href\":\"/january-finance-release-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"242ea716-7c99-4bea-bc28-44298f6b836c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"242ea716-7c99-4bea-bc28-44298f6b836c\",\"name\":\"moms demand\",\"href\":\"/moms-demand\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2c442968-4e72-4aee-a3d4-ecd195fad714\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2c442968-4e72-4aee-a3d4-ecd195fad714\",\"name\":\"PP endorse\",\"href\":\"/pp-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"329dc713-d6b1-41dc-ab6e-ce99f3165d69\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"329dc713-d6b1-41dc-ab6e-ce99f3165d69\",\"name\":\"Contribute\",\"href\":\"https://secure.actblue.com/donate/friends-of-russet-perry-2?refcode=website\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"ed58ebbd-0634-46f4-b954-a622912a2960\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"ed58ebbd-0634-46f4-b954-a622912a2960\",\"name\":\"Support Strong Schools\",\"href\":\"/support-strong-schools-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"53abb775-aaf3-4eb4-8c83-0f1b9d76a16d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"53abb775-aaf3-4eb4-8c83-0f1b9d76a16d\",\"name\":\"Northam press release\",\"href\":\"/northam-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1e5b3d40-eec7-4763-a5f9-0a2d321f5afb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1e5b3d40-eec7-4763-a5f9-0a2d321f5afb\",\"name\":\"Kaine endorse\",\"href\":\"/kaine-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"37d99975-58e7-4b33-949e-2c4dc10bdf39\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"37d99975-58e7-4b33-949e-2c4dc10bdf39\",\"name\":\"Vet issues\",\"href\":\"/vet-issues\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5454fa96-df1f-4acc-bcce-1bde12ef43a8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5454fa96-df1f-4acc-bcce-1bde12ef43a8\",\"name\":\"Pipe Trades endorse\",\"href\":\"/pipe-trades-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"40d29559-7645-4508-985d-9e88ee6d15b2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"40d29559-7645-4508-985d-9e88ee6d15b2\",\"name\":\"Health Care\",\"href\":\"/health-care-2\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"6e70b049-7aee-437a-8ed4-8dce92e2ce67\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6e70b049-7aee-437a-8ed4-8dce92e2ce67\",\"name\":\"Endorsements\",\"href\":\"/endorsements\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a57fe266-48e6-4d1f-8ad6-b3a4086dacb5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a57fe266-48e6-4d1f-8ad6-b3a4086dacb5\",\"name\":\"Women's Rights\",\"href\":\"/womens-rights\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0141c911-dd33-4c34-9cc0-a9e831610146\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0141c911-dd33-4c34-9cc0-a9e831610146\",\"name\":\"Protecting environment\",\"href\":\"/protecting-environment-2\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"dbe18906-7eea-42ff-a997-23bcda2fd579\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"dbe18906-7eea-42ff-a997-23bcda2fd579\",\"name\":\"Freedomva endorse\",\"href\":\"/freedomva-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ab0c388e-bcb0-4469-a188-32c71af4f5e1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab0c388e-bcb0-4469-a188-32c71af4f5e1\",\"name\":\"Vote Now\",\"href\":\"/vote-now\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"eda244da-e8b9-4e19-ac09-f113eec1ce9a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"eda244da-e8b9-4e19-ac09-f113eec1ce9a\",\"name\":\"VSDC Press release \",\"href\":\"/vsdc-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2ccd8d75-f0d1-4319-805b-233c97b3d983\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2ccd8d75-f0d1-4319-805b-233c97b3d983\",\"name\":\"primary win\",\"href\":\"/primary-win\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f3749900-dfc3-4961-95eb-4b6114b4b507\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f3749900-dfc3-4961-95eb-4b6114b4b507\",\"name\":\"Meet Russet\",\"href\":\"/meet-russet\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"87d98f75-e5f8-4a7b-9ef8-ee666a4edd48\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"87d98f75-e5f8-4a7b-9ef8-ee666a4edd48\",\"name\":\"Climate Cab press release\",\"href\":\"/climate-cab-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"d49beef2-288b-4c7d-a205-04ac07882e96\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d49beef2-288b-4c7d-a205-04ac07882e96\",\"name\":\"Stoney endorse\",\"href\":\"/stoney-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f2a953cc-3228-4f3c-826b-442264ce2cb3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f2a953cc-3228-4f3c-826b-442264ce2cb3\",\"name\":\"First on Ballot release\",\"href\":\"/first-on-ballot-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"d7e5e9dd-6adf-4622-8529-2c4f33dc374b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d7e5e9dd-6adf-4622-8529-2c4f33dc374b\",\"name\":\"12/2/22 press release\",\"href\":\"/12%2F2%2F22-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"351add7d-a585-40f7-8f32-82b80c6530e5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"351add7d-a585-40f7-8f32-82b80c6530e5\",\"name\":\"Deeds press release\",\"href\":\"/deeds-press-release\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ca051961-1b76-4c8d-93f6-bd84ff3508b0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ca051961-1b76-4c8d-93f6-bd84ff3508b0\",\"name\":\"Civilized Debate\",\"href\":\"/civilized-debate-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"07b4f1c9-04af-466b-9c32-f2cb7e442acc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"07b4f1c9-04af-466b-9c32-f2cb7e442acc\",\"name\":\"Media\",\"href\":\"/media\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"e84704c4-73ca-43a2-ba21-9de099e81ccd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e84704c4-73ca-43a2-ba21-9de099e81ccd\",\"name\":\"Gooditis endorse\",\"href\":\"/gooditis-endorse\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#003258\",\"meta\":{\"primary\":\"rgb(0, 50, 88)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"merriweather\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":22,\"primary\":{\"id\":\"merriweather\",\"name\":\"Merriweather\",\"url\":\"//fonts.googleapis.com/css?family=Merriweather:900&display=swap\",\"family\":\"'Merriweather', serif\",\"size\":14,\"weight\":900,\"weights\":[900]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"alternate\":{\"id\":\"helvetica\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":6,\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme19\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"left\":true,\"toggleId\":\"n-97408-navId-mobile\",\"uniqueId\":\"n-97408\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"size\":\"small\"}},\"HeadingAlpha\":{\"byType\":{\"GroupHeading\":{\"value\":{\"typography\":\"HeadingDelta\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingDelta\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":1.4}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-97419\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"n-9740897416-navBarId\",\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"84f65112-9350-46fb-a480-81d2901e2f5e\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"size\":\"small\"}},\"HeadingAlpha\":{\"byType\":{\"GroupHeading\":{\"value\":{\"typography\":\"HeadingDelta\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingDelta\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":1.4}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-97418\",\"containerId\":\"n-9740897416-navBarId\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u,stickyNavParent:h}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&h&&!h.style.height&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav97411\",\"anchorId\":\"header_stickynav-anchor97412\",\"logoHeight\":93,\"hasAnimation\":true}"));
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"baf2a053-b7ba-403c-95dd-ff7ad875e680\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-97407').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":false,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"INTRODUCTION","wam_site_homepageFirstWidgetPreset":"introduction1","wam_site_businessCategory":"personal_politics","wam_site_theme":"layout19","wam_site_locale":"en-US","wam_site_fontPack":"merriweather","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":true,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);