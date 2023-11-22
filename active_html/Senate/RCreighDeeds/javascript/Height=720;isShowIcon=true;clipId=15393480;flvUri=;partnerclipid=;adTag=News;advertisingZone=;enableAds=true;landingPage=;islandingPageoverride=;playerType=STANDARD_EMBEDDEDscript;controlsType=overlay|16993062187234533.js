
try
{
	// Adding addtional data in case it is required by client code
	var wnSiteConfigGeneral = {
		"baseUrl": "wcav.web.franklyinc.com",
		"contentDomain": "https://content.worldnow.com",
		"feedsApiDomain": "https://api.worldnow.com",
		"affiliateName": "wcav",
		"affiliateNumber": "1401",
		"staticFarmImagePrefix": "https://wcav.images.worldnow.com",
		"enableCommentsWidget":	"false",
		"cacheVersionBuster" : "7.15.0-5"
	};
}
catch (e) {}

if (typeof wng_pageInfo === 'undefined') {
	var wng_pageInfo = {}; 
}

 
if (typeof wn === 'undefined') {
	document.write('<li' + 'nk rel="stylesheet" type="text/css" href="' + wnSiteConfigGeneral.contentDomain + '/global/css/_pub/off-platform.min.css?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/li' + 'nk>');
  	document.write('<scr' + 'ipt id="wnSDK" type="text/javascript" src="' + wnSiteConfigGeneral.contentDomain + '/global/js/_pub/'+ wnSiteConfigGeneral.affiliateName.toLowerCase() +'.config.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
	document.write('<scr' + 'ipt id="wnAffiliateConfig" type="text/javascript" src="' + wnSiteConfigGeneral.staticFarmImagePrefix + '/interface/js/wnaffiliateconfig.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
  	document.write('<scr' + 'ipt id="wnOffPlatform" type="text/javascript" src="' + wnSiteConfigGeneral.contentDomain + '/global/js/_pub/off-platform.min.js?ver=' + wnSiteConfigGeneral.cacheVersionBuster + '"><\/scr' + 'ipt>');
}
  
/* 
* Embed player. 
*/
var wnEmbedPickUpList = wnEmbedPickUpList || [];
var wnEmbedQS = "";
var wnScriptsOnPage = document.getElementsByTagName('script');
for (var i = 0, l = wnScriptsOnPage.length; i < l; i++) {
  if (wnScriptsOnPage[i].src.toLowerCase().indexOf("/wnvideo.js?") > -1 && wnScriptsOnPage[i].src.indexOf("_EMBEDDEDscript") > -1) {
      wnEmbedQS = "&" + wnScriptsOnPage[i].src.replace(/^[^\?]+\??/, '');
      if (typeof wn !== 'undefined') {
    	  wnEmbedPlayer(wnEmbedQS);
      } else {
    	  wnEmbedPickUpList.push(wnEmbedQS);
	      }
  }
}	
 
    
var wnWidgetsIsProducerURL = new RegExp("://manage[A-Za-z0-9.]*\.worldnow.com");

if (wnWidgetsIsProducerURL.test(document.location.href) == false) {
// Third party reporting includes

}
