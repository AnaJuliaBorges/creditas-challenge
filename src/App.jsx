import { useState } from "react";
import { Container } from "./app.styles";
import { ResultSimulation } from "./components/resultSimulation";
import { FormSimulation } from "./components/formSimulation";
import useLoanCalculator from "./hooks/useLoanCalculator";


function App() {
  const [formData, setFormData] = useState({
    loanAmount: '',
    deadline: '',
    birthDate: '',
  })

  const {monthlyPayment, totalAmount, totalInterest} = useLoanCalculator(formData.loanAmount, formData.deadline, formData.birthDate)

  return (
    <Container>
      <h1>Simulação de empréstimo</h1>
      
      <FormSimulation 
        formData={formData} 
        setFormData={setFormData}
      />

      <ResultSimulation 
        total={totalAmount}
        installments={formData.deadline}
        interest={totalInterest}
        monthlyPayment={monthlyPayment}
      />

    </Container>
  );
}

export default App;
