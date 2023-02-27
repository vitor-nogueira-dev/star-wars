import { useCallback, useEffect, useState } from 'react';

function useFetch(urlParam) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setError] = useState(null);

  // aqui a useCallback está sendo usada para memorizar a função fetchPlanets. fazendo com que a função só seja recriada quando as dependencias mudarem.
  const removeResidents = (array) => array.reduce((acc, curr) => {
    const { residents, ...rest } = curr; // spread para espalhar o array e remover os residents;
    acc.push(rest); // push para adicionar o objeto sem a propriedade 'residents' ao array
    setPlanets(acc); // setando os planetas no estado
    return acc;
  }, []);

  const fetchPlanets = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(urlParam);
      const data = await response.json();
      await removeResidents(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [urlParam]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return {
    planets,
    loading,
    errorState,
    setPlanets,
  };
}

export default useFetch;
