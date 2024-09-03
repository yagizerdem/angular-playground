import { IInvestment } from './app/Interfaces/IInvestment';
import { Injectable } from '@angular/core';
import { IResultData } from './app/Interfaces/IResultData';
@Injectable({
  providedIn: 'root',
})
export class CalcualateService {
  public calculateInvestmentResults(data: IInvestment) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;

    const annualData: Array<IResultData> = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      const data: IResultData = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };
      annualData.push(data);
    }

    return annualData;
  }
}
