"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},i="H3TileLayer",o={unversionedId:"api-reference/carto/h3-tile-layer",id:"api-reference/carto/h3-tile-layer",title:"H3TileLayer",description:"H3TileLayer is a layer for visualizing tiled data described using the H3 Spatial Index.",source:"@site/../docs/api-reference/carto/h3-tile-layer.md",sourceDirName:"api-reference/carto",slug:"/api-reference/carto/h3-tile-layer",permalink:"/docs/api-reference/carto/h3-tile-layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/h3-tile-layer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Sources",permalink:"/docs/api-reference/carto/data-sources"},next:{title:"HeatmapTileLayer (Experimental)",permalink:"/docs/api-reference/carto/heatmap-tile-layer"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>data</code> (TilejsonResult)",id:"data",level:4},{value:"Source",id:"source",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"h3tilelayer"},"H3TileLayer"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"H3TileLayer")," is a layer for visualizing tiled data described using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.carto.com/data-and-analysis/analytics-toolbox-for-bigquery/key-concepts/spatial-indexes#h3"},"H3 Spatial Index"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import DeckGL from '@deck.gl/react';\nimport {H3TileLayer, h3QuerySource} from '@deck.gl/carto';\n\nfunction App({viewState}) {\n  const data = h3QuerySource({\n    accessToken: 'XXX',\n    connectionName: 'carto_dw',\n    sqlQuery: 'select * from carto-demo-data.demo_tables.chicago_crime_sample',\n  });\n\n  const layer = new H3TileLayer({\n    data,\n    getFillColor: d => d.properties.color\n  })\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To install the dependencies from NPM:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/carto\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {H3TileLayer} from '@deck.gl/carto';\nnew H3TileLayer({});\n")),(0,n.kt)("p",null,"To use pre-bundled scripts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/geo-layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"new deck.carto.H3TileLayer({});\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("p",null,"Inherits all properties from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/geo-layers/h3-hexagon-layer"},(0,n.kt)("inlineCode",{parentName:"a"},"H3HexagonLayer"))," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/geo-layers/tile-layer"},(0,n.kt)("inlineCode",{parentName:"a"},"TileLayer")),", with exceptions indicated below."),(0,n.kt)("h4",{id:"data"},(0,n.kt)("inlineCode",{parentName:"h4"},"data")," (TilejsonResult)"),(0,n.kt)("p",null,"Required. A valid ",(0,n.kt)("inlineCode",{parentName:"p"},"TilejsonResult")," object."),(0,n.kt)("p",null,"Use one of the following ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/carto/data-sources"},"Data Sources")," to fetch this from the CARTO API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#h3tablesource"},"h3TableSource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#h3querysource"},"h3QuerySource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#h3tilesetsource"},"h3TilesetSource"))),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/modules/carto/src/layers/h3-tile-layer.ts"},"modules/carto/src/layers/h3-tile-layer.ts")))}d.isMDXComponent=!0}}]);