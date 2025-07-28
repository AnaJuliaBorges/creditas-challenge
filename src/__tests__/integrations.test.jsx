import { render, screen } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { describe, expect, it } from "vitest";

describe('Complete loan simulation flow', () => {
  it('should calculate and display results when filling out the form', async () => {
    render(<App />)

    await act(async () => {
      await userEvent.type(screen.getByLabelText('Valor do empréstimo:'), '10000');
      await userEvent.type(screen.getByLabelText('Prazo (em meses):'), '12');
      await userEvent.type(screen.getByLabelText('Data de nascimento:'), '1963-01-01');
    });

    expect(screen.getByTestId('result-table')).toBeInTheDocument();
    expect(await screen.findByText('R$ 851,50')).toBeInTheDocument();
    expect(await screen.findByText('R$ 10.217,99')).toBeInTheDocument();
    expect(await screen.findByText('R$ 217,99')).toBeInTheDocument();
  });

  it('should display a message until all inputs are filled in', async () => {
    render(<App />)

    expect(screen.queryByTestId('result-table')).not.toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Data de nascimento:'), '1963-01-01');
    expect(screen.getByTestId('without-result')).toBeInTheDocument()
    
    await userEvent.type(screen.getByLabelText('Valor do empréstimo:'), '10000');
    expect(screen.getByTestId('without-result')).toBeInTheDocument()
    
    await userEvent.type(screen.getByLabelText('Prazo (em meses):'), '12');
    expect(screen.queryByTestId('without-result')).not.toBeInTheDocument()

    expect(screen.getByTestId('result-table')).toBeInTheDocument();

  });
});