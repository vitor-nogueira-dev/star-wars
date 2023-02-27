import React, { useCallback, useContext, useEffect, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import { SearchName } from './styles';

function FilterName() {
  const [searchName, setSearchName] = useState('');

  const { setPlanetsFiltered, planets } = useContext(PlanetsContext);

  // função que trabalha em conjunto com o useEffect, e que retorna o resultado da busca pelo nome
  const filteredByName = useCallback(() => {
    // condicional para cajo o searchName seja diferente de string vazia ele filtrar o nome que está sendo digitado no input, essa condicional é para não entrar em loop infinito
    if (searchName !== '') {
      setPlanetsFiltered(planets
        .filter((planet) => planet.name.toLowerCase()
          .includes(searchName.toLowerCase())));
    } else {
      setPlanetsFiltered(planets);
    }
    // aqui temos as dependências que são monitoradas a todo o momento,
  }, [searchName, planets, setPlanetsFiltered]);

  // didUpdate que está monitorando se é adicionado algum valor do estado searchName e caso haja alguma alteração ele irá executar a função filteredByName
  useEffect(() => {
    filteredByName();
  }, [filteredByName, searchName]);

  return (
    <SearchName
      type="text"
      name="searchName"
      id="searchName"
      data-testid="name-filter"
      placeholder="search by name"
      value={ searchName }
      onChange={ ({ target }) => setSearchName(target.value.toLowerCase()) }
    />
  );
}

export default FilterName;
