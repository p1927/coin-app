import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate, Rates } from '../../models/exchange-currency.model';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrl: './container-component.component.scss',
})
export class ContainerComponentComponent {
  rates$!: Observable<Rates>;
  selectedCurrency!: KeyValue<string, Rate>;

  constructor(private exchangeRatesService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.rates$ = this.exchangeRatesService.getExchangeRates();
  }

  handleSelection(rate: KeyValue<string, Rate>): void {
    this.selectedCurrency = rate;
  }
}
