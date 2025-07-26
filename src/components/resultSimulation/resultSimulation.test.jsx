import { render, screen } from "@testing-library/react"
import { ResultSimulation } from "."

describe('ResultSimulation Component', () => {

  it('should show message when no result is available (total <= 0)', () => {
    render(<ResultSimulation total={0} interest={0} monthlyPayment={0} />)
    expect(screen.getByText('Preencha todos os campos acima para ver o resultado')).toBeInTheDocument()
    expect(screen.queryByTestId('result-table')).not.toBeInTheDocument()
  })

  it('should render the table with correct values when result is available', () => {
    const resultProps = {
      total: 10272.90,
      interest: 272.90,
      monthlyPayment: 856.07
    }

    render(<ResultSimulation {...resultProps} />)

    expect(screen.queryByTestId('result-table')).toBeInTheDocument()

    expect(screen.getByText('Nome')).toBeInTheDocument()
    expect(screen.getByText('Valor')).toBeInTheDocument()

    expect(screen.getByText('Parcela Mensal')).toBeInTheDocument()
    expect(screen.getByText('R$ 856,07')).toBeInTheDocument()

    expect(screen.getByText('Total a ser pago')).toBeInTheDocument()
    expect(screen.getByText('R$ 10.272,90')).toBeInTheDocument()

    expect(screen.getByText('Total de juros')).toBeInTheDocument()
    expect(screen.getByText('R$ 272,90')).toBeInTheDocument()
  })
})