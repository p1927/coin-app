import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponse, Rates } from '../models/exchange-currency.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  private apiUrl = 'https://api.coingecko.com/api/v3/exchange_rates';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<Rates> {
    return this.http
      .get<APIResponse>(this.apiUrl)
      .pipe(map((data: APIResponse) => data.rates));
  }
}
