/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 2 22:27
*/
KISSY.add("anim/base",function(g,i,k,e,l,a,y){function p(b,d,c,f,n,q){if(b=i.get(b)){if(!(this instanceof p))return new p(b,d,c,f,n,q);var m=g.isPlainObject(c);d=d;this.domEl=b;if(g.isPlainObject(d))d=String(g.param(d,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var z=d,s=b;b={};var o=w.length,u=s.cloneNode(true);i.insertAfter(u,s);s=u.style;for(h(u,z);o--;){var r=w[o];if(s[r])b[r]=(t[r]||t["*"]).getter(u,r)}z=j(z);for(var A in z)b[A]=(t[A]||t["*"]).getter(u,
A);i.remove(u);this.props=b;this.targetStyle=d;if(m)m=g.merge(B,c);else{m=g.clone(B);if(c)m.duration=parseFloat(c)||1;if(g.isString(f)||g.isFunction(f))m.easing=f;if(g.isFunction(n))m.complete=n;if(q!==y)m.nativeSupport=q}if(!g.isEmptyObject(j(d)))m.nativeSupport=false;this.config=m;if(m.nativeSupport&&F()&&g.isString(f=m.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(f)||(f=e.NativeTimeFunction[f])){m.easing=f;this.transitionName=F()}if(g.isFunction(n))this.callback=n}}function x(b,d){return d}function h(b,
d){if(l.ie&&d.indexOf(C)>-1){var c=d.match(/opacity\s*:\s*([^;]+)(;|$)/);c&&i.css(b,C,parseFloat(c[1]))}b.style.cssText+=";"+d;c=j(d);for(var f in c)b[f]=c[f]}function j(b){for(var d={},c=0;c<v.length;c++){var f=v[c].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(f=b.match(RegExp(f+"\\s*:([^;]+)(;|$)")))d[v[c]]=g.trim(f[1])}return d}var w,v,C,B,D;k=k.Target;w="borderBottomWidth borderBottomStyle borderLeftWidth borderLeftStyle borderRightWidth borderRightStyle borderSpacing borderTopWidth borderTopStyle bottom fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
v=[];C="opacity";B={duration:1,easing:"easeNone",nativeSupport:true};p.PROPS=w;p.CUSTOM_ATTRS=v;p.PROP_OPS={"*":{getter:function(b,d){var c=i.css(b,d),f=parseFloat(c);c=(c+"").replace(/^[-\d.]+/,"");if(isNaN(f))return{v:c,u:"",f:x};return{v:f,u:c,f:this.interpolate}},setter:function(b,d,c){return i.css(b,d,c)},interpolate:function(b,d,c){return(b+(d-b)*c).toFixed(3)},eq:function(b,d){return b.v==d.v&&b.u==d.u}}};var t=p.PROP_OPS;g.augment(p,k,{isRunning:false,elapsedTime:0,start:0,finish:0,duration:0,
run:function(){var b=this,d=b.config,c=b.domEl,f,n=b.props,q={},m;if(b.fire("start")!==false){b.stop();f=d.duration*1E3;b.duration=f;if(b.transitionName)setTimeout(function(){b._nativeRun()},10);else{for(m in n)q[m]=(t[m]||t["*"]).getter(c,m);b.source=q;c=g.now();f=c+f;d=d.easing;if(g.isString(d))d=e[d]||e.easeNone;b.start=c;b.finish=f;b.easing=d;a.start(b)}b.isRunning=true;return b}},_complete:function(){this.fire("complete");this.callback&&this.callback()},_runFrame:function(){var b=this.domEl,
d=this.finish,c=this.start,f=this.duration,n=g.now(),q=this.source,m=this.easing,z=this.props,s;c=n-c;f=n>d?1:c/f;var o,u;this.elapsedTime=c;for(s in z){c=q[s];o=z[s];var r;r=o;var A=c,E=t[s];r=E&&E.eq?E.eq(r,A):t["*"].eq(r,A);if(!r){if(o.v==0)o.u=c.u;if(c.u!==o.u){c.v=0;c.u=o.u}r=o.f(c.v,o.v,m(f))+o.u;(t[s]||t["*"]).setter(b,s,r);if(o.f==x){c.v=o.v;c.u=o.u}}}if(this.fire("step")===false||(u=n>d)){this.stop();u&&this._complete()}},_nativeRun:function(){var b=this,d=b.domEl,c=b.duration,f=b.config.easing,
n=b.transitionName,q={};q[n+"Property"]="all";q[n+"Duration"]=c+"ms";q[n+"TimingFunction"]=f;i.css(d,q);setTimeout(function(){h(d,b.targetStyle)},0);g.later(function(){b.stop(true)},c)},stop:function(b){if(this.isRunning){if(this.transitionName)this._nativeStop(b);else{if(b){h(this.domEl,this.targetStyle);this._complete()}a.stop(this)}this.isRunning=false;return this}},_nativeStop:function(b){var d=this.domEl,c=this.props,f;if(b){this._clearNativeProperty();this._complete()}else{for(f in c)i.css(d,
f,i._getComputedStyle(d,f));this._clearNativeProperty()}},_clearNativeProperty:function(){var b={},d=this.domEl,c=this.transitionName;b[c+"Property"]="none";b[c+"Duration"]="";b[c+"TimingFunction"]="";i.css(d,b)}});p.supportTransition=function(){if(D)return D;var b="transition",d,c=document.documentElement;if(c.style[b]!==y)d=b;else g.each(["Webkit","Moz","O"],function(f){if(c.style[b=f+"Transition"]!==y){d=b;return false}});return D=d};var F=p.supportTransition;return p},{requires:["dom","event",
"./easing","ua","./manager"]});
KISSY.add("anim/color",function(g,i,k){function e(h){h=h.toLowerCase();var j;if(j=h.match(a))return[parseInt(j[1]),parseInt(j[2]),parseInt(j[3])];else if(j=h.match(y)){for(h=1;h<j.length;h++)if(j[h].length<2)j[h]+=j[h];return[parseInt(j[1],16),parseInt(j[2],16),parseInt(j[3],16)]}if(l[h])return l[h];return[255,255,255]}var l={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],
olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},a=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,y=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,p="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),x=k.PROP_OPS;k=k.PROPS;k.push.apply(k,p);x.color={getter:function(h,j){return{v:e(i.css(h,j)),u:"",f:this.interpolate}},setter:x["*"].setter,interpolate:function(h,j,w){var v=
x["*"].interpolate;return"rgb("+[Math.floor(v(h[0],j[0],w)),Math.floor(v(h[1],j[1],w)),Math.floor(v(h[2],j[2],w))].join(", ")+")"},eq:function(h,j){return h.v+""==j.v+""}};g.each(p,function(h){x[h]=x.color})},{requires:["dom","./base"]});
KISSY.add("anim/easing",function(){var g=Math.PI,i=Math.pow,k=Math.sin,e=1.70158,l={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(i(2,10*(a-=1))*k((a-0.075)*2*g/0.3))},
elasticOut:function(a){if(a===0||a===1)return a;return i(2,-10*a)*k((a-0.075)*2*g/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*i(2,10*(a-=1))*k((a-0.1125)*2*g/0.45);return i(2,-10*(a-=1))*k((a-0.1125)*2*g/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((e+1)*a-e)},backOut:function(a){return(a-=1)*a*((e+1)*a+e)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((e*=1.525)+1)*a-e);return 0.5*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)},bounceIn:function(a){return 1-
l.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return l.bounceIn(a*2)*0.5;return l.bounceOut(a*2-1)*0.5+0.5}};l.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};
return l});
KISSY.add("anim/manager",function(g){function i(e){e[k]=e[k]||g.guid("anim-");return e[k]}var k=g.guid("anim-");return{interval:20,runnings:{},timer:null,start:function(e){var l=i(e);if(!this.runnings[l]){this.runnings[l]=e;this.startTimer()}},stop:function(e){this.notRun(e)},notRun:function(e){delete this.runnings[i(e)];g.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(e){this.notRun(e)},resume:function(e){this.start(e)},startTimer:function(){var e=this;if(!e.timer)e.timer=setTimeout(function(){if(e.runFrames())e.stopTimer();
else{e.timer=null;e.startTimer()}},e.interval)},stopTimer:function(){var e=this.timer;if(e){clearTimeout(e);this.timer=null}},runFrames:function(){var e=true,l=this.runnings,a;for(a in l)if(l.hasOwnProperty(a)){e=false;l[a]._runFrame()}return e}}});KISSY.add("anim/scroll",function(g,i,k){var e=k.PROP_OPS;k.CUSTOM_ATTRS.push("scrollLeft","scrollTop");e.scrollLeft=e.scrollTop={getter:function(l,a){return{v:l[a],u:"",f:e["*"].interpolate}},setter:function(l,a,y){l[a]=y}}},{requires:["dom","./base"]});
KISSY.add("anim",function(g,i,k){i.Easing=k;return i},{requires:["anim/base","anim/easing","anim/color","anim/scroll"]});
