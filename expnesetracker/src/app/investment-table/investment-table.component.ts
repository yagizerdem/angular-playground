import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { IResultData } from '../Interfaces/IResultData';
@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  @Input() results: Array<IResultData> = [];
}
