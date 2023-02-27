import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

import { Button } from '../FiltersByNumbers/styles';
import { ContainerRadios, ContainerSort } from './styles';
import { optionsColumnNew } from '../../constants/constants';

function OrderPlanets({ order }) {
  const {
    setTypeSort, // func para alterar o tipo da ordenação
    sortcolumn, // estado que armazena a coluna de ordenação
    setSortcolumn, // func para alterar o valor da column de ordenação
  } = useContext(PlanetsContext);
  return (
    <ContainerSort>
      <label htmlFor="column-order">
        {/* Sort */}
        <select
          name="order"
          id="column-order"
          data-testid="column-sort"
          value={ sortcolumn }
          onChange={ ({ target }) => setSortcolumn(target.value) }
        >
          {optionsColumnNew.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))}
        </select>
      </label>
      <ContainerRadios>
        <label htmlFor="asc">
          <input
            className="radio-button"
            type="radio"
            name="typeSort"
            id="asc"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ ({ target }) => setTypeSort(target.value) }
          />
          Ascendente
        </label>
        <label htmlFor="desc">
          <input
            className="radio-button"
            type="radio"
            name="typeSort"
            id="desc"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ ({ target }) => setTypeSort(target.value) }
          />
          Descendente
        </label>
      </ContainerRadios>
      <Button
        type="button"
        data-testid="column-sort-button"
        onClick={ order }
      >
        Order
      </Button>
    </ContainerSort>
  );
}

export default OrderPlanets;
