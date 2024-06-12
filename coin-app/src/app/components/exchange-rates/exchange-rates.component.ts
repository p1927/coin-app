import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rate, Rates } from '../../models/exchange-currency.model';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrl: './exchange-rates.component.scss',
})
export class ExchangeRatesComponent {
  @Input() rates!: Rates;
  @Output() selection: EventEmitter<KeyValue<string, Rate>> = new EventEmitter(
    undefined
  );

  constructor() {}

  emitOnClick(rates: KeyValue<string, Rate>): void {
    this.selection.emit(rates);
  }
}
