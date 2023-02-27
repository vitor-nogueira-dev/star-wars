import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import ContainerFilters from './styles';

function AppliedFilters({ removeFilter }) {
  const { filterByNumericValues } = useContext(PlanetsContext);
  return (
    <ContainerFilters>
      <h2>Filtros Aplicados:</h2>
      {filterByNumericValues?.map((filter) => (
        <div
          key={ filter.column }
          data-testid="filter"
        >
          {`${filter.column} - ${filter.comparison} - ${filter.value}`}
          <button type="button" onClick={ () => removeFilter(filter.column) }>X</button>
        </div>
      ))}
    </ContainerFilters>
  );
}

export default AppliedFilters;
