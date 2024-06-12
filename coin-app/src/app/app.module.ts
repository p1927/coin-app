import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { ExchangeRatesComponent } from './components/exchange-rates/exchange-rates.component';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { ContainerComponentComponent } from './components/container-component/container-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    CurrencySelectorComponent,
    ContainerComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [ExchangeRatesService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
