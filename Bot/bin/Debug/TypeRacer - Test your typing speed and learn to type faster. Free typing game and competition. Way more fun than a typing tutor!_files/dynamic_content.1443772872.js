trackEvent("DynamicContent","Loaded",null,new Date().getTime()-typeracerSessionStartTime);
var _newAdPolicies=[{name:"adsABTest11_A",frames:[{E:["iframe/ab_test_a:336x280","teachers:50x50","iframe/ab_test_a2:300x250"],S:["iframe/ab_test_a:728x90"]},{W:["iframe/ab_test_a:160x600"],E:["iframe/ab_test_a2:336x280","teachers:50x50","iframe/ab_test_a3:300x250"]},{E:["iframe/ab_test_a3:336x280","teachers:50x50","iframe/ab_test_a4:300x250"],S:["iframe/ab_test_a3:728x90"]}],fixedFrameCount:1},{name:"adsABTest11_B",frames:[{E:["iframe/ab_test_b:336x280","teachers:50x50","iframe/ab_test_b2:300x250"],S:["iframe/ab_test_b:728x90"]},{W:["iframe/ab_test_b:160x600"],E:["iframe/ab_test_b2:336x280","teachers:50x50","iframe/ab_test_b3:300x250"]},{N:["iframe/ab_test_b2:728x90"],E:["iframe/ab_test_b3:336x280","teachers:50x50","iframe/ab_test_b4:300x250"]}],fixedFrameCount:1},{name:"adsABTest11_C",frames:[{E:["iframe/ab_test_c:336x280","teachers:50x50","iframe/ab_test_c2:300x250"],S:["iframe/ab_test_c:728x90"]},{W:["iframe/ab_test_c:160x600"],E:["iframe/ab_test_c2:336x280","teachers:50x50","iframe/ab_test_c3:300x250"]},{E:["iframe/ab_test_c2:160x600"],W:["iframe/ab_test_c3:336x280","teachers:50x50","iframe/ab_test_c4:300x250"]}],fixedFrameCount:1}];
function getNewAdPolicy(a){for(var b=0;b<_newAdPolicies.length;b++){var c=_newAdPolicies[b];
if(c.name==a){return c}}return{name:"default",frames:[{E:["iframe/ab_test_a:336x280","teachers:50x50","iframe/ab_test_a2:300x250"],S:["iframe/ab_test_a:728x90"]},{W:["iframe/ab_test_a:160x600"],E:["iframe/ab_test_a2:336x280","teachers:50x50","iframe/ab_test_a3:300x250"]},{E:["iframe/ab_test_a3:336x280","teachers:50x50","iframe/ab_test_a4:300x250"],S:["iframe/ab_test_a3:728x90"]}],fixedFrameCount:1}
}function genIframeAdCode(b,e,a){var d=randInt();var c=["http://typeracer.com/dynamic_content/","typing_game","_",b,"_",e,"x",a,".html","?t=",d].join("");
return['<iframe id="',b,"_iid_",d,"\" src='",c,"'",' name="',b,"_iname_",d,"\" marginwidth='0' marginheight='0'"," width='",e,"' height='",a,"' border='0' frameborder='0' style='border:none;' scrolling='no' tabIndex='-1'></iframe>"].join("")
}function _log(b){var a=window.console;if(a){a.log(b)}}function _logError(b){var a=window.console;
if(a){if(a.error){a.error(b)}if(b.message){a.log("Error.message: "+b.message)}else{if(b.description){a.log("Error.description: "+b.description)
}}}}function _containsPII(a){return decodeURIComponent(a).indexOf("@")>=0}function _genAdDiv(a){if(_containsPII(window.location.search)||_containsPII(document.referrer)){return makeDiv("")
}var b="adDiv"+new Date().getTime()+"_"+randInt(32768);return makeDivWithAttrs({id:b},makeDivWithAttrs({style:"color:#AAA; font-size:75%;"},makeElement("span",null,"Advertisement:")+makeElement("span",{style:"margin-left:18px;"},'(<a href="javascript:void(0);" onclick="$hide(\''+b+"');\">hide</a>)"))+makeDivWithAttrs({id:b+"_2"},a))
}function renderBannerAd(){if(window.abTestName){if(abTestName=="adsABTest11_A"){return renderNewAdUnit("iframe/ab_test_a",728,90)
}else{if(abTestName=="adsABTest11_B"){return renderNewAdUnit("iframe/ab_test_b",728,90)
}else{if(abTestName=="adsABTest11_C"){return renderNewAdUnit("iframe/ab_test_c",728,90)
}else{if(abTestName=="adsABTest10_A"){return renderNewAdUnit("iframe/ab_test_a",728,90)
}else{if(abTestName=="adsABTest10_B"){return renderNewAdUnit("iframe/ab_test_b",728,90)
}else{if(abTestName=="adsABTest10_C"){return renderNewAdUnit("iframe/ab_test_c",728,90)
}else{if(abTestName=="adsABTest9_A"){return renderNewAdUnit("iframe/ab_test_a",728,90)
}else{if(abTestName=="adsABTest9_B"){return renderNewAdUnit("iframe/ab_test_b",728,90)
}else{if(abTestName=="adsABTest9_C"){return renderNewAdUnit("iframe/ab_test_c",728,90)
}}}}}}}}}}return _genAdDiv(genIframeAdCode("as",728,90))+makeDivWithAttrs({style:"font-size:5%"},"&nbsp;")
}function renderMainMenuAd(){var a;if(navigator.userAgent&&navigator.userAgent.indexOf("Chrome")>0){a=[getFacebookButtonWidget(),gwtWidgetBridge.newHTML("&nbsp;")]
}else{a=[getFacebookButtonWidget(),gwtWidgetBridge.newHTML("&nbsp;"),getAddThisWidget()]
}return gwtWidgetBridge.newFlowPanel(a)}function makeDiv(a){return makeElement("div",null,a)
}function makeDivWithAttrs(b,a){return makeElement("div",b,a)}function makeElement(e,d,c){var f="<"+e;
if(d){for(var b in d){f+=" "+b+'="'+d[b]+'"'}}f+=">"+c+"</"+e+">";return f}function $show(b){var a=document.getElementById(b);
if(a&&a.style){a.style.display="block"}}function $hide(b){var a=document.getElementById(b);
if(a&&a.style){a.style.display="none"}}function randInt(a){if(a==undefined){a=2147483647
}return ~~(Math.floor(Math.random()*a))}var latestPostDates=[];if(!(window&&window.location&&window.location.host&&window.location.host.indexOf("opensocial")>=0)){latestPostDates.push(1439247411000)
}function displayNotice(a,b){setTimeout(function(){var c=document.createElement("div");
if(navigator&&navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0){c.style.width="800px"
}else{c.style["max-width"]="800px"}c.style.marginBottom="10px";c.style.border="1px solid";
c.style.padding="4px";c.style.overflow="hidden";c.innerHTML='<div style="float: right;"><a href="javascript:void(0);" onclick="hideSponsoredNotice(\''+b+'\')" title="Dismiss this announcement">[X]</a></div>'+a;
if(b){c.id=b}var d=document.getElementById("dUI");d.parentNode.insertBefore(c,d)},500)
}var sponsoredNotices={};if(window.location.search.indexOf("universe=lang_es")>=0){sponsoredNotices.tr_notice_new_spanish_translations='<b>New Spanish Texts Now Available</b>: we have replaced the old Google-translated texts with better ones contributed by our Spanish volunteers! See this <a target="_blank" href="http://blog.typeracer.com/2014/04/10/all-new-typeracer-in-spanish-bienvenido-a-nueva-typeracer-espanol/" onclick="trackSponsoredEvent(\'tr_notice_new_spanish_translations\', \'click\');">blog post</a> for more info.<br><b>Nuevos Textos en Español Ahora Disponibles</b>: hemos sustituido los viejos textos traducidos por Google por otros mejores aportados por nuestros voluntarios españoles! Vean esta <a target="_blank" href="http://blog.typeracer.com/2014/04/10/all-new-typeracer-in-spanish-bienvenido-a-nueva-typeracer-espanol/" onclick="trackSponsoredEvent(\'tr_notice_new_spanish_translations\', \'click\');">entrada del blog</a> para más información.';
addDynamicTrCssStyles(".textInfoContributor { display: none; }")}else{if(window.location.search.indexOf("universe=worthless_impossible_stupid")>=0){displayNotice('<b>Contest Announcement</b><br>This is the homepage for a contest that began on May 1 and ended on June 1, 2014. The contest is now over, but you can keep racing on these texts just for fun. See this <a target="_blank" href="http://blog.typeracer.com/2014/04/28/win-prizes-in-typeracers-first-official-book-contest/">blog post</a> for the contest details.')
}else{if(window.location.search.indexOf("universe=lang_")>=0){sponsoredNotices.tr_notice_translators_wanted='<b>Help Wanted</b>: we need more texts in your language! Please read this <a target="_blank" href="http://blog.typeracer.com/2013/08/17/typeracer-international-ready-for-next-step-seeking-typist-volunteers-from-around-the-world/" onclick="trackSponsoredEvent(\'tr_notice_translators_wanted\', \'click\');">blog post</a> and email <a href="mailto:david@typeracer.com?subject=Translation" onclick="trackSponsoredEvent(\'tr_notice_translators_wanted\', \'email\');">david@typeracer.com</a>'
}}}function trackSponsoredEvent(b,a){trackEvent("SponsoredNotice",b,a)}function hideSponsoredNotice(b){var a=document.getElementById(b);
if(a){a.style.display="none"}setSponsoredNoticeCookie(b,2)}function renderSponsoredNotices(){for(var a in sponsoredNotices){var b=0;
if(document.cookie.indexOf(a+"=1")>=0){b=1}else{if(document.cookie.indexOf(a+"=2")>=0){b=2
}}if(b<2){trackSponsoredEvent(a,"impression");var c=sponsoredNotices[a];displayNotice(c,a);
setSponsoredNoticeCookie(a,b+1);break}}}renderSponsoredNotices();function setSponsoredNoticeCookie(a,b){var c=new Date();
c.setFullYear(c.getFullYear()+1);setCookieImpl(a,String(b),c.getTime(),null,"/")}function setCookieImpl(b,e,a,d,g,f){var h=b+"="+e;
if(a){h+=";expires="+(new Date(a)).toGMTString()}if(d){h+=";domain="+d}if(g){h+=";path="+g
}if(f){h+=";secure"}document.cookie=h}var facebookLikeButtonWidget=null;function getFacebookButtonWidget(){if(facebookLikeButtonWidget==null){facebookLikeButtonWidget=gwtWidgetBridge.newHTML('<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fplay.typeracer.com&amp;layout=standard&amp;show_faces=false&amp;width=450&amp;action=like&amp;font=lucida+grande&amp;colorscheme=light&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:35px;" allowTransparency="true"></iframe>')
}return facebookLikeButtonWidget}var addThisWidget=null;var addthis_config={data_track_clickback:true};
function getAddThisWidget(){if(addThisWidget==null){var e="addthisScriptElt";if(!document.getElementById(e)){setTimeout(function(){addScript(e,"http://s7.addthis.com/js/250/addthis_widget.js#username=typeracer&domready=1")
},10)}var b=null;var c=null;var d=document.getElementsByTagName("meta");if(d){for(var a=0;
a<d.length;a++){var g=d[a].getAttribute("property");if(g){if(g=="og:title"){b=d[a]["content"]
}else{if(g=="og:description"){c=d[a]["content"]}}}}}if(b&&c){window.addthis_share={title:b,description:c}
}var f='<div class="addthis_toolbox addthis_default_style">\n    <a href="http://addthis.com/bookmark.php?v=250"       class="addthis_button_compact"       addthis:ui_click="true">Share TypeRacer:</a>\n    <span class="addthis_separator"> </span>\n    <a class="addthis_button_email"></a>\n    <a class="addthis_button_print" style="display: none;"></a>\n    <a class="addthis_button_preferred_1"></a>\n    <a class="addthis_button_preferred_2"></a>\n    <a class="addthis_button_preferred_3"></a>\n    <a class="addthis_button_preferred_4"></a>\n    <a class="addthis_button_preferred_5"></a>\n    <a class="addthis_button_preferred_6"></a>\n    <a class="addthis_button_preferred_7"></a>\n    <a class="addthis_button_preferred_8"></a>\n    <a class="addthis_button_preferred_9"></a>\n    <a class="addthis_button_google_plusone"></a>\n</div>';
addThisWidget=gwtWidgetBridge.newHTML(f)}return addThisWidget}var appEngineBaseUrl="http://data.typeracer.com/";
var emailVerificationScriptId="evScript";var mainUserId=null;var mainUserModuleName=null;
function isMainUserNativeAccountInGuestModule(){return startsWith(mainUserId,"tr:")&&endsWith(mainUserModuleName,"Guest")
}function renderUserSpecificContent(b,a){mainUserId=b;mainUserModuleName=a;if(isMainUserNativeAccountInGuestModule()){addScript(emailVerificationScriptId,appEngineBaseUrl+"ev?callback=evCallback&uid="+b)
}}function evCallback(a){if(a){window.location.assign(a)}}function getBodyElement(){return document.getElementsByTagName("body")[0]
}function appendChildToBody(a){getBodyElement().appendChild(a);return a}function removeChildFromBody(a){getBodyElement().removeChild(a);
return a}function addScript(b,a){appendChildToBody(createDomElement("script",{id:b,type:"text/javascript",src:a}))
}function removeScript(b){var a=document.getElementById(b);if(a!=null){removeChildFromBody(a)
}}function createDomElement(d,c){var e=document.createElement(d);if(c){for(var b in c){e.setAttribute(b,c[b])
}}return e}function startsWith(b,a){return b&&b.indexOf(a)==0}function endsWith(b,a){return b&&b.lastIndexOf(a)==(b.length-a.length)
}function renderNewAdUnit(b,d,a){if(startsWith(b,"iframe/")){return _genAdDiv(genIframeAdCode(b.slice("iframe/".length),d,a))
}else{if(b=="teachers"){return'<div style="margin: 25px 0; font-size: 1.2em;"><b>Teachers</b>: <a href="http://data.typeracer.com/admin/schools?af=gkzxc">Get TypeRacer for your school!</a></div>'
}else{if(b=="sponsored"){var c='<div style="margin-bottom: 10px;"></div>';c+=genIframeAdCode("bsazone1",300,125);
c+='<div style="margin-top: 10px;"><a href="http://www.tkqlhce.com/click-3678708-10463747?URL=http://www.cafepress.com/typeracer"><img style="border: 1px gray solid" src="http://www.typeracer.com/dynamic_content/t-shirt.jpg"/></a><br/><div style="font-size: 12px"> <a href="http://www.tkqlhce.com/click-3678708-10463747?URL=http://www.cafepress.com/typeracer">Buy TypeRacer T-Shirts</a></div></div>';
return c}else{return[b,d,a].join("<br>")}}}}function getAdsRefreshInterval(){return 5000
}function getMaxAdBlockFailCount(){return 5}function addDynamicTrCssStyles(b){var a=document.getElementsByTagName("head")[0];
var c=document.createElement("style");c.type="text/css";if(c.styleSheet){c.styleSheet.cssText=b
}else{c.appendChild(document.createTextNode(b))}a.appendChild(c)};