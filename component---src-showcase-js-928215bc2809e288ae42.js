(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{b76u:function(e,i,t){"use strict";t.r(i),t.d(i,"default",(function(){return d}));var a=t("q1tI"),s=t.n(a),o=t("Wbzz"),n=t("vOnD"),r=t("oA3a"),l=n.c.div.withConfig({displayName:"showcase__ShowcaseContainer",componentId:"sc-1iwa95c-0"})(["padding:60px 12px;max-width:800px;margin:0 auto;@media screen and (max-width:600px){padding:12px;}"]),c=n.c.div.withConfig({displayName:"showcase__Thumbnail",componentId:"sc-1iwa95c-1"})(["cursor:pointer;position:relative;width:32%;display:inline-block;line-height:0;img{transition:opacity 0.4s;width:100%;}>div:before,>div:after{display:block;z-index:1;position:absolute;transition:opacity 0.4s;opacity:0;text-align:center;pointer-events:none;box-sizing:border-box;line-height:1.5;}>div:before{content:attr(data-title);font-size:1.4em;font-weight:100;width:100%;padding:12%;left:0;top:50%;transform:translateY(-50%);}>div:after{font-size:0.833em;content:attr(data-name);padding:5%;left:0;width:90%;height:90%;margin:5%;top:0;left:0;border:solid 2px;border-color:$primary;box-sizing:border-box;}>div:hover img{opacity:0.2;}>div:hover:before,>div:hover:after{opacity:1;}@media screen and (max-width:720px){width:49%;}@media screen and (max-width:480px){width:100%;}"]),p=n.c.div.withConfig({displayName:"showcase__ProjectInfo",componentId:"sc-1iwa95c-2"})(["position:relative;width:67%;height:0;padding-top:32%;display:inline-block;line-height:1.5;padding-left:24px;vertical-align:top;position:relative;background:#eee;margin-left:-4px;a{text-decoration:none;color:",";}h2{color:"," !important;}> div{position:absolute;top:12px;left:20px;right:20px;bottom:12px;overflow:hidden;}@media screen and (max-width:720px){width:50%;padding-top:49%;}@media screen and (max-width:480px){display:none;}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.black}));function d(){return s.a.createElement(l,null,s.a.createElement("p",null,s.a.createElement("i",null,"Would you like us to feature your project?",s.a.createElement("a",{href:"https://github.com/visgl/deck.gl/issues"}," Let us know!"))),r.map((function(e){var i=e.name,t=e.url,a=e.image,n=e.links,r=e.description;return s.a.createElement("div",{key:i},s.a.createElement(c,null,s.a.createElement("div",{"data-title":i},s.a.createElement("a",{href:t},s.a.createElement("img",{src:Object(o.d)(a)})))),s.a.createElement(p,null,s.a.createElement("div",null,s.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("h2",null,i)),s.a.createElement("p",null,Object.keys(n).map((function(e,i){return function(e,i,t){var a=t>0?" | ":"",o=e.search(/[A-Z0-9]\w+/);return s.a.createElement("span",{key:t},a,e.slice(0,o),s.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},e.slice(o)))}(e,n[e],i)}))),s.a.createElement("p",null,r))))})))}},oA3a:function(e){e.exports=JSON.parse('[{"name":"Vizgen Single-Cell MERFISH Spatial Visualizer","url":"https://vizgen.com/applications/#visual","image":"/images/showcase/vizgen_single_cell_spatial.jpg","links":{"by Vizgen":"https://vizgen.com/"},"description":"Vizgen\'s Interactive Single-Cell Spatial Visualizer enables users to explore single-cell gene expression data from our MERFISH Mouse Brain Receptor Map. Cells can be visualized using a UMAP embedding or the spatial coordinates within the brain - providing a detailed spatial map of the tissue."},{"name":"ISB Covid19","url":"https://atlas.fredhutch.org/isb/covid/","image":"/images/showcase/isb-covid.jpg","links":{"by Data Visualization Center at Fred Hutch":"https://viz.fredhutch.org/"},"description":"The Institute for Systems Biology Covid19 Atlas provides insights into how the immune system responds with disease progression. The website features single-cell multi-omics time-series data as well as clinical annotations on more than 400 patients."},{"name":"Descartes","url":"https://descartes.brotmanbaty.org/","image":"/images/showcase/descartes.jpg","links":{"by Data Visualization Center at Fred Hutch":"https://viz.fredhutch.org/"},"description":"Understanding the trajectory of a developing human requires understanding of how genes are regulated and expressed. The Descartes Human Cell Atlases features the largest single cell dataset generated to date. It contains data on ~5 million individual cells that when analyzed provides a comprehensive atlas of early human development."},{"name":"Viv","url":"http://avivator.gehlenborglab.org/?image_url=https://viv-demo.storage.googleapis.com/Vanderbilt-Spraggins-Kidney-MxIF.ome.tif","image":"/images/showcase/viv.jpg","links":{"Source code":"https://github.com/hms-dbmi/viv","by Gehlenborg Lab/Harvard Medical School":"http://gehlenborglab.org/"},"description":"Viv is a library for multiscale visualization of high-resolution, highly multiplexed bioimaging data on the web. It directly renders data in Bio-Formats-compatible Zarr and OME-TIFF formats. Avivator is a lightweight image viewer that showcases the capabilities of Viv. The development of Viv and Avivator was supported with funding from the National Institutes of Health and Harvard University."},{"name":"Flowmap.blue","url":"https://flowmap.blue/","image":"/images/showcase/flowmap.jpg","links":{"Source code":"https://github.com/ilyabo/flowmap.blue","by Ilya Boyandin":"https://ilya.boyandin.me/"},"description":"Flowmap.blue is a free tool for representing aggregated numbers of movements between geographic locations as flow maps. It is used to visualize urban mobility, commuting behavior, bus, subway and air travels, bicycle sharing, human and bird migration, refugee flows, freight transportation, trade, supply chains, scientific collaboration, epidemiological and historical data and many other topics."},{"name":"Isochronic Map","url":"http://pessimistress.github.io/isochronic-map/","image":"/images/showcase/isochrone.jpg","links":{"Source code":"https://github.com/Pessimistress/isochronic-map-gpu","Blog post":"https://medium.com/vis-gl/vis-hackathon-2019-56096209dce2","Blog post 2":"http://www.xiaoji-chen.com/2019/isochronic-map-webgl"},"description":"Remapping road network in major cities by travel times."},{"name":"Simulating the 2016 Primary","url":"http://mcvs.thesunstirade.com/","image":"/images/showcase/election-maricopa.jpg","links":{"by Andrew Pulcipher":"https://twitter.com/andrewpulcipher"},"description":"An interactive visualization of the 2016 Presidential primary election in Maricopa County that uses polling place operations research to simulate election day lines and voter walkoffs in real time."},{"name":"The Bad Bet","url":"https://features.propublica.org/the-bad-bet/how-illinois-bet-on-video-gambling-and-lost/","image":"/images/showcase/propublica.jpg","links":{"ProPublica":"https://www.propublica.org/Illinois"},"description":"Data journalists use deck.gl to visualize how the revenue generated by video gambling machines in Illinois grow over time and how those revenues failed to meet the projections of legislators."},{"name":"SandDance","url":"https://microsoft.github.io/SandDance/","image":"/images/showcase/sanddance.jpg","links":{"by Microsoft":"https://www.microsoft.com/en-us/research/group/vida/","GitHub":"https://github.com/Microsoft/SandDance","Demo":"https://microsoft.github.io/SandDance/app/"},"description":"SandDance helps you find insights about your data with unit visualizations and smooth animated transitions. It uses deck.gl to render chart layouts described with Vega."},{"name":"Autonomous Visualization System","url":"https://avs.auto","image":"/images/showcase/avs.jpg","links":{"GitHub":"https://github.com/uber/streetscape.gl","Demo":"https://avs.auto/demo"},"description":"A visualization protocol and toolkit for robotics data in the browser."},{"name":"Escape","url":"https://greatescape.co","image":"/images/showcase/escape.jpg","links":{"MIT Senseable City Laboratory, Singapore":"http://senseable.mit.edu/","About":"https://greatescape.co/about"},"description":"Escape is an inspirational flight search engine that helps you choose a destination and find the cheapest flight for your next vacation."},{"name":"BusRouter SG","url":"https://busrouter.sg/visualization/","image":"/images/showcase/singapore-bus-route.jpg","links":{"by cheeaun":"http://twitter.com/cheeaun","data © Land Transport Authority":"http://www.mytransport.sg/","GitHub":"https://github.com/cheeaun/busrouter-sg"},"description":"Explore bus stops and routes on the map for all bus services in Singapore, with realtime bus arrival times and per-bus-stop passing routes overview."},{"name":"FlightMapper","url":"https://flightmapper.io/","image":"/images/showcase/flightmapper.jpg","links":{"by Dylan Babbs":"https://dylanbabbs.com/","Example map":"https://flightmapper.io/maps/dbabbs"},"description":"Map and explore your flight history with interactive visualizations and analytics."},{"name":"Kepler.gl","url":"https://kepler.gl/","image":"/images/showcase/kepler-gl.jpg","links":{"GitHub":"https://github.com/keplergl/kepler.gl","Example map":"https://kepler.gl/demo/sfcontour"},"description":"Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets."},{"name":"Ascii Video Player","url":"https://pessimistress.github.io/ascii/","image":"/images/showcase/ascii.jpg","links":{"Source code":"https://github.com/visgl/deck.gl/tree/6.4-release/showcases/ascii"},"description":"Uses the TextLayer API to convert pixels into characters on the fly. WebGL2 compatible browser is required."},{"name":"Wind Map","url":"https://philogb.github.io/page/wind/","image":"/images/showcase/wind.jpg","links":{"Source code":"https://github.com/visgl/deck.gl/tree/6.4-release/showcases/wind","Blog post":"https://medium.com/vis-gl/wind-map-a58575f87fe3"},"description":"GPU-based data interpolation and partical effects."},{"name":"Minecraft Chunk Viewer","url":"https://pessimistress.github.io/minecraft/","image":"/images/showcase/minecraft-viewer.jpg","links":{"Source code":"https://github.com/Pessimistress/minecraft-chunk-viewer","Blog post":"https://medium.com/vis-gl/rendering-a-minecraft-world-with-deck-gl-927b52c5c6db"},"description":"Rendering A Minecraft World With deck.gl."}]')}}]);