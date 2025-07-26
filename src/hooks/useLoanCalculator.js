import Decimal from "decimal.js";
import { useMemo } from "react";

Decimal.set({ rounding: Decimal.ROUND_HALF_EVEN });

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
    if (age <= 25) annualRate = new Decimal(0.05)
    else if (age <= 40) annualRate = new Decimal(0.03)
    else if (age <= 60) annualRate = new Decimal(0.02)
    else annualRate = new Decimal(0.04)  

    return annualRate.dividedBy(12);
  
  }, [birth])

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