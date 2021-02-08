(function(t){function e(e){for(var o,u,a=e[0],l=e[1],s=e[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("Editor")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"editor"},[n("Menu",{attrs:{textJSON:t.textJSON},on:{showJSON:t.showJSON,addObjectToJson:t.addObjectToJson}}),n("div",{staticClass:"editor-container"},[n("div",{ref:"content",staticClass:"editor-field",attrs:{contenteditable:""}})])],1),n("EditorJSON",{attrs:{isJson:t.isJson,textJSON:t.textJSON},on:{hideJson:t.hideJson}})],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-menu"},[n("MenuButton",{attrs:{list:t.listSize,value:t.size,textButton:"Size",attribute:t.attribute.size},on:{changeValue:t.clickButtonSize}}),n("MenuButton",{attrs:{list:t.listColor,value:t.color,textButton:"Color",attribute:t.attribute.color},on:{changeValue:t.clickButtonColor}}),n("MenuButton",{attrs:{list:t.listColor,value:t.bg,textButton:"Background",attribute:t.attribute.bg},on:{changeValue:t.clickButtonBg}}),n("button",{staticClass:"editor-button",on:{click:t.showJSON}},[t._v("Show JSON")])],1)},s=[],c=n("b85c"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"editor-button",attrs:{id:"fontSize","data-attribute":t.attribute}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"editor-select",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentValue=e.target.multiple?n:n[0]},function(e){return t.clickActionBtn(e.target,t.attribute)}]}},t._l(t.list,(function(e,o){return n("option",{key:o,domProps:{value:e.value}},[t._v(t._s(e.text)+" ")])})),0),n("label",{attrs:{for:"fontSize"}},[t._v(t._s(t.textButton))])])},d=[],h=(n("a9e3"),{name:"MenuButton",props:{list:{type:Array,default:function(){return[]}},value:{type:[Number,String],default:""},attribute:{type:String,default:""},textButton:{type:String,default:"Button"}},data:function(){return{currentValue:null}},methods:{clickActionBtn:function(t,e){document.execCommand(e,!1,t.value),this.$emit("changeValue",this.currentValue)}},mounted:function(){this.currentValue=this.value}}),p=h,v=n("2877"),b=Object(v["a"])(p,f,d,!1,null,"23ee1eff",null),x=b.exports,O={name:"Menu",components:{MenuButton:x},props:{textJSON:{type:Array,default:function(){return[]}}},data:function(){return{attribute:{size:"fontSize",color:"foreColor",bg:"backColor"},size:3,color:"#000000",bg:"#000000",listColor:[{text:"Black",value:"#000000"},{text:"White",value:"#FFFFFF"},{text:"Red",value:"#FF0000"},{text:"Blue",value:"#0000FF"},{text:"Green",value:"#008000"}],listSize:[{text:"10",value:1},{text:"13",value:2},{text:"16",value:3},{text:"18",value:4},{text:"24",value:5},{text:"32",value:6},{text:"48",value:7}]}},methods:{clickButtonSize:function(t){this.size=t,this.checkIsDouble()},clickButtonColor:function(t){this.color=t,this.checkIsDouble()},clickButtonBg:function(t){this.bg=t,this.checkIsDouble()},showJSON:function(){this.$emit("showJSON")},checkIsDouble:function(){var t=!1,e={text:"",size:this.getSize()+"px",color:this.getColor()};if(this.textJSON.length){var n,o=Object(c["a"])(this.textJSON);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(r.size===e.size||r.color===e.color)return t=!0,!1}}catch(i){o.e(i)}finally{o.f()}t||this.$emit("addObjectToJson",e),t=!1}else this.$emit("addObjectToJson",e)},getSize:function(){var t,e=Object(c["a"])(this.listSize);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.value===this.size)return n.text}}catch(o){e.e(o)}finally{e.f()}},getColor:function(){var t,e=Object(c["a"])(this.listColor);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.value===this.color)return n.text}}catch(o){e.e(o)}finally{e.f()}}}},S=O,m=Object(v["a"])(S,l,s,!1,null,null,null),J=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isJson?n("div",{staticClass:"modal-json"},[n("div",{staticClass:"container-json"},[t.textJSON.length?n("pre",[t._v(t._s(t.textJSON))]):n("span",[t._v("No data!")]),n("button",{staticClass:"editor-button close-button",on:{click:t.hideJSON}},[t._v("×")])])]):t._e()},y=[],_={name:"EditorJSON",props:{isJson:{type:Boolean,default:!1},textJSON:{type:Array,default:function(){return[]}}},methods:{hideJSON:function(){this.$emit("hideJson")}}},N=_,B=Object(v["a"])(N,g,y,!1,null,"660db99e",null),j=B.exports,C={name:"Editor",components:{EditorJSON:j,Menu:J},data:function(){return{isJson:!1,textJSON:[]}},methods:{showJSON:function(){this.isJson=!0},hideJson:function(){this.isJson=!1},addObjectToJson:function(t){t.text=this.$refs.content.innerText,t.text.length>0&&this.textJSON.push(t)}}},k=C,w=Object(v["a"])(k,u,a,!1,null,null,null),z=w.exports,M={name:"App",components:{Editor:z}},$=M,E=Object(v["a"])($,r,i,!1,null,null,null),F=E.exports;n("5aea");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(F)}}).$mount("#app")},"5aea":function(t,e,n){}});
//# sourceMappingURL=app.ee462de9.js.map