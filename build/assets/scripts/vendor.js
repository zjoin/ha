window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function a(e,t){return r(S.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var a=e[r];if(!i(a,"-")&&b[a]!==n)return"pfx"==t?a:!0}return!1}function c(e,t,r){for(var a in e){var i=t[e[a]];if(i!==n)return r===!1?e[a]:o(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(a,t):(a=(e+" "+k.join(r+" ")+r).split(" "),c(a,t,n))}function u(){p.input=function(n){for(var r=0,a=n.length;a>r;r++)N[n[r]]=!!(n[r]in x);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,a,o,i=0,s=e.length;s>i;i++)x.setAttribute("type",a=e[i]),r="text"!==x.type,r&&(x.value=E,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(a)||(r=/^(url|email)$/.test(a)?x.checkValidity&&x.checkValidity()===!1:x.value!=E)),z[e[i]]=!!r;return z}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.7.2",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),E=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",T=C.split(" "),k=C.toLowerCase().split(" "),$={svg:"http://www.w3.org/2000/svg"},M={},z={},N={},P=[],j=P.slice,F=function(e,n,r,a){var o,i,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=a?a[r]:v+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=o,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=c),!!i},R=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},L=function(){function e(e,a){a=a||t.createElement(r[e]||"div"),e="on"+e;var i=e in a;return i||(a.setAttribute||(a=t.createElement("div")),a.setAttribute&&a.removeAttribute&&(a.setAttribute(e,""),i=o(a[e],"function"),o(a[e],"undefined")||(a[e]=n),a.removeAttribute(e))),a=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;f=o(D,"undefined")||o(D.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var o=new a,i=t.apply(o,n.concat(j.call(arguments)));return Object(i)===i?i:o}return t.apply(e,n.concat(j.call(arguments)))};return r}),M.flexbox=function(){return l("flexWrap")},M.flexboxlegacy=function(){return l("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!o(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!l("indexedDB",e)},M.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return l("backgroundSize")},M.borderimage=function(){return l("borderImage")},M.borderradius=function(){return l("borderRadius")},M.boxshadow=function(){return l("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return a("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return l("animationName")},M.csscolumns=function(){return l("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return l("boxReflect")},M.csstransforms=function(){return!!l("transform")},M.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return l("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var a=t.getElementById("smodernizr"),o=a.sheet||a.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS($.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==$.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS($.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS($.svg,"clipPath")))};for(var A in M)f(M,A)&&(d=A.toLowerCase(),p[d]=M[A](),P.push((p[d]?"":"no-")+d));return p.input||u(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)o.createElement(s[i]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=a(e);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:i};e.html5=y,c(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=k,p._cssomPrefixes=T,p.mq=R,p.hasEvent=L,p.testProp=function(e){return s([e])},p.testAllProps=l,p.testStyles=F,p.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+P.join(" "):""),p}(this,this.document),function(e){"use strict";function t(){x(!0)}var n={};e.respond=n,n.update=function(){};var r=[],a=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),o=function(e,t){var n=a();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))};if(n.ajax=o,n.queue=r,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var i,s,c,l=e.document,u=l.documentElement,d=[],f=[],m=[],p={},h=30,g=l.getElementsByTagName("head")[0]||u,v=l.getElementsByTagName("base")[0],y=g.getElementsByTagName("link"),b=function(){var e,t=l.createElement("div"),n=l.body,r=u.style.fontSize,a=n&&n.style.fontSize,o=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=o=l.createElement("body"),n.style.background="none"),u.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),o&&u.insertBefore(n,u.firstChild),e=t.offsetWidth,o?u.removeChild(n):n.removeChild(t),u.style.fontSize=r,a&&(n.style.fontSize=a),e=c=parseFloat(e)},x=function(t){var n="clientWidth",r=u[n],a="CSS1Compat"===l.compatMode&&r||l.body[n]||r,o={},p=y[y.length-1],v=(new Date).getTime();if(t&&i&&h>v-i)return e.clearTimeout(s),void(s=e.setTimeout(x,h));i=v;for(var E in d)if(d.hasOwnProperty(E)){var w=d[E],S=w.minw,C=w.maxw,T=null===S,k=null===C,$="em";S&&(S=parseFloat(S)*(S.indexOf($)>-1?c||b():1)),C&&(C=parseFloat(C)*(C.indexOf($)>-1?c||b():1)),w.hasquery&&(T&&k||!(T||a>=S)||!(k||C>=a))||(o[w.media]||(o[w.media]=[]),o[w.media].push(f[w.rules]))}for(var M in m)m.hasOwnProperty(M)&&m[M]&&m[M].parentNode===g&&g.removeChild(m[M]);m.length=0;for(var z in o)if(o.hasOwnProperty(z)){var N=l.createElement("style"),P=o[z].join("\n");N.type="text/css",N.media=z,g.insertBefore(N,p.nextSibling),N.styleSheet?N.styleSheet.cssText=P:N.appendChild(l.createTextNode(P)),m.push(N)}},E=function(e,t,r){var a=e.replace(n.regex.keyframes,"").match(n.regex.media),o=a&&a.length||0;t=t.substring(0,t.lastIndexOf("/"));var i=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},s=!o&&r;t.length&&(t+="/"),s&&(o=1);for(var c=0;o>c;c++){var l,u,m,p;s?(l=r,f.push(i(e))):(l=a[c].match(n.regex.findStyles)&&RegExp.$1,f.push(RegExp.$2&&i(RegExp.$2))),m=l.split(","),p=m.length;for(var h=0;p>h;h++)u=m[h],d.push({media:u.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:f.length-1,hasquery:u.indexOf("(")>-1,minw:u.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:u.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},w=function(){if(r.length){var t=r.shift();o(t.href,function(n){E(n,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){w()},0)})}},S=function(){for(var t=0;t<y.length;t++){var n=y[t],a=n.href,o=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();a&&i&&!p[a]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,a,o),p[a]=!0):(!/^([a-zA-Z:]*\/\/)/.test(a)&&!v||a.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===a.substring(0,2)&&(a=e.location.protocol+a),r.push({href:a,media:o})))}w()};S(),n.update=S,n.getEmValue=b,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);