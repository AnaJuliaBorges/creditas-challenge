import { formatCurrency } from "../../utils/formatCurrency"
import { Container, Table } from "./styles"

export const ResultSimulation = ({error, total, interest, monthlyPayment}) => {
  const hasResult = total > 0

  return (
    <Container>
      <h2>Resultado da Simulação</h2>
      {hasResult && 
        <Table data-testid='result-table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parcela Mensal</td>
              <td>{formatCurrency(monthlyPayment)}</td>
            </tr>
            <tr>
              <td>Total a ser pago</td>
              <td>{formatCurrency(total)}</td>
            </tr>
            <tr>
              <td>Total de juros</td>
              <td>{formatCurrency(interest)}</td>
            </tr>
          </tbody>
        </Table>
      }
      {!hasResult && <p data-testid='without-result'> {error || "Preencha todos os campos acima para ver o resultado"} </p>}
    </Container>
  )
}
