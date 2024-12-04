import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData.asReadonly();
  }

}
