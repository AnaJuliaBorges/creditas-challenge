import { useState } from "react";
import { Container } from "./app.styles";
import { ResultSimulation } from "./components/resultSimulation";
import { FormSimulation } from "./components/formSimulation";


function App() {
  const [formData, setFormData] = useState({
    loanAmount: '',
    deadline: '',
    birthDate: '',
  })

  return (
    <Container>
      <h1>Simulação de empréstimo</h1>
      
      <FormSimulation 
        formData={formData} 
        setFormData={setFormData}
      />

      <ResultSimulation 
        total={2500}
        installments={25}
        interest={1000}
        annualRate={25}
      />

    </Container>
  );
}

export default App;
