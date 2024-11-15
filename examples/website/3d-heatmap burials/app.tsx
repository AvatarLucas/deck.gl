// deck.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import React from 'react';
import {createRoot} from 'react-dom/client';
import {Map} from 'react-map-gl/maplibre';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';
import {CSVLoader} from '@loaders.gl/csv';
import {load} from '@loaders.gl/core';

import type {Color, PickingInfo, MapViewState} from '@deck.gl/core';

// Source data CSV
const DATA_URL =
  './LongLat_KnownBurials.csv'; // eslint-disable-line

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-88.804164, 27.468653, 5000] // New position with adjusted altitude
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.5, // Slightly lower intensity for a complementary light
  position: [-92.467387, 31.833367, 1000] // New position with adjusted altitude
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -90.075500,
  latitude: 29.960718,
  zoom: 17.75,
  minZoom: 16,
  maxZoom: 21,
  pitch: 40.5,
  bearing: -27
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const colorRange: Color[] = [
  [1, 152, 189],
  [73, 227, 206],
  [180, 245, 185],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

function getTooltip({object}: PickingInfo) {
  if (!object) {
    return null;
  }
  const lat = object.position[1];
  const lng = object.position[0];
  const count = object.count;

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    ${count} Burials`;
}

type DataPoint = [longitude: number, latitude: number];

export default function App({
  data = null,
  mapStyle = MAP_STYLE,
  radius = 1,
  upperPercentile = 100,
  coverage = 1
}: {
  data?: DataPoint[] | null;
  mapStyle?: string;
  radius?: number;
  upperPercentile?: number;
  coverage?: number;
}) {
  const layers = [
    new HexagonLayer<DataPoint>({
      id: 'heatmap',
      // gpuAggregation: true,
      colorRange,
      coverage,
      data,
      elevationRange: [0, 1000],
      elevationScale: data && data.length ? 2 : 0,
      extruded: true,
      getPosition: d => d,
      pickable: true,
      radius,
      upperPercentile,

      // Custom color mapping for count ranges
    getColorValue: points => {
      const count = points.length;
      if (count >= 1 && count <= 2) return 0;           // Light blue for 1 reading
      if (count >= 3 && count <= 4) return 1;  // Teal for 2-3 readings
      if (count >= 5 && count <= 9) return 2;  // Light green for 4-5 readings
      if (count >= 10 && count <= 14) return 3;  // Light yellow for 6-8 readings
      if (count >= 15 && count <= 30) return 4; // Orange for 9-11 readings
      return 5;                              // Red for 12+ readings
    },

      material: {
        ambient: 0.64,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [51, 51, 51]
      },

      transitions: {
        elevationScale: 5
      }
    })
  ];

  return (
    <DeckGL
      layers={layers}
      effects={[lightingEffect]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <Map reuseMaps mapStyle={mapStyle} />
    </DeckGL>
  );
}

export async function renderToDOM(container: HTMLDivElement) {
  const root = createRoot(container);
  root.render(<App />);

  const data = (await load(DATA_URL, CSVLoader)).data;
  const points: DataPoint[] = data
    .map(d => (Number.isFinite(d.lng) ? [d.lng, d.lat] : null))
    .filter(Boolean);
  root.render(<App data={points} />);
}
