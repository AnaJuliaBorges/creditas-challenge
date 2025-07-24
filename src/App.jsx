import { Container, FormGroup } from "./app.styles";
import { ResultSimulation } from "./components/resultSimulation";

function App() {
  return (
    <Container>
      <h1>Simulação de empréstimo</h1>
      <div>
        <FormGroup>
          <label>Valor do empréstimo:</label>
          <input 
            type="number"
            id="loanAmount"
            // value={loanAmount}
            // onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
            required
          />
        </FormGroup>

         <FormGroup>
          <label>Prazo (em meses):</label>
          <input 
            type="number"
            id="months"
            // value={months}
            // onChange={(e) => setMonths(parseInt(e.target.value))}
            min="1"
            max="360"
            required
          />
        </FormGroup>

         <FormGroup>
          <label>Data de nascimento:</label>
          <input 
            type="date"
            id="birthDate"
            // value={birthDate}
            // onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </FormGroup>
      </div>

      <ResultSimulation />

    </Container>
  );
}

export default App;
