// array com os headers da table
const headers = [
  'Name',
  'RotationPeriod',
  'OrbitalPeriod',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'SurfaceWater',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

// array de strings para preencher o select column
const optionsColumnNew = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

// array de strings para preencher o select comparion
const optionsComparison = ['maior que', 'menor que', 'igual a'];

export { headers, optionsColumnNew, optionsComparison };
