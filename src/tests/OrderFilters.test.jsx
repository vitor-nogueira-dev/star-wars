import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import mockData from "./mockData";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  global.fetch = jest.fn(async () => ({
    json: async () => mockData,
  }));
})

describe('Testing if it is possible to sort in ascending and descending order', () => {
  test('testing the ordering of planets in ascending order', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    const selectOptions = screen.getByTestId('column-sort');
    const inputASC = screen.getByTestId('column-sort-input-asc');
    const btnOrder = screen.getByTestId('column-sort-button');

    expect(selectOptions).toBeInTheDocument();
    expect(inputASC).toBeInTheDocument();
    expect(btnOrder).toBeInTheDocument();

    userEvent.selectOptions(selectOptions, 'diameter');
    userEvent.click(inputASC);
    userEvent.click(btnOrder);

    const planetEndor = await screen.findByText(/endor/i);
    expect(planetEndor).toBeInTheDocument();
  })
  test('testing ordering planets in descending order', async () => {
    render(<App />);
    // aguardando ter o nome do planeta na tela
    const planets = await screen.findByText(/Tatooine/i);
    expect(planets).toBeInTheDocument();

    const selectOptions = screen.getByTestId('column-sort');
    const inputDESC = screen.getByTestId('column-sort-input-desc');
    const btnOrder = screen.getByTestId('column-sort-button');

    expect(selectOptions).toBeInTheDocument();
    expect(inputDESC).toBeInTheDocument();
    expect(btnOrder).toBeInTheDocument();

    userEvent.selectOptions(selectOptions, 'rotation_period');
    userEvent.click(inputDESC);
    userEvent.click(btnOrder);

    const planetKamino = await screen.findByText(/kamino/i);
    expect(planetKamino).toBeInTheDocument();
  })
})