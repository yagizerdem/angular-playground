import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestment } from '../Interfaces/IInvestment';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  InitialInvestment?: string;
  AnnualInvestment?: string;
  ExpectedReturn?: string;
  Duraiton?: string;
  @Output() investmentDataEmitter: EventEmitter<IInvestment> =
    new EventEmitter();

  onSubmit(event: Event) {
    event.preventDefault();
    const data: IInvestment = {
      initialInvestment: Number(this.InitialInvestment),
      annualInvestment: Number(this.AnnualInvestment),
      duration: Number(this.Duraiton),
      expectedReturn: Number(this.ExpectedReturn),
    };
    this.investmentDataEmitter.emit(data);
  }
}
