import { render, screen } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Complete loan simulation flow', () => {
  it('should calculate and display results when filling out the form', async () => {
    render(<App />)

    await act(async () => {
      await userEvent.type(screen.getByLabelText('Valor do empréstimo:'), '10000');
      await userEvent.type(screen.getByLabelText('Prazo (em meses):'), '12');
      await userEvent.type(screen.getByLabelText('Data de nascimento:'), '1963-01-01');
    });

    expect(await screen.queryByTestId('result-table')).toBeInTheDocument();
    expect(await screen.findByText('R$ 851,50')).toBeInTheDocument();
    expect(await screen.findByText('R$ 10.217,99')).toBeInTheDocument();
    expect(await screen.findByText('R$ 217,99')).toBeInTheDocument();
  });

  it('should display a message until all inputs are filled in', async () => {
    render(<App />)

    expect(await screen.queryByTestId('result-table')).not.toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Data de nascimento:'), '1963-01-01');
    expect(screen.queryByTestId('without-result')).toBeInTheDocument()
    
    await userEvent.type(screen.getByLabelText('Valor do empréstimo:'), '10000');
    expect(screen.queryByTestId('without-result')).toBeInTheDocument()
    
    await userEvent.type(screen.getByLabelText('Prazo (em meses):'), '12');
    expect(screen.queryByTestId('without-result')).not.toBeInTheDocument()

    expect(await screen.queryByTestId('result-table')).toBeInTheDocument();

  });
});