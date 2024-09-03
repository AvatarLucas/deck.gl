"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2382],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>v});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var h=n.createContext({}),p=function(t){var e=n.useContext(h),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(h.Provider,{value:e},t.children)},c="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,s=t.originalType,h=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),c=p(r),f=i,v=c["".concat(h,".").concat(f)]||c[f]||l[f]||s;return r?n.createElement(v,o(o({ref:e},u),{},{components:r})):n.createElement(v,o({ref:e},u))}));function v(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=r.length,o=new Array(s);o[0]=f;var a={};for(var h in e)hasOwnProperty.call(e,h)&&(a[h]=e[h]);a.originalType=t,a[c]="string"==typeof t?t:i,o[1]=a;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41708:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(60326),i=r(67532);class s{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:e={},indices:r=null,vertexCount:s=null}=t;this.id=t.id||(0,n.h)("geometry"),this.topology=t.topology,r&&(this.indices=ArrayBuffer.isView(r)?{value:r,size:1}:r),this.attributes={};for(const[n,o]of Object.entries(e)){const t=ArrayBuffer.isView(o)?{value:o}:o;(0,i.h)(ArrayBuffer.isView(t.value),`${this._print(n)}: must be typed array or object with value as typed array`),"POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n?((0,i.h)(!this.indices),this.indices=t):this.attributes[n]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=s||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let r=1/0;for(const n of Object.values(t)){const{value:t,size:e,constant:i}=n;!i&&t&&e>=1&&(r=Math.min(r,t.length/e))}return(0,i.h)(Number.isFinite(r)),r}}},35300:(t,e,r)=>{r.d(e,{q:()=>n});const n={name:"picking",vs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nout vec4 picking_vRGBcolor_Avalid;\nvec3 picking_normalizeColor(vec3 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nvec4 picking_normalizeColor(vec4 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nbool picking_isColorZero(vec3 color) {\nreturn dot(color, vec3(1.0)) < 0.00001;\n}\nbool picking_isColorValid(vec3 color) {\nreturn dot(color, vec3(1.0)) > 0.00001;\n}\nbool isVertexHighlighted(vec3 vertexColor) {\nvec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\nreturn\nbool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\nvoid picking_setPickingColor(vec3 pickingColor) {\npickingColor = picking_normalizeColor(pickingColor);\nif (bool(picking.isActive)) {\npicking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\nif (!bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = pickingColor;\n}\n} else {\npicking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n}\n}\nvoid picking_setPickingAttribute(float value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.r = value;\n}\n}\nvoid picking_setPickingAttribute(vec2 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rg = value;\n}\n}\nvoid picking_setPickingAttribute(vec3 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = value;\n}\n}\n",fs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\nif (picking.isActive > 0.5) {\nreturn color;\n}\nbool selected = bool(picking_vRGBcolor_Avalid.a);\nif (selected) {\nfloat highLightAlpha = picking.highlightColor.a;\nfloat blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\nfloat highLightRatio = highLightAlpha / blendedAlpha;\nvec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\nreturn vec4(blendedRGB, blendedAlpha);\n} else {\nreturn color;\n}\n}\nvec4 picking_filterPickingColor(vec4 color) {\nif (bool(picking.isActive)) {\nif (picking_vRGBcolor_Avalid.a == 0.0) {\ndiscard;\n}\nreturn picking_vRGBcolor_Avalid;\n}\nreturn color;\n}\nvec4 picking_filterColor(vec4 color) {\nvec4 highlightColor = picking_filterHighlightColor(color);\nreturn picking_filterPickingColor(highlightColor);\n}\n",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},getUniforms:function(t={},e){const r={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)r.isHighlightActive=!1;else{r.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);r.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),r.highlightColor=e}void 0!==t.isActive&&(r.isActive=Boolean(t.isActive),r.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(r.useFloatColors=Boolean(t.useFloatColors));return r}}},918:(t,e,r)=>{r.d(e,{Z:()=>c,Q:()=>u});var n=r(93896),i=r(81995),s=r(94182),o=r(42035),a=r(65368);var h=r(19799);function p(t,e,r,i){var s,p=(0,n.ly)(t,e,r);switch((i=(0,o.Z)(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(s=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(e)/3)))-(0,a.Z)(Math.abs(t)))}(p,u))||(i.precision=s),(0,h.jH)(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(s=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,(0,a.Z)(e)-(0,a.Z)(t))+1}(p,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=s-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(s=function(t){return Math.max(0,-(0,a.Z)(Math.abs(t)))}(p))||(i.precision=s-2*("%"===i.type))}return(0,h.WU)(i)}function u(t){var e=t.domain;return t.ticks=function(t){var r=e();return(0,n.ZP)(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return p(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var i,s,o=e(),a=0,h=o.length-1,p=o[a],u=o[h],c=10;for(u<p&&(s=p,p=u,u=s,s=a,a=h,h=s);c-- >0;){if((s=(0,n.G9)(p,u,r))===i)return o[a]=p,o[h]=u,e(o);if(s>0)p=Math.floor(p/s)*s,u=Math.ceil(u/s)*s;else{if(!(s<0))break;p=Math.ceil(p*s)/s,u=Math.floor(u*s)/s}i=s}return t},t}function c(){var t=(0,i.ZP)();return t.copy=function(){return(0,i.JG)(t,c())},s.o.apply(t,arguments),u(t)}},46217:(t,e,r)=>{r.d(e,{_b:()=>Zt});var n="INUMBER",i="IOP1",s="IOP2",o="IOP3",a="IVAR",h="IVARNAME",p="IFUNCALL",u="IFUNDEF",c="IEXPR",l="IEXPREVAL",f="IMEMBER",v="IENDSTATEMENT",g="IARRAY";function y(t,e){this.type=t,this.value=null!=e?e:0}function d(t){return new y(i,t)}function b(t){return new y(s,t)}function x(t){return new y(o,t)}function w(t,e,r,p,u){for(var l,v,d,b,x=[],k=[],m=0;m<t.length;m++){var A=t[m],M=A.type;if(M===n||M===h)Array.isArray(A.value)?x.push.apply(x,w(A.value.map((function(t){return new y(n,t)})).concat(new y(g,A.value.length)),e,r,p,u)):x.push(A);else if(M===a&&u.hasOwnProperty(A.value))A=new y(n,u[A.value]),x.push(A);else if(M===s&&x.length>1)v=x.pop(),l=x.pop(),b=r[A.value],A=new y(n,b(l.value,v.value)),x.push(A);else if(M===o&&x.length>2)d=x.pop(),v=x.pop(),l=x.pop(),"?"===A.value?x.push(l.value?v.value:d.value):(b=p[A.value],A=new y(n,b(l.value,v.value,d.value)),x.push(A));else if(M===i&&x.length>0)l=x.pop(),b=e[A.value],A=new y(n,b(l.value)),x.push(A);else if(M===c){for(;x.length>0;)k.push(x.shift());k.push(new y(c,w(A.value,e,r,p,u)))}else if(M===f&&x.length>0)l=x.pop(),x.push(new y(n,l.value[A.value]));else{for(;x.length>0;)k.push(x.shift());k.push(A)}}for(;x.length>0;)k.push(x.shift());return k}function k(t,e,r){for(var n=[],h=0;h<t.length;h++){var p=t[h],u=p.type;if(u===a&&p.value===e)for(var l=0;l<r.tokens.length;l++){var f,v=r.tokens[l];f=v.type===i?d(v.value):v.type===s?b(v.value):v.type===o?x(v.value):new y(v.type,v.value),n.push(f)}else u===c?n.push(new y(c,k(p.value,e,r))):n.push(p)}return n}function m(t,e,r){var y,d,b,x,w,k,E=[];if(M(t))return O(t,r);for(var C=t.length,T=0;T<C;T++){var _=t[T],j=_.type;if(j===n||j===h)E.push(_.value);else if(j===s)d=E.pop(),y=E.pop(),"and"===_.value?E.push(!!y&&!!m(d,e,r)):"or"===_.value?E.push(!!y||!!m(d,e,r)):"="===_.value?(x=e.binaryOps[_.value],E.push(x(y,m(d,e,r),r))):(x=e.binaryOps[_.value],E.push(x(O(y,r),O(d,r))));else if(j===o)b=E.pop(),d=E.pop(),y=E.pop(),"?"===_.value?E.push(m(y?d:b,e,r)):(x=e.ternaryOps[_.value],E.push(x(O(y,r),O(d,r),O(b,r))));else if(j===a)if(_.value in e.functions)E.push(e.functions[_.value]);else if(_.value in e.unaryOps&&e.parser.isOperatorEnabled(_.value))E.push(e.unaryOps[_.value]);else{var P=r[_.value];if(void 0===P)throw new Error("undefined variable: "+_.value);E.push(P)}else if(j===i)y=E.pop(),x=e.unaryOps[_.value],E.push(x(O(y,r)));else if(j===p){for(k=_.value,w=[];k-- >0;)w.unshift(O(E.pop(),r));if(!(x=E.pop()).apply||!x.call)throw new Error(x+" is not a function");E.push(x.apply(void 0,w))}else if(j===u)E.push(function(){for(var t=E.pop(),n=[],i=_.value;i-- >0;)n.unshift(E.pop());var s=E.pop(),o=function(){for(var i=Object.assign({},r),s=0,o=n.length;s<o;s++)i[n[s]]=arguments[s];return m(t,e,i)};return Object.defineProperty(o,"name",{value:s,writable:!1}),r[s]=o,o}());else if(j===c)E.push(A(_,e));else if(j===l)E.push(_);else if(j===f)y=E.pop(),E.push(y[_.value]);else if(j===v)E.pop();else{if(j!==g)throw new Error("invalid Expression");for(k=_.value,w=[];k-- >0;)w.unshift(E.pop());E.push(w)}}if(E.length>1)throw new Error("invalid Expression (parity)");return 0===E[0]?0:O(E[0],r)}function A(t,e,r){return M(t)?t:{type:l,value:function(r){return m(t.value,e,r)}}}function M(t){return t&&t.type===l}function O(t,e){return M(t)?t.value(e):t}function E(t,e){for(var r,l,y,d,b,x,w=[],k=0;k<t.length;k++){var m=t[k],A=m.type;if(A===n)"number"==typeof m.value&&m.value<0?w.push("("+m.value+")"):Array.isArray(m.value)?w.push("["+m.value.map(C).join(", ")+"]"):w.push(C(m.value));else if(A===s)l=w.pop(),r=w.pop(),d=m.value,e?"^"===d?w.push("Math.pow("+r+", "+l+")"):"and"===d?w.push("(!!"+r+" && !!"+l+")"):"or"===d?w.push("(!!"+r+" || !!"+l+")"):"||"===d?w.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+r+"),("+l+")))"):"=="===d?w.push("("+r+" === "+l+")"):"!="===d?w.push("("+r+" !== "+l+")"):"["===d?w.push(r+"[("+l+") | 0]"):w.push("("+r+" "+d+" "+l+")"):"["===d?w.push(r+"["+l+"]"):w.push("("+r+" "+d+" "+l+")");else if(A===o){if(y=w.pop(),l=w.pop(),r=w.pop(),"?"!==(d=m.value))throw new Error("invalid Expression");w.push("("+r+" ? "+l+" : "+y+")")}else if(A===a||A===h)w.push(m.value);else if(A===i)r=w.pop(),"-"===(d=m.value)||"+"===d?w.push("("+d+r+")"):e?"not"===d?w.push("(!"+r+")"):"!"===d?w.push("fac("+r+")"):w.push(d+"("+r+")"):"!"===d?w.push("("+r+"!)"):w.push("("+d+" "+r+")");else if(A===p){for(x=m.value,b=[];x-- >0;)b.unshift(w.pop());d=w.pop(),w.push(d+"("+b.join(", ")+")")}else if(A===u){for(l=w.pop(),x=m.value,b=[];x-- >0;)b.unshift(w.pop());r=w.pop(),e?w.push("("+r+" = function("+b.join(", ")+") { return "+l+" })"):w.push("("+r+"("+b.join(", ")+") = "+l+")")}else if(A===f)r=w.pop(),w.push(r+"."+m.value);else if(A===g){for(x=m.value,b=[];x-- >0;)b.unshift(w.pop());w.push("["+b.join(", ")+"]")}else if(A===c)w.push("("+E(m.value,e)+")");else if(A!==v)throw new Error("invalid Expression")}return w.length>1&&(w=e?[w.join(",")]:[w.join(";")]),String(w[0])}function C(t){return"string"==typeof t?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function T(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return!0;return!1}function _(t,e,r){for(var n=!!(r=r||{}).withMembers,i=null,s=0;s<t.length;s++){var o=t[s];o.type===a||o.type===h?n||T(e,o.value)?null!==i?(T(e,i)||e.push(i),i=o.value):i=o.value:e.push(o.value):o.type===f&&n&&null!==i?i+="."+o.value:o.type===c?_(o.value,e,r):null!==i&&(T(e,i)||e.push(i),i=null)}null===i||T(e,i)||e.push(i)}function j(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}y.prototype.toString=function(){switch(this.type){case n:case i:case s:case o:case a:case h:case v:return this.value;case p:return"CALL "+this.value;case u:return"DEF "+this.value;case g:return"ARRAY "+this.value;case f:return"."+this.value;default:return"Invalid Instruction"}},j.prototype.simplify=function(t){return t=t||{},new j(w(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)},j.prototype.substitute=function(t,e){return e instanceof j||(e=this.parser.parse(String(e))),new j(k(this.tokens,t,e),this.parser)},j.prototype.evaluate=function(t){return t=t||{},m(this.tokens,this,t)},j.prototype.toString=function(){return E(this.tokens,!1)},j.prototype.symbols=function(t){t=t||{};var e=[];return _(this.tokens,e,t),e},j.prototype.variables=function(t){t=t||{};var e=[];_(this.tokens,e,t);var r=this.functions;return e.filter((function(t){return!(t in r)}))},j.prototype.toJSFunction=function(t,e){var r=this,n=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+E(this.simplify(e).tokens,!0)+"; }");return function(){return n.apply(r,arguments)}};var P="TEOF",N="TOP",S="TNUMBER",F="TSTRING",I="TPAREN",R="TBRACKET",B="TCOMMA",L="TNAME",G="TSEMICOLON";function V(t,e,r){this.type=t,this.value=e,this.index=r}function U(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}V.prototype.toString=function(){return this.type+": "+this.value},U.prototype.newToken=function(t,e,r){return new V(t,e,null!=r?r:this.pos)},U.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},U.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},U.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(P,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},U.prototype.isString=function(){var t=!1,e=this.pos,r=this.expression.charAt(e);if("'"===r||'"'===r)for(var n=this.expression.indexOf(r,e+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,"\\"!==this.expression.charAt(n-1)){var i=this.expression.substring(e+1,n);this.current=this.newToken(F,this.unescape(i),e),t=!0;break}n=this.expression.indexOf(r,n+1)}return t},U.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return("("===t||")"===t)&&(this.current=this.newToken(I,t),this.pos++,!0)},U.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return!("["!==t&&"]"!==t||!this.isOperatorEnabled("["))&&(this.current=this.newToken(R,t),this.pos++,!0)},U.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(B,","),this.pos++,!0)},U.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(G,";"),this.pos++,!0)},U.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var r=this.expression.charAt(e);if(r.toUpperCase()===r.toLowerCase()&&(e===this.pos||"_"!==r&&"."!==r&&(r<"0"||r>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(n in this.consts)return this.current=this.newToken(S,this.consts[n]),this.pos+=n.length,!0}return!1},U.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var r=this.expression.charAt(e);if(r.toUpperCase()===r.toLowerCase()&&(e===this.pos||"_"!==r&&(r<"0"||r>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(N,n),this.pos+=n.length,!0}return!1},U.prototype.isName=function(){for(var t=this.pos,e=t,r=!1;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()){if(e===this.pos&&("$"===n||"_"===n)){"_"===n&&(r=!0);continue}if(e===this.pos||!r||"_"!==n&&(n<"0"||n>"9"))break}else r=!0}if(r){var i=this.expression.substring(t,e);return this.current=this.newToken(L,i),this.pos+=i.length,!0}return!1},U.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(t=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var Z=/^[0-9a-f]{4}$/i;function H(t,e,r){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==r.allowMemberAccess}U.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var r=t.substring(0,e);e>=0;){var n=t.charAt(++e);switch(n){case"'":r+="'";break;case'"':r+='"';break;case"\\":r+="\\";break;case"/":r+="/";break;case"b":r+="\b";break;case"f":r+="\f";break;case"n":r+="\n";break;case"r":r+="\r";break;case"t":r+="\t";break;case"u":var i=t.substring(e+1,e+5);Z.test(i)||this.parseError("Illegal escape sequence: \\u"+i),r+=String.fromCharCode(parseInt(i,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++e;var s=t.indexOf("\\",e);r+=t.substring(e,s<0?t.length:s),e=s}return r},U.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},U.prototype.isRadixInteger=function(){var t,e,r=this.pos;if(r>=this.expression.length-2||"0"!==this.expression.charAt(r))return!1;if(++r,"x"===this.expression.charAt(r))t=16,e=/^[0-9a-f]$/i,++r;else{if("b"!==this.expression.charAt(r))return!1;t=2,e=/^[01]$/i,++r}for(var n=!1,i=r;r<this.expression.length;){var s=this.expression.charAt(r);if(!e.test(s))break;r++,n=!0}return n&&(this.current=this.newToken(S,parseInt(this.expression.substring(i,r),t)),this.pos=r),n},U.prototype.isNumber=function(){for(var t,e=!1,r=this.pos,n=r,i=r,s=!1,o=!1;r<this.expression.length&&((t=this.expression.charAt(r))>="0"&&t<="9"||!s&&"."===t);)"."===t?s=!0:o=!0,r++,e=o;if(e&&(i=r),"e"===t||"E"===t){r++;for(var a=!0,h=!1;r<this.expression.length;){if(t=this.expression.charAt(r),!a||"+"!==t&&"-"!==t){if(!(t>="0"&&t<="9"))break;h=!0,a=!1}else a=!1;r++}h||(r=i)}return e?(this.current=this.newToken(S,parseFloat(this.expression.substring(n,r))),this.pos=r):this.pos=i,e},U.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(N,e);else if("\u2219"===e||"\u2022"===e)this.current=this.newToken(N,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(N,">="),this.pos++):this.current=this.newToken(N,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(N,"<="),this.pos++):this.current=this.newToken(N,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(N,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(N,"=="),this.pos++):this.current=this.newToken(N,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(N,"!="),this.pos++):this.current=this.newToken(N,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=t,!1)},U.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)},U.prototype.getCoordinates=function(){var t,e=0,r=-1;do{e++,t=this.pos-r,r=this.expression.indexOf("\n",r+1)}while(r>=0&&r<this.pos);return{line:e,column:t}},U.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)},H.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},H.prototype.tokenMatches=function(t,e){return void 0===e||(Array.isArray(e)?T(e,t.value):"function"==typeof e?e(t):t.value===e)},H.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},H.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},H.prototype.accept=function(t,e){return!(this.nextToken.type!==t||!this.tokenMatches(this.nextToken,e))&&(this.next(),!0)},H.prototype.expect=function(t,e){if(!this.accept(t,e)){var r=this.tokens.getCoordinates();throw new Error("parse error ["+r.line+":"+r.column+"]: Expected "+(e||t))}},H.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;if(this.accept(L)||this.accept(N,(function(t){return t.value in e})))t.push(new y(a,this.current.value));else if(this.accept(S))t.push(new y(n,this.current.value));else if(this.accept(F))t.push(new y(n,this.current.value));else if(this.accept(I,"("))this.parseExpression(t),this.expect(I,")");else{if(!this.accept(R,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(R,"]"))t.push(new y(g,0));else{var r=this.parseArrayList(t);t.push(new y(g,r))}}},H.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(t,e)||this.pushExpression(t,e))},H.prototype.pushExpression=function(t,e){for(var r=0,n=e.length;r<n;r++)t.push(e[r])},H.prototype.parseUntilEndStatement=function(t,e){return!!this.accept(G)&&(!this.nextToken||this.nextToken.type===P||this.nextToken.type===I&&")"===this.nextToken.value||e.push(new y(v)),this.nextToken.type!==P&&this.parseExpression(e),t.push(new y(c,e)),!0)},H.prototype.parseArrayList=function(t){for(var e=0;!this.accept(R,"]");)for(this.parseExpression(t),++e;this.accept(B);)this.parseExpression(t),++e;return e},H.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(N,"=");){var e=t.pop(),r=[],n=t.length-1;if(e.type!==p){if(e.type!==a&&e.type!==f)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(r),t.push(new y(h,e.value)),t.push(new y(c,r)),t.push(b("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,s=e.value+1;i<s;i++){var o=n-i;t[o].type===a&&(t[o]=new y(h,t[o].value))}this.parseVariableAssignmentExpression(r),t.push(new y(c,r)),t.push(new y(u,e.value))}}},H.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(N,"?");){var e=[],r=[];this.parseConditionalExpression(e),this.expect(N,":"),this.parseConditionalExpression(r),t.push(new y(c,e)),t.push(new y(c,r)),t.push(x("?"))}},H.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(N,"or");){var e=[];this.parseAndExpression(e),t.push(new y(c,e)),t.push(b("or"))}},H.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(N,"and");){var e=[];this.parseComparison(e),t.push(new y(c,e)),t.push(b("and"))}};var q=["==","!=","<","<=",">=",">","in"];H.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(N,q);){var e=this.current;this.parseAddSub(t),t.push(b(e.value))}};var D=["+","-","||"];H.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(N,D);){var e=this.current;this.parseTerm(t),t.push(b(e.value))}};var z=["*","/","%"];function $(t,e){return Number(t)+Number(e)}function J(t,e){return t-e}function W(t,e){return t*e}function X(t,e){return t/e}function Y(t,e){return t%e}function K(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Q(t,e){return t===e}function tt(t,e){return t!==e}function et(t,e){return t>e}function rt(t,e){return t<e}function nt(t,e){return t>=e}function it(t,e){return t<=e}function st(t,e){return Boolean(t&&e)}function ot(t,e){return Boolean(t||e)}function at(t,e){return T(e,t)}function ht(t){return(Math.exp(t)-Math.exp(-t))/2}function pt(t){return(Math.exp(t)+Math.exp(-t))/2}function ut(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function ct(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function lt(t){return Math.log(t+Math.sqrt(t*t-1))}function ft(t){return Math.log((1+t)/(1-t))/2}function vt(t){return Math.log(t)*Math.LOG10E}function gt(t){return-t}function yt(t){return!t}function dt(t){return t<0?Math.ceil(t):Math.floor(t)}function bt(t){return Math.random()*(t||1)}function xt(t){return mt(t+1)}H.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(N,z);){var e=this.current;this.parseFactor(t),t.push(b(e.value))}},H.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;if(this.save(),this.accept(N,(function(t){return t.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===I&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(t);if(this.nextToken.type===G||this.nextToken.type===B||this.nextToken.type===P||this.nextToken.type===I&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(t)}var r=this.current;this.parseFactor(t),t.push(d(r.value))}else this.parseExponential(t)},H.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(N,"^");)this.parseFactor(t),t.push(b("^"))},H.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(N,"!");)t.push(d("!"))},H.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;if(this.accept(N,(function(t){return t.value in e}))){var r=this.current;this.parseAtom(t),t.push(d(r.value))}else for(this.parseMemberExpression(t);this.accept(I,"(");)if(this.accept(I,")"))t.push(new y(p,0));else{var n=this.parseArgumentList(t);t.push(new y(p,n))}},H.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(I,")");)for(this.parseExpression(t),++e;this.accept(B);)this.parseExpression(t),++e;return e},H.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(N,".")||this.accept(R,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(L),t.push(new y(f,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(R,"]"),t.push(b("["))}}};var wt=4.7421875,kt=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function mt(t){var e,r;if(function(t){return isFinite(t)&&t===Math.round(t)}(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var n=t-2,i=t-1;n>1;)i*=n,n--;return 0===i&&(i=1),i}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*mt(1-t));if(t>=171.35)return 1/0;if(t>85){var s=t*t,o=s*t,a=o*t,h=a*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*s)-139/(51840*o)-571/(2488320*a)+163879/(209018880*h)+5246819/(75246796800*h*t))}--t,r=kt[0];for(var p=1;p<kt.length;++p)r+=kt[p]/(t+p);return e=t+wt+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*r}function At(t){return Array.isArray(t)?t.length:String(t).length}function Mt(){for(var t=0,e=0,r=0;r<arguments.length;r++){var n,i=Math.abs(arguments[r]);e<i?(t=t*(n=e/i)*n+1,e=i):t+=i>0?(n=i/e)*n:i}return e===1/0?1/0:e*Math.sqrt(t)}function Ot(t,e,r){return t?e:r}function Et(t,e){return void 0===e||0==+e?Math.round(t):(t=+t,e=-+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))))}function Ct(t,e,r){return r&&(r[t]=e),e}function Tt(t,e){return t[0|e]}function _t(t){return 1===arguments.length&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function jt(t){return 1===arguments.length&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function Pt(t,e){if("function"!=typeof t)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,r){return t(e,r)}))}function Nt(t,e,r){if("function"!=typeof t)throw new Error("First argument to fold is not a function");if(!Array.isArray(r))throw new Error("Second argument to fold is not an array");return r.reduce((function(e,r,n){return t(e,r,n)}),e)}function St(t,e){if("function"!=typeof t)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,r){return t(e,r)}))}function Ft(t,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function It(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function Rt(t){return(t>0)-(t<0)||+t}var Bt=1/3;function Lt(t){return t<0?-Math.pow(-t,Bt):Math.pow(t,Bt)}function Gt(t){return Math.exp(t)-1}function Vt(t){return Math.log(1+t)}function Ut(t){return Math.log(t)/Math.LN2}function Zt(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||ht,cosh:Math.cosh||pt,tanh:Math.tanh||ut,asinh:Math.asinh||ct,acosh:Math.acosh||lt,atanh:Math.atanh||ft,sqrt:Math.sqrt,cbrt:Math.cbrt||Lt,log:Math.log,log2:Math.log2||Ut,ln:Math.log,lg:Math.log10||vt,log10:Math.log10||vt,expm1:Math.expm1||Gt,log1p:Math.log1p||Vt,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||dt,"-":gt,"+":Number,exp:Math.exp,not:yt,length:At,"!":xt,sign:Math.sign||Rt},this.binaryOps={"+":$,"-":J,"*":W,"/":X,"%":Y,"^":Math.pow,"||":K,"==":Q,"!=":tt,">":et,"<":rt,">=":nt,"<=":it,and:st,or:ot,in:at,"=":Ct,"[":Tt},this.ternaryOps={"?":Ot},this.functions={random:bt,fac:xt,min:jt,max:_t,hypot:Math.hypot||Mt,pyt:Math.hypot||Mt,pow:Math.pow,atan2:Math.atan2,if:Ot,gamma:mt,roundTo:Et,map:Pt,fold:Nt,filter:St,indexOf:Ft,join:It},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}Zt.prototype.parse=function(t){var e=[],r=new H(this,new U(this,t),{allowMemberAccess:this.options.allowMemberAccess});return r.parseExpression(e),r.expect(P,"EOF"),new j(e,this)},Zt.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var Ht=new Zt;Zt.parse=function(t){return Ht.parse(t)},Zt.evaluate=function(t,e){return Ht.parse(t).evaluate(e)};var qt={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};Zt.prototype.isOperatorEnabled=function(t){var e=function(t){return qt.hasOwnProperty(t)?qt[t]:t}(t),r=this.options.operators||{};return!(e in r)||!!r[e]}}}]);