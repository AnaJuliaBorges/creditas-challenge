import Decimal from "decimal.js";
import { useMemo } from "react";

Decimal.set({ rounding: Decimal.ROUND_HALF_EVEN });

const useLoanCalculator = (loanAmount, months, birth) => {
  const {isValid, error, monthlyRate} = useMemo(() => {
    const birthDate = new Date(birth)
    const today = new Date()
    
    if (!birth || birthDate.getFullYear() < 1900) {
      return { isValid: false };
    }

    if (birthDate > today) {
      return { isValid: false, error: 'Data de nascimento no futuro' };
    }

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    const hadntBirthday = monthDifference > 0 || today.getDate() - birthDate.getDate() < 0  
    
    if(hadntBirthday) {
      age --;
    }

    if (age < 18) {
      return { isValid: false, error: 'Idade mínima de 18 anos' };
    }

    let annualRate = 0
    if (age <= 25) annualRate = new Decimal(0.05)
    else if (age <= 40) annualRate = new Decimal(0.03)
    else if (age <= 60) annualRate = new Decimal(0.02)
    else annualRate = new Decimal(0.04)  

    return {isValid: true, error: null, monthlyRate: annualRate.dividedBy(12)};
  
  }, [birth])

  if (!isValid) {
    return {
      error,
      monthlyPayment: 0,
      totalAmount: 0,
      totalInterest: 0,
      monthlyRate: 0
    };
  }

  const decimalLoanAmount = new Decimal(Number(loanAmount));
  const decimalMonths = new Decimal(Number(months));

  // Cálculo parcela mensal
  const onePlusRate = monthlyRate.plus(1);
  const powTerm = onePlusRate.pow(decimalMonths);
  const numerator = decimalLoanAmount.times(monthlyRate).times(powTerm);
  const denominator = powTerm.minus(1);
  const pmt = numerator.dividedBy(denominator);

  const totalAmount = pmt.times(decimalMonths);
  const totalInterest = totalAmount.minus(decimalLoanAmount);

  return {
    monthlyPayment: parseFloat(pmt.toDecimalPlaces(2)),
    totalAmount: parseFloat(totalAmount.toDecimalPlaces(2)),
    totalInterest: parseFloat(totalInterest.toDecimalPlaces(2)),
    monthlyRate: parseFloat(monthlyRate.toDecimalPlaces(3))
  };


};

export default useLoanCalculator;