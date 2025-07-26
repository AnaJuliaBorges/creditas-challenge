import { Form, FormGroup } from './styles';

export const FormSimulation = ({formData, setFormData}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Form>
      <FormGroup>
        <label>Data de nascimento:</label>
        <input 
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={(e) => handleChange(e)}
          required
        />
      </FormGroup>

    <div>
      <FormGroup>
        <label>Prazo (em meses):</label>
        <input 
          type="number"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={(e) => handleChange((e))}
          min="1"
          max="360"
          required
        />
      </FormGroup>

      <FormGroup>
        <label>Valor do empréstimo:</label>
        <input 
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={(e) => handleChange(e)}
          min="1"
          required
        />
      </FormGroup>
    </div>
  </Form>
  )
}
