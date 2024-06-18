import {Deck} from '@deck.gl/core';
import {GeoJsonLayer, ArcLayer} from '@deck.gl/layers';
import {
  CompassWidget,
  PopupWidget,
  ZoomWidget,
  FullscreenWidget,
  DarkGlassTheme,
  LightGlassTheme
} from '@deck.gl/widgets';
import '@deck.gl/widgets/stylesheet.css';

/* global window */
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const widgetTheme = prefersDarkScheme.matches ? DarkGlassTheme : LightGlassTheme;

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30
};

const UI_WIDGETS = [
  new ZoomWidget({style: widgetTheme}),
  new CompassWidget({style: widgetTheme}),
  new FullscreenWidget({style: widgetTheme})
];

function updatePopup(object) {
  const widgets = [...UI_WIDGETS];
  if (object) {
    const position = object.geometry.coordinates;
    const text = `${object.properties.name} (${object.properties.abbrev})`;
    const style = {width: 200, boxShadow: 'rgba(0, 0, 0, 0.5) 2px 2px 5px'};
    widgets.push(new PopupWidget({position, text, style}));
  }

  deck.setProps({widgets});
  return true;
}

const deck = new Deck({
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  onClick: () => updatePopup(),
  layers: [
    new GeoJsonLayer({
      id: 'base-map',
      data: COUNTRIES,
      // Styles
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      opacity: 0.4,
      getLineColor: [60, 60, 60],
      getFillColor: [200, 200, 200]
    }),
    new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: f => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick: info => updatePopup(info.object)
    }),
    new ArcLayer({
      id: 'arcs',
      data: AIR_PORTS,
      dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
      // Styles
      getSourcePosition: f => [-0.4531566, 51.4709959], // London
      getTargetPosition: f => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1
    })
  ],
  widgets: UI_WIDGETS
});
