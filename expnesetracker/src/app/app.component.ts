import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { IInvestment } from './Interfaces/IInvestment';
import { CalcualateService } from '../investment-results';
import { IResultData } from './Interfaces/IResultData';
import { InvestmentTableComponent } from './investment-table/investment-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputComponent, InvestmentTableComponent],
})
export class AppComponent {
  results: Array<IResultData> = [];
  constructor(private service: CalcualateService) {}
  onData(data: IInvestment) {
    this.results = this.service.calculateInvestmentResults(data);
    // console.log(this.results);
  }
}
