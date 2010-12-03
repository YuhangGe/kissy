/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Dec 3 16:45
*/
var KISSY=window.KISSY||{};
(function(e,l,o){function p(){q||l.Test.init()}var i=e.document,g=function(a){return typeof a==="string"?i.getElementById(a):a},m=function(a){return a<10?"0"+a:a},d=[],j,r,k,h,n,f={init:function(){j=g("log");r=g("hidepasses").checked;k=g("times").value;h=g("wl").value},time:function(a){a.startTime=(new Date).getTime()},timeEnd:function(a){a.tookTime=(new Date).getTime()-a.startTime},echo:function(a,b,c){if(b===o)b="<br />";if(c===o){c=new Date;c=m(c.getHours())+":"+m(c.getMinutes())+":"+m(c.getSeconds())+
" "}j.innerHTML+=c+a+b;f.scrollToEnd()},scrollToEnd:function(){n||(n=setTimeout(function(){j.scrollTop=j.scrollHeight;n=null},5))},log:function(a){var b="";b+='<span class="'+a.status+'">';b+="["+a.status.toUpperCase()+"] ";b+=a.name+": ";b+=a.tookTime+"ms ";if(a.extraMsg)b+=a.extraMsg;b+="</span>";a.status==="sep"?this.echo("","<hr />",""):this.echo(b)}};d.add=function(a,b){d.push({name:a,fn:function(){b.call(e,this)},fail:function(c){this.status="failed";if(c)this.extraMsg=c},status:"passed",extraMsg:"",
echo:f.echo})};d.reset=function(){for(var a=0,b=d.length;a<b;a++){d[a].status="passed";d[a].extraMsg=""}};l.Test={Config:{},init:function(){var a=this.Config;if(a.times)g("times").value=a.times;if(a.hidepasses)g("hidepasses").checked=a.hidepasses;if(a.wl)g("wl").value=a.wl;f.init();a=e.RuntimeObject?e.RuntimeObject("test_*"):e;for(var b in a)b.indexOf("test_")===0&&typeof e[b]==="function"&&d.add(b,e[b]);navigator.userAgent.indexOf("Firefox")!==-1&&d.reverse();q=true},render:function(){var a=i.getElementsByTagName("script");
a='<link rel="stylesheet" href="'+a[a.length-1].src.replace(".js",".css")+'" /><form onsubmit="return false" action="" class="ks-test-form"><button type="button" onclick="KISSY.Test.start()">Start</button><div id="konsole"><div id="log"></div></div><div class="settings">Settings:<br/><input type="checkbox" id="hidepasses" name="hidepasses"/><label for="hidepasses">Hide passes</label><br/><input type="text" value="1" id="times" size="4"/><label for="times">Iteration times for each test function</label><br/><input type="text" value="" id="wl" size="12"/><label for="wl">The whitelist of test names</label></div></form>';
i.body.className+=" ks-test";i.write(a)},start:function(){f.init();d.reset();var a=d.length,b,c,s;k=k||1;h=h||"";f.echo("[START]");for(c=0;c<a;c++){b=d[c];if(!(h&&h.indexOf(b.name)===-1)){s=k;for(f.time(b);s--;)b.fn();f.timeEnd(b);r&&b.status==="passed"||f.log(b)}}f.echo("[DONE]","<hr />")},echo:f.echo};l.Test.render();var q=false;e.attachEvent?e.attachEvent("onload",p):e.addEventListener("load",p,false)})(window,KISSY);
