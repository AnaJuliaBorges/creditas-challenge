import { renderHook } from "@testing-library/react";
import useLoanCalculator from "./useLoanCalculator";

describe('useLoanCalculator', () => {
  it('should calculate correct values for age <= 25', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 25);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 12, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.004);
    
    expect(result.current.monthlyPayment).toBe(856.07);
    expect(result.current.totalAmount).toBe(10272.90);
    expect(result.current.totalInterest).toBe(272.90);
  });

  it('should calculate correct values for age 26-40', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 26);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 12, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.002);
    
    expect(result.current.monthlyPayment).toBe(846.94);
    expect(result.current.totalAmount).toBe(10163.24);
    expect(result.current.totalInterest).toBe(163.24);
  });

  it('should calculate correct values for age 41-60', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 41);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 12, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.001);
    
    expect(result.current.monthlyPayment).toBe(842.39);
    expect(result.current.totalAmount).toBe(10108.66);
    expect(result.current.totalInterest).toBe(108.66);
  });

  it('should calculate correct values for age 61+', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 61);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 12, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.003);
    
    expect(result.current.monthlyPayment).toBe(851.50);
    expect(result.current.totalAmount).toBe(10217.99);
    expect(result.current.totalInterest).toBe(217.99);
  });

  it('should handle birthday not yet ocurred this year', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 26);
    birthDate.setFullYear(birthDate.getMonth() + 1);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 12, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.004);
  });

  it('should handle with one-month deadline', () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 25);
    
    const {result} = renderHook(() => 
        useLoanCalculator(10000, 1, birthDate.toString())
    );
    
    expect(result.current.monthlyRate).toBeCloseTo(0.004);
    expect(result.current.monthlyPayment).toBe(10041.67);
    expect(result.current.totalAmount).toBe(10041.67);
    expect(result.current.totalInterest).toBe(41.67);
  });
});