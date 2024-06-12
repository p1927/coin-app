import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  private apiUrl = 'https://api.coingecko.com/api/v3/exchange_rates';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
