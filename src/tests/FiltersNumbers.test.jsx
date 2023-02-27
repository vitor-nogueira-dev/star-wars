import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import mockData from "./mockData";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockData,
  }));
})

describe('testing if it is possible to apply numeric filters', () => {
  test('testing if it is possible to add and remove a filter', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    // capturando os inputs para inserir valores
    const value = screen.getByTestId('value-filter')
    const comparison = screen.getByTestId('comparison-filter')
    const column = screen.getByTestId('column-filter')
    const addFilterBtn = screen.getByTestId('button-filter')

    // adicionando um filtro
    // select column
    expect(column).toBeInTheDocument();
    userEvent.selectOptions(column, 'surface_water')
    expect(column).toHaveValue('surface_water')

    // select comparison
    expect(comparison).toBeInTheDocument();
    userEvent.selectOptions(comparison, 'menor que')
    expect(comparison).toHaveValue('menor que')

    // input value
    expect(value).toBeInTheDocument();
    userEvent.clear(value)
    userEvent.type(value, '12')
    expect(value).toHaveValue(12)

    // botão filtrar // adicionando filtro
    expect(addFilterBtn).toBeInTheDocument();
    act(() => fireEvent.click(addFilterBtn))
    // userEvent.click(addFilterBtn);

    expect(screen.getAllByRole('row')).toHaveLength(6) // ele conta com o cabeçalho -> são 4 dos planetas e 1 com os headers

    // adicionando outro filtro 
    // select column
    expect(column).toBeInTheDocument();
    userEvent.selectOptions(column, 'population')
    expect(column).toHaveValue('population')

    // select comparison
    expect(comparison).toBeInTheDocument();
    userEvent.selectOptions(comparison, 'maior que')
    expect(comparison).toHaveValue('maior que')

    // input value
    expect(value).toBeInTheDocument();
    userEvent.clear(value)
    userEvent.type(value, '200000')
    expect(value).toHaveValue(200000)

    act(() => fireEvent.click(addFilterBtn))
    // userEvent.click(addFilterBtn);

    expect(screen.getAllByRole('row')).toHaveLength(3)

    // removendo um filtro específico
    const removeFilter = screen.getAllByRole('button', { name: /x/i });
    expect(removeFilter[0]).toBeInTheDocument();
    act(() => fireEvent.click(removeFilter[0]))
    expect(screen.getAllByRole('row')).toHaveLength(7)

    // removendo todos os filtros 
    const removeAllFilters = screen.getByTestId('button-remove-filters')
    act(() => fireEvent.click(removeAllFilters))
    expect(screen.getAllByRole('row')).toHaveLength(11)
  })
  test('testing planet with surface_water equal to 12', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    // capturando os inputs para inserir valores
    const value = screen.getByTestId('value-filter')
    const comparison = screen.getByTestId('comparison-filter')
    const column = screen.getByTestId('column-filter')
    const addFilterBtn = screen.getByTestId('button-filter')

    // select column
    expect(column).toBeInTheDocument();
    userEvent.selectOptions(column, 'surface_water')
    expect(column).toHaveValue('surface_water')

    // select comparison
    expect(comparison).toBeInTheDocument();
    userEvent.selectOptions(comparison, 'igual a')
    expect(comparison).toHaveValue('igual a')

    // input value
    expect(value).toBeInTheDocument();
    userEvent.clear(value)
    userEvent.type(value, '12')
    expect(value).toHaveValue(12)

    act(() => fireEvent.click(addFilterBtn))

    expect(screen.getAllByRole('row')).toHaveLength(2)
  })

  // teatndo se o array de planetas está completo
  test('testing if the array of planets is complete', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    const addFilterBtn = screen.getByTestId('button-filter')
    expect(addFilterBtn).toBeInTheDocument();

    act(() => fireEvent.click(addFilterBtn))
    expect(screen.getAllByRole('row')).toHaveLength(9)
  })
  // testando se o array de planetas está completo quando clica no botão de ordenar
  test('testing if the array of planets is complete when clicking the sort button', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    const btnOrder = screen.getByTestId('column-sort-button')
    expect(btnOrder).toBeInTheDocument();

    act(() => fireEvent.click(btnOrder))
    expect(screen.getAllByRole('row')).toHaveLength(11)
  })
})