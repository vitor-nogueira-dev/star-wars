import { useMemo, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

const optionsColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function PlanetsProvider({ children }) {
  // estado que armazena o array com os planetas filtrados
  const [planetsFiltered, setPlanetsFiltered] = useState([]);

  // estado que armazena o array com as opções do select column
  const [arrayOptionsColumn, setArrayOptionColumn] = useState(optionsColumn);

  // estados que armazena as options do select
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  // estado que armazena o value inserido pelo usuário
  const [value, setValue] = useState(0);

  // estado que armazena o array com os filtros aplicados pelo usuário
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // estado que armazena o tipo da ordenação asc ou desc
  const [typeSort, setTypeSort] = useState('');
  // estado que armazena a column da ordenação
  const [sortcolumn, setSortcolumn] = useState('population');

  // link da requisição a API dos planetas
  const URL_API = 'https://swapi.dev/api/planets';

  // desestruturando o retorno do hook customizado, feito para realizar a requisição da API
  const { planets } = useFetch(URL_API);

  const context = useMemo(() => ({
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
    setTypeSort, // func para alterar a tipo da ordenação
    sortcolumn, // estado para armazenar o valor da column de ordenação
    setSortcolumn, // func para alterar o valor da column de ordenação
  }), [
    planets,
    planetsFiltered,
    setPlanetsFiltered,
    arrayOptionsColumn,
    setArrayOptionColumn,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    typeSort,
    setTypeSort,
    sortcolumn,
    setSortcolumn,
  ]);

  return (
    <PlanetsContext.Provider value={context}>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
