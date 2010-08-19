/*
Copyright 2010, KISSY UI Library v1.1.1
MIT Licensed
build time: Aug 14 15:50
*/
(function(a,j,q){if(a[j]===q)a[j]={};j=a[j];var m=a.document,e=function(r,h,s,y){if(!h||!r)return r;if(s===q)s=true;var x,z,g;if(y&&(g=y.length))for(x=0;x<g;x++){z=y[x];if(z in h)if(s||!(z in r))r[z]=h[z]}else for(z in h)if(s||!(z in r))r[z]=h[z];return r},i=false,f=[],l=false,t=/^#?([\w-]+)$/;e(j,{version:"1.1.1",_init:function(){this.Env={mods:{},guid:0}},add:function(r,h){this.Env.mods[r]={name:r,fn:h};h(this);return this},ready:function(r){l||this._bindReady();i?r.call(a,this):f.push(r);return this},
_bindReady:function(){var r=this,h=m.documentElement.doScroll,s=h?"onreadystatechange":"DOMContentLoaded",y=function(){r._fireReady()};l=true;if(m.readyState==="complete")return y();if(m.addEventListener){var x=function(){m.removeEventListener(s,x,false);y()};m.addEventListener(s,x,false);a.addEventListener("load",y,false)}else{var z=function(){if(m.readyState==="complete"){m.detachEvent(s,z);y()}};m.attachEvent(s,z);a.attachEvent("onload",y);if(a==a.top){var g=function(){try{h("left");y()}catch(b){setTimeout(g,
1)}};g()}}},_fireReady:function(){if(!i){i=true;if(f){for(var r,h=0;r=f[h++];)r.call(a,this);f=null}}},available:function(r,h){if((r=(r+"").match(t)[1])&&j.isFunction(h))var s=1,y=j.later(function(){if(m.getElementById(r)&&(h()||1)||++s>500)y.cancel()},40,true)},mix:e,merge:function(){var r={},h,s=arguments.length;for(h=0;h<s;++h)e(r,arguments[h]);return r},augment:function(){var r=arguments,h=r.length-2,s=r[0],y=r[h],x=r[h+1],z=1;if(!j.isArray(x)){y=x;x=q;h++}if(!j.isBoolean(y)){y=q;h++}for(;z<h;z++)e(s.prototype,
r[z].prototype||r[z],y,x);return s},extend:function(r,h,s,y){if(!h||!r)return r;var x=Object.prototype,z=h.prototype,g=function(b){function d(){}d.prototype=b;return new d}(z);r.prototype=g;g.constructor=r;r.superclass=z;if(h!==Object&&z.constructor===x.constructor)z.constructor=h;s&&e(g,s);y&&e(r,y);return r},namespace:function(){var r=arguments.length,h=null,s,y,x;for(s=0;s<r;++s){x=(""+arguments[s]).split(".");h=this;for(y=a[x[0]]===h?1:0;y<x.length;++y)h=h[x[y]]=h[x[y]]||{}}return h},app:function(r,
h){var s=a[r]||{};e(s,this,true,["_init","add","namespace"]);s._init();return e(a[r]=s,typeof h==="function"?h():h)},log:function(r,h,s){if(this.Config.debug){if(s)r=s+": "+r;if(a.console!==q&&console.log)console[h&&console[h]?h:"log"](r)}return this},error:function(r){if(this.Config.debug)throw r;},guid:function(r){var h=this.Env.guid++ +"";return r?r+h:h}});j._init();j.Config={debug:"@DEBUG@"}})(window,"KISSY");
KISSY.add("lang",function(a,j){function q(c){var v=typeof c;return c===null||v!=="object"&&v!=="function"}function m(c){return t.slice.call(c)}var e=window,i=document,f=i.documentElement,l=location,t=Array.prototype,r=t.indexOf,h=t.lastIndexOf,s=t.filter,y=String.prototype.trim,x=Object.prototype.toString,z=encodeURIComponent,g=decodeURIComponent,b=/^\s+|\s+$/g,d=/^(\w+)\[\]$/,p=/\S/;a.mix(a,{isUndefined:function(c){return c===j},isBoolean:function(c){return typeof c==="boolean"},isString:function(c){return typeof c===
"string"},isNumber:function(c){return typeof c==="number"&&isFinite(c)},isPlainObject:function(c){return c&&x.call(c)==="[object Object]"&&!c.nodeType&&!c.setInterval},isEmptyObject:function(c){for(var v in c)return false;return true},isFunction:function(c){return x.call(c)==="[object Function]"},isArray:function(c){return x.call(c)==="[object Array]"},trim:y?function(c){return c==j?"":y.call(c)}:function(c){return c==j?"":c.toString().replace(b,"")},substitute:function(c,v,k){if(!a.isString(c)||
!a.isPlainObject(v))return c;return c.replace(k||/\\?\{([^{}]+)\}/g,function(o,A){if(o.charAt(0)==="\\")return o.slice(1);return v[A]!==j?v[A]:""})},each:function(c,v,k){var o,A=0,n=c.length,w=n===j||a.isFunction(c);k=k||e;if(w)for(o in c){if(v.call(k,c[o],o,c)===false)break}else for(o=c[0];A<n&&v.call(k,o,A,c)!==false;o=c[++A]);return c},indexOf:r?function(c,v){return r.call(v,c)}:function(c,v){for(var k=0,o=v.length;k<o;++k)if(v[k]===c)return k;return-1},lastIndexOf:h?function(c,v){return h.call(v,
c)}:function(c,v){for(var k=v.length-1;k>=0;k--)if(v[k]===c)break;return k},unique:function(c,v){v&&c.reverse();c=c.slice();for(var k=0,o,A;k<c.length;){for(A=c[k];(o=a.lastIndexOf(A,c))!==k;)c.splice(o,1);k+=1}v&&c.reverse();return c},inArray:function(c,v){return a.indexOf(c,v)>-1},makeArray:function(c){if(c===null||c===j)return[];if(a.isArray(c))return c;if(typeof c.length!=="number"||a.isString(c)||a.isFunction(c))return[c];return m(c)},filter:s?function(c,v,k){return s.call(c,v,k)}:function(c,
v,k){var o=[];a.each(c,function(A,n,w){v.call(k,A,n,w)&&o.push(A)});return o},param:function(c,v){if(!a.isPlainObject(c))return"";v=v||"&";var k=[],o,A;for(o in c){A=c[o];o=z(o);if(q(A))k.push(o,"=",z(A+""),v);else if(a.isArray(A)&&A.length)for(var n=0,w=A.length;n<w;++n)q(A[n])&&k.push(o,"[]=",z(A[n]+""),v)}k.pop();return k.join("")},unparam:function(c,v){if(typeof c!=="string"||(c=a.trim(c)).length===0)return{};var k={};c=c.split(v||"&");for(var o,A,n,w=0,B=c.length;w<B;++w){v=c[w].split("=");o=
g(v[0]);try{A=g(v[1]||"")}catch(C){A=v[1]||""}if((n=o.match(d))&&n[1]){k[n[1]]=k[n[1]]||[];k[n[1]].push(A)}else k[o]=A}return k},later:function(c,v,k,o,A){v=v||0;o=o||{};var n=c,w=a.makeArray(A),B;if(typeof c==="string")n=o[c];n||a.error("method undefined");c=function(){n.apply(o,w)};B=k?setInterval(c,v):setTimeout(c,v);return{id:B,interval:k,cancel:function(){this.interval?clearInterval(B):clearTimeout(B)}}},clone:function(c){var v=c,k,o;if(c&&((k=a.isArray(c))||a.isPlainObject(c))){v=k?[]:{};for(o in c)if(c.hasOwnProperty(o))v[o]=
a.clone(c[o])}return v},now:function(){return(new Date).getTime()},globalEval:function(c){if(c&&p.test(c)){var v=i.getElementsByTagName("head")[0]||f,k=i.createElement("script");k.text=c;v.insertBefore(k,v.firstChild);v.removeChild(k)}}});try{m(f.childNodes)}catch(u){m=function(c){for(var v=[],k=c.length-1;k>=0;k--)v[k]=c[k];return v}}if(l&&l.search&&l.search.indexOf("ks-debug")!==-1)a.Config.debug=true});
KISSY.add("ua",function(a){var j=navigator.userAgent,q="",m="",e,i={webkit:0,trident:0,gecko:0,presto:0,chrome:0,safari:0,firefox:0,ie:0,opera:0},f=function(l){var t=0;return parseFloat(l.replace(/\./g,function(){return t++===0?".":""}))};if((e=j.match(/AppleWebKit\/([\d.]*)/))&&e[1]){i[q="webkit"]=f(e[1]);if((e=j.match(/Chrome\/([\d.]*)/))&&e[1])i[m="chrome"]=f(e[1]);else if((e=j.match(/\/([\d.]*) Safari/))&&e[1])i[m="safari"]=f(e[1]);if(/ Mobile\//.test(j))i.mobile="apple";else if(e=j.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))i.mobile=
e[0].toLowerCase()}else if((e=j.match(/Presto\/([\d.]*)/))&&e[1]){i[q="presto"]=f(e[1]);if((e=j.match(/Opera\/([\d.]*)/))&&e[1]){i[m="opera"]=f(e[1]);if((e=j.match(/Opera\/.* Version\/([\d.]*)/))&&e[1])i[m]=f(e[1]);if((e=j.match(/Opera Mini[^;]*/))&&e)i.mobile=e[0].toLowerCase();else if((e=j.match(/Opera Mobi[^;]*/))&&e)i.mobile=e[0]}}else if((e=j.match(/MSIE\s([^;]*)/))&&e[1]){i[q="trident"]=0.1;i[m="ie"]=f(e[1]);if((e=j.match(/Trident\/([\d.]*)/))&&e[1])i[q]=f(e[1])}else if(e=j.match(/Gecko/)){i[q=
"gecko"]=0.1;if((e=j.match(/rv:([\d.]*)/))&&e[1])i[q]=f(e[1]);if((e=j.match(/Firefox\/([\d.]*)/))&&e[1])i[m="firefox"]=f(e[1])}i.core=q;i.shell=m;i._numberify=f;a.UA=i});
KISSY.add("ua-extra",function(a){var j=a.UA,q=navigator.userAgent,m,e,i={},f=j._numberify;if(q.match(/360SE/))i[e="se360"]=3;else if(q.match(/Maxthon/)&&(m=window.external)){e="maxthon";try{i[e]=f(m.max_version)}catch(l){i[e]=0.1}}else if(m=q.match(/TencentTraveler\s([\d.]*)/))i[e="tt"]=m[1]?f(m[1]):0.1;else if(q.match(/TheWorld/))i[e="theworld"]=3;else if(m=q.match(/SE\s([\d.]*)/))i[e="sougou"]=m[1]?f(m[1]):0.1;e&&(i.shell=e);a.mix(j,i)});
KISSY.add("dom",function(a,j){function q(m,e){return m&&m.nodeType===e}a.DOM={_isElementNode:function(m){return q(m,1)},_isKSNode:function(m){return a.Node&&q(m,a.Node.TYPE)},_getWin:function(m){return m&&"scrollTo"in m&&m.document?m:q(m,9)?m.defaultView||m.parentWindow:m===j?window:false},_nodeTypeIs:q}});
KISSY.add("selector",function(a,j){function q(b,d){var p,u=[],c,v;d=m(d);if(a.isString(b)){b=a.trim(b);if(z.test(b)){if(b=e(b.slice(1),d))u=[b]}else if(p=g.exec(b)){c=p[1];v=p[2];p=p[3];if(d=c?e(c,d):d)if(p)if(!c||b.indexOf(h)!==-1)u=f(p,v,d);else{if((b=e(c,d))&&r.hasClass(b,p))u=[b]}else if(v)u=i(v,d)}else if(a.ExternalSelector)return a.ExternalSelector(b,d);else l(b)}else if(b&&(b[y]||b[x]))u=b[y]?[b[y]()]:b[x]();else if(b&&(a.isArray(b)||b.item&&!b.nodeType))u=b;else if(b)u=[b];if(u.item)u=a.makeArray(u);
u.each=function(k,o){return a.each(u,k,o)};return u}function m(b){if(b===j)b=t;else if(a.isString(b)&&z.test(b))b=e(b.slice(1),t);else if(b&&b.nodeType!==1&&b.nodeType!==9)b=null;return b}function e(b,d){if(d.nodeType!==9)d=d.ownerDocument;return d.getElementById(b)}function i(b,d){return d.getElementsByTagName(b)}function f(b,d,p){p=b=p.getElementsByClassName(b);var u=0,c=0,v=b.length,k;if(d&&d!==s){p=[];for(d=d.toUpperCase();u<v;++u){k=b[u];if(k.tagName===d)p[c++]=k}}return p}function l(b){a.error("Unsupported selector: "+
b)}var t=document,r=a.DOM,h=" ",s="*",y="getDOMNode",x=y+"s",z=/^#[\w-]+$/,g=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var b=t.createElement("div");b.appendChild(t.createComment(""));if(b.getElementsByTagName(s).length>0)i=function(d,p){p=p.getElementsByTagName(d);if(d===s){d=[];for(var u=0,c=0,v;v=p[u++];)if(v.nodeType===1)d[c++]=v;p=d}return p}})();t.getElementsByClassName||(f=t.querySelectorAll?function(b,d,p){return p.querySelectorAll((d?d:"")+"."+b)}:function(b,d,p){d=p.getElementsByTagName(d||
s);p=[];var u=0,c=0,v=d.length,k,o;for(b=h+b+h;u<v;++u){k=d[u];if((o=k.className)&&(h+o+h).indexOf(b)>-1)p[c++]=k}return p});a.query=q;a.get=function(b,d){return q(b,d)[0]||null};a.mix(r,{query:q,get:a.get,filter:function(b,d){var p=q(b),u,c,v,k=[];if(a.isString(d)&&(u=g.exec(d))&&!u[1]){c=u[2];v=u[3];d=function(o){return!(c&&o.tagName!==c.toUpperCase()||v&&!r.hasClass(o,v))}}if(a.isFunction(d))k=a.filter(p,d);else if(d&&a.ExternalSelector)k=a.ExternalSelector._filter(b,d);else l(d);return k},test:function(b,
d){b=q(b);return r.filter(b,d).length===b.length}})});
KISSY.add("dom-class",function(a,j){function q(f,l,t,r){if(!(l=a.trim(l)))return r?false:j;f=a.query(f);var h=0,s=f.length;l=l.split(e);for(var y;h<s;h++){y=f[h];if(m._isElementNode(y)){y=t(y,l,l.length);if(y!==j)return y}}if(r)return false}var m=a.DOM,e=/[\.\s]\s*\.?/,i=/[\n\t]/g;a.mix(m,{hasClass:function(f,l){return q(f,l,function(t,r,h){if(t=t.className){t=" "+t+" ";for(var s=0,y=true;s<h;s++)if(t.indexOf(" "+r[s]+" ")<0){y=false;break}if(y)return true}},true)},addClass:function(f,l){q(f,l,function(t,
r,h){var s=t.className;if(s){var y=" "+s+" ";s=s;for(var x=0;x<h;x++)if(y.indexOf(" "+r[x]+" ")<0)s+=" "+r[x];t.className=a.trim(s)}else t.className=l})},removeClass:function(f,l){q(f,l,function(t,r,h){var s=t.className;if(s)if(h){s=(" "+s+" ").replace(i," ");for(var y=0,x;y<h;y++)for(x=" "+r[y]+" ";s.indexOf(x)>=0;)s=s.replace(x," ");t.className=a.trim(s)}else t.className=""})},replaceClass:function(f,l,t){m.removeClass(f,l);m.addClass(f,t)},toggleClass:function(f,l,t){var r=a.isBoolean(t),h;q(f,
l,function(s,y,x){for(var z=0,g;z<x;z++){g=y[z];h=r?!t:m.hasClass(s,g);m[h?"removeClass":"addClass"](s,g)}})}})});
KISSY.add("dom-attr",function(a,j){function q(g,b){return b&&b.nodeName.toUpperCase()===g.toUpperCase()}var m=a.UA,e=m.ie,i=e&&e<8,f=document.documentElement.textContent!==j?"textContent":"innerText",l=a.DOM,t=l._isElementNode,r=function(g){return l._nodeTypeIs(g,3)},h=/href|src|style/,s=/href|src|colspan|rowspan/,y=/\r/g,x=/radio|checkbox/,z={readonly:"readOnly"};i&&a.mix(z,{"for":"htmlFor","class":"className"});a.mix(l,{attr:function(g,b,d){if(a.isPlainObject(b))for(var p in b)l.attr(g,p,b[p]);
else if(b=a.trim(b)){b=b.toLowerCase();b=z[b]||b;if(d===j){g=a.get(g);if(!t(g))return j;var u;h.test(b)||(u=g[b]);if(u===j)u=g.getAttribute(b);if(i)if(s.test(b))u=g.getAttribute(b,2);else if(b==="style")u=g.style.cssText;return u===null?j:u}a.each(a.query(g),function(c){if(t(c))if(b==="style")c.style.cssText=d;else{if(b==="checked")c[b]=!!d;c.setAttribute(b,""+d)}})}},removeAttr:function(g,b){a.each(a.query(g),function(d){if(t(d)){l.attr(d,b,"");d.removeAttribute(b)}})},val:function(g,b){if(b===j){var d=
a.get(g);if(!t(d))return j;if(q("option",d))return(d.attributes.value||{}).specified?d.value:d.text;if(q("select",d)){var p=d.selectedIndex;g=d.options;if(p<0)return null;else if(d.type==="select-one")return l.val(g[p]);d=[];for(var u=0,c=g.length;u<c;++u)g[u].selected&&d.push(l.val(g[u]));return d}if(m.webkit&&x.test(d.type))return d.getAttribute("value")===null?"on":d.value;return(d.value||"").replace(y,"")}a.each(a.query(g),function(v){if(q("select",v)){if(a.isNumber(b))b+="";var k=a.makeArray(b),
o=v.options,A;u=0;for(c=o.length;u<c;++u){A=o[u];A.selected=a.inArray(l.val(A),k)}if(!k.length)v.selectedIndex=-1}else if(t(v))v.value=b})},text:function(g,b){if(b===j){g=a.get(g);if(t(g))return g[f]||"";else if(r(g))return g.nodeValue}else a.each(a.query(g),function(d){if(t(d))d[f]=b;else if(r(d))d.nodeValue=b})}})});
KISSY.add("dom-style",function(a,j){function q(b,d){var p=a.get(b),u=d===t?p.offsetWidth:p.offsetHeight;a.each(d===t?["Left","Right"]:["Top","Bottom"],function(c){u-=parseFloat(e._getComputedStyle(p,"padding"+c))||0;u-=parseFloat(e._getComputedStyle(p,"border"+c+"Width"))||0});return u}function m(b,d,p){var u=p;if(p===r&&s.test(d)){u=0;if(e.css(b,"position")==="absolute"){p=b[d==="left"?"offsetLeft":"offsetTop"];if(i.ie===8||i.opera)p-=h(e.css(b.offsetParent,"border-"+d+"-width"))||0;u=p-(h(e.css(b,
"margin-"+d))||0)}}return u}var e=a.DOM,i=a.UA,f=document,l=f.documentElement,t="width",r="auto",h=parseInt,s=/^left|top$/,y=/width|height|top|left|right|bottom|margin|padding/i,x=/-([a-z])/ig,z=function(b,d){return d.toUpperCase()},g={};a.mix(e,{_CUSTOM_STYLES:g,_getComputedStyle:function(b,d){var p="",u=b.ownerDocument;if(b.style)p=u.defaultView.getComputedStyle(b,null)[d];return p},css:function(b,d,p){if(a.isPlainObject(d))for(var u in d)e.css(b,u,d[u]);else{if(d.indexOf("-")>0)d=d.replace(x,z);
d=g[d]||d;if(p===j){b=a.get(b);u="";if(b&&b.style){u=d.get?d.get(b):b.style[d];if(u===""&&!d.get)u=m(b,d,e._getComputedStyle(b,d))}return u===j?"":u}else{if(p===null||p==="")p="";else if(!isNaN(new Number(p))&&y.test(d))p+="px";(d===t||d==="height")&&parseFloat(p)<0||a.each(a.query(b),function(c){if(c&&c.style){d.set?d.set(c,p):(c.style[d]=p);if(p==="")c.style.cssText||c.removeAttribute("style")}})}}},width:function(b,d){if(d===j)return q(b,t);else e.css(b,t,d)},height:function(b,d){if(d===j)return q(b,
"height");else e.css(b,"height",d)},addStyleSheet:function(b,d){var p;if(d)p=a.get(d);p||(p=e.create("<style>",{id:d}));a.get("head").appendChild(p);if(p.styleSheet)p.styleSheet.cssText=b;else p.appendChild(f.createTextNode(b))}});if(l.style.cssFloat!==j)g["float"]="cssFloat";else if(l.style.styleFloat!==j)g["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(a,j){if(a.UA.ie){var q=a.DOM,m=document,e=m.documentElement,i=q._CUSTOM_STYLES,f=/^-?\d+(?:px)?$/i,l=/^-?\d/,t=/^width|height$/;try{if(e.style.opacity===j&&e.filters)i.opacity={get:function(h){var s=100;try{s=h.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(y){try{s=h.filters("alpha").opacity}catch(x){}}return s/100+""},set:function(h,s){h=h.style;h.zoom=1;h.filter="alpha(opacity="+s*100+")"}}}catch(r){a.log("IE filters ActiveX is disabled. ex = "+r)}if(!(m.defaultView||
{}).getComputedStyle&&e.currentStyle)q._getComputedStyle=function(h,s){var y=h.style,x=h.currentStyle[s];if(t.test(s))x=q[s](h)+"px";else if(!f.test(x)&&l.test(x)){var z=y.left,g=h.runtimeStyle.left;h.runtimeStyle.left=h.currentStyle.left;y.left=s==="fontSize"?"1em":x||0;x=y.pixelLeft+"px";y.left=z;h.runtimeStyle.left=g}return x}}});
KISSY.add("dom-offset",function(a,j){function q(k){var o=0,A=0,n=h(k[b]);if(k[v]){k=k[v]();o=k[d];A=k[p];if(i.mobile!=="apple"){o+=e[u](n);A+=e[c](n)}}return{left:o,top:A}}function m(k,o){if(e.css(k,z)==="static")k.style[z]=g;var A=q(k),n={},w,B;for(B in o){w=x(e.css(k,B),10)||0;n[B]=w+o[B]-A[B]}e.css(k,n)}var e=a.DOM,i=a.UA,f=window,l=document,t=e._isElementNode,r=e._nodeTypeIs,h=e._getWin,s=l.compatMode==="CSS1Compat",y=Math.max,x=parseInt,z="position",g="relative",b="ownerDocument",d="left",p=
"top",u="scrollLeft",c="scrollTop",v="getBoundingClientRect";a.mix(e,{offset:function(k,o){if(!(k=a.get(k))||!k[b])return null;if(o===j)return q(k);m(k,o)},scrollIntoView:function(k,o,A,n){if((k=a.get(k))&&k[b]){n=n===j?true:!!n;A=A===j?true:!!A;if(!o||o===f)return k.scrollIntoView(A);o=a.get(o);if(r(o,9))o=h(o);var w=o&&"scrollTo"in o&&o.document,B=e.offset(k),C=w?{left:e.scrollLeft(o),top:e.scrollTop(o)}:e.offset(o),D={left:B[d]-C[d],top:B[p]-C[p]};B=w?e.viewportHeight(o):o.clientHeight;C=w?e.viewportWidth(o):
o.clientWidth;var G=e[u](o),E=e[c](o),F=G+C,M=E+B,I=k.offsetHeight;k=k.offsetWidth;var H=D.left+G-(x(e.css(o,"borderLeftWidth"))||0);D=D.top+E-(x(e.css(o,"borderTopWidth"))||0);var N=H+k,J=D+I,K,L;if(I>B||D<E||A)K=D;else if(J>M)K=J-B;if(n)if(k>C||H<G||A)L=H;else if(N>F)L=N-C;if(w){if(K!==j||L!==j)o.scrollTo(L,K)}else{if(K!==j)o[c]=K;if(L!==j)o[u]=L}}}});a.each(["Left","Top"],function(k,o){var A="scroll"+k;e[A]=function(n){var w=0,B=h(n),C;if(B&&(C=B.document))w=B[o?"pageYOffset":"pageXOffset"]||C.documentElement[A]||
C.body[A];else if(t(n=a.get(n)))w=n[A];return w}});a.each(["Width","Height"],function(k){e["doc"+k]=function(o){o=o||l;return y(s?o.documentElement["scroll"+k]:o.body["scroll"+k],e["viewport"+k](o))};e["viewport"+k]=function(o){var A="inner"+k;o=h(o);var n=o.document;return A in o?o[A]:s?n.documentElement["client"+k]:n.body["client"+k]}})});
KISSY.add("dom-traversal",function(a,j){function q(f,l,t,r){if(!(f=a.get(f)))return null;if(l===j)l=1;var h=null,s,y;if(a.isNumber(l)&&l>=0){if(l===0)return f;s=0;y=l;l=function(){return++s===y}}for(;f=f[t];)if(i(f)&&(!l||e.test(f,l))&&(!r||r(f))){h=f;break}return h}function m(f,l,t){var r=[];var h=f=a.get(f);if(f&&t)h=f.parentNode;if(h){t=0;for(h=h.firstChild;h;h=h.nextSibling)if(i(h)&&h!==f&&(!l||e.test(h,l)))r[t++]=h}return r}var e=a.DOM,i=e._isElementNode;a.mix(e,{parent:function(f,l){return q(f,
l,"parentNode",function(t){return t.nodeType!=11})},next:function(f,l){return q(f,l,"nextSibling")},prev:function(f,l){return q(f,l,"previousSibling")},siblings:function(f,l){return m(f,l,true)},children:function(f,l){return m(f,l)},contains:function(f,l){var t=false;if((f=a.get(f))&&(l=a.get(l)))if(f.contains)return f.contains(l);else if(f.compareDocumentPosition)return!!(f.compareDocumentPosition(l)&16);else for(;!t&&(l=l.parentNode);)t=l==f;return t}})});
KISSY.add("dom-create",function(a,j){function q(n,w){y(n)&&a.isPlainObject(w)&&t.attr(n,w);return n}function m(n,w){var B=null,C;if(n&&(n.push||n.item)&&n[0]){w=w||n[0].ownerDocument;B=w.createDocumentFragment();if(n.item)n=a.makeArray(n);w=0;for(C=n.length;w<C;w++)B.appendChild(n[w])}else a.log("Unable to convert "+n+" to fragment.");return B}function e(n){var w=n.cloneNode(true);if(r.ie<8)w.innerHTML=n.innerHTML;return w}function i(n,w,B,C){if(B){var D=a.guid("ks-tmp-"),G=new RegExp(b);w+='<span id="'+
D+'"></span>';a.available(D,function(){var E=a.get("head"),F,M,I,H,N,J;for(G.lastIndex=0;F=G.exec(w);)if((I=(M=F[1])?M.match(p):false)&&I[2]){F=l.createElement("script");F.src=I[2];if((H=M.match(u))&&H[2])F.charset=H[2];F.async=true;E.appendChild(F)}else if((J=F[2])&&J.length>0)a.globalEval(J);(N=l.getElementById(D))&&t.remove(N);a.isFunction(C)&&C()});f(n,w)}else{f(n,w);a.isFunction(C)&&C()}}function f(n,w){w=(w+"").replace(b,"");try{n.innerHTML=w}catch(B){for(;n.firstChild;)n.removeChild(n.firstChild);
w&&n.appendChild(t.create(w))}}var l=document,t=a.DOM,r=a.UA,h=r.ie,s=t._nodeTypeIs,y=t._isElementNode,x=t._isKSNode,z=l.createElement("div"),g=/<(\w+)/,b=/<script([^>]*)>([\s\S]*?)<\/script>/ig,d=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/\ssrc=(['"])(.*?)\1/i,u=/\scharset=(['"])(.*?)\1/i;a.mix(t,{create:function(n,w,B){if(s(n,1)||s(n,3))return e(n);if(x(n))return e(n[0]);if(!(n=a.trim(n)))return null;var C=null;C=t._creators;var D,G="div",E;if(D=d.exec(n))C=(B||l).createElement(D[1]);else{if((D=g.exec(n))&&
(E=D[1])&&a.isFunction(C[E=E.toLowerCase()]))G=E;n=C[G](n,B).childNodes;C=n.length===1?n[0].parentNode.removeChild(n[0]):m(n,B||l)}return q(C,w)},_creators:{div:function(n,w){w=w?w.createElement("div"):z;w.innerHTML=n;return w}},html:function(n,w,B,C){if(w===j){n=a.get(n);if(y(n))return n.innerHTML}else a.each(a.query(n),function(D){y(D)&&i(D,w,B,C)})},remove:function(n){a.each(a.query(n),function(w){y(w)&&w.parentNode&&w.parentNode.removeChild(w)})}});if(r.gecko||h){var c=t._creators,v=t.create,
k=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,o={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var A in o)(function(n){c[A]=function(w,B){return v("<"+n+">"+w+"</"+n+">",null,B)}})(o[A]);if(h){c.script=function(n,w){w=w?w.createElement("div"):z;w.innerHTML="-"+n;w.removeChild(w.firstChild);return w};if(h<8)c.tbody=function(n,w){w=v("<table>"+n+"</table>",null,w);var B=w.children.tags("tbody")[0];w.children.length>1&&B&&!k.test(n)&&B.parentNode.removeChild(B);
return w}}a.mix(c,{optgroup:c.option,th:c.td,thead:c.tbody,tfoot:c.tbody,caption:c.tbody,colgroup:c.tbody})}});KISSY.add("dom-insertion",function(a){a.mix(a.DOM,{insertBefore:function(j,q){if((j=a.get(j))&&(q=a.get(q))&&q.parentNode)q.parentNode.insertBefore(j,q);return j},insertAfter:function(j,q){if((j=a.get(j))&&(q=a.get(q))&&q.parentNode)q.nextSibling?q.parentNode.insertBefore(j,q.nextSibling):q.parentNode.appendChild(j);return j}})});
KISSY.add("event",function(a,j){function q(g,b,d,p,u){if(a.isString(b))b=a.query(b);if(a.isArray(b)){a.each(b,function(c){z[g](c,d,p,u)});return true}if((d=a.trim(d))&&d.indexOf(s)>0){a.each(d.split(s),function(c){z[g](b,c,p,u)});return true}}function m(g){return f(g)?g[h]:-1}function e(g,b){if(!f(g))return a.error("Text or comment node is not valid event target.");try{g[h]=b}catch(d){a.error(d)}}function i(g){try{g[h]=j;delete g[h]}catch(b){}}function f(g){return g&&g.nodeType!==3&&g.nodeType!==
8}var l=document,t=l.addEventListener?function(g,b,d,p){g.addEventListener&&g.addEventListener(b,d,!!p)}:function(g,b,d){g.attachEvent&&g.attachEvent("on"+b,d)},r=l.removeEventListener?function(g,b,d,p){g.removeEventListener&&g.removeEventListener(b,d,!!p)}:function(g,b,d){g.detachEvent&&g.detachEvent("on"+b,d)},h="ksEventTargetId",s=" ",y=a.now(),x={},z={EVENT_GUID:h,special:{},add:function(g,b,d,p){if(!q("add",g,b,d,p)){var u=m(g),c,v,k,o,A;if(!(u===-1||!b||!a.isFunction(d))){if(!u){e(g,u=y++);
x[u]={target:g,events:{}}}v=x[u].events;if(!v[b]){c=((u=!g.isCustomEventTarget)||g._supportSpecialEvent)&&z.special[b]||{};k=function(n,w){if(!n||!n.fixed){n=new a.EventObject(g,n,b);a.isPlainObject(w)&&a.mix(n,w)}c.setup&&c.setup(n);return(c.handle||z._handle)(g,n,v[b].listeners)};v[b]={handle:k,listeners:[]};o=c.fix||b;A=c.capture;if(u)t(g,o,k,A);else g._addEvent&&g._addEvent(o,k,A)}v[b].listeners.push({fn:d,scope:p})}}},remove:function(g,b,d,p){p=p||g;if(!q("remove",g,b,d,p)){var u=m(g),c,v,k,
o,A,n,w;if(u!==-1)if(u&&(c=x[u]))if(c.target===g){c=c.events||{};if(v=c[b]){k=v.listeners;n=k.length;if(a.isFunction(d)&&n){A=o=0;for(w=[];o<n;++o)if(d!==k[o].fn||p!==k[o].scope)w[A++]=k[o];v.listeners=w;n=w.length}if(d===j||n===0){if(g.isCustomEventTarget)g._addEvent&&g._removeEvent(b,v.handle);else r(g,b,v.handle);delete c[b]}}if(b===j||a.isEmptyObject(c)){for(b in c)z.remove(g,b);delete x[u];i(g)}}}},_handle:function(g,b,d){d=d.slice(0);for(var p,u=0,c=d.length;u<c;++u){p=d[u];p=p.fn.call(p.scope||
g,b);if(p===false&&g.isCustomEventTarget||b.isImmediatePropagationStopped)break}return p},_getCache:function(g){return x[g]},_simpleAdd:t,_simpleRemove:r};z.on=z.add;a.Event=z});
KISSY.add("event-object",function(a,j){function q(i,f,l){this.currentTarget=i;this.originalEvent=f||{};if(f){this.type=f.type;this._fix()}else{this.type=l;this.target=i}this.currentTarget=i;this.fixed=true}var m=document,e="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");a.augment(q,
{_fix:function(){var i=this.originalEvent,f=e.length,l,t=this.currentTarget;for(t=t.nodeType===9?t:t.ownerDocument||m;f;){l=e[--f];this[l]=i[l]}if(!this.target)this.target=this.srcElement||m;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===j&&this.clientX!==j){i=t.documentElement;f=t.body;this.pageX=this.clientX+(i&&i.scrollLeft||f&&f.scrollLeft||
0)-(i&&i.clientLeft||f&&f.clientLeft||0);this.pageY=this.clientY+(i&&i.scrollTop||f&&f.scrollTop||0)-(i&&i.clientTop||f&&f.clientTop||0)}if(this.which===j)this.which=this.charCode!==j?this.charCode:this.keyCode;if(this.metaKey===j)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==j)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var i=this.originalEvent;if(i.preventDefault)i.preventDefault();else i.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var i=
this.originalEvent;if(i.stopPropagation)i.stopPropagation();else i.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var i=this.originalEvent;i.stopImmediatePropagation?i.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(i){i?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});a.EventObject=q});
KISSY.add("event-target",function(a,j){var q=a.Event,m=q.EVENT_GUID;a.EventTarget={isCustomEventTarget:true,fire:function(e,i){if((e=((q._getCache(this[m]||-1)||{}).events||{})[e])&&a.isFunction(e.handle))return e.handle(j,i);return this},on:function(e,i,f){q.add(this,e,i,f);return this},detach:function(e,i,f){q.remove(this,e,i,f);return this}}});
KISSY.add("event-mouseenter",function(a){var j=a.Event;a.UA.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(q){j.special[q.name]={fix:q.fix,setup:function(m){m.type=q.name},handle:function(m,e,i){var f=e.relatedTarget;try{for(;f&&f!==m;)f=f.parentNode;f!==m&&j._handle(m,e,i)}catch(l){}}}})});
KISSY.add("event-focusin",function(a){var j=a.Event;document.addEventListener&&a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(q){j.special[q.name]={fix:q.fix,capture:true,setup:function(m){m.type=q.name}}})});
KISSY.add("node",function(a){function j(e,i,f){var l;if(!(this instanceof j))return new j(e,i,f);if(e){if(m(e,1)||m(e,3))l=e;else if(a.isString(e))l=q.create(e,i,f);this[0]=l}else this.length=0}var q=a.DOM,m=q._nodeTypeIs;j.TYPE="-ks-Node";a.augment(j,{length:1,getDOMNode:function(){return this[0]},nodeType:j.TYPE});a.one=function(e,i){return(e=a.get(e,i))?new j(e):null};a.Node=j});
KISSY.add("nodelist",function(a){function j(e){if(!(this instanceof j))return new j(e);m.push.apply(this,e||[])}var q=a.DOM,m=Array.prototype;a.mix(j.prototype,{length:0,item:function(e){var i=null;if(q._isElementNode(this[e]))i=new a.Node(this[e]);return i},getDOMNodes:function(){return m.slice.call(this)},each:function(e,i){var f=this.length,l=0,t;for(t=new a.Node(this[0]);l<f&&e.call(i||t,t,l,this)!==false;t=new a.Node(this[++l]));return this}});a.all=function(e,i){return new j(a.query(e,i,true))};
a.NodeList=j});
KISSY.add("node-attach",function(a,j){function q(x,arguments,z,g){var b=[this[x?r:t]()].concat(a.makeArray(arguments));if(arguments[z]===j)return g.apply(e,b);else{g.apply(e,b);return this}}function m(x,z){a.each(x,function(g){a.each([f,l],function(b,d){b[g]=function(p){switch(z){case h:return function(){return q.call(this,d,arguments,1,p)};case s:return function(){return q.call(this,d,arguments,0,p)};case y:return function(){var u=this[d?r:t]();return(u=p.apply(e,[u].concat(a.makeArray(arguments))))?new (a[a.isArray(u)?
"NodeList":"Node"])(u):null};default:return function(){var u=this[d?r:t]();u=p.apply(e,[u].concat(a.makeArray(arguments)));return u===j?this:u}}}(e[g])})})}var e=a.DOM,i=a.Event,f=a.Node.prototype,l=a.NodeList.prototype,t="getDOMNode",r=t+"s",h=1,s=2,y=4;a.mix(f,{one:function(x){return a.one(x,this[0])},all:function(x){return a.all(x,this[0])}});m(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);m(["attr","removeAttr"],h);m(["val","text"],s);m(["css"],h);m(["width","height"],s);
m(["offset"],s);m(["scrollIntoView"]);m(["parent","next","prev","siblings","children"],y);m(["contains"]);m(["html"],s);m(["remove"]);a.each(["insertBefore","insertAfter"],function(x){f[x]=function(z){e[x].call(e,this[0],z);return this}});a.each([f,l],function(x){a.mix(x,{append:function(z){z&&a.each(this,function(g){g.appendChild(e.create(z))});return this},appendTo:function(z){if((z=a.get(z))&&z.appendChild)a.each(this,function(g){z.appendChild(g)});return this}})});a.each([f,l],function(x){a.mix(x,
a.EventTarget,{_supportSpecialEvent:true});x._addEvent=function(z,g,b){for(var d=0,p=this.length;d<p;d++)i._simpleAdd(this[d],z,g,b)};x._removeEvent=function(z,g,b){for(var d=0,p=this.length;d<p;d++)i._simpleRemove(this[d],z,g,b)};delete x.fire})});
KISSY.add("ajax",function(a){var j=document,q=j.createElement("script").readyState?function(m,e){m.onreadystatechange=function(){var i=m.readyState;if(i==="loaded"||i==="complete"){m.onreadystatechange=null;e.call(this)}}}:function(m,e){m.onload=e};a.mix(a,{getScript:function(m,e,i){var f=a.get("head")||j.documentElement,l=j.createElement("script");l.src=m;if(i)l.charset=i;l.async=true;a.isFunction(e)&&q(l,e);f.insertBefore(l,f.firstChild)}})});
KISSY.add("cookie",function(a){function j(i){return a.isString(i)&&i!==""}var q=document,m=encodeURIComponent,e=decodeURIComponent;a.Cookie={get:function(i){var f;if(j(i))if(i=q.cookie.match("(?:^| )"+i+"(?:(?:=([^;]*))|;|$)"))f=i[1]?e(i[1]):"";return f},set:function(i,f,l,t,r,h){f=m(f);var s=l;if(typeof s==="number"){s=new Date;s.setTime(s.getTime()+l*864E5)}if(s instanceof Date)f+="; expires="+s.toUTCString();if(j(t))f+="; domain="+t;if(j(r))f+="; path="+r;if(h)f+="; secure";q.cookie=i+"="+f},remove:function(i,
f,l,t){this.set(i,"",0,f,l,t)}}});
