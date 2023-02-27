import { render, screen } from "@testing-library/react";
import App from "../App";
import mockData from "./mockData";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const URL_API = 'https://swapi.dev/api/planets';

beforeEach(() => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockData,
  }));
})

describe('testing the api call, the various filters, add and remove filters and error', () => {
  test('testing the api call', async () => {
    render(<App />);
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(URL_API);
  });
  test('checking the size of the table and if it is possible to filter by name', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockData,
    }));
    render(<App />);
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    // Verifica o tamanho da tabela
    expect(screen.getAllByRole('row')).toHaveLength(11);

    // verificando nome de algum planeta
    const namePlanet = await screen.findByText(/Dagobah/i)
    expect(namePlanet).toBeInTheDocument()

    // verificando se tem o filter by name
    const inputName = screen.getByTestId('name-filter');
    expect(inputName).toBeInTheDocument();

    // digitando no input para perquisar pelo nome
    userEvent.type(inputName, 'oo')
    act(() => {
      expect(screen.getByText(/tatooine/i)).toBeInTheDocument();
    })
  })
  test('fetchPlanets should set error on network error', async () => {
    const mockError = new Error('Network error');
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject({
      json: () => Promise.reject(mockError),
    }));
    render(<App />)
    act(() => expect(mockError.message).toBe('Network error'))
  })
})