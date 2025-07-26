import { vi } from "vitest"
import { FormSimulation } from "."
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

describe('FormSimulation Component', () => {
  const mockSetFormData = vi.fn()
  const initialFormData = {
    birthDate: '',
    deadline: '',
    loanAmount: ''
  }

  beforeEach(() => {
    vi.spyOn(React, 'useState').mockImplementation(() => [initialFormData, mockSetFormData])
  })

  it('should render all form fields correctly', () => {
    console.log({mockSetFormData})
    render(<FormSimulation formData={initialFormData} setFormData={mockSetFormData} />)
    
    expect(screen.getByLabelText('Data de nascimento:')).toBeInTheDocument()
    expect(screen.getByLabelText('Prazo (em meses):')).toBeInTheDocument()
    expect(screen.getByLabelText('Valor do empréstimo:')).toBeInTheDocument()
  })

  it('should update form data when date input changes', () => {
    render(<FormSimulation formData={initialFormData} setFormData={mockSetFormData} />)
    
    const dateInput = screen.getByLabelText('Data de nascimento:')
    fireEvent.change(dateInput, { target: { name: 'birthDate', value: '2000-01-01' } })
    
    expect(mockSetFormData).toHaveBeenCalledWith({
      ...initialFormData,
      birthDate: '2000-01-01'
    })
  })

  it('should update form data when deadline input changes', () => {
    render(<FormSimulation formData={initialFormData} setFormData={mockSetFormData} />)
    
    const deadlineInput = screen.getByLabelText('Prazo (em meses):')
    fireEvent.change(deadlineInput, { target: { name: 'deadline', value: '12' } })
    
    expect(mockSetFormData).toHaveBeenCalledWith({
      ...initialFormData,
      deadline: '12'
    })
  })

  it('should update form data when loan amount input changes', () => {
    render(<FormSimulation formData={initialFormData} setFormData={mockSetFormData} />)
    
    const loanInput = screen.getByLabelText('Valor do empréstimo:')
    fireEvent.change(loanInput, { target: { name: 'loanAmount', value: '10000' } })
    
    expect(mockSetFormData).toHaveBeenCalledWith({
      ...initialFormData,
      loanAmount: '10000'
    })
  })
})