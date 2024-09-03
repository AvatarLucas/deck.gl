"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3785],{3905:(t,i,e)=>{e.d(i,{Zo:()=>h,kt:()=>p});var n=e(67294);function o(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(i){o(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function c(t,i){if(null==t)return{};var e,n,o=function(t,i){if(null==t)return{};var e,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],i.indexOf(e)>=0||(o[e]=t[e]);return o}(t,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=n.createContext({}),a=function(t){var i=n.useContext(s),e=i;return t&&(e="function"==typeof t?t(i):l(l({},i),t)),e},h=function(t){var i=a(t.components);return n.createElement(s.Provider,{value:i},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var i=t.children;return n.createElement(n.Fragment,{},i)}},f=n.forwardRef((function(t,i){var e=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,h=c(t,["components","mdxType","originalType","parentName"]),u=a(e),f=o,p=u["".concat(s,".").concat(f)]||u[f]||g[f]||r;return e?n.createElement(p,l(l({ref:i},h),{},{components:e})):n.createElement(p,l({ref:i},h))}));function p(t,i){var e=arguments,o=i&&i.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=f;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=t,c[u]="string"==typeof t?t:o,l[1]=c;for(var a=2;a<r;a++)l[a]=e[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}f.displayName="MDXCreateElement"},24808:(t,i,e)=>{e.d(i,{D5:()=>l});var n=e(67294),o=e(83156);e(9547),e(38826),e(81255),e(37442),e(4432),e(6415),e(90552),e(33855),e(46176),e(38824),e(31592);const r=e.e(4613).then(e.t.bind(e,24613,23)),l=n.forwardRef((function(t,i){return(0,o.Z)(t,i,r)}))},41708:(t,i,e)=>{e.d(i,{Z:()=>r});var n=e(60326),o=e(67532);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:i={},indices:e=null,vertexCount:r=null}=t;this.id=t.id||(0,n.h)("geometry"),this.topology=t.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[n,l]of Object.entries(i)){const t=ArrayBuffer.isView(l)?{value:l}:l;(0,o.h)(ArrayBuffer.isView(t.value),`${this._print(n)}: must be typed array or object with value as typed array`),"POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n?((0,o.h)(!this.indices),this.indices=t):this.attributes[n]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,i){return this}_calculateVertexCount(t,i){if(i)return i.value.length;let e=1/0;for(const n of Object.values(t)){const{value:t,size:i,constant:o}=n;!o&&t&&i>=1&&(e=Math.min(e,t.length/i))}return(0,o.h)(Number.isFinite(e)),e}}},35300:(t,i,e)=>{e.d(i,{q:()=>n});const n={name:"picking",vs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nout vec4 picking_vRGBcolor_Avalid;\nvec3 picking_normalizeColor(vec3 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nvec4 picking_normalizeColor(vec4 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nbool picking_isColorZero(vec3 color) {\nreturn dot(color, vec3(1.0)) < 0.00001;\n}\nbool picking_isColorValid(vec3 color) {\nreturn dot(color, vec3(1.0)) > 0.00001;\n}\nbool isVertexHighlighted(vec3 vertexColor) {\nvec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\nreturn\nbool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\nvoid picking_setPickingColor(vec3 pickingColor) {\npickingColor = picking_normalizeColor(pickingColor);\nif (bool(picking.isActive)) {\npicking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\nif (!bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = pickingColor;\n}\n} else {\npicking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n}\n}\nvoid picking_setPickingAttribute(float value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.r = value;\n}\n}\nvoid picking_setPickingAttribute(vec2 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rg = value;\n}\n}\nvoid picking_setPickingAttribute(vec3 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = value;\n}\n}\n",fs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\nif (picking.isActive > 0.5) {\nreturn color;\n}\nbool selected = bool(picking_vRGBcolor_Avalid.a);\nif (selected) {\nfloat highLightAlpha = picking.highlightColor.a;\nfloat blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\nfloat highLightRatio = highLightAlpha / blendedAlpha;\nvec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\nreturn vec4(blendedRGB, blendedAlpha);\n} else {\nreturn color;\n}\n}\nvec4 picking_filterPickingColor(vec4 color) {\nif (bool(picking.isActive)) {\nif (picking_vRGBcolor_Avalid.a == 0.0) {\ndiscard;\n}\nreturn picking_vRGBcolor_Avalid;\n}\nreturn color;\n}\nvec4 picking_filterColor(vec4 color) {\nvec4 highlightColor = picking_filterHighlightColor(color);\nreturn picking_filterPickingColor(highlightColor);\n}\n",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},getUniforms:function(t={},i){const e={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)e.isHighlightActive=!1;else{e.isHighlightActive=!0;const i=t.highlightedObjectColor.slice(0,3);e.highlightedObjectColor=i}if(t.highlightColor){const i=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),e.highlightColor=i}void 0!==t.isActive&&(e.isActive=Boolean(t.isActive),e.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(e.useFloatColors=Boolean(t.useFloatColors));return e}}},39875:(t,i,e)=>{e.d(i,{Z:()=>o});const n=1e20;class o{constructor({fontSize:t=24,buffer:i=3,radius:e=8,cutoff:n=.25,fontFamily:o="sans-serif",fontWeight:r="normal",fontStyle:l="normal"}={}){this.buffer=i,this.cutoff=n,this.radius=e;const c=this.size=t+4*i,s=this._createCanvas(c),a=this.ctx=s.getContext("2d",{willReadFrequently:!0});a.font=`${l} ${r} ${t}px ${o}`,a.textBaseline="alphabetic",a.textAlign="left",a.fillStyle="black",this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(t){const i=document.createElement("canvas");return i.width=i.height=t,i}draw(t){const{width:i,actualBoundingBoxAscent:e,actualBoundingBoxDescent:o,actualBoundingBoxLeft:l,actualBoundingBoxRight:c}=this.ctx.measureText(t),s=Math.ceil(e),a=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(c-l))),h=Math.min(this.size-this.buffer,s+Math.ceil(o)),u=a+2*this.buffer,g=h+2*this.buffer,f=Math.max(u*g,0),p=new Uint8ClampedArray(f),v={data:p,width:u,height:g,glyphWidth:a,glyphHeight:h,glyphTop:s,glyphLeft:0,glyphAdvance:i};if(0===a||0===h)return v;const{ctx:d,buffer:b,gridInner:k,gridOuter:C}=this;d.clearRect(b,b,a,h),d.fillText(t,b,b+s);const m=d.getImageData(b,b,a,h);C.fill(n,0,f),k.fill(0,0,f);for(let r=0;r<h;r++)for(let t=0;t<a;t++){const i=m.data[4*(r*a+t)+3]/255;if(0===i)continue;const e=(r+b)*u+t+b;if(1===i)C[e]=0,k[e]=n;else{const t=.5-i;C[e]=t>0?t*t:0,k[e]=t<0?t*t:0}}r(C,0,0,u,g,u,this.f,this.v,this.z),r(k,b,b,a,h,u,this.f,this.v,this.z);for(let n=0;n<f;n++){const t=Math.sqrt(C[n])-Math.sqrt(k[n]);p[n]=Math.round(255-255*(t/this.radius+this.cutoff))}return v}}function r(t,i,e,n,o,r,c,s,a){for(let h=i;h<i+n;h++)l(t,e*r+h,r,o,c,s,a);for(let h=e;h<e+o;h++)l(t,h*r+i,1,n,c,s,a)}function l(t,i,e,o,r,l,c){l[0]=0,c[0]=-n,c[1]=n,r[0]=t[i];for(let s=1,a=0,h=0;s<o;s++){r[s]=t[i+s*e];const o=s*s;do{const t=l[a];h=(r[s]-r[t]+o-t*t)/(s-t)/2}while(h<=c[a]&&--a>-1);a++,l[a]=s,c[a]=h,c[a+1]=n}for(let n=0,s=0;n<o;n++){for(;c[s+1]<n;)s++;const o=l[s],a=n-o;t[i+n*e]=r[o]+a*a}}},81035:(t,i,e)=>{e.d(i,{Z:()=>v});var n=e(93896),o=e(42035),r=e(19799);var l=e(81995),c=e(94182);function s(t){return Math.log(t)}function a(t){return Math.exp(t)}function h(t){return-Math.log(-t)}function u(t){return-Math.exp(-t)}function g(t){return isFinite(t)?+("1e"+t):t<0?0:t}function f(t){return(i,e)=>-t(-i,e)}function p(t){const i=t(s,a),e=i.domain;let l,c,p=10;function v(){return l=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),i=>Math.log(i)/t)}(p),c=function(t){return 10===t?g:t===Math.E?Math.exp:i=>Math.pow(t,i)}(p),e()[0]<0?(l=f(l),c=f(c),t(h,u)):t(s,a),i}return i.base=function(t){return arguments.length?(p=+t,v()):p},i.domain=function(t){return arguments.length?(e(t),v()):e()},i.ticks=t=>{const i=e();let o=i[0],r=i[i.length-1];const s=r<o;s&&([o,r]=[r,o]);let a,h,u=l(o),g=l(r);const f=null==t?10:+t;let v=[];if(!(p%1)&&g-u<f){if(u=Math.floor(u),g=Math.ceil(g),o>0){for(;u<=g;++u)for(a=1;a<p;++a)if(h=u<0?a/c(-u):a*c(u),!(h<o)){if(h>r)break;v.push(h)}}else for(;u<=g;++u)for(a=p-1;a>=1;--a)if(h=u>0?a/c(-u):a*c(u),!(h<o)){if(h>r)break;v.push(h)}2*v.length<f&&(v=(0,n.ZP)(o,r,f))}else v=(0,n.ZP)(u,g,Math.min(g-u,f)).map(c);return s?v.reverse():v},i.tickFormat=(t,e)=>{if(null==t&&(t=10),null==e&&(e=10===p?"s":","),"function"!=typeof e&&(p%1||null!=(e=(0,o.Z)(e)).precision||(e.trim=!0),e=(0,r.WU)(e)),t===1/0)return e;const n=Math.max(1,p*t/i.ticks().length);return t=>{let i=t/c(Math.round(l(t)));return i*p<p-.5&&(i*=p),i<=n?e(t):""}},i.nice=()=>e(function(t,i){var e,n=0,o=(t=t.slice()).length-1,r=t[n],l=t[o];return l<r&&(e=n,n=o,o=e,e=r,r=l,l=e),t[n]=i.floor(r),t[o]=i.ceil(l),t}(e(),{floor:t=>c(Math.floor(l(t))),ceil:t=>c(Math.ceil(l(t)))})),i}function v(){const t=p((0,l.l4)()).domain([1,10]);return t.copy=()=>(0,l.JG)(t,v()).base(t.base()),c.o.apply(t,arguments),t}}}]);