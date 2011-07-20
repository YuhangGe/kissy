/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Jul 20 21:14
*/
KISSY.add("menubutton/menubutton",function(g,f,h,d,e,i){var j=f.create(d,{hideMenu:function(){this.get("menu").hide()},showMenu:function(){var a=this.get("view"),b=a.get("el"),c=this.get("menu");if(!c.get("visible")){c.set("align",g.mix({node:b},this.get("menuAlign")));c.show();b.attr("aria-haspopup",c.get("el").attr("id"));a.set("collapsed",false)}},bindUI:function(){var a=this,b=this.get("menu");b.on("afterActiveItemChange",function(c){a.set("activeItem",c.newVal)});b.on("click",function(c){a.fire("click",
{target:c.target})});b.on("hide",function(){a.get("view").set("collapsed",true)})},_handleKeydown:function(a){var b=this.get("menu");if(b&&b.get("visible")){b=b._handleKeydown(a);if(a.keyCode==27){this.hideMenu();return true}return b}if(a.keyCode==38||a.keyCode==40){this.showMenu();return true}},_handleBlur:function(a){if(j.superclass._handleBlur.call(this,a))return true;this.hideMenu()},_handleClick:function(a){if(d.superclass._handleClick.call(this,a))return true;var b=this.get("menu");if(a.type==
"click")b.get("visible")?this.hideMenu():this.showMenu();else if(a.type=="keydown")if(a.keyCode==13)b.get("visible")&&b._handleClick(a);else if(a.keyCode==32){a.preventDefault();this.showMenu()}},getMenu:function(){var a=this.get("menu");if(!a){a=new i.PopupMenu(g.mix({prefixCls:this.get("prefixCls")},this.get("menuCfg")));this.set("menu",a)}return a},addItem:function(a,b){this.getMenu().addChild(a,b)},removeItem:function(a,b){this.get("menu")&&this.get("menu").removeChild(a,b)},removeItems:function(a){this.get("menu")&&
this.get("menu").removeChildren(a)},getItemAt:function(a){return this.get("menu")&&this.get("menu").getChildAt(a)},destructor:function(){var a=this.get("menu");a&&a.destroy()}},{ATTRS:{activeItem:{view:true},menuAlign:{value:{points:["bl","tl"],overflow:{failX:1,failY:1,adjustX:1,adjustY:1}}},menu:{setter:function(a){a.set("parent",this)}}},DefaultRender:e});return j},{requires:["uibase","node","button","./menubuttonrender","menu"]});
KISSY.add("menubutton/menubuttonrender",function(g,f,h){return f.create(h.Render,{createDom:function(){var d=this.get("innerEL"),e=g.substitute('<div class="{prefixCls}inline-block {prefixCls}menu-button-caption">{content}</div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',{content:this.get("content")||"",prefixCls:this.get("prefixCls")});d.html(e).attr("aria-haspopup",true)},_uiSetContent:function(d){var e=this.get("el").one("."+this.getCls("menu-button-caption"));
e.html("");e.append(d)},_uiSetCollapsed:function(d){var e=this.get("el"),i=this.getCls("menu-button-open");if(d){e.removeClass(i);e.attr("aria-expanded",false)}else{e.addClass(i);e.attr("aria-expanded",true)}},_uiSetActiveItem:function(d){this.get("el").attr("aria-activedescendant",d&&d.get("el").attr("id")||"")}},{ATTRS:{activeItem:{},collapsed:{value:true}}})},{requires:["uibase","button"]});
KISSY.add("menubutton/option",function(g,f,h){return f.create(h.Item,{},{ATTRS:{selectable:{value:true}}})},{requires:["uibase","menu"]});
KISSY.add("menubutton/select",function(g,f,h,d,e,i){var j=h.create(d,{bindUI:function(){this.on("click",this.handleMenuClick,this);this.get("menu").on("show",this._handleMenuShow,this)},_handleMenuShow:function(){this.get("menu").set("highlightedItem",this.get("selectedItem")||this.get("menu").getChildAt(0))},updateCaption_:function(){var a=this.get("selectedItem");this.set("content",a?a.get("content"):this.get("defaultCaption"))},handleMenuClick:function(a){this.set("selectedItem",a.target);this.hideMenu()},
_uiSetSelectedItem:function(a,b){b&&b.prevVal&&b.prevVal.set("selected",false);this.set("value",a&&a.get("value"));this.updateCaption_()},_uiSetDefaultCaption:function(){this.updateCaption_()},_uiSetValue:function(a){for(var b=this.get("menu").get("children"),c=0;c<b.length;c++){var k=b[c];if(k.get("value")==a){this.set("selectedItem",k);return}}this.set("selectedItem",null)}},{ATTRS:{selectedItem:{},selectedIndex:{setter:function(a){this.set("selectedItem",this.get("menu").getChildAt(a))},getter:function(){return g.indexOf(this.get("selectedItem"),
this.get("menu").get("children"))}},defaultCaption:{}}});j.decorate=function(a,b){a=g.one(a);var c=new e.PopupMenu(g.mix({prefixCls:b.prefixCls},b.menuCfg)),k,n=a.val();a.all("option").each(function(l){var o=new i({content:l.text(),prefixCls:b.prefixCls,value:l.val()});if(n==l.val())k=o;c.addChild(o)});var m=new j(g.mix({selectedItem:k,menu:c},b));m.render();m.get("el").insertBefore(a);var p;if(p=a.attr("name")){var q=(new f("<input type='hidden' name='"+p+"' value='"+n+"'>")).insertBefore(a);c.on("click",
function(l){q.val(l.target.get("value"))})}a.remove();return m};return j},{requires:["node","uibase","./menubutton","menu","./option"]});KISSY.add("menubutton",function(g,f,h,d,e){f.Render=h;f.Select=d;f.Option=e;return f},{requires:["menubutton/menubutton","menubutton/menubuttonrender","menubutton/select","menubutton/option"]});
