import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../../services/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  standalone: true,
  imports: [],
  templateUrl: './exchange-rates.component.html',
  styleUrl: './exchange-rates.component.scss',
})
export class ExchangeRatesComponent implements OnInit {
  rates: any;

  constructor(private exchangeRatesService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.exchangeRatesService.getExchangeRates().subscribe((data) => {
      this.rates = data.rates;
    });
  }
}
