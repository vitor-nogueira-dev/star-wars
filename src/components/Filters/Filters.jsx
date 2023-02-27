import React from 'react';

import FilterName from '../FilterName/FilterName';
import FiltersByNumbers from '../FiltersByNumbers/FiltersByNumbers';
import Table from '../Table/Table';
import Container from './styles';

function Filtros() {
  return (
    <Container>
      <FilterName />
      <FiltersByNumbers />
      <Table />
    </Container>
  );
}

export default Filtros;
