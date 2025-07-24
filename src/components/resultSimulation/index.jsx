import { formatCurrency } from "../../utils/formatCurrency"
import { Container, Table } from "./styles"

export const ResultSimulation = ({total, installments, interest, annualRate}) => {
  return (
    <Container>
      <h2>Resultado da Simulação</h2>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Taxa de juros anual</td>
            <td>{annualRate}%</td>
          </tr>
          <tr>
            <td>Valor total a ser pago</td>
            <td>{formatCurrency(total)}</td>
          </tr>
          <tr>
            <td>Quantidade Parcelas</td>
            <td>{installments}</td>
          </tr>
          <tr>
            <td>Total de juros</td>
            <td>{formatCurrency(interest)}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
