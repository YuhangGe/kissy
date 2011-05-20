/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("switchable/base",function(g,h,q,s){function n(b,c){c=c||{};if(!("markupType"in c))if(c.panelCls)c.markupType=1;else if(c.panels)c.markupType=2;for(var f=this.constructor;f;){c=g.merge(f.Config,c);f=f.superclass?f.superclass.constructor:null}this.container=h.get(b);this.config=c;this.ingIndex=this.activeIndex=c.activeIndex;this._init();this._initPlugins();this.fire(k);this.activeIndex>-1||g.isNumber(c.switchTo)&&this.switchTo(c.switchTo)}var v=g.require("event/target"),k="init",j={originalEvent:{target:1}};
n.Config={markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:-1,activeTriggerCls:"ks-active",switchTo:0,steps:1,viewSize:[]};n.Plugins=[];g.augment(n,v,{_initPlugins:function(){for(var b=this,c=b.constructor;c;){g.each(c.Plugins,function(f){f.init&&f.init(b)});c=c.superclass?c.superclass.constructor:null}},_init:function(){var b=
this.config;this._parseMarkup();b.hasTriggers&&this._bindTriggers()},_parseMarkup:function(){var b=this.container,c=this.config,f,p,i=[],r=[];switch(c.markupType){case 0:if(f=h.get("."+c.navCls,b))i=h.children(f);p=h.get("."+c.contentCls,b);r=h.children(p);break;case 1:i=h.query("."+c.triggerCls,b);r=h.query("."+c.panelCls,b);break;case 2:i=c.triggers;r=c.panels}b=r.length;this.length=b/c.steps;if(c.hasTriggers&&b>0&&i.length===0)i=this._generateTriggersMarkup(this.length);this.triggers=g.makeArray(i);
this.panels=g.makeArray(r);this.content=p||r[0].parentNode;this.nav=f||c.hasTriggers&&i[0].parentNode},_generateTriggersMarkup:function(b){var c=this.config,f=h.create("<ul>"),p,i;f.className=c.navCls;for(i=0;i<b;i++){p=h.create("<li>");if(i===this.activeIndex)p.className=c.activeTriggerCls;p.innerHTML=i+1;f.appendChild(p)}this.container.appendChild(f);return h.children(f)},_bindTriggers:function(){var b=this,c=b.config,f=b.triggers,p,i,r=f.length;for(i=0;i<r;i++)(function(x){p=f[x];q.on(p,"click",
function(){b._onFocusTrigger(x)});if(c.triggerType==="mouse"){q.on(p,"mouseenter",function(){b._onMouseEnterTrigger(x,j)});q.on(p,"mouseleave",function(){b._onMouseLeaveTrigger(x,j)})}})(i)},_onFocusTrigger:function(b){if(this._triggerIsValid(b)){this._cancelSwitchTimer();this.switchTo(b,s,j)}},_onMouseEnterTrigger:function(b){var c=this;if(c._triggerIsValid(b))c.switchTimer=g.later(function(){c.switchTo(b,s,j)},c.config.delay*1E3)},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(b){return this.ingIndex!==
b},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=s}},switchTo:function(b,c,f,p){var i=this,r=i.config,x=i.triggers,t=i.panels,l=i.ingIndex,o=r.steps,y=l*o,m=b*o;if(!i._triggerIsValid(b))return i;if(i.fire("beforeSwitch",{toIndex:b})===false)return i;if(r.hasTriggers)i._switchTrigger(l>-1?x[l]:null,x[b]);if(c===s)c=b>l?"forward":"backward";i.ingIndex=b;i._switchView(l>-1?t.slice(y,y+o):null,t.slice(m,m+o),b,c,f,function(){p&&p.call(i,b);i.activeIndex=
b});return i},_switchTrigger:function(b,c){var f=this.config.activeTriggerCls;b&&h.removeClass(b,f);h.addClass(c,f)},_switchView:function(b,c,f,p,i,r){b&&h.css(b,"display","none");h.css(c,"display","block");this._fireOnSwitch(f,i);r&&r.call(this)},_fireOnSwitch:function(b,c){this.fire("switch",g.mix(c||{},{currentIndex:b}))},prev:function(b){var c=this.activeIndex;this.switchTo(c>0?c-1:this.length-1,"backward",b)},next:function(b){var c=this.activeIndex;this.switchTo(c<this.length-1?c+1:0,"forward",
b)}});return n},{requires:["dom","event"]});
KISSY.add("switchable/aria",function(g,h,q,s){function n(){this.stop&&this.stop()}function v(){this.start&&this.start()}s.Plugins.push({name:"aria",init:function(j){if(j.config.aria){var b=j.container;q.on(b,"focusin",n,j);q.on(b,"focusout",v,j)}}});var k=["a","input","button","object"];return{setTabIndex:function(j,b){j.tabIndex=b;h.query("*",j).each(function(c){var f=c.nodeName.toLowerCase();if(g.inArray(f,k)){h.hasAttr(c,"oriTabIndex")||h.attr(c,"oriTabIndex",c.tabIndex);c.tabIndex=b!=-1?h.attr(c,
"oriTabIndex"):b}})}}},{requires:["dom","event","./base"]});
KISSY.add("switchable/accordion/base",function(g,h,q){function s(n,v){if(!(this instanceof s))return new s(n,v);s.superclass.constructor.apply(this,arguments);return 0}g.extend(s,q,{_switchTrigger:function(n,v){var k=this.config;k.multiple?h.toggleClass(v,k.activeTriggerCls):s.superclass._switchTrigger.apply(this,arguments)},_triggerIsValid:function(n){return s.superclass._triggerIsValid.call(this,n)||this.config.multiple},_switchView:function(n,v,k,j,b,c){var f=v[0];if(this.config.multiple){h.toggle(f);
this._fireOnSwitch(k,b);c.call(this)}else s.superclass._switchView.apply(this,arguments)}});s.Plugins=[];s.Config={markupType:1,triggerType:"click",multiple:false};return s},{requires:["dom","../base"]});
KISSY.add("switchable/accordion/aria",function(g,h,q){function s(d){var w;g.each(this.triggers,function(B){if(B==d||i.contains(B,d))w=B});return w}function n(d){switch(d.keyCode){case r:case x:d.ctrlKey&&!d.altKey&&!d.shiftKey&&d.halt();break;case e:d.ctrlKey&&!d.altKey&&d.halt()}}function v(d){var w=d.target,B=this.triggers,C=!d.ctrlKey&&!d.shiftKey&&!d.altKey,E=d.ctrlKey&&!d.shiftKey&&!d.altKey;switch(d.keyCode){case z:case u:if(s.call(this,w)&&C){this.switchTo(this.focusIndex);d.halt()}break;case o:case y:if(s.call(this,
w)){j.call(this);d.halt()}break;case m:case a:if(s.call(this,w)){b.call(this);d.halt()}break;case x:if(E){d.halt();b.call(this)}break;case r:if(E){d.halt();j.call(this)}break;case l:if(C){w=this.focusIndex;this.focusIndex=0;k.call(this,w,0,true);d.halt()}break;case t:if(C){w=B.length-1;B=this.focusIndex;this.focusIndex=w;k.call(this,B,w,true);d.halt()}break;case e:if(d.ctrlKey&&!d.altKey){d.halt();d.shiftKey?j.call(this):b.call(this)}}}function k(d,w,B){var C=this.triggers;if(g.isNumber(d))var E=
C[d];d=C[w];if(E){A(E,"-1");i.removeClass(E,f);E.setAttribute("aria-selected","false")}B&&d.focus();A(d,"0");i.addClass(d,f);d.setAttribute("aria-selected","true")}function j(){var d=this.triggers,w=this.focusIndex;d=this.focusIndex=w==0?d.length-1:w-1;k.call(this,w,d,true)}function b(){var d=this.focusIndex,w=this.focusIndex=d==this.triggers.length-1?0:d+1;k.call(this,d,w,true)}function c(d){var w=!!d.originalEvent.target,B=this.config.multiple,C=this.activeIndex;d=d.currentIndex;var E=this.triggers[d],
F=this.panels[d];if(C>-1){var D=this.triggers[C];C=this.panels[C];A(D,"-1");w&&E.focus();if(!B){C.setAttribute("aria-hidden","true");D.setAttribute("aria-expanded","false")}}A(E,"0");w=F.getAttribute("aria-hidden");F.setAttribute("aria-hidden",w=="false"?"true":"false");E.setAttribute("aria-expanded",w=="false"?"false":"true");k.call(this,this.focusIndex,d);this.focusIndex=d}var f="ks-switchable-select",p=g.Event,i=g.DOM,r=33,x=34,t=35,l=36,o=37,y=38,m=39,a=40,e=9,u=32,z=13;g.mix(q.Config,{aria:true});
q.Plugins.push({name:"aria",init:function(d){if(d.config.aria){var w=d.container,B=d.activeIndex;i.attr(w,"aria-multiselectable",d.config.multiple?"true":"false");i.attr(w,"role","tablist");var C=d.triggers,E=d.panels,F=0;g.each(E,function(D){if(!D.id)D.id=g.guid("ks-switchable-tab-panel")});g.each(C,function(D){if(!D.id)D.id=g.guid("ks-switchable-tab")});g.each(C,function(D){D.setAttribute("role","tab");D.setAttribute("aria-expanded",B==F?"true":"false");D.setAttribute("aria-selected",B==F?"true":
"false");D.setAttribute("aria-controls",E[F].id);A(D,B==F?"0":"-1");F++});F=0;g.each(E,function(D){var G=C[F];D.setAttribute("role","tabpanel");D.setAttribute("aria-hidden",B==F?"false":"true");D.setAttribute("aria-labelledby",G.id);F++});d.on("switch",c,d);if(B>-1)d.focusIndex=B;p.on(w,"keydown",v,d);p.on(w,"keypress",n,d)}}});var A=h.setTabIndex},{requires:["../aria","./base"]});
KISSY.add("switchable/autoplay",function(g,h,q,s){g.mix(q.Config,{autoplay:false,interval:5,pauseOnHover:true});q.Plugins.push({name:"autoplay",init:function(n){function v(){b=g.later(function(){n.paused||n.switchTo(n.activeIndex<n.length-1?n.activeIndex+1:0,"forward")},j,true)}var k=n.config,j=k.interval*1E3,b;if(k.autoplay){if(k.pauseOnHover){h.on(n.container,"mouseenter",function(){n.stop()});h.on(n.container,"mouseleave",function(){n.start()})}v();n.stop=function(){if(b){b.cancel();b=s}n.paused=
true};n.start=function(){if(b){b.cancel();b=s}n.paused=false;v()}}}});return q},{requires:["event","./base"]});KISSY.add("switchable/autorender",function(g,h,q,s){s.autoRender=function(n,v){n="."+(n||"KS_Widget");h.query(n,v).each(function(k){var j=k.getAttribute("data-widget-type"),b;if(j&&"Switchable Tabs Slide Carousel Accordion".indexOf(j)>-1)try{if(b=k.getAttribute("data-widget-config"))b=b.replace(/'/g,'"');new g[j](k,q.parse(b))}catch(c){}})}},{requires:["dom","json","switchable/base"]});
KISSY.add("switchable/carousel/base",function(g,h,q,s,n){function v(k,j){if(!(this instanceof v))return new v(k,j);v.superclass.constructor.apply(this,arguments);return 0}v.Config={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};v.Plugins=[];g.extend(v,s,{_init:function(){var k=this;v.superclass._init.call(k);var j=k.config,b=j.disableBtnCls,c=false;g.each(["prev","next"],function(f){var p=k[f+"Btn"]=h.get("."+j[f+"BtnCls"],
k.container);q.on(p,"click",function(i){i.preventDefault();c||h.hasClass(p,b)||k[f]()})});if(!j.circular){k.on("beforeSwitch",function(){c=true});k.on("switch",function(f){f=f.currentIndex;f=f===0?k.prevBtn:f===k.length-1?k.nextBtn:n;h.removeClass([k.prevBtn,k.nextBtn],b);f&&h.addClass(f,b);c=false})}q.on(k.panels,"click",function(){k.fire("itemSelected",{item:this})})}});return v},{requires:["dom","event","../base"]});
KISSY.add("switchable/carousel/aria",function(g,h,q,s,n){function v(m){var a=m.currentIndex,e=this.activeIndex,u=this.panels,z=u[a*this.config.steps],A=this.triggers;a=A[a];if((m=!!m.originalEvent.target)||e==-1){g.each(A,function(d){o(d,-1)});g.each(u,function(d){o(d,-1)});a&&o(a,0);o(z,0);m&&z.focus()}}function k(m){var a;g.each(this.triggers,function(e){if(e==m||h.contains(e,m)){a=e;return false}});return a}function j(m){var a=m.target;switch(m.keyCode){case x:case r:if(a=k.call(this,a)){a=a;var e=
h.next(a),u=this.triggers;e||(e=u[0]);o(a,-1);if(e){o(e,0);e.focus()}m.halt()}break;case i:case p:if(a=k.call(this,a)){a=a;e=h.prev(a);u=this.triggers;e||(e=u[u.length-1]);o(a,-1);if(e){o(e,0);e.focus()}m.halt()}break;case l:case t:if(a=k.call(this,a)){this.switchTo(g.indexOf(a,this.triggers),undefined,y);m.halt()}}}function b(m){var a;g.each(this.panels,function(e){if(e==m||h.contains(e,m)){a=e;return false}});return a}function c(m){var a=g.indexOf(m,this.panels),e=this.config.steps,u=Math.floor(a/
e);if(u==this.activeIndex)return 1;if(a%e==0||a%e==e-1){this.switchTo(u,undefined,undefined,function(){m.focus()});return 0}return 1}function f(m){var a=m.target;switch(m.keyCode){case x:case r:if(a=b.call(this,a)){a=a;var e=h.next(a),u=this.panels;e||(e=u[0]);o(a,-1);o(e,0);c.call(this,e)&&e.focus();m.halt()}break;case i:case p:if(a=b.call(this,a)){a=a;e=h.prev(a);u=this.panels;e||(e=u[u.length-1]);o(a,-1);o(e,0);c.call(this,e)&&e.focus();m.halt()}break;case l:case t:if(a=b.call(this,a)){this.fire("itemSelected",
{item:a});m.halt()}}}var p=37,i=38,r=39,x=40,t=32,l=13,o=s.setTabIndex,y={originalEvent:{target:1}};g.mix(n.Config,{aria:true});n.Plugins.push({name:"aria",init:function(m){if(m.config.aria){var a=m.triggers,e=m.panels,u=m.content,z=m.activeIndex;if(!u.id)u.id=g.guid("ks-switchbale-content");u.setAttribute("role","listbox");var A=0;g.each(a,function(d){o(d,z==A?"0":"-1");d.setAttribute("role","button");d.setAttribute("aria-controls",u.id);A++});A=0;g.each(e,function(d){o(d,"-1");d.setAttribute("role",
"option");A++});m.on("switch",v,m);(a=m.nav)&&q.on(a,"keydown",j,m);q.on(u,"keydown",f,m);a=m.prevBtn;e=m.nextBtn;if(a){o(a,0);a.setAttribute("role","button");q.on(a,"keydown",function(d){if(d.keyCode==l||d.keyCode==t){m.prev(y);d.preventDefault()}})}if(e){o(e,0);e.setAttribute("role","button");q.on(e,"keydown",function(d){if(d.keyCode==l||d.keyCode==t){m.next(y);d.preventDefault()}})}}}})},{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/effect",function(g,h,q,s,n,v){var k;g.mix(n.Config,{effect:"none",duration:0.5,easing:"easeNone",nativeAnim:true});n.Effects={none:function(j,b,c){j&&h.css(j,"display","none");h.css(b,"display","block");c()},fade:function(j,b,c){j&&j.length!==1&&g.error("fade effect only supports steps == 1.");var f=this,p=f.config,i=j?j[0]:null,r=b[0];f.anim&&f.anim.stop();h.css(r,"opacity",1);if(i)f.anim=(new s(i,{opacity:0},p.duration,p.easing,function(){f.anim=v;h.css(r,"z-index",9);h.css(i,
"z-index",1);c&&c()},p.nativeAnim)).run();else{h.css(r,"z-index",9);c&&c()}},scroll:function(j,b,c,f){var p=this;j=p.config;b=j.effect==="scrollx";var i={};i[b?"left":"top"]=-(p.viewSize[b?0:1]*f)+"px";p.anim&&p.anim.stop();p.anim=(new s(p.content,i,j.duration,j.easing,function(){p.anim=v;c()},j.nativeAnim)).run()}};k=n.Effects;k.scrollx=k.scrolly=k.scroll;n.Plugins.push({name:"effect",init:function(j){var b=j.config,c=b.effect,f=j.panels,p=j.content,i=b.steps,r=j.activeIndex,x=f.length;j.viewSize=
[b.viewSize[0]||f[0].offsetWidth*i,b.viewSize[1]||f[0].offsetHeight*i];if(c!=="none"){g.each(f,function(y){h.css(y,"display","block")});switch(c){case "scrollx":case "scrolly":h.css(p,"position","absolute");h.css(p.parentNode,"position","relative");if(c==="scrollx"){h.css(f,"float","left");h.width(p,j.viewSize[0]*(x/i))}break;case "fade":var t=r*i,l=t+i-1,o;g.each(f,function(y,m){o=m>=t&&m<=l;h.css(y,{opacity:o?1:0,position:"absolute",zIndex:o?9:1})})}}}});g.augment(n,{_switchView:function(j,b,c,
f,p,i){var r=this,x=r.config.effect;(g.isFunction(x)?x:k[x]).call(r,j,b,function(){r._fireOnSwitch(c,p);i&&i.call(r)},c,f)}});return n},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/circular",function(g,h,q,s){function n(l,o,y,m,a){var e=this;l=e.config;o=e.length;var u=e.activeIndex,z=l.scrollType===t,A=z?c:f,d=e.viewSize[z?0:1];z=-d*m;var w={},B,C=a===x;if(B=C&&u===0&&m===o-1||a===r&&u===o-1&&m===0)z=v.call(e,e.panels,m,C,A,d);w[A]=z+i;e.anim&&e.anim.stop();e.anim=(new q(e.content,w,l.duration,l.easing,function(){B&&k.call(e,e.panels,m,C,A,d);e.anim=undefined;y()},l.nativeAnim)).run()}function v(l,o,y,m,a){var e=this.config.steps;o=this.length;var u=y?
o-1:0,z=(u+1)*e;for(e=u*e;e<z;e++){h.css(l[e],j,b);h.css(l[e],m,(y?-1:1)*a*o)}return y?a:-a*o}function k(l,o,y,m,a){var e=this.config.steps;o=this.length;var u=y?o-1:0,z=(u+1)*e;for(e=u*e;e<z;e++){h.css(l[e],j,p);h.css(l[e],m,p)}h.css(this.content,m,y?-a*(o-1):p)}var j="position",b="relative",c="left",f="top",p="",i="px",r="forward",x="backward",t="scrollx";g.mix(s.Config,{circular:false});s.Plugins.push({name:"circular",init:function(l){l=l.config;if(l.circular&&(l.effect===t||l.effect==="scrolly")){l.scrollType=
l.effect;l.effect=n}}})},{requires:["dom","anim","switchable/base","switchable/effect"]});
KISSY.add("switchable/countdown",function(g,h,q,s,n,v){g.mix(n.Config,{countdown:false,countdownFromStyle:"",countdownToStyle:"width: 0"});n.Plugins.push({name:"countdown",init:function(k){function j(l){b();t=(new s(i[l],x,p-1)).run()}function b(){if(f){clearTimeout(f);f=null}if(t){t.stop();t=v}}var c=k.config,f,p=c.interval,i=[],r=c.countdownFromStyle,x=c.countdownToStyle,t;if(!(!c.autoplay||!c.hasTriggers||!c.countdown)){g.each(k.triggers,function(l,o){l.innerHTML='<div class="ks-switchable-trigger-mask"></div><div class="ks-switchable-trigger-content">'+
l.innerHTML+"</div>";i[o]=l.firstChild});if(c.pauseOnHover){q.on(k.container,"mouseenter",function(){b();var l=i[k.ingIndex];if(r)t=(new s(l,r,0.2,"easeOut")).run();else h.removeAttr(l,"style")});q.on(k.container,"mouseleave",function(){b();var l=k.ingIndex;h.removeAttr(i[l],"style");f=setTimeout(function(){j(l)},200)})}k.on("beforeSwitch",function(){b();h.attr(i[k.activeIndex],"style",r||"")});k.on("switch",function(l){k.paused||j(l.currentIndex)})}}});return n},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/lazyload",function(g,h,q){var s="beforeSwitch",n="img-src",v="area-data",k={};k[n]="data-ks-lazyload-custom";k[v]="ks-datalazyload-custom";g.mix(q.Config,{lazyDataType:v});q.Plugins.push({name:"lazyload",init:function(j){function b(r){var x=f.steps;r=r.toIndex*x;c.loadCustomLazyData(j.panels.slice(r,r+x),p);a:{var t,l;if(r=(x=p===n)?"img":p===v?"textarea":""){r=h.query(r,j.container);t=0;for(l=r.length;t<l;t++)if(x?h.attr(r[t],i):h.hasClass(r[t],i)){x=false;break a}}x=true}x&&
j.detach(s,b)}var c=g.require("datalazyload"),f=j.config,p=f.lazyDataType,i=k[p];!c||!p||!i||j.on(s,b)}});return q},{requires:["dom","switchable/base"]});KISSY.add("switchable/slide/base",function(g,h){function q(s,n){if(!(this instanceof q))return new q(s,n);q.superclass.constructor.apply(this,arguments);return 0}q.Config={autoplay:true,circular:true};q.Plugins=[];g.extend(q,h);return q},{requires:["../base"]});
KISSY.add("switchable/slide/aria",function(g,h,q,s,n){function v(t){var l=this.panels,o=this.__slideIndex;switch(t.keyCode){case f:case c:o++;if(o==l.length)o=0;this.__slideIndex=o;this.switchTo(o,p,undefined,function(){l[o].focus()});t.halt();break;case b:case j:o--;if(o==-1)o=l.length-1;this.__slideIndex=o;this.switchTo(o,i,undefined,function(){l[o].focus()});t.halt()}}function k(t){var l=this;if(g.inArray(t.target,l.panels)){if(x){clearTimeout(x);x=undefined}switch(t.keyCode){case f:case b:case j:case c:t.halt()}x=
setTimeout(function(){v.call(l,t);x=undefined},200)}}var j=37,b=38,c=39,f=40,p="forward",i="backward";g.mix(n.Config,{aria:true});var r=s.setTabIndex;n.Plugins.push({name:"aria",init:function(t){if(t.config.aria){var l=t.panels,o=0,y=t.activeIndex;g.each(t.triggers,function(a){r(a,"-1");o++});o=0;g.each(l,function(a){r(a,y==o?"0":"-1");h.attr(a,"role","option");o++});var m=t.content;h.attr(m,"role","listbox");q.on(m,"keydown",k,t);r(l[0],0);if(y>-1)t.__slideIndex=y;t.on("switch",function(a){a=a.currentIndex;
var e=t.activeIndex;t.__slideIndex=a;e!=-1&&r(l[e],-1);r(l[a],0)})}}});var x},{requires:["dom","event","../aria","./base"]});KISSY.add("switchable/tabs/base",function(g,h){function q(s,n){if(!(this instanceof q))return new q(s,n);q.superclass.constructor.call(this,s,n);return 0}g.extend(q,h);q.Config={};q.Plugins=[];return q},{requires:["../base"]});
KISSY.add("switchable/tabs/aria",function(g,h,q){function s(a){var e;g.each(this.triggers,function(u){if(u==a||b.contains(u,a))e=u});return e}function n(a){switch(a.keyCode){case c:case f:a.ctrlKey&&!a.altKey&&!a.shiftKey&&a.halt();break;case o:a.ctrlKey&&!a.altKey&&a.halt()}}function v(a){var e=a.target,u=this.triggers,z=!a.ctrlKey&&!a.shiftKey&&!a.altKey,A=a.ctrlKey&&!a.shiftKey&&!a.altKey;switch(a.keyCode){case r:case x:if(s.call(this,e)){this.prev(y);a.halt()}break;case t:case l:if(s.call(this,
e)){this.next(y);a.halt()}break;case f:if(A){a.halt();this.next(y)}break;case c:if(A){a.halt();this.prev(y)}break;case i:if(z){this.switchTo(0,undefined,y);a.halt()}break;case p:if(z){this.switchTo(u.length-1,undefined,y);a.halt()}break;case o:if(a.ctrlKey&&!a.altKey){a.halt();a.shiftKey?this.prev(y):this.next(y)}}}function k(a){var e=!!a.originalEvent.target,u=this.activeIndex,z=a.currentIndex;if(u!=z){a=this.triggers[u];var A=this.triggers[z];u=this.panels[u];z=this.panels[z];a&&m(a,"-1");m(A,"0");
e&&A.focus();u&&u.setAttribute("aria-hidden","true");z.setAttribute("aria-hidden","false")}}var j=g.Event,b=g.DOM,c=33,f=34,p=35,i=36,r=37,x=38,t=39,l=40,o=9,y={originalEvent:{target:1}};g.mix(q.Config,{aria:true});q.Plugins.push({name:"aria",init:function(a){if(a.config.aria){var e=a.triggers,u=a.activeIndex,z=a.panels,A=a.container;b.attr(A,"role","tablist");var d=0;g.each(e,function(w){w.setAttribute("role","tab");m(w,u==d?"0":"-1");if(!w.id)w.id=g.guid("ks-switchable");d++});d=0;g.each(z,function(w){var B=
e[d];w.setAttribute("role","tabpanel");w.setAttribute("aria-hidden",u==d?"false":"true");w.setAttribute("aria-labelledby",B.id);d++});a.on("switch",k,a);j.on(A,"keydown",v,a);j.on(A,"keypress",n,a)}}});var m=h.setTabIndex},{requires:["../aria","./base"]});
KISSY.add("switchable",function(g,h,q,s,n,v,k,j,b,c,f,p,i,r,x,t){g.Switchable=h;q={Accordion:s,Carousel:j,Slide:r,Tabs:t};g.mix(g,q);g.mix(h,q);return h},{requires:["switchable/base","switchable/aria","switchable/accordion/base","switchable/accordion/aria","switchable/autoplay","switchable/autorender","switchable/carousel/base","switchable/carousel/aria","switchable/circular","switchable/countdown","switchable/effect","switchable/lazyload","switchable/slide/base","switchable/slide/aria","switchable/tabs/base",
"switchable/tabs/aria"]});
