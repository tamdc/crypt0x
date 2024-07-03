export type ApiResponse<T> = {
  data: T;
};

export type ExchangeInfo = {
  id: string;
  name: string;
  country: string;
  description: string;
  url: string;
  image: string;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalize: number;
};
