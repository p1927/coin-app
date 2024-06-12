export interface Rate {
  name: string;
  type: string;
  unit: string;
  value: number;
}

export interface Rates {
  [key: string]: Rate;
}

export interface APIResponse {
  rates: Rates;
}
