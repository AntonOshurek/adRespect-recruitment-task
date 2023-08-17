/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={731:function(t,e,i){var n,o;!function(s,r){"use strict";n=function(){var t,e,i,n,o,s={},r={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},a={},u=[],l=0,c=!1,h={},d=!1,f=/.+\.(gif|jpe?g|png|webp)/i,p={},m=[],g=null,v=function(t){-1!==t.target.id.indexOf("baguette-img")&&k()},y=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,P()},b=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,O()},E=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,k()},_=function(t){h.count++,1<h.count&&(h.multitouch=!0),h.startX=t.changedTouches[0].pageX,h.startY=t.changedTouches[0].pageY},x=function(t){if(!d&&!h.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];40<e.pageX-h.startX?(d=!0,P()):e.pageX-h.startX<-40?(d=!0,O()):100<h.startY-e.pageY&&k()}},T=function(){h.count--,h.count<=0&&(h.multitouch=!1),d=!1},w=function(){T()},C=function(e){"block"===t.style.display&&t.contains&&!t.contains(e.target)&&(e.stopPropagation(),W())};function L(t){if(p.hasOwnProperty(t)){var e=p[t].galleries;[].forEach.call(e,(function(t){[].forEach.call(t,(function(t){D(t.imageElement,"click",t.eventHandler)})),u===t&&(u=[])})),delete p[t]}}function z(t){switch(t.keyCode){case 37:P();break;case 39:O();break;case 27:k();break;case 36:!function(t){t&&t.preventDefault(),R(0)}(t);break;case 35:!function(t){t&&t.preventDefault(),R(u.length-1)}(t)}}function S(o,a){if(u!==o){for(u=o,function(o){for(var a in o=o||{},r)s[a]=r[a],void 0!==o[a]&&(s[a]=o[a]);e.style.transition=e.style.webkitTransition="fadeIn"===s.animation?"opacity .4s ease":"slideIn"===s.animation?"":"none","auto"===s.buttons&&("ontouchstart"in window||1===u.length)&&(s.buttons=!1),i.style.display=n.style.display=s.buttons?"":"none";try{t.style.backgroundColor=s.overlayBackgroundColor}catch(t){}}(a);e.firstChild;)e.removeChild(e.firstChild);for(var l,c=[],h=[],d=m.length=0;d<o.length;d++)(l=q("div")).className="full-image",l.id="baguette-img-"+d,m.push(l),c.push("baguetteBox-figure-"+d),h.push("baguetteBox-figcaption-"+d),e.appendChild(m[d]);t.setAttribute("aria-labelledby",c.join(" ")),t.setAttribute("aria-describedby",h.join(" "))}}function I(e){s.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==t.style.display&&(A(document,"keydown",z),h={count:0,startX:null,startY:null},B(l=e,(function(){H(l),F(l)})),M(),t.style.display="block",s.fullScreen&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen()),setTimeout((function(){t.className="visible",s.bodyClass&&document.body.classList&&document.body.classList.add(s.bodyClass),s.afterShow&&s.afterShow()}),50),s.onChange&&s.onChange(l,m.length),g=document.activeElement,W(),c=!0)}function W(){s.buttons?i.focus():o.focus()}function k(){s.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==t.style.display&&(D(document,"keydown",z),t.className="",setTimeout((function(){t.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),s.bodyClass&&document.body.classList&&document.body.classList.remove(s.bodyClass),s.afterHide&&s.afterHide(),g&&g.focus(),c=!1}),500))}function B(t,e){var i=m[t],n=u[t];if(void 0!==i&&void 0!==n)if(i.getElementsByTagName("img")[0])e&&e();else{var o=n.imageElement,r=o.getElementsByTagName("img")[0],a="function"==typeof s.captions?s.captions.call(u,o):o.getAttribute("data-caption")||o.title,l=function(t){var e=t.href;if(t.dataset){var i=[];for(var n in t.dataset)"at-"!==n.substring(0,3)||isNaN(n.substring(3))||(i[n.replace("at-","")]=t.dataset[n]);for(var o=Object.keys(i).sort((function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1})),s=window.innerWidth*window.devicePixelRatio,r=0;r<o.length-1&&o[r]<s;)r++;e=i[o[r]]||e}return e}(o),c=q("figure");if(c.id="baguetteBox-figure-"+t,c.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',s.captions&&a){var h=q("figcaption");h.id="baguetteBox-figcaption-"+t,h.innerHTML=a,c.appendChild(h)}i.appendChild(c);var d=q("img");d.onload=function(){var i=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");c.removeChild(i),!s.async&&e&&e()},d.setAttribute("src",l),d.alt=r&&r.alt||"",s.titleTag&&a&&(d.title=a),c.appendChild(d),s.async&&e&&e()}}function O(){return R(l+1)}function P(){return R(l-1)}function R(t,e){return!c&&0<=t&&t<e.length?(S(e,s),I(t),!0):t<0?(s.animation&&N("left"),!1):t>=m.length?(s.animation&&N("right"),!1):(B(l=t,(function(){H(l),F(l)})),M(),s.onChange&&s.onChange(l,m.length),!0)}function N(t){e.className="bounce-from-"+t,setTimeout((function(){e.className=""}),400)}function M(){var t=100*-l+"%";"fadeIn"===s.animation?(e.style.opacity=0,setTimeout((function(){a.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t,e.style.opacity=1}),400)):a.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t}function H(t){t-l>=s.preload||B(t+1,(function(){H(t+1)}))}function F(t){l-t>=s.preload||B(t-1,(function(){F(t-1)}))}function A(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n):t.attachEvent("on"+e,(function(t){(t=t||window.event).target=t.target||t.srcElement,i(t)}))}function D(t,e,i,n){t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent("on"+e,i)}function Y(t){return document.getElementById(t)}function q(t){return document.createElement(t)}return[].forEach||(Array.prototype.forEach=function(t,e){for(var i=0;i<this.length;i++)t.call(e,this[i],i,this)}),[].filter||(Array.prototype.filter=function(t,e,i,n,o){for(i=this,n=[],o=0;o<i.length;o++)t.call(e,i[o],o,i)&&n.push(i[o]);return n}),{run:function(s,r){return a.transforms=function(){var t=q("div");return void 0!==t.style.perspective||void 0!==t.style.webkitPerspective}(),a.svg=function(){var t=q("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}(),a.passiveEvents=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),function(){if(t=Y("baguetteBox-overlay"))return e=Y("baguetteBox-slider"),i=Y("previous-button"),n=Y("next-button"),void(o=Y("close-button"));(t=q("div")).setAttribute("role","dialog"),t.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(t),(e=q("div")).id="baguetteBox-slider",t.appendChild(e),(i=q("button")).setAttribute("type","button"),i.id="previous-button",i.setAttribute("aria-label","Previous"),i.innerHTML=a.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",t.appendChild(i),(n=q("button")).setAttribute("type","button"),n.id="next-button",n.setAttribute("aria-label","Next"),n.innerHTML=a.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",t.appendChild(n),(o=q("button")).setAttribute("type","button"),o.id="close-button",o.setAttribute("aria-label","Close"),o.innerHTML=a.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",t.appendChild(o),i.className=n.className=o.className="baguetteBox-button",function(){var s=a.passiveEvents?{passive:!1}:null,r=a.passiveEvents?{passive:!0}:null;A(t,"click",v),A(i,"click",y),A(n,"click",b),A(o,"click",E),A(e,"contextmenu",w),A(t,"touchstart",_,r),A(t,"touchmove",x,s),A(t,"touchend",T),A(document,"focus",C,!0)}()}(),L(s),function(t,e){var i=document.querySelectorAll(t),n={galleries:[],nodeList:i};return p[t]=n,[].forEach.call(i,(function(t){e&&e.filter&&(f=e.filter);var i=[];if(i="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(i=[].filter.call(i,(function(t){if(-1===t.className.indexOf(e&&e.ignoreClass))return f.test(t.href)}))).length){var o=[];[].forEach.call(i,(function(t,i){var n=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,S(o,e),I(i)},s={eventHandler:n,imageElement:t};A(t,"click",n),o.push(s)})),n.galleries.push(o)}})),n.galleries}(s,r)},show:R,showNext:O,showPrevious:P,hide:k,destroy:function(){!function(){var s=a.passiveEvents?{passive:!1}:null,r=a.passiveEvents?{passive:!0}:null;D(t,"click",v),D(i,"click",y),D(n,"click",b),D(o,"click",E),D(e,"contextmenu",w),D(t,"touchstart",_,r),D(t,"touchmove",x,s),D(t,"touchend",T),D(document,"focus",C,!0)}(),function(){for(var t in p)p.hasOwnProperty(t)&&L(t)}(),D(document,"keydown",z),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),p={},u=[],l=0}}},void 0===(o=n.call(e,i,e,t))||(t.exports=o)}()},741:(t,e,i)=>{var n,o;!function(s,r){"use strict";void 0===(o="function"==typeof(n=r)?n.call(e,i,e,t):n)||(t.exports=o)}(window,(function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}))},158:function(t,e,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(t,s),delete n[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=o)},47:(t,e,i)=>{var n,o;!function(s,r){n=[i(741)],o=function(t){return function(t,e){"use strict";var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach((function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}else o.push(t)})),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout((function(){n.apply(s,e),delete s[o]}),i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,(function(t,e,i){return e+"-"+i})).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady((function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),l=i.makeArray(a).concat(i.makeArray(u)),c=r+"-options",h=t.jQuery;l.forEach((function(t){var i,s=t.getAttribute(r)||t.getAttribute(c);try{i=s&&JSON.parse(s)}catch(e){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);h&&h.data(t,n,a)}))}))},i}(s,t)}.apply(e,n),void 0===o||(t.exports=o)}(window)},131:(t,e,i)=>{var n,o;window,void 0===(o="function"==typeof(n=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function o(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var s,r=!1;function a(e){if(function(){if(!r){r=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s=200==Math.round(t(n.width)),a.isBoxSizeOuter=s,i.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var u=o(e);if("none"==u.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var l={};l.width=e.offsetWidth,l.height=e.offsetHeight;for(var c=l.isBorderBox="border-box"==u.boxSizing,h=0;h<n;h++){var d=i[h],f=u[d],p=parseFloat(f);l[d]=isNaN(p)?0:p}var m=l.paddingLeft+l.paddingRight,g=l.paddingTop+l.paddingBottom,v=l.marginLeft+l.marginRight,y=l.marginTop+l.marginBottom,b=l.borderLeftWidth+l.borderRightWidth,E=l.borderTopWidth+l.borderBottomWidth,_=c&&s,x=t(u.width);!1!==x&&(l.width=x+(_?0:m+b));var T=t(u.height);return!1!==T&&(l.height=T+(_?0:g+E)),l.innerWidth=l.width-(m+b),l.innerHeight=l.height-(g+E),l.outerWidth=l.width+v,l.outerHeight=l.height+y,l}}return a})?n.call(e,i,e,t):n)||(t.exports=o)},751:(t,e,i)=>{var n,o,s;window,o=[i(794),i(131)],void 0===(s="function"==typeof(n=function(t,e){"use strict";var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n;s=Math[r&&r<1?"round":"floor"](s),this.cols=Math.max(s,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),o={x:this.columnWidth*n.col,y:n.y},s=n.y+t.size.outerHeight,r=i+n.col,a=n.col;a<r;a++)this.colYs[a]=s;return o},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft")?n.left:n.right,s=o+i.outerWidth,r=Math.floor(o/this.columnWidth);r=Math.max(0,r);var a=Math.floor(s/this.columnWidth);a-=s%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,l=r;l<=a;l++)this.colYs[l]=Math.max(u,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i})?n.apply(e,o):n)||(t.exports=s)},652:(t,e,i)=>{var n,o,s;window,o=[i(158),i(131)],void 0===(s="function"==typeof(n=function(t,e){"use strict";var i=document.documentElement.style,n="string"==typeof i.transition?"transition":"WebkitTransition",o="string"==typeof i.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],r={transform:o,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=a.prototype=Object.create(t.prototype);u.constructor=a,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t)e[r[i]||i]=t[i]},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=parseFloat(n),r=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(s=s/100*a.width),-1!=o.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",l=n?"top":"bottom",c=n?"bottom":"top",h=this.position.y+t[u];e[l]=this.getYValue(h),e[c]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!o||this.isTransitioning){var s=t-i,r=e-n,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&(this.css(t.from),this.element.offsetHeight),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var l="opacity,"+o.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}));u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=c[t.propertyName]||t.propertyName;delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var h={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(h)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",(function(){this.removeElem()})),this.hide()):this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a})?n.apply(e,o):n)||(t.exports=s)},794:(t,e,i)=>{var n,o;!function(s,r){"use strict";n=[i(158),i(131),i(47),i(652)],o=function(t,e,i,n){return function(t,e,i,n,o){var s=t.console,r=t.jQuery,a=function(){},u=0,l={};function c(t,e){var i=n.getQueryElement(t);if(i){this.element=i,r&&(this.$element=r(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++u;this.element.outlayerGUID=o,l[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}else s&&s.error("Bad element for "+this.constructor.namespace+": "+(i||t))}c.namespace="outlayer",c.Item=o,c.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var h=c.prototype;function d(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}n.extend(h,e.prototype),h.option=function(t){n.extend(this.options,t)},h._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},c.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},h._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},h.reloadItems=function(){this.items=this._itemize(this.element.children)},h._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=new i(e[o],this);n.push(s)}return n},h._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},h.getItemElements=function(){return this.items.map((function(t){return t.element}))},h.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},h._init=h.layout,h._resetLayout=function(){this.getSize()},h.getSize=function(){this.size=i(this.element)},h._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},h.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},h._getItemsForLayout=function(t){return t.filter((function(t){return!t.isIgnored}))},h._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach((function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)}),this),this._processLayoutQueue(i)}},h._getItemLayoutPosition=function(){return{x:0,y:0}},h._processLayoutQueue=function(t){this.updateStagger(),t.forEach((function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)}),this)},h.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(f[n]||1):0}(t),this.stagger;this.stagger=0},h._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},h._postLayout=function(){this.resizeContainer()},h.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},h._getContainerSize=a,h._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},h._emitCompleteOnItems=function(t,e){var i=this;function n(){i.dispatchEvent(t+"Complete",null,[e])}var o=e.length;if(e&&o){var s=0;e.forEach((function(e){e.once(t,r)}))}else n();function r(){++s==o&&n()}},h.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),r)if(this.$element=this.$element||r(this.element),e){var o=r.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},h.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},h.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},h.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},h.unstamp=function(t){(t=this._find(t))&&t.forEach((function(t){n.removeFrom(this.stamps,t),this.unignore(t)}),this)},h._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),n.makeArray(t)},h._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},h._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},h._manageStamp=a,h._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t);return{left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom}},h.handleEvent=n.handleEvent,h.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},h.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},h.onresize=function(){this.resize()},n.debounceMethod(c,"onresize",100),h.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},h.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},h.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},h.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},h.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},h.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.reveal()}))}},h.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.hide()}))}},h.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},h.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},h.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},h.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach((function(t){var i=this.getItem(t);i&&e.push(i)}),this),e},h.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach((function(t){t.remove(),n.removeFrom(this.items,t)}),this)},h.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach((function(t){t.destroy()})),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,r&&r.removeData(this.element,this.constructor.namespace)},c.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},c.create=function(t,e){var i=d(c);return i.defaults=n.extend({},c.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},c.compatOptions),i.namespace=t,i.data=c.data,i.Item=d(o),n.htmlInit(i,t),r&&r.bridget&&r.bridget(t,i),i};var f={ms:1,s:1e3};return c.Item=o,c}(s,t,e,i,n)}.apply(e,n),void 0===o||(t.exports=o)}(window)}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}(()=>{"use strict";var t=i(751),e=i(731);window.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelector(".nav-button"),e=document.querySelector(".nav-button__burger"),i=document.querySelector(".nav"),n=document.querySelector(".body");let o;const s=t=>{"HTML"===t.target.parentElement.tagName&&r()};function r(){i.classList.remove("nav--open"),n.classList.remove("body--menu-open"),e.classList.remove("nav-button__burger--active"),o=!1,n.removeEventListener("click",s)}t.addEventListener("click",(()=>{o?r():(i.classList.add("nav--open"),n.classList.add("body--menu-open"),e.classList.add("nav-button__burger--active"),o=!0,n.addEventListener("click",s))}))})(),(()=>{const e=document.querySelector(".projects__list");new t(e,{itemSelector:".projects__item",percentPosition:!0,gutter:43,originCenter:!0})})(),e.run(".projects__list")}))})()})();
//# sourceMappingURL=bundle.js.map