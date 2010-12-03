/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Dec 3 16:44
*/
KISSY.add("node",function(a){function f(c,e,i){if(!(this instanceof f))return new f(c,e,i);if(c){if(a.isString(c)){c=o.create(c,e,i);if(c.nodeType===11)return new a.NodeList(c.childNodes)}else if(c instanceof f)return c;else c=c;this[0]=c}else this.length=0}var o=a.DOM;f.TYPE="-ks-Node";a.augment(f,{length:1,getDOMNode:function(){return this[0]},nodeType:f.TYPE});a.one=function(c,e){var i=a.get(c,e);return i?new f(i):null};a.Node=f});
KISSY.add("nodelist",function(a){function f(e){if(!(this instanceof f))return new f(e);o.push.apply(this,a.makeArray(e)||[])}var o=Array.prototype,c=a.DOM._isElementNode;a.mix(f.prototype,{length:0,item:function(e){var i=null,d,k;if(c(e)){d=0;for(k=this.length;d<k;d++)if(e===this[d]){e=d;break}}if(c(this[e]))i=new a.Node(this[e]);return i},getDOMNodes:function(){return o.slice.call(this)},each:function(e,i){var d=this.length,k=0,p;for(p=new a.Node(this[0]);k<d&&e.call(i||p,p,k,this)!==false;p=new a.Node(this[++k]));
return this}});a.all=function(e,i){return new f(a.query(e,i,true))};a.NodeList=f});
KISSY.add("node-attach",function(a,f){function o(b,h,g,j){b=[this[b?v:r]()].concat(a.makeArray(h));if(h[g]===f)return j.apply(d,b);else{j.apply(d,b);return this}}function c(b,h){a.each(b,function(g){a.each([l,s],function(j,m){j[g]=function(t){switch(h){case u:return function(){return o.call(this,m,arguments,1,t)};case q:return function(){return o.call(this,m,arguments,0,t)};case w:return function(){var n=this[m?v:r]();return(n=t.apply(d,[n].concat(a.makeArray(arguments))))?new (a[a.isArray(n)?"NodeList":
"Node"])(n):null};default:return function(){var n=this[m?v:r]();n=t.apply(d,[n].concat(a.makeArray(arguments)));return n===f?this:n}}}(d[g])})})}function e(b,h,g){b&&a.each(this,function(j){var m;if(h||a.isString(b))m=d.create(b);else{if(p(b,1)||p(b,3))m=b;if(x(b))m=b[0]}d[g](m,j)});return this}function i(b,h){if((b=a.get(b))&&b.appendChild)a.each(this,function(g){d[h](g,b)});return this}var d=a.DOM,k=a.Event,p=d._nodeTypeIs,x=d._isKSNode,l=a.Node.prototype,s=a.NodeList.prototype,r="getDOMNode",v=
r+"s",u=1,q=2,w=4;a.mix(l,{one:function(b){return a.one(b,this[0])},all:function(b){return a.all(b,this[0])}});c(["data","removeData"],u);c(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);c(["attr","removeAttr"],u);c(["val","text"],q);c(["css"],u);c(["width","height"],q);c(["offset"],q);c(["scrollIntoView"]);c(["parent","next","prev","siblings","children"],w);c(["contains"]);c(["html"],q);c(["remove"]);a.each(["insertBefore","insertAfter"],function(b){l[b]=function(h){d[b].call(d,
this[0],h);return this}});a.each([l,s],function(b,h){a.each(["append","prepend"],function(g){b[g]=function(j){return e.call(this,j,h,g)};b[g+"To"]=function(j){return i.call(this,j,g)}})});a.mix(l,a.EventTarget);l._supportSpecialEvent=true;l._addEvent=function(b,h,g){k._simpleAdd(this[0],b,h,g)};l._removeEvent=function(b,h,g){k._simpleRemove(this[0],b,h,g)};delete l.fire;a.mix(s,a.EventTarget);delete s.fire});
