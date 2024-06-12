import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss',
})
export class CurrencySelectorComponent {
  @Input() rates: any;
  selectedCurrency: string;

  constructor() {}

  onCurrencyChange(currency: string): void {
    this.selectedCurrency = currency;
  }
}
