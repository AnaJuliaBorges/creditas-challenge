import { useMemo } from "react";


const useLoanCalculator = (loanAmount, months, birth) => {
  const monthlyRate = useMemo(() => {
    const birthDate = new Date(birth)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    const hadntBirthday = monthDifference > 0 || today.getDate() - birthDate.getDate() < 0  
    
    if(hadntBirthday) {
      age --;
    }

    let annualRate = 0
    if (age <= 25) annualRate = 0.05
    else if (age <= 40) annualRate = 0.03
    else if (age <= 60) annualRate = 0.02
    else annualRate = 0.04
  
    return annualRate / 12;
  
  }, [birth])

  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
  
  const totalAmount = monthlyPayment * months
  const totalInterest = totalAmount - loanAmount

  return {
    monthlyPayment, monthlyRate, totalAmount, totalInterest
  }

};

export default useLoanCalculator;