import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Rate } from '../../models/exchange-currency.model';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss',
})
export class CurrencySelectorComponent {
  @Input()
  selectedCurrency!: KeyValue<string, Rate>;

  constructor() {}
}
