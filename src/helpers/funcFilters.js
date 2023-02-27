// função para filtrar de acordo com as escolhas do usuário (1 pesquisa);
const filterArrayByType = (planets, column, comparison, value) => {
  const operations = {
    'maior que': (a, b) => a > +b,
    'menor que': (a, b) => a < +b,
    'igual a': (a, b) => a === b,
  };

  const operation = operations[comparison];
  const filteredArray = planets.filter((element) => operation(element[column], value));

  return filteredArray;
};

// função que filtra de acordo com o que foi selecionado pelo usuário (vários filtros encadeados);
function applyAllFilters(array, filters) {
  return filters.reduce((result, { column, comparison, value }) => {
    const operations = {
      'maior que': (a, b) => a > +b,
      'menor que': (a, b) => a < +b,
      'igual a': (a, b) => a === b,
    };

    const operation = operations[comparison];
    return result.filter((element) => operation(element[column], value));
  }, array);
}

export { filterArrayByType, applyAllFilters };
