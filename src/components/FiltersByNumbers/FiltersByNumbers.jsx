import React, { useCallback, useContext, useMemo, useEffect } from 'react';
import { Button, Forms } from './styles';
import { optionsColumnNew, optionsComparison } from '../../constants/constants';
import PlanetsContext from '../../context/PlanetsContext';
import { applyAllFilters, filterArrayByType } from '../../helpers/funcFilters';
import AppliedFilters from '../AppliedFilters/AppliedFilters';
import OrderPlanets from '../OrderPlanets/OrderPlanets';

function FiltersByNumbers() {
  const {
    planets, // todos os planetas
    planetsFiltered, // array com os planetas filtrados
    setPlanetsFiltered, // func para alterar o array dos planetas filtrados
    arrayOptionsColumn, // array com todas as options de column
    setArrayOptionColumn, // func para setar alguma alteração no array com as options de column
    column, // column selecionada
    setColumn, // func para setar column para filtrar
    comparison, // comparação selecionada
    setComparison, // func para setar comparação selecionado no input
    value, // valor digitado no input
    setValue, // func para setar valor digitado no input
    filterByNumericValues, // array com os filtros numéricos
    setFilterByNumericValues, // func para alterar o array com os filtros numéricos
    typeSort, // estado que armazena o tipo da ordenação
    sortcolumn, // estado para armazenar o valor da column de ordenação
  } = useContext(PlanetsContext);

  // função para filtrar e remover alguma opção de column que foi escolhida
  const checkFiltersOptions = () => {
    // verificando se existe algo no array de planetas filtrados, caso tenha ele é retornado, caso não tenha o array completo é retornado
    const checkFilters = planetsFiltered.length !== 0 ? planetsFiltered : planets;
    // removendo a column escolhida pelo usuário
    setArrayOptionColumn(arrayOptionsColumn.filter((options) => options !== column));
    // aqui é filtrado e enviado o filtro criado pelo usuário e em seguida ele é setado no array dos planetas filtrados
    setPlanetsFiltered(filterArrayByType(checkFilters, column, comparison, value));
    // restaurando o estado inicial dos selects e do input value
    setValue(0);
    setComparison('maior que');
    setColumn('population');
  };

  // função para criar os filtros selecionados pelo usuário
  const createFilters = () => {
    // criando e adicionando um novo objeto no array de filtros numéricos
    setFilterByNumericValues((filterNumbers) => [...filterNumbers, {
      column: column.toLowerCase(),
      comparison: comparison.toLowerCase(),
      value,
    }]);

    // executando a função que checa se existe filtro aplicado, e aplica o filtro criado pelo usuário
    checkFiltersOptions();
  };

  // função para checkar se há algum filtro numérico aplicado, e/ou aplicar algum
  const checkPlanetsFiltered = useMemo(() => {
    // aqui é verificado se há valores nos filtros por números, se for igual a 0, setamos todos os planetas
    if (filterByNumericValues.length === 0) {
      return planets;
    }
    // caso não seja igual a zero, executamos a função que irá passar por todos os filtros aplicados e setar o resultado no estado planetsFiltered
    return applyAllFilters(planets, filterByNumericValues);
  }, [filterByNumericValues, planets]);

  // é necessário utilizar o useCallback para evitar que a função seja criada novamente a cada renderização
  const checkFiltersByNumeric = useCallback(() => {
    setPlanetsFiltered(checkPlanetsFiltered);
  }, [checkPlanetsFiltered, setPlanetsFiltered]);

  // didUpdate que está monitorando se é adicionado algum filtro numérico ao estado filterByNumericValues, caso haja alguma alteração nele será executado a função checkFiltersByNumeric
  useEffect(() => {
    checkFiltersByNumeric();
  }, [checkFiltersByNumeric, filterByNumericValues]);

  // função para remover um filtro específico
  const removeFilter = (columnParam) => {
    // adicionando a option column novamente ao array de options para voltar com a opção para o select
    setArrayOptionColumn((prevState) => [...prevState, columnParam]);
    // removendo o filtro clicado do array de filtros aplicados
    setFilterByNumericValues(filterByNumericValues
      .filter((objetoFilter) => objetoFilter.column !== columnParam));
  };
  // função para remover todos os filtros aplicados
  const removeAllFilters = () => {
    // aqui zeramos o array com os filtros numéricos
    setFilterByNumericValues([]);
    // aqui é setado o estado inicial do array com as opções de column
    setArrayOptionColumn(optionsColumnNew);
  };

  // função para ordernar os planetas
  const order = () => {
    const NEGATIVE_NUMBER = -1;
    // verificando se o tipo é ascendente, se for retorna +1 se não -1 -> definindo o sentido da ordenação
    const sortOrder = typeSort === 'ASC' ? 1 : NEGATIVE_NUMBER;

    // variável que verifica se tem algum planetas no array filtrado já, se tiver ele aplica a ordenação nele se não, aplica no plants geral
    let sortedPlanets = planetsFiltered.length !== 0 ? planetsFiltered : planets;

    // condicional para verificar se a coluna selecionada para aplicar o filtro não é population, se n for, ele entra no if e ordena
    if (sortcolumn !== 'population') {
      sortedPlanets = sortedPlanets
        .sort((a, b) => sortOrder * (Number(a[sortcolumn]) - Number(b[sortcolumn])));
      // caso seja population, vai executar o else dividindo a lista em planetas conhecidos e não conhecidos
    } else {
      // aqui filtramos todos que tem a chave population com o valor unknown
      const unknownPopulation = sortedPlanets
        .filter((planet) => planet.population === 'unknown');
      // aqui filtramos todos que não tem a chave population com o valor unknown
      const knownPopulation = sortedPlanets
        .filter((planet) => planet.population !== 'unknown');

      // aqui atribuimos a variável sortedPlanets um array, onde espalhamos os planetas com valores válidos de forma ordenada primeiro, e em seguida espalhamos os planetas com valores da chave population unknown
      sortedPlanets = [
        ...knownPopulation
          .sort((a, b) => sortOrder * (Number(a.population) - Number(b.population))),
        ...unknownPopulation,
      ];
    }
    // aqui é setado os planetas ordenados
    setPlanetsFiltered([...sortedPlanets]);
  };
  return (
    <Forms>
      <label htmlFor="optionsColumn">
        {/* Column */}
        <select
          name="optionsColumn"
          id="optionsColumn"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {arrayOptionsColumn.map((option) => (
            <option value={ option } key={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        {/* comparison */}
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {optionsComparison.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="value">
        {/* Value */}
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <Button
        type="button"
        data-testid="button-filter"
        onClick={ createFilters }
      >
        Filter
      </Button>
      <Button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remove Filters
      </Button>
      <OrderPlanets order={ order } />
      <AppliedFilters removeFilter={ removeFilter } />
    </Forms>
  );
}

export default FiltersByNumbers;
