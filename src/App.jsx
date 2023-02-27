import React from 'react';

import Filtros from './components/Filters/Filters';
import Header from './components/Header/Header';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Filtros />
    </PlanetsProvider>
  );
}

export default App;
